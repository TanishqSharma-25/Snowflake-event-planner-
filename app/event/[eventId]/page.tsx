import { EventDetailsContent } from "@/components/event-detail-content";
import { getSession } from "@/lib/auth/server";
import { redirect } from "next/navigation";



export default async function EventDetailsPage({params,}: {params: Promise<{ eventId: string}>;
}) {
    const {eventId} = await params;

    const session = await getSession();
    if (!session?.data?.user) {
    redirect("/auth/sign-in"); // or wherever your auth page is
  }

    return <EventDetailsContent userId={session.data.user.id} eventId={eventId} />

    
}