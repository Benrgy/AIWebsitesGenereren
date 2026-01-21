-- Drop the deprecated gitpage_api_key column from profiles table
-- API keys have been migrated to user_secrets table and should not be readable from client-side
ALTER TABLE public.profiles DROP COLUMN IF EXISTS gitpage_api_key;