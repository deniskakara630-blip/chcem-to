import { createBrowserClient } from "@supabase/ssr";

const supabaseUrl =
  process.env.NEXT_PUBLIC_SUPABASE_URL ||
  "https://zdgifpdfiikarpgpnqrr.supabase.co";

const supabasePublishableKey =
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ||
  "sb_publishable_torDdkpWLpESkGdjMO3sSw_kTcHVP0A";

export function createClient() {
  return createBrowserClient(supabaseUrl, supabasePublishableKey);
}
