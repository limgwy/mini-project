import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-12">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">Contact Me</h1>
        <p className="text-muted-foreground">
          Feel free to reach out for opportunities, questions, or
          collaborations.
        </p>
      </div>

      <form className="mt-8 space-y-6">
        <div className="space-y-2">
          <label className="text-sm font-medium">Name</label>
          <Input placeholder="Your Name" />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Email</label>
          <Input type="email" placeholder="you@example.com" />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Message</label>
          <Textarea placeholder="Write your message here..." rows={5} />
        </div>

        <Button className="w-full sm:w-auto">Send Message</Button>
      </form>
    </main>
  );
}
