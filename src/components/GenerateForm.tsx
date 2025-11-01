import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { Loader2, Sparkles } from "lucide-react";

export const GenerateForm = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    keyword: "",
    numVariations: "5",
    language: "English",
    contactEmail: "",
    ctaLink: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) throw new Error("Not authenticated");

      // Create batch record
      const { data: batch, error: batchError } = await supabase
        .from("website_batch")
        .insert({
          user_id: user.id,
          keyword: formData.keyword,
          num_variations: parseInt(formData.numVariations),
          language: formData.language,
          contact_email: formData.contactEmail,
          cta_link: formData.ctaLink,
          status: "generating",
        })
        .select()
        .single();

      if (batchError) throw batchError;

      // Call edge function to generate content
      const { error: functionError } = await supabase.functions.invoke("generate-content", {
        body: {
          batchId: batch.id,
          keyword: formData.keyword,
          numVariations: parseInt(formData.numVariations),
          language: formData.language,
          contactEmail: formData.contactEmail,
          ctaLink: formData.ctaLink,
        },
      });

      if (functionError) throw functionError;

      toast.success("Generation started! Your websites are being created.");
      
      // Reset form
      setFormData({
        keyword: "",
        numVariations: "5",
        language: "English",
        contactEmail: "",
        ctaLink: "",
      });

      // Switch to batches tab after a short delay
      setTimeout(() => {
        navigate("/dashboard?tab=batches");
      }, 1000);
    } catch (error: any) {
      console.error("Generation error:", error);
      toast.error(error.message || "Failed to start generation");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="max-w-2xl mx-auto shadow-card animate-fade-in">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Sparkles className="h-6 w-6 text-primary" />
          Generate Websites
        </CardTitle>
        <CardDescription>
          Create multiple AI-powered landing pages in one go
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="keyword">Keyword or Topic</Label>
            <Input
              id="keyword"
              placeholder="e.g., AI Automation Agency"
              value={formData.keyword}
              onChange={(e) => setFormData({ ...formData, keyword: e.target.value })}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="variations">Number of Variations</Label>
            <Select
              value={formData.numVariations}
              onValueChange={(value) => setFormData({ ...formData, numVariations: value })}
            >
              <SelectTrigger id="variations">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="5">5 websites</SelectItem>
                <SelectItem value="10">10 websites</SelectItem>
                <SelectItem value="25">25 websites</SelectItem>
                <SelectItem value="50">50 websites</SelectItem>
                <SelectItem value="100">100 websites</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="language">Language</Label>
            <Select
              value={formData.language}
              onValueChange={(value) => setFormData({ ...formData, language: value })}
            >
              <SelectTrigger id="language">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="English">English</SelectItem>
                <SelectItem value="Spanish">Spanish</SelectItem>
                <SelectItem value="French">French</SelectItem>
                <SelectItem value="German">German</SelectItem>
                <SelectItem value="Portuguese">Portuguese</SelectItem>
                <SelectItem value="Chinese">Chinese</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Contact Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="contact@example.com"
              value={formData.contactEmail}
              onChange={(e) => setFormData({ ...formData, contactEmail: e.target.value })}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="cta">CTA Link</Label>
            <Input
              id="cta"
              type="url"
              placeholder="https://example.com/book-demo"
              value={formData.ctaLink}
              onChange={(e) => setFormData({ ...formData, ctaLink: e.target.value })}
              required
            />
          </div>

          <Button
            type="submit"
            variant="hero"
            size="lg"
            className="w-full"
            disabled={loading}
          >
            {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            {loading ? "Generating..." : "Generate Websites"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};
