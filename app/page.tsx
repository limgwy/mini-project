import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export default function HomePage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-14">
      
      <section className="space-y-6">
        <p className="text-sm text-muted-foreground">Portfolio</p>

        <h1
          className={`${spaceGrotesk.className} text-6xl sm:text-7xl
 font-bold tracking-tight sm:text-5xl`}
        >
          Hi, I’m Gwen
        </h1>

        <p className="max-w-2xl text-base leading-7 text-muted-foreground">
          This is a starter portfolio built with Next.js (App Router), Tailwind
          CSS, and shadcn/ui. It showcases my internship projects and provides a
          simple way to contact me.
        </p>
      </section>

      <section className="mt-14 grid gap-4 sm:grid-cols-3">
        <a
          href="https://github.com/limgwy"
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-full flex-col rounded-xl border border-white/40 bg-white/30 p-4 shadow-lg backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white/40 hover:shadow-xl"
        >
          <p className="text-sm font-medium">GitHub</p>
          <p className="mt-1 text-sm text-muted-foreground">
            Check out my repositories and recent commits.
          </p>
        </a>

        <a
          href="https://www.linkedin.com/in/gwyenth-lim-93bb94329/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-full flex-col rounded-xl border border-white/40 bg-white/30 p-4 shadow-lg backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white/40 hover:shadow-xl"
        >
          <p className="text-sm font-medium">LinkedIn</p>
          <p className="mt-1 text-sm text-muted-foreground">
            Connect with me professionally.
          </p>
        </a>

        <a
          href="mailto:limgwyenth@gmail.com"
          className="flex h-full flex-col rounded-xl border border-white/40 bg-white/30 p-4 shadow-lg backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white/40 hover:shadow-xl"
        >
          <p className="text-sm font-medium">Email</p>
          <p className="mt-1 text-sm text-muted-foreground">
            limgwyenth@gmail.com
          </p>
        </a>
      </section>
    </main>
  );
}
