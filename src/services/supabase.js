import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://vtmumpwnzomdbruotdth.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ0bXVtcHduem9tZGJydW90ZHRoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTUwMzQ4MTcsImV4cCI6MjAxMDYxMDgxN30.llZ0Y6IB8R56OvlfK6vTZFkK_ry80OiJN3SdMt-W-h8";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
