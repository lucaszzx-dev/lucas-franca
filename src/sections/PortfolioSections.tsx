"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import { useMotion } from "@/animations/useMotion";
import { useLocale } from "@/components/LocaleProvider";
import { getProjects } from "@/content/projects";
import styles from "./sections.module.css";

export function PortfolioSections() {
  const { content, locale } = useLocale();
  const ref = useRef<HTMLDivElement>(null);
  useMotion(ref);
  const { works, about, stack, experience, contact, footer } = content;
  const projects = getProjects(locale);
  const featuredProjects = projects.filter((project) => project.featured);
  const secondaryProjects = projects.filter((project) => !project.featured);
  return (
    <div ref={ref}>
      <section id="trabalhos" className={styles.section}>
        <div className="container">
          <p className={styles.eyebrow} data-reveal>
            {works.eyebrow}
          </p>
          <h2 data-text-reveal>{works.title}</h2>
          <div className={styles.cards}>
            {featuredProjects.map((project) => (
              <article key={project.slug} className={styles.card} data-reveal>
                {project.gallery[0]?.src && (
                  <Image
                    className={styles.projectCover}
                    src={project.gallery[0].src}
                    alt={project.gallery[0].alt}
                    width={1920}
                    height={1080}
                    sizes="(max-width: 47.99rem) 100vw, 33vw"
                  />
                )}
                <p className={styles.notice}>{project.status}</p>
                <h3>{project.title}</h3>
                <p>{project.shortDescription}</p>
                <small>{project.technologies.join(" · ")}</small>
                <Link className="text-link" href={`/projetos/${project.slug}`}>
                  {works.action}
                </Link>
              </article>
            ))}
          </div>
          <div className={styles.secondaryWorks} data-reveal>
            <p className={styles.notice}>{works.secondaryLabel}</p>
            {secondaryProjects.map((project) => (
              <Link
                key={project.slug}
                className="text-link"
                href={`/projetos/${project.slug}`}
              >
                {project.title} — {project.shortDescription}
              </Link>
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
          <div className={styles.stackGroups}>
            {stack.groups.map((group) => (
              <div key={group.label} data-reveal>
                <p className={styles.stackLabel}>{group.label}</p>
                <div className={styles.tags}>
                  {group.items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </div>
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
          <div className={styles.contactLinks} data-reveal>
            <a href="mailto:lucaszzx.dev@gmail.com">Email ↗</a>
            <a
              href="https://github.com/lucaszzx-dev"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub ↗
            </a>
            <a
              href="https://www.linkedin.com/in/lucas-fran%C3%A7a-171140429/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn ↗
            </a>
          </div>
        </div>
      </section>
      <footer className={styles.footer}>
        <div className="container">
          <span className={styles.footerMark}>LF</span> © {new Date().getFullYear()}{" "}
          Lucas França — {footer}
        </div>
      </footer>
    </div>
  );
}
