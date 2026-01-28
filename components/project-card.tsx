import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Project } from "@/data/projects";

type Props = {
  project: Project;
};

export default function ProjectCard({ project }: Props) {
  return (
    <Link href={`/projects/${project.slug}`} className="group block h-full">
      <Card className="flex h-full flex-col overflow-hidden transition hover:shadow-lg border-white/40 bg-white/50 backdrop-blur-md">
        {/* Image */}
        <div className="relative h-44 w-full overflow-hidden">
          <Image
            src={project.image}
            alt={`${project.title} thumbnail`}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>

        {/* Header */}
        <CardHeader className="pb-2">
          <CardTitle className="truncate">{project.title}</CardTitle>
        </CardHeader>

        {/* Content */}
        <CardContent className="flex flex-1 flex-col space-y-3">
          <p className="line-clamp-3 text-sm text-muted-foreground">
            {project.summary}
          </p>

          <div className="mt-auto flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <Badge key={t} variant="secondary">
                {t}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
