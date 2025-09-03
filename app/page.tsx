import { LogoutButton } from "@/components/LogoutButton";
import { authOptions } from "@/untils/option";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/signIn");
  }

  console.log(session);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div>Welcome: {session?.user?.name}</div>
      <div>User ID: {session?.user?.id}</div>
      <LogoutButton />
    </main>
  );
}
