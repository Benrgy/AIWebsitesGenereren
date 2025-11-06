import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, RefreshCw, Download, FileJson, FileSpreadsheet } from "lucide-react";
import { toast } from "sonner";
import { StatusBadge } from "./StatusBadge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  exportVariationsToCSV,
  exportVariationsToJSON,
  downloadFile,
  generateExportFilename,
} from "@/lib/export";

interface Batch {
  id: string;
  keyword: string;
  num_variations: number;
  language: string;
  contact_email: string;
  cta_link: string;
  status: string;
  created_at: string;
}

interface Variation {
  id: string;
  heading: string;
  hero_statement: string;
  features: string;
  benefits: string;
  style: string;
  color_scheme: string;
  language: string;
  contact_email: string;
  cta_link: string;
  status: string;
  live_url: string | null;
  github_repo_url: string | null;
  error_message: string | null;
  created_at: string;
  submitted_at: string | null;
  completed_at: string | null;
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


  const handleRefresh = () => {
    fetchBatches();
    if (selectedBatch) {
      fetchVariations(selectedBatch);
    }
    toast.success("Refreshed!");
  };

  const handleExportCSV = () => {
    if (!selectedBatch || variations.length === 0) {
      toast.error("No variations to export");
      return;
    }

    const batch = batches.find(b => b.id === selectedBatch);
    if (!batch) return;

    const csvContent = exportVariationsToCSV(variations, batch);
    const filename = generateExportFilename(batch.keyword, 'csv');
    downloadFile(csvContent, filename, 'text/csv;charset=utf-8;');
    toast.success(`Exported ${variations.length} variations to CSV`);
  };

  const handleExportJSON = () => {
    if (!selectedBatch || variations.length === 0) {
      toast.error("No variations to export");
      return;
    }

    const batch = batches.find(b => b.id === selectedBatch);
    if (!batch) return;

    const jsonContent = exportVariationsToJSON(variations, batch);
    const filename = generateExportFilename(batch.keyword, 'json');
    downloadFile(jsonContent, filename, 'application/json;charset=utf-8;');
    toast.success(`Exported ${variations.length} variations to JSON`);
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
      <div className="flex items-center justify-between flex-wrap gap-4">
        <h2 className="text-2xl font-bold">Your Batches</h2>
        <div className="flex gap-2">
          {selectedBatch && variations.length > 0 && (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="gap-2">
                  <Download className="h-4 w-4" />
                  Export
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={handleExportCSV} className="gap-2">
                  <FileSpreadsheet className="h-4 w-4" />
                  Export as CSV
                </DropdownMenuItem>
                <DropdownMenuItem onClick={handleExportJSON} className="gap-2">
                  <FileJson className="h-4 w-4" />
                  Export as JSON
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )}
          <Button variant="outline" size="sm" onClick={handleRefresh} className="gap-2">
            <RefreshCw className="h-4 w-4" />
            Refresh
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {batches.map((batch) => (
          <Card
            key={batch.id}
            className={`cursor-pointer transition-all duration-300 hover:shadow-card hover:-translate-y-1 ${
              selectedBatch === batch.id ? "ring-2 ring-primary shadow-glow" : ""
            }`}
            onClick={() => setSelectedBatch(batch.id)}
          >
            <CardHeader>
              <CardTitle className="text-lg truncate">{batch.keyword}</CardTitle>
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
        <Card className="animate-fade-in shadow-card">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Variations</CardTitle>
                <CardDescription>
                  {variations.length} variation{variations.length !== 1 ? 's' : ''} • Click on a website to open it
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {variations.map((variation) => (
                <div
                  key={variation.id}
                  className="group flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 hover:border-primary/50 transition-all duration-300"
                >
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium truncate group-hover:text-primary transition-colors">{variation.heading}</h4>
                    <div className="flex items-center gap-2 mt-1 flex-wrap">
                      <StatusBadge status={variation.status} />
                      {variation.error_message && (
                        <span className="text-xs text-destructive bg-destructive/10 px-2 py-1 rounded">{variation.error_message}</span>
                      )}
                      {variation.github_repo_url && (
                        <a 
                          href={variation.github_repo_url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-xs text-muted-foreground hover:text-primary transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          View Repo
                        </a>
                      )}
                    </div>
                  </div>
                  {variation.live_url && (
                    <Button
                      variant="ghost"
                      size="sm"
                      className="ml-2 shrink-0 hover:bg-primary/10 hover:text-primary"
                      onClick={() => window.open(variation.live_url!, "_blank")}
                    >
                      <ExternalLink className="h-4 w-4" />
                      <span className="ml-1 hidden sm:inline">Visit</span>
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
