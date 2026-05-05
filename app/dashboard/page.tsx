import { DashboardContent } from "@/components/dashboard-content";
import { getSession } from "@/lib/auth/server";
import { redirect } from "next/navigation";


export default async function DashboardPage(){
    const session = await getSession()
    if (!session?.data?.user) {
    redirect("/auth/sign-in"); // or wherever your auth page is
  }
    return <DashboardContent  userId={session.data.user.id} />
}