"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef, useState } from "react";
import { useMotion } from "@/animations/useMotion";
import { useLocale } from "@/components/LocaleProvider";
import { getProjects } from "@/content/projects";
import styles from "./sections.module.css";

export function PortfolioSections() {
  const { content, locale } = useLocale();
  const ref = useRef<HTMLDivElement>(null);
  const worksTrack = useRef<HTMLDivElement>(null);
  const [workPage, setWorkPage] = useState(0);
  useMotion(ref);
  const { works, about, stack, experience, services, contact, footer } = content;
  const projects = getProjects(locale);
  const allProjects = projects;
  const moveWorks = (direction: 1 | -1) => {
    const next = Math.max(0, Math.min(allProjects.length - 1, workPage + direction));
    setWorkPage(next);
    worksTrack.current?.children[next]?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "start",
    });
  };
  return (
    <div ref={ref}>
      <section id="trabalhos" className={`${styles.section} ${styles.worksSection}`}>
        <h2 className={styles.worksLabel}>
          <span aria-hidden="true">{works.eyebrow}</span>
          <span className={styles.srOnly}>{works.title}</span>
        </h2>
        <div className="container">
          <div className={styles.worksViewport} data-reveal>
            <div className={styles.worksControls}>
              <span>
                {String(workPage + 1).padStart(2, "0")} /{" "}
                {String(allProjects.length).padStart(2, "0")}
              </span>
              <button
                type="button"
                onClick={() => moveWorks(-1)}
                disabled={workPage === 0}
                aria-label="Previous project"
              >
                ←
              </button>
              <button
                type="button"
                onClick={() => moveWorks(1)}
                disabled={workPage === allProjects.length - 1}
                aria-label="Next project"
              >
                →
              </button>
            </div>
            <div className={styles.worksTrack} ref={worksTrack}>
              {allProjects.map((project, index) => (
                <article key={project.slug} className={styles.workCard}>
                  <Link className={styles.workLink} href={`/projetos/${project.slug}`}>
                    {project.gallery[0]?.src && (
                      <Image
                        className={styles.projectCover}
                        src={project.gallery[0].src}
                        alt={project.gallery[0].alt}
                        width={1920}
                        height={1080}
                        sizes="(max-width: 47.99rem) 100vw, 70vw"
                      />
                    )}
                  </Link>
                  <div className={styles.workMeta}>
                    <span className={styles.workNumber}>
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <p className={styles.notice}>{project.status}</p>
                      <h3>{project.title}</h3>
                      <p>{project.shortDescription}</p>
                      <ul className={styles.worksTags} aria-label={project.title}>
                        {project.technologies.slice(0, 4).map((technology) => (
                          <li key={technology}>{technology}</li>
                        ))}
                      </ul>
                    </div>
                    <Link href={`/projetos/${project.slug}`}>{works.action} ↗</Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section id="sobre" className={styles.section}>
        <div className="container">
          <div className={styles.aboutGrid}>
            <div className={styles.aboutPhoto} data-reveal>
              <Image
                src="/images/lucas-franca.jpg"
                alt="Lucas França"
                width={1242}
                height={1656}
                sizes="(max-width: 47.99rem) 100vw, 38vw"
              />
              <span>
                LF
                <br />
                18
              </span>
            </div>
            <div>
              <p className={styles.eyebrow} data-reveal>
                {about.eyebrow}
              </p>
              <h2 data-text-reveal>{about.title}</h2>
              <p className={styles.copy} data-reveal>
                {about.copy}
              </p>
              <dl className={styles.facts} data-reveal>
                {about.facts.map((fact) => (
                  <div key={fact.value}>
                    <dt>{fact.value}</dt>
                    <dd>{fact.label}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
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
                <div className={styles.marquee}>
                  <div className={styles.marqueeTrack}>
                    {group.items.concat(group.items, group.items).map((item, index) => (
                      <span
                        key={`${item}-${index}`}
                        aria-hidden={index >= group.items.length}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section
        id="experiencia"
        className={`${styles.section} ${styles.journeySection}`}
      >
        <div className="container">
          <p className={styles.eyebrow} data-reveal>
            {experience.eyebrow}
          </p>
          <h2 data-text-reveal>{experience.title}</h2>
          <div className={styles.journey} data-reveal>
            {experience.milestones.map((milestone) => (
              <span key={milestone.label}>
                {milestone.label}
                <strong>{milestone.value}</strong>
              </span>
            ))}
          </div>
        </div>
      </section>
      <section id="servicos" className={styles.section}>
        <div className="container">
          <div className={styles.servicesIntro}>
            <div>
              <p className={styles.eyebrow} data-reveal>
                {services.eyebrow}
              </p>
              <h2 data-text-reveal>{services.title}</h2>
            </div>
            <p className={styles.copy} data-reveal>
              {services.copy}
            </p>
          </div>
          <div className={styles.serviceCards}>
            {services.items.map((service, index) => (
              <article key={service.title} className={styles.serviceCard} data-reveal>
                <span>0{index + 1}</span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <ul aria-label={service.title}>
                  {service.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section id="contato" className={styles.section}>
        <div className="container">
          <div className={styles.contactPanel} data-reveal>
            <div>
              <p className={styles.eyebrow}>{contact.eyebrow}</p>
              <h2 data-text-reveal>{contact.title}</h2>
              <p>{contact.copy}</p>
            </div>
            <a className="button button--primary" href="mailto:lucaszzx.dev@gmail.com">
              {contact.action} ↗
            </a>
          </div>
        </div>
      </section>
      <footer className={styles.footer}>
        <div className="container">
          <div className={styles.footerMeta}>
            <span className={styles.footerMark}>LF</span> © {new Date().getFullYear()}{" "}
            Lucas França — {footer}
          </div>
          <div className={styles.footerLinks}>
            <a href="mailto:lucaszzx.dev@gmail.com">{contact.links.email}</a>
            <a
              href="https://github.com/lucaszzx-dev"
              target="_blank"
              rel="noopener noreferrer"
            >
              {contact.links.github}
            </a>
            <a
              href="https://www.linkedin.com/in/lucas-fran%C3%A7a-171140429/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {contact.links.linkedin}
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
