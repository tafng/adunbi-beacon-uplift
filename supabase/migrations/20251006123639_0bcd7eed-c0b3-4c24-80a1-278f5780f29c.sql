-- Fix security: Remove public read access to sensitive tables
-- Only allow inserts from public, remove public SELECT access

-- Drop existing public read policies
DROP POLICY IF EXISTS "Public can view contact messages" ON public.contact_messages;
DROP POLICY IF EXISTS "Public can view volunteers" ON public.volunteers;
DROP POLICY IF EXISTS "Public can view stories" ON public.stories;

-- Note: The INSERT policies remain unchanged, allowing anyone to submit forms
-- Future admin access can be added separately with authenticated user policies