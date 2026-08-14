import type { Locale, LocalizedText } from "@/types/content";

export const supportedLocales: readonly Locale[] = ["pt-BR", "en"];

export const defaultLocale: Locale = "pt-BR";

export const siteContent: Record<Locale, { title: string; description: string }> = {
  "pt-BR": {
    title: "Lucas França | Front-end Developer",
    description:
      "Desenvolvedor front-end focado em experiências digitais modernas, funcionais e bem construídas.",
  },
  en: {
    title: "Lucas França | Front-end Developer",
    description:
      "Front-end developer focused on modern, functional, and well-crafted digital experiences.",
  },
};

export function getLocalizedText(text: LocalizedText, locale: Locale): string {
  return text[locale];
}
