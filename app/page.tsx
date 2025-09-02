import { LogoutButton } from "@/components/LogoutButton";
import { authOptions } from "@/untils/option";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/signIn");
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div>Welcome: {session?.user?.name}</div>
      <LogoutButton />
    </main>
  );
}
