import { Auth, ThemeSupa } from "@supabase/auth-ui-react";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import Dashboard from "./Dashboard";
export default function Home() {
  const session = useSession();
  const supabase = useSupabaseClient();

  return (
    <div className="container">
      {!session ? (
        <Auth
          supabaseClient={supabase}
          appearance={{ theme: ThemeSupa }}
          providers={["google"]}
          style={{ padding: "50px 0 100px 0", width: "600px" }}
          theme="dark"
        />
      ) : (
        <>
          <Dashboard session={session}></Dashboard>
        </>
      )}
    </div>
  );
}
