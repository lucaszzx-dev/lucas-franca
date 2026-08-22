"use client";

import Link from "next/link";
import Image from "next/image";
import { type MouseEvent, useRef, useState } from "react";
import { useMotion } from "@/animations/useMotion";
import { useLocale } from "@/components/LocaleProvider";
import { getProjects } from "@/content/projects";
import styles from "./sections.module.css";

import { stackIcons } from "@/components/icons";

export function PortfolioSections() {
  const { content, locale } = useLocale();
  const ref = useRef<HTMLDivElement>(null);
  const worksTrack = useRef<HTMLDivElement>(null);
  const activeWorkIndex = useRef(0);
  const isProgrammaticWorksScroll = useRef(false);
  const worksScrollTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [workPage, setWorkPage] = useState(0);
  useMotion(ref);
  const { works, about, stack, services, contact, footer } = content;
  const projects = getProjects(locale);
  const allProjects = projects;
  const allWorksLabel = locale === "pt-BR" ? "Ver todos" : "View all";
  const syncFocusedWork = () => {
    if (worksScrollTimeout.current) {
      clearTimeout(worksScrollTimeout.current);
    }

    worksScrollTimeout.current = setTimeout(() => {
      if (isProgrammaticWorksScroll.current) {
        isProgrammaticWorksScroll.current = false;
        return;
      }

      const track = worksTrack.current;

      if (!track) {
        return;
      }

      const trackBounds = track.getBoundingClientRect();
      const trackCenter = trackBounds.left + trackBounds.width / 2;
      const cards = Array.from(track.children) as HTMLElement[];
      let closestIndex = activeWorkIndex.current;
      let closestDistance = Number.POSITIVE_INFINITY;

      cards.forEach((card, index) => {
        const cardBounds = card.getBoundingClientRect();
        const cardCenter = cardBounds.left + cardBounds.width / 2;
        const distance = Math.abs(cardCenter - trackCenter);

        if (distance < closestDistance) {
          closestIndex = index;
          closestDistance = distance;
        }
      });

      activeWorkIndex.current = closestIndex;
      setWorkPage((currentPage) =>
        currentPage === closestIndex ? currentPage : closestIndex,
      );
    }, 140);
  };
  const activateWork = (index: number) => {
    const track = worksTrack.current;

    if (!track) {
      return;
    }

    if (activeWorkIndex.current === index) {
      return;
    }

    isProgrammaticWorksScroll.current = true;
    activeWorkIndex.current = index;
    setWorkPage(index);
    track.children[index]?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  };
  const moveWorks = (direction: 1 | -1) => {
    const next =
      (activeWorkIndex.current + direction + allProjects.length) % allProjects.length;

    activateWork(next);
  };
  const selectWorkBeforeNavigation = (
    event: MouseEvent<HTMLAnchorElement>,
    index: number,
  ) => {
    if (index !== workPage) {
      event.preventDefault();
      activateWork(index);
    }
  };
  return (
    <div ref={ref}>
      <section id="trabalhos" className={`${styles.section} ${styles.worksSection}`}>
        <h2 className={styles.worksLabel}>
          <span aria-hidden="true">{works.eyebrow}</span>
          <span className={styles.srOnly}>{works.title}</span>
        </h2>
        <div className={styles.worksControls} aria-label={works.title} role="group">
          <span aria-live="polite">
            {String(workPage + 1).padStart(2, "0")} /{" "}
            {String(allProjects.length).padStart(2, "0")}
          </span>
          <button
            type="button"
            onClick={() => moveWorks(-1)}
            aria-label="Previous project"
          >
            ←
          </button>
          <button type="button" onClick={() => moveWorks(1)} aria-label="Next project">
            →
          </button>
        </div>
        <div className="container">
          <div className={styles.worksViewport} data-reveal>
            <div
              className={styles.worksTrack}
              ref={worksTrack}
              onScroll={syncFocusedWork}
            >
              {allProjects.map((project, index) => (
                <article
                  key={project.slug}
                  className={`${styles.workCard} ${
                    index === workPage ? styles.workCardFocused : ""
                  }`}
                  onFocusCapture={() => activateWork(index)}
                >
                  <Link
                    className={styles.workLink}
                    href={`/projetos/${project.slug}`}
                    onClick={(event) => selectWorkBeforeNavigation(event, index)}
                  >
                    {project.gallery[0]?.src && (
                      <Image
                        className={styles.projectCover}
                        src={project.gallery[0].src}
                        alt={project.gallery[0].alt}
                        width={1920}
                        height={1080}
                        sizes="(max-width: 47.99rem) 88vw, (max-width: 80rem) 32vw, 28vw"
                      />
                    )}
                  </Link>
                  <div className={styles.workMeta}>
                    <p className={styles.workSummary}>{project.cardSummary}</p>
                    <h3>{project.title}</h3>
                    <ul className={styles.worksTags} aria-label={project.title}>
                      {project.technologies.slice(0, 4).map((technology) => (
                        <li key={technology}>{technology}</li>
                      ))}
                    </ul>
                    <Link href={`/projetos/${project.slug}`}>{works.action} ↗</Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
          <div className={styles.worksFooter}>
            <div className={styles.worksPagination} aria-label={works.title}>
              {allProjects.map((project, index) => (
                <button
                  key={project.slug}
                  type="button"
                  className={index === workPage ? styles.worksPaginationActive : ""}
                  onClick={() => activateWork(index)}
                  aria-label={`Show ${project.title}`}
                  aria-current={index === workPage ? "true" : undefined}
                />
              ))}
            </div>
            <Link className={styles.worksAllButton} href="/projetos">
              {allWorksLabel} <span>→</span>
            </Link>
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
      <section id="stack" className={`${styles.section} ${styles.stackSection}`}>
        <div className={styles.stackWrapper}>
          {stack.groups.map((group, groupIndex) => {
            const isLearningGroup = groupIndex === 1;
            const direction = isLearningGroup ? "reverse" : "normal";
            // Each group needs to be wider than 100vw for seamless infinite loop
            // Base group has 7 items, Learning group has 4 items - repeat internally
            const itemsPerGroup = isLearningGroup
              ? [...group.items, ...group.items, ...group.items, ...group.items] // 4x4 = 16 items
              : [...group.items, ...group.items]; // 2x7 = 14 items
            // Render exactly 2 identical groups for seamless loop
            const trackItems = [...itemsPerGroup, ...itemsPerGroup];
            return (
              <div key={group.label} className={styles.stackColumn} data-reveal>
                <p className={styles.stackLabel}>{group.label}</p>
                <div
                  className={`${styles.marquee} ${
                    isLearningGroup ? styles.marqueeLearning : styles.marqueeCore
                  }`}
                  data-direction={direction}
                >
                  <div className={styles.marqueeTrack}>
                    {trackItems.map((item, index) => {
                      const Icon = stackIcons[item];
                      return (
                        <span
                          key={`${group.label}-${item}-${index}`}
                          className={styles.marqueeItem}
                          tabIndex={0}
                        >
                          {Icon ? (
                            <Icon className={styles.marqueeIcon} data-tech={item} aria-hidden="true" />
                          ) : (
                            <span>{item}</span>
                          )}
                          <span className={styles.marqueeTooltip}>{item}</span>
                        </span>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
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
