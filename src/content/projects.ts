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

const arenaxGalleryPt = [
  {
    label: "Home do produto",
    alt: "Tela inicial do ArenaX apresentando placar e a proposta principal da plataforma.",
    layout: "wide" as const,
    src: "/projects/arenax/hero-desktop.png",
  },
  {
    label: "Painel do organizador",
    alt: "Painel do organizador do ArenaX com indicadores de competições.",
    layout: "wide" as const,
    src: "/projects/arenax/dashboard-desktop.png",
  },
  {
    label: "Criação de competição",
    alt: "Tela do ArenaX para configuração inicial de uma competição.",
    layout: "wide" as const,
    src: "/projects/arenax/create-competition-desktop.png",
  },
  {
    label: "Participantes e clubes",
    alt: "Tela do ArenaX para importar clubes, organizar equipes e jogadores.",
    layout: "wide" as const,
    src: "/projects/arenax/participants-desktop.png",
  },
  {
    label: "Partidas e chaveamento",
    alt: "Tela do ArenaX com chaveamento, fases e calendário de partidas.",
    layout: "wide" as const,
    src: "/projects/arenax/bracket-desktop.png",
  },
  {
    label: "Campeonatos públicos",
    alt: "Tela pública do ArenaX para explorar e filtrar campeonatos.",
    layout: "wide" as const,
    src: "/projects/arenax/competitions-desktop.png",
  },
  {
    label: "Experiência mobile",
    alt: "Composição de telas móveis do ArenaX para home, campeonatos, painel e chaveamento.",
    layout: "mobile" as const,
    src: "/projects/arenax/home-mobile.png",
  },
  {
    label: "Campeonatos no mobile",
    alt: "Tela móvel do ArenaX para buscar competições públicas.",
    layout: "mobile" as const,
    src: "/projects/arenax/competitions-mobile.png",
  },
  {
    label: "Painel no mobile",
    alt: "Tela móvel do painel do organizador no ArenaX.",
    layout: "mobile" as const,
    src: "/projects/arenax/dashboard-mobile.png",
  },
  {
    label: "Chaveamento no mobile",
    alt: "Tela móvel do ArenaX exibindo as fases do chaveamento.",
    layout: "mobile" as const,
    src: "/projects/arenax/bracket-mobile.png",
  },
].map((media) => ({ type: "image" as const, ...media }));

