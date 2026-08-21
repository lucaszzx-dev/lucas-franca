"use client";

import Image from "next/image";
import Link from "next/link";
import { useLocale } from "@/components/LocaleProvider";
import { getProjects } from "@/content/projects";
import styles from "./projects.module.css";

const labels = {
  "pt-BR": {
    back: "Voltar para a home",
    eyebrow: "Projetos",
    title: "Todos os projetos.",
    action: "Ver case study",
  },
  en: {
    back: "Back to home",
    eyebrow: "Projects",
    title: "All projects.",
    action: "View case study",
  },
} as const;

export function ProjectsIndex() {
  const { locale } = useLocale();
  const text = labels[locale];
  const projects = getProjects(locale);

  return (
    <main className={`container ${styles.page}`}>
      <Link className={`${styles.backLink} text-link`} href="/#trabalhos">
        ← {text.back}
      </Link>
      <header className={styles.hero}>
        <p className="eyebrow">{text.eyebrow}</p>
        <h1>{text.title}</h1>
      </header>
      <section className={styles.grid} aria-label={text.title}>
        {projects.map((project) => (
          <article key={project.slug} className={styles.card}>
            <Link className={styles.cover} href={`/projetos/${project.slug}`}>
              {project.gallery[0]?.src ? (
                <Image
                  src={project.gallery[0].src}
                  alt={project.gallery[0].alt}
                  width={960}
                  height={540}
                  sizes="(max-width: 47.99rem) 100vw, (max-width: 75rem) 50vw, 33vw"
                />
              ) : null}
            </Link>
            <div className={styles.details}>
              <p>{project.role}</p>
              <h2>{project.title}</h2>
              <p className={styles.summary}>{project.cardSummary}</p>
              <ul className={styles.tags} aria-label={project.title}>
                {project.technologies.slice(0, 4).map((technology) => (
                  <li key={technology}>{technology}</li>
                ))}
              </ul>
              <Link className={styles.action} href={`/projetos/${project.slug}`}>
                {text.action} <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
