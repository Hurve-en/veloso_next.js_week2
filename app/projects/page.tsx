import { getProjects } from "@/lib/projects";
import { ProjectSearch } from "./project_search";
import { Suspense } from "react";
import { SlowSection } from "./slow-section";
import { SlowSectionSkeleton } from "./slow-section-skeleton";

export default async function ProjectPage({
  searchParams,
}: {
  searchParams: Promise<{ state?: string }>;
}) {
  const { state } = await searchParams;
  const projects = await getProjects(state);

  return (
    <main className="px-16 py-8">
      <h1 className="text-4xl font-bold">Projects</h1>
      <ProjectSearch projects={projects} />
      <Suspense fallback={<SlowSectionSkeleton />}>
        <SlowSection />
      </Suspense>
    </main>
  );
}
