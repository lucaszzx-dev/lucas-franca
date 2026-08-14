import type { Locale } from "@/types/content";

export const supportedLocales: readonly Locale[] = ["pt-BR", "en"];
export const defaultLocale: Locale = "pt-BR";

export const siteContent = {
  "pt-BR": {
    nav: ["Trabalhos", "Sobre", "Stack", "Contato"],
    hero: {
      availability: "Disponível para novas conexões",
      role: "Front-end Developer",
      description:
        "Desenvolvedor front-end focado em transformar ideias em experiências digitais modernas, funcionais e bem construídas.",
      action: "Ver trabalhos",
      photo: "Foto temporária a definir",
    },
    sections: {
      works: "Projetos em destaque",
      about: "Em evolução constante.",
      stack: "Ferramentas do caminho.",
      experience: "Estrutura em construção.",
      contact: "Vamos construir algo com intenção.",
    },
  },
  en: {
    nav: ["Work", "About", "Stack", "Contact"],
    hero: {
      availability: "Open to new connections",
      role: "Front-end Developer",
      description:
        "Front-end developer focused on turning ideas into modern, functional and well-crafted digital experiences.",
      action: "View work",
      photo: "Temporary photo placeholder",
    },
    sections: {
      works: "Selected work",
      about: "Always evolving.",
      stack: "Tools along the way.",
      experience: "Structure in progress.",
      contact: "Let's build with intention.",
    },
  },
} as const satisfies Record<Locale, unknown>;
