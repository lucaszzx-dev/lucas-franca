import type { Locale } from "@/types/content";
import type { LocalizedProjects, Project } from "@/types/project";

const cantinhoGalleryPt = [
  ["Hero visual da marca", "Espaço reservado para a imagem principal da marca."],
  ["Monte seu Açaí", "Espaço reservado para a experiência de personalização."],
  ["Escolhas da casa", "Espaço reservado para produtos em destaque."],
  ["Cardápio", "Espaço reservado para a navegação do catálogo."],
  ["Checkout", "Espaço reservado para a etapa de finalização."],
  ["Painel administrativo", "Espaço reservado para a gestão da operação."],
].map(([label, alt]) => ({
  type: "image" as const,
  layout: "wide" as const,
  status: "pending" as const,
  label,
  alt,
}));

const cantinhoGalleryEn = [
  ["Brand hero", "Reserved space for the main brand visual."],
  ["Build your açaí", "Reserved space for the customization experience."],
  ["House picks", "Reserved space for featured products."],
  ["Menu", "Reserved space for catalog navigation."],
  ["Checkout", "Reserved space for the checkout stage."],
  ["Admin dashboard", "Reserved space for operations management."],
].map(([label, alt]) => ({
  type: "image" as const,
  layout: "wide" as const,
  status: "pending" as const,
  label,
  alt,
}));

