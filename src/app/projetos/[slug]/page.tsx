import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { defaultLocale, siteContent } from "@/content/site";
import { ProjectCaseStudy } from "./ProjectCaseStudy";

export function generateStaticParams() {
  return [{ slug: "projeto-exemplo" }];
}

export async function generateMetadata({
  params,
}: PageProps<"/projetos/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  if (slug !== "projeto-exemplo") return {};
  const project = siteContent[defaultLocale].project;
  return {
    title: project.title,
    description: project.description,
    alternates: { canonical: `/projetos/${slug}` },
    openGraph: {
      title: project.title,
      description: project.description,
      type: "article",
    },
  };
}

export default async function CaseStudy({ params }: PageProps<"/projetos/[slug]">) {
  const { slug } = await params;
  if (slug !== "projeto-exemplo") notFound();
  return <ProjectCaseStudy />;
}
