import type { Metadata } from "next";
import { ProjectsIndex } from "./ProjectsIndex";

export const metadata: Metadata = {
  title: "Projetos",
  description: "Projetos e case studies de Lucas França.",
  alternates: { canonical: "/projetos" },
};

export default function ProjectsPage() {
  return <ProjectsIndex />;
}
