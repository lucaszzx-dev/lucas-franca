import type { Locale } from "./content";

export type ProjectMediaLayout = "wide" | "mobile";

export interface ProjectMedia {
  type: "image";
  alt: string;
  layout: ProjectMediaLayout;
  status: "pending";
  label: string;
  src?: string;
}

export interface Project {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  role: string;
  status: string;
  featured: boolean;
  technologies: string[];
  repositoryUrl: string;
  liveUrl?: string;
  year?: string;
  problem?: string;
  solution?: string;
  highlights?: string[];
  gallery: ProjectMedia[];
}

export type LocalizedProjects = Record<Locale, readonly Project[]>;
