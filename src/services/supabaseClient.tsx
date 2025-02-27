import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://cbrbypwvcaeptnlwgife.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNicmJ5cHd2Y2FlcHRubHdnaWZlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDA2Nzk1NjgsImV4cCI6MjA1NjI1NTU2OH0.8gfYypOOnByRQc2UPRBEACxB0iB6SyO0gle9BdIF8IQ';

export const supabase = createClient(supabaseUrl, supabaseKey);