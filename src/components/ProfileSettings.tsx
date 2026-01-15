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

      toast.success("Instellingen succesvol opgeslagen!");
    } catch (error: any) {
      console.error("Save error:", error);
      toast.error(error.message || "Instellingen opslaan mislukt");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="max-w-2xl mx-auto shadow-card animate-fade-in">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Key className="h-6 w-6 text-primary" />
          API Instellingen
        </CardTitle>
        <CardDescription>
          Configureer je API-sleutel om automatische website deployment mogelijk te maken
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSave} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="apiKey">API Sleutel</Label>
            <Input
              id="apiKey"
              type="password"
              placeholder="gp_..."
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              className="font-mono"
            />
            <p className="text-xs text-muted-foreground">
              Verkrijg je API-sleutel via{" "}
              <a
                href="https://gitpage.site/?ref=WebsitesGenereren"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline font-medium"
              >
                het officiële platform
              </a>
            </p>
          </div>

          <div className="p-4 bg-muted/50 rounded-lg border border-border">
            <h4 className="text-sm font-medium mb-2">Hoe het werkt:</h4>
            <ul className="text-xs text-muted-foreground space-y-1 list-disc list-inside">
              <li>Je API-sleutel wordt veilig en versleuteld opgeslagen</li>
              <li>Wordt alleen gebruikt voor automatische deployments</li>
              <li>Elke variatie wordt om de 5 minuten ingediend</li>
              <li>Maximaal 30 deployments per uur (API limiet)</li>
            </ul>
          </div>

          <Button
            type="submit"
            size="lg"
            className="w-full bg-gradient-primary text-primary-foreground shadow-glow hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
            disabled={loading}
          >
            {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            {loading ? "Opslaan..." : "Instellingen Opslaan"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};
