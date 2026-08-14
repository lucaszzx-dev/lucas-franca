"use client";

import Link from "next/link";
import { useRef } from "react";
import { useMotion } from "@/animations/useMotion";
import { useLocale } from "@/components/LocaleProvider";
import styles from "./sections.module.css";

export function PortfolioSections() {
  const { content } = useLocale();
  const ref = useRef<HTMLDivElement>(null);
  useMotion(ref);
  const { works, about, stack, experience, contact, footer } = content;
  return (
    <div ref={ref}>
      <section id="trabalhos" className={styles.section}>
        <div className="container">
          <p className={styles.eyebrow} data-reveal>
            {works.eyebrow}
          </p>
          <h2 data-text-reveal>{works.title}</h2>
          <div className={styles.cards}>
            {works.items.map((title) => (
              <article key={title} className={styles.card} data-reveal>
                <p className={styles.notice}>{works.placeholder}</p>
                <h3>{title}</h3>
                <p>{works.description}</p>
                <small>{works.technologies}</small>
                <Link className="text-link" href="/projetos/projeto-exemplo">
                  {works.action}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section id="sobre" className={styles.section}>
        <div className="container">
          <p className={styles.eyebrow} data-reveal>
            {about.eyebrow}
          </p>
          <h2 data-text-reveal>{about.title}</h2>
          <p className={styles.copy} data-reveal>
            {about.copy}
          </p>
        </div>
      </section>
      <section id="stack" className={styles.section}>
        <div className="container">
          <p className={styles.eyebrow} data-reveal>
            {stack.eyebrow}
          </p>
          <h2 data-text-reveal>{stack.title}</h2>
          <div className={styles.tags}>
            {stack.items.map((item) => (
              <span key={item} data-reveal>
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>
      <section id="experiencia" className={styles.section}>
        <div className="container">
          <p className={styles.eyebrow} data-reveal>
            {experience.eyebrow}
          </p>
          <h2 data-text-reveal>{experience.title}</h2>
          <p className={styles.copy} data-reveal>
            {experience.copy}
          </p>
        </div>
      </section>
      <section id="contato" className={styles.section}>
        <div className="container">
          <p className={styles.eyebrow} data-reveal>
            {contact.eyebrow}
          </p>
          <h2 data-text-reveal>{contact.title}</h2>
          <p className={styles.copy} data-reveal>
            {contact.copy}
          </p>
        </div>
      </section>
      <footer className={styles.footer}>
        <div className="container">
          © {new Date().getFullYear()} Lucas França — {footer}
        </div>
      </footer>
    </div>
  );
}
