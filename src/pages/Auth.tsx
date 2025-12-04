import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";
import { Loader2, Sparkles } from "lucide-react";

const Auth = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) {
        navigate("/dashboard");
      }
    });
  }, [navigate]);

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: `${window.location.origin}/dashboard`,
        },
      });

      if (error) throw error;

      toast.success("Account succesvol aangemaakt! Controleer je e-mail.");
      setEmail("");
      setPassword("");
    } catch (error: any) {
      toast.error(error.message || "Aanmelden mislukt");
    } finally {
      setLoading(false);
    }
  };

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) throw error;

      toast.success("Succesvol ingelogd!");
      navigate("/dashboard");
    } catch (error: any) {
      toast.error(error.message || "Inloggen mislukt");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-muted/20 to-background p-4 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1s" }} />
      
      <Card className="w-full max-w-md shadow-glow border-border/50 backdrop-blur-sm bg-card/95 relative z-10 animate-fade-in">
        <CardHeader className="text-center space-y-3">
          <div className="flex items-center justify-center gap-2 mb-2">
            <div className="p-2 bg-gradient-primary rounded-lg">
              <Sparkles className="h-6 w-6 text-primary-foreground" />
            </div>
          </div>
          <CardTitle className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            Website Generator
          </CardTitle>
          <CardDescription className="text-base">
            Genereer tientallen AI-gestuurde landingspagina's in minuten
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="signin" className="w-full">
            <TabsList className="grid w-full grid-cols-2 bg-muted/50">
              <TabsTrigger value="signin" className="data-[state=active]:bg-background">Inloggen</TabsTrigger>
              <TabsTrigger value="signup" className="data-[state=active]:bg-background">Registreren</TabsTrigger>
            </TabsList>

            <TabsContent value="signin" className="mt-6">
              <form onSubmit={handleSignIn} className="space-y-5">
                <div className="space-y-2">
                  <Label htmlFor="signin-email">E-mailadres</Label>
                  <Input
                    id="signin-email"
                    type="email"
                    placeholder="jij@voorbeeld.nl"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="h-11"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="signin-password">Wachtwoord</Label>
                  <Input
                    id="signin-password"
                    type="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="h-11"
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-primary text-primary-foreground shadow-glow hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
                  disabled={loading}
                >
                  {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                  {loading ? "Bezig met inloggen..." : "Inloggen"}
                </Button>
              </form>
            </TabsContent>

            <TabsContent value="signup" className="mt-6">
              <form onSubmit={handleSignUp} className="space-y-5">
                <div className="space-y-2">
                  <Label htmlFor="signup-email">E-mailadres</Label>
                  <Input
                    id="signup-email"
                    type="email"
                    placeholder="jij@voorbeeld.nl"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="h-11"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="signup-password">Wachtwoord</Label>
                  <Input
                    id="signup-password"
                    type="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    minLength={6}
                    className="h-11"
                  />
                  <p className="text-xs text-muted-foreground">
                    Minimaal 6 tekens
                  </p>
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-primary text-primary-foreground shadow-glow hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
                  disabled={loading}
                >
                  {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                  {loading ? "Account aanmaken..." : "Account Aanmaken"}
                </Button>
              </form>
              
              <p className="text-xs text-center text-muted-foreground mt-4">
                Door te registreren ga je akkoord met onze Algemene Voorwaarden
              </p>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default Auth;
