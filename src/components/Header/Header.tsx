"use client";

import { useState } from "react";
import { useLocale } from "@/components/LocaleProvider";
import styles from "./Header.module.css";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { locale, content, setLocale } = useLocale();
  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <a
          className={styles.brand}
          href="#inicio"
          aria-label={content.header.homeLabel}
        >
          Lucas França<span>.</span>
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
            <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
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
