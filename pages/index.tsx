import { Auth, ThemeSupa } from "@supabase/auth-ui-react";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import Account from "../components/Account";

export default function Home() {
  const session = useSession();
  const supabase = useSupabaseClient();

  return (
    <div
      className="container"
      style={{ padding: "50px 0 100px 0", width: "600px" }}
    >
      {!session ? (
        <Auth
          supabaseClient={supabase}
          appearance={{ theme: ThemeSupa }}
          providers={["google"]}
          theme="dark"
        />
      ) : (
        <Account session={session} />
      )}
    </div>
  );
}