export const projects: LocalizedProjects = {
  "pt-BR": [
    {
      slug: "cantinho-do-acai",
      title: "Cantinho do Açaí",
      featured: true,
      status: "Case study em desenvolvimento",
      role: "Desenvolvimento full stack",
      shortDescription:
        "Plataforma full stack de delivery para açaí, com catálogo, montagem de pedidos, checkout e área administrativa.",
      description:
        "Plataforma digital de delivery desenvolvida para transformar o catálogo e o processo de pedidos do Cantinho do Açaí em uma experiência online completa.",
      technologies: [
        "React",
        "TypeScript",
        "Node.js",
        "Fastify",
        "PostgreSQL",
        "Drizzle ORM",
        "Vite",
      ],
      repositoryUrl: "https://github.com/lucaszzx-dev/cantinho-do-acai",
      problem:
        "Centralizar em uma única plataforma a experiência de compra do cliente e a operação administrativa do estabelecimento.",
      solution:
        "Uma aplicação com duas experiências principais: catálogo, personalização, carrinho, entrega, pagamento e finalização via WhatsApp para clientes; autenticação e gestão operacional para a administração.",
      highlights: [
        "Catálogo e visualização de produtos",
        "Montagem personalizada de pedidos",
        "Carrinho, checkout e integração com WhatsApp",
        "Gestão de pedidos, produtos, variantes, adicionais e categorias",
        "Configurações da loja, pagamentos e autenticação administrativa",
      ],
      gallery: cantinhoGalleryPt,
    },
    {
      slug: "arenax",
      title: "ArenaX",
      featured: true,
      status: "Case study a detalhar",
      role: "Desenvolvimento full stack",
      shortDescription:
        "Plataforma full stack para criar, administrar e acompanhar campeonatos amadores.",
      description:
        "Plataforma para organizar a criação, administração e acompanhamento de campeonatos amadores.",
      technologies: [
        "React",
        "TypeScript",
        "Node.js",
        "Fastify",
        "PostgreSQL",
        "Drizzle ORM",
        "Vite",
        "Playwright",
      ],
      repositoryUrl: "https://github.com/lucaszzx-dev/ArenaX",
      gallery: [],
    },
    {
      slug: "marcai",
      title: "Marcaí",
      featured: true,
      status: "Case study a detalhar",
      role: "Desenvolvimento full stack",
      shortDescription:
        "Plataforma de agenda, orçamentos e gestão para profissionais autônomos.",
      description:
        "Plataforma voltada à agenda, aos orçamentos e à gestão de profissionais autônomos.",
      technologies: ["React", "JavaScript", "PostgreSQL", "Supabase", "Vite", "Vitest"],
      repositoryUrl: "https://github.com/lucaszzx-dev/marcai",
      gallery: [],
    },
    {
      slug: "gym-tracker",
      title: "Gym Tracker",
      featured: false,
      status: "Case study a detalhar",
      role: "Desenvolvimento front-end",
      shortDescription:
        "Aplicação para organizar treinos e acompanhar evolução física.",
      description: "Aplicação para organizar treinos e acompanhar a evolução física.",
      technologies: ["React", "JavaScript", "Firebase", "Recharts", "Vite"],
      repositoryUrl: "https://github.com/lucaszzx-dev/gym-tracker",
      gallery: [],
    },
  ],
  en: [
    {
      slug: "cantinho-do-acai",
      title: "Cantinho do Açaí",
      featured: true,
      status: "Case study in progress",
      role: "Full-stack development",
      shortDescription:
        "Full-stack açaí delivery platform with catalog, order customization, checkout and an admin area.",
      description:
        "A digital delivery platform built to turn Cantinho do Açaí's catalog and ordering process into a complete online experience.",
      technologies: [
        "React",
        "TypeScript",
        "Node.js",
        "Fastify",
        "PostgreSQL",
        "Drizzle ORM",
        "Vite",
      ],
      repositoryUrl: "https://github.com/lucaszzx-dev/cantinho-do-acai",
      problem:
        "Centralize the customer purchasing experience and the establishment's administrative operation in one platform.",
      solution:
        "An application with two main experiences: catalog browsing, customization, cart, delivery, payment and WhatsApp completion for customers; authentication and operational management for administrators.",
      highlights: [
        "Product catalog and browsing",
        "Custom order building",
        "Cart, checkout and WhatsApp integration",
        "Order, product, variant, add-on and category management",
        "Store settings, payment methods and administrative authentication",
      ],
      gallery: cantinhoGalleryEn,
    },
    {
      slug: "arenax",
      title: "ArenaX",
      featured: true,
      status: "Case study to be expanded",
      role: "Full-stack development",
      shortDescription:
        "Full-stack platform to create, manage and track amateur championships.",
      description:
        "A platform for creating, managing and following amateur championships.",
      technologies: [
        "React",
        "TypeScript",
        "Node.js",
        "Fastify",
        "PostgreSQL",
        "Drizzle ORM",
        "Vite",
        "Playwright",
      ],
      repositoryUrl: "https://github.com/lucaszzx-dev/ArenaX",
      gallery: [],
    },
    {
      slug: "marcai",
      title: "Marcaí",
      featured: true,
      status: "Case study to be expanded",
      role: "Full-stack development",
      shortDescription:
        "Scheduling, quoting and management platform for self-employed professionals.",
      description:
        "A platform for scheduling, quoting and managing self-employed professionals.",
      technologies: ["React", "JavaScript", "PostgreSQL", "Supabase", "Vite", "Vitest"],
      repositoryUrl: "https://github.com/lucaszzx-dev/marcai",
      gallery: [],
    },
    {
      slug: "gym-tracker",
      title: "Gym Tracker",
      featured: false,
      status: "Case study to be expanded",
      role: "Front-end development",
      shortDescription: "Application to organize workouts and track physical progress.",
      description:
        "An application for organizing workouts and tracking physical progress.",
      technologies: ["React", "JavaScript", "Firebase", "Recharts", "Vite"],
      repositoryUrl: "https://github.com/lucaszzx-dev/gym-tracker",
      gallery: [],
    },
  ],
};

export function getProjects(locale: Locale) {
  return projects[locale];
}
export function getProject(locale: Locale, slug: string): Project | undefined {
  return projects[locale].find((project) => project.slug === slug);
}
export function getProjectSlugs() {
  return projects["pt-BR"].map((project) => ({ slug: project.slug }));
}
