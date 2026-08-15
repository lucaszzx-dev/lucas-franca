"use client";

import { useEffect, useState } from "react";
import { useLocale } from "@/components/LocaleProvider";
import styles from "./Header.module.css";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#inicio");
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
  return (
    <header className={styles.header}>
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
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <div className={styles.locale} aria-label={content.header.language}>
            <button
              className={locale === "pt-BR" ? styles.active : ""}
              onClick={() => setLocale("pt-BR")}
              aria-pressed={locale === "pt-BR"}
            >
              PT
            </button>
            <button
              className={locale === "en" ? styles.active : ""}
              onClick={() => setLocale("en")}
              aria-pressed={locale === "en"}
            >
              EN
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}
