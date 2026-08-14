"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { defaultLocale, siteContent, type SiteContent } from "@/content/site";
import type { Locale } from "@/types/content";

type LocaleContextValue = {
  locale: Locale;
  content: SiteContent;
  setLocale: (locale: Locale) => void;
};
const LocaleContext = createContext<LocaleContextValue | null>(null);
const storageKey = "lucas-franca-locale";

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>(defaultLocale);
  const [isHydrated, setIsHydrated] = useState(false);
  useEffect(() => {
    const timeout = window.setTimeout(() => {
      const saved = localStorage.getItem(storageKey);
      if (saved === "pt-BR" || saved === "en") setLocale(saved);
      setIsHydrated(true);
    }, 0);
    return () => window.clearTimeout(timeout);
  }, []);
  useEffect(() => {
    if (!isHydrated) return;
    document.documentElement.lang = locale;
    localStorage.setItem(storageKey, locale);
  }, [isHydrated, locale]);
  return (
    <LocaleContext value={{ locale, content: siteContent[locale], setLocale }}>
      {children}
    </LocaleContext>
  );
}

export function useLocale() {
  const context = useContext(LocaleContext);
  if (!context) throw new Error("useLocale must be used inside LocaleProvider");
  return context;
}
