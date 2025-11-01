-- Create users profile table for storing GitPage API keys
CREATE TABLE IF NOT EXISTS public.profiles (
  id uuid NOT NULL REFERENCES auth.users ON DELETE CASCADE,
  email text NOT NULL,
  gitpage_api_key text,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  PRIMARY KEY (id)
);

-- Enable RLS on profiles
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

-- Create RLS policies for profiles
CREATE POLICY "Users can view their own profile"
  ON public.profiles
  FOR SELECT
  USING (auth.uid() = id);

CREATE POLICY "Users can update their own profile"
  ON public.profiles
  FOR UPDATE
  USING (auth.uid() = id);

CREATE POLICY "Users can insert their own profile"
  ON public.profiles
  FOR INSERT
  WITH CHECK (auth.uid() = id);

-- Create function to handle new user profile creation
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER SET search_path = public
AS $$
BEGIN
  INSERT INTO public.profiles (id, email)
  VALUES (new.id, new.email);
  RETURN new;
END;
$$;

-- Create trigger for new user creation
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Create website_batch table
CREATE TABLE IF NOT EXISTS public.website_batch (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES auth.users ON DELETE CASCADE,
  keyword text NOT NULL,
  num_variations integer NOT NULL CHECK (num_variations >= 2 AND num_variations <= 100),
  language text NOT NULL DEFAULT 'English',
  contact_email text NOT NULL,
  cta_link text NOT NULL,
  status text NOT NULL DEFAULT 'pending',
  created_at timestamptz NOT NULL DEFAULT now(),
  PRIMARY KEY (id)
);

-- Enable RLS on website_batch
ALTER TABLE public.website_batch ENABLE ROW LEVEL SECURITY;

-- Create RLS policies for website_batch
CREATE POLICY "Users can view their own batches"
  ON public.website_batch
  FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can create their own batches"
  ON public.website_batch
  FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own batches"
  ON public.website_batch
  FOR UPDATE
  USING (auth.uid() = user_id);

-- Create website_variations table
CREATE TABLE IF NOT EXISTS public.website_variations (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  batch_id uuid NOT NULL REFERENCES public.website_batch ON DELETE CASCADE,
  heading text NOT NULL,
  hero_statement text NOT NULL,
  features text NOT NULL,
  benefits text NOT NULL,
  style text NOT NULL,
  color_scheme text NOT NULL,
  language text NOT NULL,
  include_faq boolean NOT NULL DEFAULT true,
  contact_email text NOT NULL,
  cta_link text NOT NULL,
  status text NOT NULL DEFAULT 'pending',
  live_url text,
  github_repo_url text,
  error_message text,
  created_at timestamptz NOT NULL DEFAULT now(),
  submitted_at timestamptz,
  completed_at timestamptz,
  PRIMARY KEY (id)
);

-- Enable RLS on website_variations
ALTER TABLE public.website_variations ENABLE ROW LEVEL SECURITY;

-- Create RLS policies for website_variations (through batch relationship)
CREATE POLICY "Users can view their own variations"
  ON public.website_variations
  FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM public.website_batch
      WHERE website_batch.id = website_variations.batch_id
      AND website_batch.user_id = auth.uid()
    )
  );

CREATE POLICY "Users can update their own variations"
  ON public.website_variations
  FOR UPDATE
  USING (
    EXISTS (
      SELECT 1 FROM public.website_batch
      WHERE website_batch.id = website_variations.batch_id
      AND website_batch.user_id = auth.uid()
    )
  );

-- Create updated_at trigger function
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for profiles updated_at
CREATE TRIGGER update_profiles_updated_at
  BEFORE UPDATE ON public.profiles
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_website_batch_user_id ON public.website_batch(user_id);
CREATE INDEX IF NOT EXISTS idx_website_batch_status ON public.website_batch(status);
CREATE INDEX IF NOT EXISTS idx_website_variations_batch_id ON public.website_variations(batch_id);
CREATE INDEX IF NOT EXISTS idx_website_variations_status ON public.website_variations(status);