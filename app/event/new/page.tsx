import { Button } from "@/components/ui/button";
import { Card,CardContent,CardHeader,CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { createEventAction } from "@/lib/actions/events";
import Link from "next/link";

export default async function NewEventPage(){
    return (
        <div className="mx-auto w-full max-w-2xl">
            <Card>
                <CardHeader>
                    <CardTitle>Create Event</CardTitle>
                </CardHeader>
                <CardContent >
                    <form action={createEventAction}>
                   
                            <Label className="mb-1">Title</Label>
                            <Input id="title" className="mb-3" name="title" required placeholder="Team Dinner..."/>
                        
                            <Label className="mb-1">Description</Label>
                            <Textarea id="description" className="mb-3" name="description" placeholder="Optional details about the event"/>

                            <Label className="mb-1">Location</Label>
                            <Input id="location" className="mb-3" name="location" placeholder="Optional location"/>

                             <Label className="mb-1">Date & Time</Label>
                            <Input id="eventDate" className="mb-3" name="eventDate" type="datetime-local"/>

                            <div >
                                <Button type="submit" className="mr-2">Create Event</Button>
                                <Button type="button" variant="outline" asChild>
                                    <Link href={"/dashboard"}>Cancel</Link>
                                </Button>
                            </div>
                            </form>
                </CardContent>
            </Card>
        </div>
    );
}