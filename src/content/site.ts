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
      availability: "Disponível para novas conexões, projetos e oportunidades",
      name: ["Lucas", "França"],
      role: "Front-end Developer",
      description:
        "Desenvolvedor front-end e graduando em Ciência da Computação. Construo produtos digitais modernos, funcionais e bem estruturados.",
      action: "Ver trabalhos",
      photo: "",
      photoLabel: "Retrato de Lucas França",
    },
    works: {
      eyebrow: "Selected works",
      title: "Projetos em destaque",
      action: "Ver case study",
      secondaryLabel: "Também no portfólio",
    },
    about: {
      eyebrow: "Sobre",
      title: "Construindo com intenção.",
      copy: "Aos 18 anos, em Taboão da Serra — São Paulo, estudo Ciência da Computação e desenvolvo interfaces com atenção à clareza, produto e execução. Tenho interesse em produtos digitais, tecnologia e negócios, com mentalidade empreendedora. Busco aprofundar minha base técnica, ampliar progressivamente minha atuação para full stack e assumir responsabilidades cada vez maiores em tecnologia.",
    },
    stack: {
      eyebrow: "Stack",
      title: "Base técnica em evolução.",
      groups: [
        {
          label: "Base principal",
          items: ["React", "JavaScript", "Node.js", "HTML5", "CSS", "Git", "GitHub"],
        },
        { label: "Em aprendizado", items: ["TypeScript", "PostgreSQL", "Drizzle ORM"] },
      ],
    },
    experience: {
      eyebrow: "Jornada",
      title: "Prática, estudo e construção.",
      copy: "2026 — Graduando em Ciência da Computação. Minha experiência prática vem da construção de aplicações web completas, do estudo contínuo e da vontade de transformar boas ideias em produtos digitais consistentes.",
    },
    contact: {
      eyebrow: "Contato",
      title: "Tem uma ideia, projeto ou oportunidade? Vamos conversar.",
      copy: "lucaszzx.dev@gmail.com · GitHub · LinkedIn · Currículo em breve",
    },
    footer: "Front-end Developer · Taboão da Serra, Brasil",
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
      availability: "Open to new connections, projects and opportunities",
      name: ["Lucas", "França"],
      role: "Front-end Developer",
      description:
        "Front-end developer and Computer Science undergraduate building modern, functional and well-structured digital products.",
      action: "View work",
      photo: "",
      photoLabel: "Portrait of Lucas França",
    },
    works: {
      eyebrow: "Selected work",
      title: "Selected work",
      action: "View case study",
      secondaryLabel: "Also in the portfolio",
    },
    about: {
      eyebrow: "About",
      title: "Building with intention.",
      copy: "At 18, based in Taboão da Serra — São Paulo, I study Computer Science and build interfaces with attention to clarity, product and execution. I am interested in digital products, technology and business, with an entrepreneurial mindset. I aim to strengthen my technical foundation, progressively expand into full-stack development and take on increasing responsibility in technology.",
    },
    stack: {
      eyebrow: "Stack",
      title: "A technical foundation in motion.",
      groups: [
        {
          label: "Core stack",
          items: ["React", "JavaScript", "Node.js", "HTML5", "CSS", "Git", "GitHub"],
        },
        {
          label: "Currently learning",
          items: ["TypeScript", "PostgreSQL", "Drizzle ORM"],
        },
      ],
    },
    experience: {
      eyebrow: "Journey",
      title: "Practice, learning and building.",
      copy: "2026 — Computer Science undergraduate. My practical experience comes from building complete web applications, continuous study and a drive to turn strong ideas into consistent digital products.",
    },
    contact: {
      eyebrow: "Contact",
      title: "Have an idea, project or opportunity? Let's talk.",
      copy: "lucaszzx.dev@gmail.com · GitHub · LinkedIn · Résumé coming soon",
    },
    footer: "Front-end Developer · Taboão da Serra, Brazil",
  },
} as const;

export type SiteContent = (typeof siteContent)[Locale];
