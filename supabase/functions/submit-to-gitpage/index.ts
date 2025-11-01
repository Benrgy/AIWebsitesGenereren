import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    console.log("Checking for pending variations to submit...");

    // Get pending variation
    const { data: variations, error: fetchError } = await supabase
      .from("website_variations")
      .select("*, batch_id")
      .eq("status", "pending")
      .limit(1);

    if (fetchError) {
      console.error("Fetch error:", fetchError);
      throw fetchError;
    }

    if (!variations || variations.length === 0) {
      console.log("No pending variations found");
      return new Response(
        JSON.stringify({ message: "No pending variations" }),
        { headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const variation = variations[0];

    // Get user's API key
    const { data: batch, error: batchError } = await supabase
      .from("website_batch")
      .select("user_id")
      .eq("id", variation.batch_id)
      .single();

    if (batchError || !batch) {
      throw new Error("Batch not found");
    }

    const { data: profile, error: profileError } = await supabase
      .from("profiles")
      .select("gitpage_api_key")
      .eq("id", batch.user_id)
      .single();

    if (profileError || !profile) {
      throw new Error("Profile not found");
    }

    const apiKey = profile.gitpage_api_key;

    if (!apiKey) {
      console.error("No GitPage API key configured for user");
      await supabase
        .from("website_variations")
        .update({
          status: "failed",
          error_message: "GitPage API key not configured",
        })
        .eq("id", variation.id);

      return new Response(
        JSON.stringify({ error: "GitPage API key not configured" }),
        {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    console.log(`Submitting variation: ${variation.heading}`);

    // Update status to submitted
    await supabase
      .from("website_variations")
      .update({
        status: "submitted",
        submitted_at: new Date().toISOString(),
      })
      .eq("id", variation.id);

    // Submit to GitPage API
    const gitpageResponse = await fetch("https://www.gitpage.site/api/generate-landing-page", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        heading: variation.heading,
        heroStatement: variation.hero_statement,
        features: variation.features,
        benefits: variation.benefits,
        style: variation.style,
        colorScheme: variation.color_scheme,
        language: variation.language,
        includeFaq: variation.include_faq,
        contactEmail: variation.contact_email,
        ctaLink: variation.cta_link,
      }),
    });

    if (!gitpageResponse.ok) {
      const errorText = await gitpageResponse.text();
      console.error("GitPage API error:", gitpageResponse.status, errorText);
      
      await supabase
        .from("website_variations")
        .update({
          status: "failed",
          error_message: `GitPage API error: ${gitpageResponse.status}`,
        })
        .eq("id", variation.id);

      throw new Error(`GitPage API error: ${gitpageResponse.status}`);
    }

    const gitpageData = await gitpageResponse.json();
    console.log("GitPage response:", gitpageData);

    // Update with success
    await supabase
      .from("website_variations")
      .update({
        status: "success",
        live_url: gitpageData.liveUrl || gitpageData.url,
        github_repo_url: gitpageData.repoUrl || gitpageData.repository,
        completed_at: new Date().toISOString(),
      })
      .eq("id", variation.id);

    console.log(`Successfully submitted variation: ${variation.heading}`);

    return new Response(
      JSON.stringify({ success: true, variation: variation.heading }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error: any) {
    console.error("Error in submit-to-gitpage:", error);
    return new Response(
      JSON.stringify({ error: error?.message || "Internal server error" }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});
