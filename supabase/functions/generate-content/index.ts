import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import { z } from "https://deno.land/x/zod@v3.22.4/mod.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const validLanguages = ["Dutch", "English", "German", "French", "Spanish", "Portuguese"];

// Input validation schema
const requestSchema = z.object({
  batchId: z.string().uuid({ message: "Invalid batch ID format" }),
  keyword: z.string().min(1, "Keyword is required").max(200, "Keyword too long (max 200 characters)"),
  numVariations: z.number().int().min(1, "Minimum 1 variation").max(100, "Maximum 100 variations"),
  language: z.string().refine((val) => validLanguages.includes(val), { message: "Invalid language" }),
  contactEmail: z.string().email("Invalid email format"),
  ctaLink: z.string().url("Invalid URL format"),
});

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const rawBody = await req.json();
    
    // Validate input
    const validationResult = requestSchema.safeParse(rawBody);
    if (!validationResult.success) {
      console.error("Validation error:", validationResult.error.errors);
      return new Response(
        JSON.stringify({ error: "Validation failed", details: validationResult.error.errors }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }
    
    const { batchId, keyword, numVariations, language, contactEmail, ctaLink } = validationResult.data;

    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const lovableApiKey = Deno.env.get("LOVABLE_API_KEY");

    if (!lovableApiKey) {
      throw new Error("LOVABLE_API_KEY not configured");
    }

    const supabase = createClient(supabaseUrl, supabaseKey);

    console.log(`Generating ${numVariations} variations for keyword: ${keyword}`);

    // Generate content using Gemini
    const prompt = `Generate ${numVariations} unique, diverse landing page datasets for the keyword "${keyword}" in ${language}. 
Each dataset should be completely different and target a slightly different angle or use case of "${keyword}".

For each landing page, provide:
1. heading: A compelling, unique headline (max 60 characters)
2. heroStatement: An engaging hero statement (1-2 sentences)
3. features: 3 key features separated by commas
4. benefits: 3 key benefits separated by commas

Make each variation genuinely different - use different tones, target audiences, and approaches.
Return ONLY a valid JSON array with ${numVariations} objects, each with these exact fields: heading, heroStatement, features, benefits

Example format:
[
  {
    "heading": "AI Automation for Small Business",
    "heroStatement": "Streamline your operations with intelligent automation designed for growing businesses.",
    "features": "Smart Workflows, Easy Integration, Cost-Effective",
    "benefits": "Save 15 Hours Weekly, Reduce Costs by 40%, Scale Effortlessly"
  }
]`;

    const aiResponse = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${lovableApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          {
            role: "user",
            content: prompt,
          },
        ],
      }),
    });

    if (!aiResponse.ok) {
      const errorText = await aiResponse.text();
      console.error("AI Gateway error:", aiResponse.status, errorText);
      throw new Error(`AI Gateway error: ${aiResponse.status}`);
    }

    const aiData = await aiResponse.json();
    const generatedContent = aiData.choices[0].message.content;
    
    console.log("AI Response:", generatedContent);

    // Parse the JSON response
    let variations;
    try {
      // Remove markdown code blocks if present
      const cleanedContent = generatedContent.replace(/```json\n?/g, "").replace(/```\n?/g, "");
      variations = JSON.parse(cleanedContent);
    } catch (parseError) {
      console.error("Failed to parse AI response:", generatedContent);
      throw new Error("Failed to parse AI response");
    }

    if (!Array.isArray(variations) || variations.length === 0) {
      throw new Error("Invalid variations data from AI");
    }

    // Predefined style and color scheme options
    const styles = ["Modern", "Minimal", "Gradient", "Retro", "Clean", "Bold"];
    const colorSchemes = ["Light", "Dark", "Purple", "Blue", "Green", "Orange"];

    // Insert variations into database
    const variationsToInsert = variations.slice(0, numVariations).map((variation: any) => ({
      batch_id: batchId,
      heading: variation.heading,
      hero_statement: variation.heroStatement,
      features: variation.features,
      benefits: variation.benefits,
      style: styles[Math.floor(Math.random() * styles.length)],
      color_scheme: colorSchemes[Math.floor(Math.random() * colorSchemes.length)],
      language,
      contact_email: contactEmail,
      cta_link: ctaLink,
      include_faq: true,
      status: "pending",
    }));

    const { error: insertError } = await supabase
      .from("website_variations")
      .insert(variationsToInsert);

    if (insertError) {
      console.error("Database insert error:", insertError);
      throw insertError;
    }

    // Update batch status
    await supabase
      .from("website_batch")
      .update({ status: "ready" })
      .eq("id", batchId);

    console.log(`Successfully generated ${variationsToInsert.length} variations`);

    return new Response(
      JSON.stringify({ success: true, count: variationsToInsert.length }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error: any) {
    console.error("Error in generate-content:", error);
    return new Response(
      JSON.stringify({ error: error?.message || "Internal server error" }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});