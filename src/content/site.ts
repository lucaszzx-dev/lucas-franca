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
      { label: "Serviços", href: "#servicos" },
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
      introduction: ["Oi, sou", "Lucas", "França"],
      shortDescription: "Criando interfaces e produtos digitais.",
      name: ["Lucas", "França"],
      role: "Front-end Developer",
      description:
        "Desenvolvedor front-end e graduando em Ciência da Computação. Construo produtos digitais modernos, funcionais e bem estruturados.",
      action: "Ver trabalhos",
      kicker: ["Estudante de Ciência da Computação", "Criando produtos digitais"],
      signature: ["Front-end", "Developer"],
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
      copy: [
        "Aos 18 anos, em Taboão da Serra — São Paulo, estudo Ciência da Computação e desenvolvo interfaces com atenção à clareza, ao produto e à execução.",
        "Tenho interesse em produtos digitais, tecnologia e negócios, com mentalidade empreendedora. Construo pensando em uso real, não apenas em código.",
        "Sigo aprofundando minha base técnica e ampliando progressivamente minha atuação para full stack, com ambição de assumir responsabilidades maiores em tecnologia.",
      ],
      facts: [
        { value: "18", label: "anos" },
        { value: "SP", label: "Brasil" },
        { value: "CS", label: "Ciência da Computação" },
      ],
    },
    stack: {
      groups: [
        {
          label: "Base principal",
          items: ["React", "JavaScript", "Node.js", "HTML5", "CSS", "Git", "GitHub"],
        },
        {
          label: "Em aprendizado",
          items: ["TypeScript", "PostgreSQL", "Drizzle ORM", "Next.js"],
        },
      ],
    },
    services: {
      eyebrow: "Serviços",
      title: "O que eu posso construir hoje.",
      copy: "Foco em produtos web bem estruturados, com escopo claro e espaço para evoluir junto com a base técnica.",
      items: [
        {
          title: "Desenvolvimento front-end",
          description:
            "Interfaces em React e Next.js, responsivas, acessíveis e com atenção à experiência de uso e performance.",
          tags: ["React", "Next.js", "Responsividade", "UX"],
        },
        {
          title: "Full stack em evolução",
          description:
            "Aplicações completas com Node.js e PostgreSQL, aplicando a base atual de forma responsável enquanto sigo aprofundando o back-end.",
          tags: ["Node.js", "PostgreSQL", "APIs", "Drizzle ORM"],
        },
        {
          title: "Estudo aplicado e projetos pessoais",
          description:
            "Projetos autorais para praticar produto, arquitetura e execução. Os cases deste portfólio representam estudo e prática, não trabalhos para clientes.",
          tags: ["Produto", "Prática", "Estudo", "Open source"],
        },
      ],
    },
    contact: {
      eyebrow: "Contato",
      title: "Tem uma ideia, projeto ou oportunidade? Vamos conversar.",
      copy: "lucaszzx.dev@gmail.com · GitHub · LinkedIn · Currículo em breve",
      action: "Conversar por e-mail",
      links: { email: "E-mail", github: "GitHub", linkedin: "LinkedIn" },
    },
    footer: "Front-end Developer · Taboão da Serra, Brasil",
  },
  en: {
    localeLabel: "English",
    nav: [
      { label: "Work", href: "#trabalhos" },
      { label: "About", href: "#sobre" },
      { label: "Stack", href: "#stack" },
      { label: "Services", href: "#servicos" },
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
      introduction: ["Hi, I'm", "Lucas", "França"],
      shortDescription: "Building interfaces and digital products.",
      name: ["Lucas", "França"],
      role: "Front-end Developer",
      description:
        "Front-end developer and Computer Science undergraduate building modern, functional and well-structured digital products.",
      action: "View work",
      kicker: ["Computer Science student", "Building digital products"],
      signature: ["Front-end", "Developer"],
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
      copy: [
        "At 18, based in Taboão da Serra — São Paulo, I study Computer Science and build interfaces with attention to clarity, product and execution.",
        "I am interested in digital products, technology and business, with an entrepreneurial mindset. I build for real use, not just for code.",
        "I keep strengthening my technical foundation and progressively expanding into full-stack work, with the ambition to take on larger responsibilities in technology.",
      ],
      facts: [
        { value: "18", label: "years old" },
        { value: "SP", label: "Brazil" },
        { value: "CS", label: "Computer Science" },
      ],
    },
    stack: {
      groups: [
        {
          label: "Core stack",
          items: ["React", "JavaScript", "Node.js", "HTML5", "CSS", "Git", "GitHub"],
        },
        {
          label: "Currently learning",
          items: ["TypeScript", "PostgreSQL", "Drizzle ORM", "Next.js"],
        },
      ],
    },
    services: {
      eyebrow: "Services",
      title: "What I can build today.",
      copy: "A focus on well-structured web products, with clear scope and room to grow alongside my technical foundation.",
      items: [
        {
          title: "Front-end development",
          description:
            "Responsive, accessible React and Next.js interfaces with attention to user experience and performance.",
          tags: ["React", "Next.js", "Responsive", "UX"],
        },
        {
          title: "Full-stack in progress",
          description:
            "Complete applications with Node.js and PostgreSQL, applying my current foundation responsibly while I keep strengthening back-end skills.",
          tags: ["Node.js", "PostgreSQL", "APIs", "Drizzle ORM"],
        },
        {
          title: "Applied learning and personal projects",
          description:
            "Independent projects for practicing product, architecture and execution. The case studies in this portfolio represent study and practice, not client work.",
          tags: ["Product", "Practice", "Learning", "Open source"],
        },
      ],
    },
    contact: {
      eyebrow: "Contact",
      title: "Have an idea, project or opportunity? Let's talk.",
      copy: "lucaszzx.dev@gmail.com · GitHub · LinkedIn · Résumé coming soon",
      action: "Start an email conversation",
      links: { email: "Email", github: "GitHub", linkedin: "LinkedIn" },
    },
    footer: "Front-end Developer · Taboão da Serra, Brazil",
  },
} as const;

export type SiteContent = (typeof siteContent)[Locale];
