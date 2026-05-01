import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://wtvlkjdecyzpjwwjmigk.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind0dmxramRlY3l6cGp3d2ptaWdrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzc1ODQzOTMsImV4cCI6MjA5MzE2MDM5M30.HXnVkcqHSRi2bGgXjNgxy8s5TkvI-GVJddM8p_r95fM";

export const supabase = createClient(supabaseUrl, supabaseKey);