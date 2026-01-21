-- Fix: Add SELECT policy to user_secrets so users can only read their own API keys
-- This prevents any authenticated user from reading ALL API keys in the database
CREATE POLICY "Users can view their own secrets"
ON public.user_secrets
FOR SELECT
USING (auth.uid() = user_id);

-- Also add DELETE policies for profiles and user_secrets for GDPR compliance
CREATE POLICY "Users can delete their own profile"
ON public.profiles
FOR DELETE
USING (auth.uid() = id);

CREATE POLICY "Users can delete their own secrets"
ON public.user_secrets
FOR DELETE
USING (auth.uid() = user_id);