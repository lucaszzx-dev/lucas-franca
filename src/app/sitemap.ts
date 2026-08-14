import type { MetadataRoute } from "next";
import { getProjectSlugs } from "@/content/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
  if (!siteUrl) return [];
  return [
    { url: siteUrl, lastModified: new Date() },
    ...getProjectSlugs().map(({ slug }) => ({
      url: `${siteUrl}/projetos/${slug}`,
      lastModified: new Date(),
    })),
  ];
}
