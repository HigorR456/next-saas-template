import { getSession } from "@/lib/auth";
import HomeTemplate from "@/templates/home";
import { SessionType } from "@/types";

export default async function Home() {
  const session: SessionType | null = await getSession();

  return (
    <HomeTemplate session={session} page="HomePage" />
  )
}
