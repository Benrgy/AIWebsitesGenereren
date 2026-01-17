-- Fix 1: Create a write-only secrets table for API keys (profiles_apikey_readable)
-- This ensures API keys cannot be read from the client-side

CREATE TABLE public.user_secrets (
  user_id uuid NOT NULL REFERENCES auth.users ON DELETE CASCADE,
  gitpage_api_key text NOT NULL,
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  updated_at timestamp with time zone NOT NULL DEFAULT now(),
  PRIMARY KEY (user_id)
);

ALTER TABLE public.user_secrets ENABLE ROW LEVEL SECURITY;

-- Write-only policies: INSERT and UPDATE only, NO SELECT for users
CREATE POLICY "Users can insert their own secrets"
  ON public.user_secrets
  FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own secrets"
  ON public.user_secrets
  FOR UPDATE
  USING (auth.uid() = user_id);

-- No SELECT policy - secrets are write-only from client
-- Edge functions use service role to read secrets

-- Migrate existing API keys from profiles to user_secrets
INSERT INTO public.user_secrets (user_id, gitpage_api_key)
SELECT id, gitpage_api_key FROM public.profiles 
WHERE gitpage_api_key IS NOT NULL;

-- Create a function to check if API key is configured (without exposing the key)
CREATE OR REPLACE FUNCTION public.has_api_key_configured()
RETURNS boolean
LANGUAGE sql
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.user_secrets 
    WHERE user_id = auth.uid() 
    AND gitpage_api_key IS NOT NULL 
    AND gitpage_api_key != ''
  );
$$;

-- Create trigger for updated_at
CREATE TRIGGER update_user_secrets_updated_at
  BEFORE UPDATE ON public.user_secrets
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

-- Fix 2: Add INSERT and DELETE policies for website_variations (variations_missing_insert)
CREATE POLICY "Users can create variations for their own batches"
  ON public.website_variations
  FOR INSERT
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM public.website_batch
      WHERE website_batch.id = website_variations.batch_id
      AND website_batch.user_id = auth.uid()
    )
  );

CREATE POLICY "Users can delete their own variations"
  ON public.website_variations
  FOR DELETE
  USING (
    EXISTS (
      SELECT 1 FROM public.website_batch
      WHERE website_batch.id = website_variations.batch_id
      AND website_batch.user_id = auth.uid()
    )
  );