-- Create stories table for the "Share Your Story" form
CREATE TABLE public.stories (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  story TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.stories ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to submit stories (public form)
CREATE POLICY "Anyone can submit stories"
ON public.stories
FOR INSERT
TO anon
WITH CHECK (true);

-- Create policy to allow admins to view all stories (for future admin panel)
CREATE POLICY "Public can view stories"
ON public.stories
FOR SELECT
TO anon
USING (true);

-- Create volunteers table for the volunteer form
CREATE TABLE public.volunteers (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  interests TEXT,
  message TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.volunteers ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to submit volunteer applications
CREATE POLICY "Anyone can submit volunteer applications"
ON public.volunteers
FOR INSERT
TO anon
WITH CHECK (true);

-- Create policy to allow viewing volunteer applications
CREATE POLICY "Public can view volunteers"
ON public.volunteers
FOR SELECT
TO anon
USING (true);

-- Create contact_messages table for the contact form
CREATE TABLE public.contact_messages (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  subject TEXT,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to submit contact messages
CREATE POLICY "Anyone can submit contact messages"
ON public.contact_messages
FOR INSERT
TO anon
WITH CHECK (true);

-- Create policy to allow viewing contact messages
CREATE POLICY "Public can view contact messages"
ON public.contact_messages
FOR SELECT
TO anon
USING (true);