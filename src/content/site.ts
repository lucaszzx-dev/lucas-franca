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
      placeholder: "Placeholder — dados fictícios",
      description:
        "Descrição de exemplo para validar a estrutura dos futuros projetos reais.",
      technologies: "React · JavaScript · Exemplo",
      action: "Ver case study",
      items: ["Projeto exemplo 01", "Projeto exemplo 02", "Projeto exemplo 03"],
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
    project: {
      eyebrow: "Case study placeholder",
      title: "Projeto exemplo",
      description:
        "Descrição, problema, solução, tecnologias, imagens e links serão inseridos com conteúdo real.",
      problemTitle: "Problema",
      problem: "Placeholder.",
      solutionTitle: "Solução",
      solution: "Placeholder.",
      technologiesTitle: "Tecnologias",
      technologies: "Exemplo: React, JavaScript.",
      links: "GitHub e demo: links a definir.",
    },
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
      placeholder: "Placeholder — fictional data",
      description:
        "Example description used to validate the structure for future real projects.",
      technologies: "React · JavaScript · Example",
      action: "View case study",
      items: ["Example project 01", "Example project 02", "Example project 03"],
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
    project: {
      eyebrow: "Case study placeholder",
      title: "Example project",
      description:
        "Description, problem, solution, technologies, images and links will be added with real content.",
      problemTitle: "Problem",
      problem: "Placeholder.",
      solutionTitle: "Solution",
      solution: "Placeholder.",
      technologiesTitle: "Technologies",
      technologies: "Example: React, JavaScript.",
      links: "GitHub and demo: links to be defined.",
    },
  },
} as const;

export type SiteContent = (typeof siteContent)[Locale];
