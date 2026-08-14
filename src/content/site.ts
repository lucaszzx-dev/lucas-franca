import type { Locale } from "@/types/content";

export const supportedLocales: readonly Locale[] = ["pt-BR", "en"];
export const defaultLocale: Locale = "pt-BR";

export const siteContent = {
  "pt-BR": {
    localeLabel: "Português",
    nav: [
      { label: "Trabalhos", href: "#trabalhos" },
      { label: "Sobre", href: "#sobre" },
      { label: "Stack", href: "#stack" },
      { label: "Contato", href: "#contato" },
    ],
    header: {
      homeLabel: "Ir para o início",
      menu: "Menu",
      navigation: "Navegação principal",
      language: "Idioma",
    },
    hero: {
      availability: "Disponível para novas conexões",
      name: ["Lucas", "França"],
      role: "Front-end Developer",
      description:
        "Desenvolvedor front-end focado em transformar ideias em experiências digitais modernas, funcionais e bem construídas.",
      action: "Ver trabalhos",
      photo: "Foto temporária\na definir",
      photoLabel: "Placeholder temporário para foto de Lucas França",
    },
    works: {
      eyebrow: "Selected works",
      title: "Projetos em destaque",
      action: "Ver case study",
      secondaryLabel: "Também no portfólio",
    },
    about: {
      eyebrow: "Sobre",
      title: "Em evolução constante.",
      copy: "Rascunho: desenvolvedor front-end evoluindo para full-stack, interessado em unir código, interface e experiência do usuário.",
    },
    stack: {
      eyebrow: "Stack",
      title: "Ferramentas do caminho.",
      items: [
        "React",
        "JavaScript",
        "Node.js",
        "PostgreSQL",
        "TypeScript — em aprendizado",
      ],
    },
    experience: {
      eyebrow: "Serviços & experiência",
      title: "Estrutura em construção.",
      copy: "Placeholder: serviços, experiências e colaborações reais serão adicionados aqui.",
    },
    contact: {
      eyebrow: "Contato",
      title: "Vamos construir algo com intenção.",
      copy: "E-mail: contato@exemplo.com · GitHub e LinkedIn: links a definir.",
    },
    footer: "conteúdo em construção.",
  },
  en: {
    localeLabel: "English",
    nav: [
      { label: "Work", href: "#trabalhos" },
      { label: "About", href: "#sobre" },
      { label: "Stack", href: "#stack" },
      { label: "Contact", href: "#contato" },
    ],
    header: {
      homeLabel: "Go to home",
      menu: "Menu",
      navigation: "Primary navigation",
      language: "Language",
    },
    hero: {
      availability: "Open to new connections",
      name: ["Lucas", "França"],
      role: "Front-end Developer",
      description:
        "Front-end developer focused on turning ideas into modern, functional and well-crafted digital experiences.",
      action: "View work",
      photo: "Temporary photo\nplaceholder",
      photoLabel: "Temporary placeholder for a photo of Lucas França",
    },
    works: {
      eyebrow: "Selected work",
      title: "Selected work",
      action: "View case study",
      secondaryLabel: "Also in the portfolio",
    },
    about: {
      eyebrow: "About",
      title: "Always evolving.",
      copy: "Draft: a front-end developer evolving toward full-stack, interested in bringing together code, interface and user experience.",
    },
    stack: {
      eyebrow: "Stack",
      title: "Tools along the way.",
      items: ["React", "JavaScript", "Node.js", "PostgreSQL", "TypeScript — learning"],
    },
    experience: {
      eyebrow: "Services & experience",
      title: "Structure in progress.",
      copy: "Placeholder: real services, experience and collaborations will be added here.",
    },
    contact: {
      eyebrow: "Contact",
      title: "Let's build with intention.",
      copy: "Email: contato@exemplo.com · GitHub and LinkedIn: links to be defined.",
    },
    footer: "content in progress.",
  },
} as const;

export type SiteContent = (typeof siteContent)[Locale];
