import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { projects } from "@/data/projects";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

// ...same imports

export default async function ProjectDetails({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) notFound();

  return (
    <main className="mx-auto max-w-4xl px-4 py-10">
      <Link href="/projects" className="text-sm text-blue-600 hover:underline">
        ← Back to Projects
      </Link>

      <h1 className="mt-4 text-3xl font-bold tracking-tight">{project.title}</h1>
      <p className="mt-2 text-muted-foreground">{project.summary}</p>

      {/* Screenshots (4) */}
      <section className="mt-6">
        <h2 className="sr-only">Project screenshots</h2>

        <div className="grid gap-4 sm:grid-cols-2">
          {(project.screenshots ?? [project.image]).slice(0, 4).map((src, i) => (
            <div
              key={src + i}
              className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border bg-background"
            >
              <Image
                src={src}
                alt={`${project.title} screenshot ${i + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 50vw"
                priority={i === 0}
              />
            </div>
          ))}
        </div>
      </section>

      <p className="mt-6 leading-7">{project.description}</p>

      <div className="mt-6 flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <Badge key={t} variant="secondary">
            {t}
          </Badge>
        ))}
      </div>

      <div className="mt-8 flex gap-3">
        <Button asChild>
          <Link href="/projects">All Projects</Link>
        </Button>
        <Button variant="outline" asChild>
          <Link href="/contact">Contact Me</Link>
        </Button>
      </div>
    </main>
  );
}
