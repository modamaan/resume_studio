-- Create admins table
CREATE TABLE IF NOT EXISTS public.admins (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    username TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    email TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create index on username for faster lookups
CREATE INDEX IF NOT EXISTS idx_admins_username ON public.admins(username);

-- Insert default admin user
-- IMPORTANT: Change these credentials after first login!
INSERT INTO public.admins (username, password, email)
VALUES ('admin', 'admin123', 'amaanprogramming@gmail.com')
ON CONFLICT (username) DO UPDATE 
SET password = EXCLUDED.password,
    email = EXCLUDED.email,
    updated_at = NOW();

-- Enable Row Level Security
ALTER TABLE public.admins ENABLE ROW LEVEL SECURITY;

-- Create policy to allow service role (backend) to access admins table
CREATE POLICY "Allow service role all on admins" ON public.admins
    FOR ALL TO service_role
    USING (true)
    WITH CHECK (true);

COMMENT ON TABLE public.admins IS 'Stores admin user credentials for dashboard access';
