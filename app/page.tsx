import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";


export default function Home() {
  return (
    <div className="flex flex-1 flex-col gap-8">
      <section className=" space-y-4">
        <Badge variant="secondary" className="w-fit">
          Snowflake
        </Badge>
        <h1 className="text-4xl font-semibold tracking-tight">
          Plan events and track RSVPs fast
        </h1>
        <p className="max-w-2xl text-muted-foreground">
          Create events, share a unique invite link, and watch attendee status update in real-time with Going, Maybe and Not Going counts.
        </p>
        <div className="flex flex-wrap gap-3">
          <Button asChild>
            <Link href="/auth/sign-up">Create Account</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/auth/sign-in">Sign in</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="/dashboard">Open Dashboard</Link>
          </Button>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Create Events.</CardTitle>
            <CardDescription>
              Settitle, date and details in seconds.
            </CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Share invite links</CardTitle>
            <CardDescription>
              Generate a unique event token per event.
            </CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Track Attendance</CardTitle>
            <CardDescription>
              See attendee list and response totals at a glance.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            Going, Maybe and Not Going are always up-to-date.
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
