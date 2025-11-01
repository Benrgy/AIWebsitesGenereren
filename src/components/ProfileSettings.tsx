import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import { Loader2, Key } from "lucide-react";

export const ProfileSettings = () => {
  const [loading, setLoading] = useState(false);
  const [apiKey, setApiKey] = useState("");
  const [userId, setUserId] = useState<string | null>(null);

  useEffect(() => {
    loadProfile();
  }, []);

  const loadProfile = async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;

      setUserId(user.id);

      const { data, error } = await supabase
        .from("profiles")
        .select("gitpage_api_key")
        .eq("id", user.id)
        .single();

      if (error && error.code !== "PGRST116") throw error;
      if (data?.gitpage_api_key) {
        setApiKey(data.gitpage_api_key);
      }
    } catch (error: any) {
      console.error("Profile load error:", error);
    }
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!userId) return;

    setLoading(true);

    try {
      const { error } = await supabase
        .from("profiles")
        .update({
          gitpage_api_key: apiKey,
          updated_at: new Date().toISOString(),
        })
        .eq("id", userId);

      if (error) throw error;

      toast.success("Settings saved successfully!");
    } catch (error: any) {
      console.error("Save error:", error);
      toast.error(error.message || "Failed to save settings");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="max-w-2xl mx-auto shadow-card animate-fade-in">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Key className="h-6 w-6 text-primary" />
          API Settings
        </CardTitle>
        <CardDescription>
          Configure your GitPage API key to enable website deployment
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSave} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="apiKey">GitPage API Key</Label>
            <Input
              id="apiKey"
              type="password"
              placeholder="gp_..."
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
            />
            <p className="text-xs text-muted-foreground">
              Get your API key from{" "}
              <a
                href="https://www.gitpage.site"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                gitpage.site
              </a>
            </p>
          </div>

          <Button
            type="submit"
            variant="hero"
            size="lg"
            className="w-full"
            disabled={loading}
          >
            {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Save Settings
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};