const arenaxGalleryEn = [
  {
    label: "Product home",
    alt: "ArenaX home screen showing a score concept and the platform's main proposition.",
    layout: "wide" as const,
    src: "/projects/arenax/hero-desktop.png",
  },
  {
    label: "Organizer dashboard",
    alt: "ArenaX organizer dashboard with competition indicators.",
    layout: "wide" as const,
    src: "/projects/arenax/dashboard-desktop.png",
  },
  {
    label: "Competition creation",
    alt: "ArenaX screen for a competition's initial configuration.",
    layout: "wide" as const,
    src: "/projects/arenax/create-competition-desktop.png",
  },
  {
    label: "Participants and clubs",
    alt: "ArenaX screen for importing clubs and organizing teams and players.",
    layout: "wide" as const,
    src: "/projects/arenax/participants-desktop.png",
  },
  {
    label: "Matches and brackets",
    alt: "ArenaX screen with brackets, stages and match schedule.",
    layout: "wide" as const,
    src: "/projects/arenax/bracket-desktop.png",
  },
  {
    label: "Public competitions",
    alt: "ArenaX public screen for exploring and filtering competitions.",
    layout: "wide" as const,
    src: "/projects/arenax/competitions-desktop.png",
  },
  {
    label: "Mobile experience",
    alt: "Composition of ArenaX mobile screens for home, competitions, dashboard and brackets.",
    layout: "mobile" as const,
    src: "/projects/arenax/home-mobile.png",
  },
  {
    label: "Mobile competitions",
    alt: "ArenaX mobile screen for searching public competitions.",
    layout: "mobile" as const,
    src: "/projects/arenax/competitions-mobile.png",
  },
  {
    label: "Mobile dashboard",
    alt: "ArenaX organizer dashboard on mobile.",
    layout: "mobile" as const,
    src: "/projects/arenax/dashboard-mobile.png",
  },
  {
    label: "Mobile brackets",
    alt: "ArenaX mobile screen displaying bracket stages.",
    layout: "mobile" as const,
    src: "/projects/arenax/bracket-mobile.png",
  },
].map((media) => ({ type: "image" as const, ...media }));

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
      status: "Case study completo",
      role: "Desenvolvimento full stack",
      shortDescription:
        "Plataforma full stack para criar, administrar e acompanhar campeonatos amadores.",
      description:
        "ArenaX é uma plataforma full stack criada para organizar, administrar e acompanhar campeonatos amadores. A aplicação reúne criação de competições, clubes, participantes, confrontos, calendário, chaveamento, classificação e acompanhamento público.",
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
      problem:
        "Organizar campeonatos amadores normalmente exige informações espalhadas entre planilhas, mensagens, grupos e anotações manuais. O desafio é centralizar a operação sem dificultar o acompanhamento dos resultados.",
      solution:
        "Uma plataforma com fluxos complementares para organizadores configurarem e administrarem competições, e para o público explorar campeonatos, filtros, resultados, calendário e classificação.",
      highlights: [
        "Criação de competições, regras, pontuação e calendário",
        "Cadastro e importação de clubes, equipes e jogadores",
        "Geração de confrontos, partidas e chaveamentos",
        "Classificação, resultados e acompanhamento público",
      ],
      story: [
        {
          label: "Organização de campeonatos",
          body: "O painel reúne indicadores e o acesso às competições do organizador, acompanhando o status de cada operação.",
        },
        {
          label: "Configuração",
          body: "A criação de uma competição começa por identidade, esporte, formato, inscrição, regras, pontuação e calendário.",
        },
        {
          label: "Participantes e clubes",
          body: "Clubes podem ser cadastrados ou importados, enquanto equipes e jogadores são organizados dentro de cada competição.",
        },
        {
          label: "Partidas e chaveamento",
          body: "A plataforma permite gerar confrontos, estruturar fases, acompanhar chaveamentos, calendário e resultados.",
        },
        {
          label: "Experiência pública",
          body: "Quem acompanha encontra campeonatos publicados, pesquisa competições, filtra por esporte e acompanha resultados e classificação.",
        },
        {
          label: "Responsividade",
          body: "As telas principais também foram concebidas para leitura e operação em dispositivos móveis, sem criar uma experiência paralela.",
        },
      ],
      gallery: arenaxGalleryPt,
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
      status: "Complete case study",
      role: "Full-stack development",
      shortDescription:
        "Full-stack platform to create, manage and track amateur championships.",
      description:
        "ArenaX is a full-stack platform built to organize, manage and follow amateur competitions. It brings together competition creation, clubs, participants, matches, scheduling, brackets, standings and public tracking.",
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
      problem:
        "Amateur competitions are often managed across spreadsheets, messages, group chats and manual notes. The challenge is to centralize operations without making result tracking harder.",
      solution:
        "A platform with complementary flows: organizers configure and run competitions, while the public explores competitions, filters, results, schedules and standings.",
      highlights: [
        "Competition creation, rules, scoring and scheduling",
        "Club, team and player registration and importing",
        "Match generation, fixtures and brackets",
        "Standings, results and public tracking",
      ],
      story: [
        {
          label: "Competition organization",
          body: "The dashboard brings together indicators and access to the organizer's competitions, following the state of each operation.",
        },
        {
          label: "Configuration",
          body: "Competition creation starts with identity, sport, format, registration, rules, scoring and schedule.",
        },
        {
          label: "Participants and clubs",
          body: "Clubs can be registered or imported, while teams and players are organized within each competition.",
        },
        {
          label: "Matches and brackets",
          body: "The platform supports match generation, stage structure, brackets, schedules and result tracking.",
        },
        {
          label: "Public experience",
          body: "Spectators can find published competitions, search, filter by sport and follow results and standings.",
        },
        {
          label: "Responsiveness",
          body: "The main screens were also designed for clear reading and operation on mobile devices, without a separate experience.",
        },
      ],
      gallery: arenaxGalleryEn,
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
