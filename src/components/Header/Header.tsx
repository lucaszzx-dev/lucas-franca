"use client";

import { useState } from "react";
import styles from "./Header.module.css";

const navigation = ["Trabalhos", "Sobre", "Stack", "Contato"];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <a className={styles.brand} href="#inicio" aria-label="Ir para o início">
          Lucas França<span>.</span>
        </a>
        <button
          className={styles.menu}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
        >
          Menu
        </button>
        <nav
          id="primary-navigation"
          className={`${styles.nav} ${menuOpen ? styles.open : ""}`}
          aria-label="Navegação principal"
        >
          {navigation.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(" ", "-")}`}
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          <div className={styles.locale} aria-label="Idioma">
            <button className={styles.active}>PT</button>
            <button disabled title="Tradução em breve">
              EN
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}
