
import { Button } from "./ui/button"
import { prisma } from "@/lib/prisma"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { notFound } from "next/navigation";
import { Input } from "./ui/input";
import { submitOrUpateRsvpAction } from "@/lib/actions/events";


export async function InviteRsvpContent({token,submitted,}:{token:string;submitted:boolean;}){
    const row = await prisma.eventInvite.findFirst({
        where: { token },
        include: {
            event: {
                select: {
                    id: true,
                    title: true,
                    description: true,
                    location: true,
                    eventDate: true,
                },
            },
        },
    });

    if(!row){
        notFound();
    }

    const e = row.event;
    const event = {
        title: e.title,
        description: e.description,
        location: e.location,
        eventDate: e.eventDate ? e.eventDate.toISOString() : null,
    }

    const submitRsvpForToken = submitOrUpateRsvpAction.bind(null, token);
   
    return<div className="mx-auto w-full max-w-2xl">
        <Card>
            <CardHeader className="space-y-3">
                <Badge variant="secondary" className="w-fit">
                    RSVP
                </Badge>
                <CardTitle>{event.title}</CardTitle>
                <p className="text-sm text-muted-foreground">
                    {event.eventDate ? new Date(event.eventDate).toLocaleString() : "No date selected"}
                    {event.location ? `- ${event.location}` : ""}
                </p>
                {event.description ? (
                    <p className="text-sm text-muted-foreground">
                        {event.description}
                    </p>
                ) : null}
            </CardHeader>
            <CardContent>
                {submitted ? (
                    <p className="mb-4 rounded-md border">
                        Thanks. Your RSVP has been recorder/updated. 
                    </p>
                ) : null}
                <form action={submitRsvpForToken}>
                    <label htmlFor="name">Name</label>
                    <Input id="name" className="mb-4 mt-1.5" name="name" required placeholder="Your Name" />
                    <label htmlFor="email">Email</label>
                    <Input id="email" className="mb-4 mt-1.5" name="email" type="email" required placeholder="xyz@gamil.com" />
                    <label htmlFor="status">Attendance</label>
                    <select id="status" name="status" required defaultValue="going" className=" flex h-10 w-full rounded-md border border-border bg-(--surface) px-3 mb-4 mt-1.5">
                        <option value="going">Going</option>
                        <option value="maybe">Maybe</option>
                        <option value="not_going">Not Going</option>
                    </select>
                    <Button type="submit">Submit RSVP</Button>
                </form>
            </CardContent>
        </Card>
    </div>

}