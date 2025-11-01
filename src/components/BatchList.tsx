import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, RefreshCw } from "lucide-react";
import { toast } from "sonner";
import { StatusBadge } from "./StatusBadge";

interface Batch {
  id: string;
  keyword: string;
  num_variations: number;
  language: string;
  status: string;
  created_at: string;
}

interface Variation {
  id: string;
  heading: string;
  status: string;
  live_url: string | null;
  github_repo_url: string | null;
  error_message: string | null;
}

export const BatchList = () => {
  const [batches, setBatches] = useState<Batch[]>([]);
  const [selectedBatch, setSelectedBatch] = useState<string | null>(null);
  const [variations, setVariations] = useState<Variation[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBatches();
  }, []);

  useEffect(() => {
    if (selectedBatch) {
      fetchVariations(selectedBatch);
    }
  }, [selectedBatch]);

  const fetchBatches = async () => {
    try {
      const { data, error } = await supabase
        .from("website_batch")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;
      setBatches(data || []);
    } catch (error: any) {
      toast.error("Failed to load batches");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const fetchVariations = async (batchId: string) => {
    try {
      const { data, error } = await supabase
        .from("website_variations")
        .select("*")
        .eq("batch_id", batchId)
        .order("created_at", { ascending: false });

      if (error) throw error;
      setVariations(data || []);
    } catch (error: any) {
      toast.error("Failed to load variations");
      console.error(error);
    }
  };

  const getStatusColor = (status: string) => {
    // This function is deprecated, using StatusBadge component instead
    return "default";
  };

  const handleRefresh = () => {
    fetchBatches();
    if (selectedBatch) {
      fetchVariations(selectedBatch);
    }
    toast.success("Refreshed!");
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="animate-pulse text-muted-foreground">Loading batches...</div>
      </div>
    );
  }

  if (batches.length === 0) {
    return (
      <Card className="max-w-2xl mx-auto">
        <CardContent className="pt-6 text-center">
          <p className="text-muted-foreground">No batches yet. Start by generating your first websites!</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Your Batches</h2>
        <Button variant="outline" size="sm" onClick={handleRefresh}>
          <RefreshCw className="h-4 w-4 mr-2" />
          Refresh
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {batches.map((batch) => (
          <Card
            key={batch.id}
            className={`cursor-pointer transition-all hover:shadow-lg ${
              selectedBatch === batch.id ? "ring-2 ring-primary" : ""
            }`}
            onClick={() => setSelectedBatch(batch.id)}
          >
            <CardHeader>
              <CardTitle className="text-lg">{batch.keyword}</CardTitle>
              <CardDescription>
                {batch.num_variations} variations · {batch.language}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <StatusBadge status={batch.status} />
                <span className="text-xs text-muted-foreground">
                  {new Date(batch.created_at).toLocaleDateString()}
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {selectedBatch && variations.length > 0 && (
        <Card className="animate-fade-in">
          <CardHeader>
            <CardTitle>Variations</CardTitle>
            <CardDescription>
              Click on a website to open it in a new tab
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {variations.map((variation) => (
                <div
                  key={variation.id}
                  className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors"
                >
                  <div className="flex-1">
                    <h4 className="font-medium">{variation.heading}</h4>
                    <div className="flex items-center gap-2 mt-1">
                      <StatusBadge status={variation.status} />
                      {variation.error_message && (
                        <span className="text-xs text-destructive">{variation.error_message}</span>
                      )}
                    </div>
                  </div>
                  {variation.live_url && (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => window.open(variation.live_url!, "_blank")}
                    >
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};
