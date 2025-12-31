-- Create feedback table
CREATE TABLE IF NOT EXISTS public.feedback (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    clerk_user_id TEXT,
    email TEXT,
    rating INTEGER CHECK (rating >= 1 AND rating <= 5),
    mood TEXT CHECK (mood IN ('happy', 'neutral', 'sad')),
    message TEXT,
    admin_reply TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create bug_reports table
CREATE TABLE IF NOT EXISTS public.bug_reports (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    clerk_user_id TEXT,
    email TEXT,
    page_url TEXT,
    description TEXT NOT NULL,
    screenshot_url TEXT,
    status TEXT DEFAULT 'open' CHECK (status IN ('open', 'in-progress', 'resolved', 'closed')),
    admin_notes TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_feedback_created_at ON public.feedback(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_feedback_clerk_user_id ON public.feedback(clerk_user_id);
CREATE INDEX IF NOT EXISTS idx_feedback_rating ON public.feedback(rating);
CREATE INDEX IF NOT EXISTS idx_feedback_mood ON public.feedback(mood);

CREATE INDEX IF NOT EXISTS idx_bug_reports_created_at ON public.bug_reports(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_bug_reports_clerk_user_id ON public.bug_reports(clerk_user_id);
CREATE INDEX IF NOT EXISTS idx_bug_reports_status ON public.bug_reports(status);

-- Create updated_at trigger function if it doesn't exist
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create triggers for updated_at
DROP TRIGGER IF EXISTS update_feedback_updated_at ON public.feedback;
CREATE TRIGGER update_feedback_updated_at
    BEFORE UPDATE ON public.feedback
    FOR EACH ROW
    EXECUTE FUNCTION public.update_updated_at_column();

DROP TRIGGER IF EXISTS update_bug_reports_updated_at ON public.bug_reports;
CREATE TRIGGER update_bug_reports_updated_at
    BEFORE UPDATE ON public.bug_reports
    FOR EACH ROW
    EXECUTE FUNCTION public.update_updated_at_column();

-- Enable Row Level Security (RLS)
ALTER TABLE public.feedback ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.bug_reports ENABLE ROW LEVEL SECURITY;

-- Create policies to allow all operations (you can customize these based on your needs)
-- Allow anyone to insert feedback/bug reports
CREATE POLICY "Allow public insert on feedback" ON public.feedback
    FOR INSERT TO public
    WITH CHECK (true);

CREATE POLICY "Allow public insert on bug_reports" ON public.bug_reports
    FOR INSERT TO public
    WITH CHECK (true);

-- Allow authenticated users to read their own submissions
CREATE POLICY "Allow users to read own feedback" ON public.feedback
    FOR SELECT TO authenticated
    USING (clerk_user_id = auth.jwt() ->> 'sub' OR clerk_user_id IS NULL);

CREATE POLICY "Allow users to read own bug reports" ON public.bug_reports
    FOR SELECT TO authenticated
    USING (clerk_user_id = auth.jwt() ->> 'sub' OR clerk_user_id IS NULL);

-- Allow service role (admin) to do everything
CREATE POLICY "Allow service role all on feedback" ON public.feedback
    FOR ALL TO service_role
    USING (true)
    WITH CHECK (true);

CREATE POLICY "Allow service role all on bug_reports" ON public.bug_reports
    FOR ALL TO service_role
    USING (true)
    WITH CHECK (true);

-- Create storage bucket for bug screenshots (if not exists)
INSERT INTO storage.buckets (id, name, public)
VALUES ('bug-screenshots', 'bug-screenshots', true)
ON CONFLICT (id) DO NOTHING;

-- Allow public uploads to bug-screenshots bucket
CREATE POLICY "Allow public uploads to bug-screenshots"
ON storage.objects FOR INSERT TO public
WITH CHECK (bucket_id = 'bug-screenshots');

-- Allow public reads from bug-screenshots bucket
CREATE POLICY "Allow public reads from bug-screenshots"
ON storage.objects FOR SELECT TO public
USING (bucket_id = 'bug-screenshots');

COMMENT ON TABLE public.feedback IS 'Stores user feedback submissions with ratings, moods, and messages';
COMMENT ON TABLE public.bug_reports IS 'Stores bug reports with descriptions, screenshots, and status tracking';
