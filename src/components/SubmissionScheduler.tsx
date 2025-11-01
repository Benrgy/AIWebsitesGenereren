import { useEffect, useRef } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

/**
 * Component that handles automatic submission of pending variations to GitPage
 * Polls every 5 minutes to respect rate limits (30 requests/hour)
 */
export const SubmissionScheduler = () => {
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const submitNext = async () => {
      try {
        const { data, error } = await supabase.functions.invoke("submit-to-gitpage");
        
        if (error) {
          console.error("Submission error:", error);
          return;
        }

        if (data?.success) {
          console.log("Submitted variation:", data.variation);
        }
      } catch (error) {
        console.error("Submission scheduler error:", error);
      }
    };

    // Run immediately on mount
    submitNext();

    // Then run every 5 minutes (300000ms)
    intervalRef.current = setInterval(submitNext, 300000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  return null; // This component doesn't render anything
};
