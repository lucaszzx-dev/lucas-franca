"use client";

import { useEffect, useRef, useState } from "react";
import type { Locale } from "@/types/content";
import { useLocale } from "@/components/LocaleProvider";
import styles from "./Header.module.css";

type LanguageDropdownProps = {
  locale: Locale;
  languageLabel: string;
  open: boolean;
  setOpen: (open: boolean) => void;
  setLocale: (locale: Locale) => void;
  className?: string;
};

function LanguageDropdown({
  locale,
  languageLabel,
  open,
  setOpen,
  setLocale,
  className,
}: LanguageDropdownProps) {
  const activeLabel = locale === "pt-BR" ? "PT" : "EN";
  const otherLocale: Locale = locale === "pt-BR" ? "en" : "pt-BR";
  const otherLabel = otherLocale === "pt-BR" ? "PT" : "EN";
  return (
    <div className={`${styles.locale} ${className ?? ""}`}>
      <button
        type="button"
        className={styles.localeTrigger}
        aria-label={languageLabel}
        aria-expanded={open}
        aria-haspopup="listbox"
        onClick={() => setOpen(!open)}
      >
        {activeLabel} <span aria-hidden="true">⌄</span>
      </button>
      {open && (
        <div className={styles.localeMenu} role="listbox" aria-label={languageLabel}>
          <button
            type="button"
            role="option"
            aria-selected="true"
            className={styles.localeOption}
            onClick={() => setOpen(false)}
          >
            {activeLabel}
          </button>
          <button
            type="button"
            role="option"
            aria-selected="false"
            className={styles.localeOption}
            onClick={() => {
              setLocale(otherLocale);
              setOpen(false);
            }}
          >
            {otherLabel}
          </button>
        </div>
      )}
    </div>
  );
}

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#inicio");
  const [localeOpen, setLocaleOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const { locale, content, setLocale } = useLocale();
  useEffect(() => {
    const sections = content.nav
      .map(({ href }) => document.querySelector(href))
      .filter((section): section is HTMLElement => section instanceof HTMLElement);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting);
        if (visible[0]) setActiveSection(`#${visible[0].target.id}`);
      },
      { rootMargin: "-28% 0px -62% 0px" },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [content.nav]);
  useEffect(() => {
    const closeOnOutsideClick = (event: PointerEvent) => {
      if (!headerRef.current?.contains(event.target as Node)) setLocaleOpen(false);
    };
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setLocaleOpen(false);
        setMenuOpen(false);
      }
    };
    document.addEventListener("pointerdown", closeOnOutsideClick);
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.removeEventListener("pointerdown", closeOnOutsideClick);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, []);
  return (
    <header ref={headerRef} className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <a
          className={styles.brand}
          href="#inicio"
          aria-label={content.header.homeLabel}
        >
          <strong>LF</strong>
          <span>Lucas França</span>
        </a>
        <button
          className={styles.menu}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
        >
          {content.header.menu}
        </button>
        <nav
          id="primary-navigation"
          className={`${styles.nav} ${menuOpen ? styles.open : ""}`}
          aria-label={content.header.navigation}
        >
          {content.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={activeSection === item.href ? styles.navActive : ""}
              onClick={() => {
                setMenuOpen(false);
                setLocaleOpen(false);
              }}
            >
              {item.label}
            </a>
          ))}
          <LanguageDropdown
            className={styles.mobileLocale}
            locale={locale}
            languageLabel={content.header.language}
            open={localeOpen}
            setLocale={setLocale}
            setOpen={setLocaleOpen}
          />
        </nav>
        <LanguageDropdown
          className={styles.desktopLocale}
          locale={locale}
          languageLabel={content.header.language}
          open={localeOpen}
          setLocale={setLocale}
          setOpen={setLocaleOpen}
        />
      </div>
    </header>
  );
}
