DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1
    FROM pg_policies
    WHERE schemaname = 'public'
      AND tablename = 'website_batch'
      AND policyname = 'Users can delete their own batches'
  ) THEN
    CREATE POLICY "Users can delete their own batches"
    ON public.website_batch
    FOR DELETE
    USING (auth.uid() = user_id);
  END IF;
END $$;