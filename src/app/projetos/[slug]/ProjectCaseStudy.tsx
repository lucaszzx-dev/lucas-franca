"use client";

import { useLocale } from "@/components/LocaleProvider";

export function ProjectCaseStudy() {
  const { content } = useLocale();
  const project = content.project;
  return (
    <main className="container project-page">
      <p className="eyebrow">{project.eyebrow}</p>
      <h1>{project.title}</h1>
      <p className="project-copy">{project.description}</p>
      <h2>{project.problemTitle}</h2>
      <p>{project.problem}</p>
      <h2>{project.solutionTitle}</h2>
      <p>{project.solution}</p>
      <h2>{project.technologiesTitle}</h2>
      <p>{project.technologies}</p>
      <p>{project.links}</p>
    </main>
  );
}
