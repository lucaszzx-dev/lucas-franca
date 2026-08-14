import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { defaultLocale } from "@/content/site";
import { getProject, getProjectSlugs } from "@/content/projects";
import { ProjectCaseStudy } from "./ProjectCaseStudy";

export function generateStaticParams() {
  return getProjectSlugs();
}

export async function generateMetadata({
  params,
}: PageProps<"/projetos/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(defaultLocale, slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.shortDescription,
    alternates: { canonical: `/projetos/${slug}` },
    openGraph: {
      title: project.title,
      description: project.shortDescription,
      type: "article",
    },
  };
}

export default async function CaseStudy({ params }: PageProps<"/projetos/[slug]">) {
  const { slug } = await params;
  if (!getProject(defaultLocale, slug)) notFound();
  return <ProjectCaseStudy slug={slug} />;
}
