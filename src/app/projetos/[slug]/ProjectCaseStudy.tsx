"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { useMotion } from "@/animations/useMotion";
import { useLocale } from "@/components/LocaleProvider";
import { getProject } from "@/content/projects";
import styles from "./project.module.css";

const labels = {
  "pt-BR": {
    back: "Voltar para os trabalhos",
    overview: "Visão geral",
    problem: "Problema",
    solution: "Solução",
    features: "Principais funcionalidades",
    technologies: "Tecnologias",
    experience: "Experiência do cliente",
    admin: "Painel administrativo",
    responsive: "Responsividade",
    links: "Links",
    repository: "Ver repositório",
    github: "Ver no GitHub",
    media: "Mídias do case study",
    pending: "Mídia temporariamente pendente",
    noDetails:
      "Este case study será detalhado com as informações técnicas e mídias do projeto.",
    cantinhoExperience:
      "O fluxo reúne catálogo, visualização de produtos, personalização do açaí, carrinho, entrega, pagamento e finalização pelo WhatsApp.",
    cantinhoAdmin:
      "A área administrativa concentra autenticação e a gestão de pedidos, produtos, variantes, adicionais, categorias, configurações da loja e formas de pagamento.",
    cantinhoResponsive:
      "A galeria abaixo já reserva uma composição para as futuras capturas de telas móveis de montagem, cardápio e checkout.",
  },
  en: {
    back: "Back to work",
    overview: "Overview",
    problem: "Problem",
    solution: "Solution",
    features: "Key features",
    technologies: "Technologies",
    experience: "Customer experience",
    admin: "Admin dashboard",
    responsive: "Responsiveness",
    links: "Links",
    repository: "View repository",
    github: "View on GitHub",
    media: "Case study media",
    pending: "Media pending",
    noDetails:
      "This case study will be expanded with the project's technical information and media.",
    cantinhoExperience:
      "The flow brings together catalog browsing, product views, açaí customization, cart, delivery, payment and WhatsApp completion.",
    cantinhoAdmin:
      "The administrative area centralizes authentication and the management of orders, products, variants, add-ons, categories, store settings and payment methods.",
    cantinhoResponsive:
      "The gallery below already reserves a composition for future mobile captures of order building, menu and checkout.",
  },
} as const;

export function ProjectCaseStudy({ slug }: { slug: string }) {
  const { locale } = useLocale();
  const project = getProject(locale, slug);
  const ref = useRef<HTMLElement>(null);
  useMotion(ref);
  if (!project) return null;
  const text = labels[locale];
  const isCantinho = project.slug === "cantinho-do-acai";
  const isArenaX = project.slug === "arenax";
  const isMarcai = project.slug === "marcai";
  const isGymTracker = project.slug === "gym-tracker";
  const desktopMedia = project.gallery.filter((media) => media.layout === "wide");
  const mobileMedia = project.gallery.filter((media) => media.layout === "mobile");
  return (
    <main ref={ref} className={`container ${styles.caseStudy}`}>
      <Link className="text-link" href="/#trabalhos">
        ← {text.back}
      </Link>
      <header className={styles.hero} data-reveal>
        <p className="eyebrow">{project.status}</p>
        <h1 data-text-reveal>{project.title}</h1>
        <p className="project-copy">{project.description}</p>
        <p className={styles.role}>{project.role}</p>
      </header>
      {desktopMedia[0]?.src ? (
        <figure className={styles.coverImage} data-reveal>
          <Image
            src={desktopMedia[0].src}
            alt={desktopMedia[0].alt}
            width={1920}
            height={1080}
            priority
            sizes="(max-width: 48rem) 100vw, 46rem"
          />
        </figure>
      ) : (
        <section
          className={styles.cover}
          aria-label={`${project.title} cover placeholder`}
          data-reveal
        >
          <span>{text.pending}</span>
          <strong>{project.title}</strong>
        </section>
      )}
      <section className={styles.section} data-reveal>
        <p className="eyebrow">{text.overview}</p>
        <p className="project-copy">{project.shortDescription}</p>
        {isCantinho && desktopMedia[1]?.src && (
          <figure className={styles.mediaImage}>
            <Image
              src={desktopMedia[1].src}
              alt={desktopMedia[1].alt}
              width={1920}
              height={1080}
              sizes="(max-width: 48rem) 100vw, 46rem"
            />
          </figure>
        )}
      </section>
      {(isCantinho || isArenaX || isMarcai || isGymTracker) && (
        <>
          <section className={styles.section} data-reveal>
            <p className="eyebrow">{text.problem}</p>
            <p className="project-copy">{project.problem}</p>
          </section>
          <section className={styles.section} data-reveal>
            <p className="eyebrow">{text.solution}</p>
            <p className="project-copy">{project.solution}</p>
          </section>
          {project.highlights && (
            <section className={styles.section} data-reveal>
              <p className="eyebrow">{text.features}</p>
              <ul className={styles.highlights}>
                {project.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          )}
        </>
      )}
      {isCantinho && desktopMedia[2]?.src && (
        <section className={styles.section} data-reveal>
          <figure className={styles.mediaImage}>
            <Image
              src={desktopMedia[2].src}
              alt={desktopMedia[2].alt}
              width={1920}
              height={1080}
              sizes="(max-width: 48rem) 100vw, 46rem"
            />
          </figure>
        </section>
      )}
      {isCantinho && (
        <>
          <section className={styles.section} data-reveal>
            <p className="eyebrow">{text.experience}</p>
            <p className="project-copy">{text.cantinhoExperience}</p>
            {desktopMedia[3]?.src && (
              <figure className={styles.mediaImage}>
                <Image
                  src={desktopMedia[3].src}
                  alt={desktopMedia[3].alt}
                  width={1920}
                  height={1080}
                  sizes="(max-width: 48rem) 100vw, 46rem"
                />
              </figure>
            )}
          </section>
          <section className={styles.section} data-reveal>
            <p className="eyebrow">{text.admin}</p>
            <p className="project-copy">{text.cantinhoAdmin}</p>
            {desktopMedia.slice(4).map(
              (media) =>
                media.src && (
                  <figure key={media.label} className={styles.mediaImage}>
                    <Image
                      src={media.src}
                      alt={media.alt}
                      width={1920}
                      height={1080}
                      sizes="(max-width: 48rem) 100vw, 46rem"
                    />
                  </figure>
                ),
            )}
          </section>
          <section className={styles.section} data-reveal>
            <p className="eyebrow">{text.responsive}</p>
            <p className="project-copy">{text.cantinhoResponsive}</p>
            <div className={styles.mobileGallery}>
              {mobileMedia.map(
                (media) =>
                  media.src && (
                    <figure key={media.label}>
                      <Image
                        src={media.src}
                        alt={media.alt}
                        width={500}
                        height={900}
                        sizes="(max-width: 48rem) 48vw, 11rem"
                      />
                    </figure>
                  ),
              )}
            </div>
          </section>
        </>
      )}
      {(isArenaX || isMarcai || isGymTracker) &&
        project.story?.map((section, index) => {
          const media = desktopMedia[index + 1];
          const isResponsive = index === project.story!.length - 1;
          return (
            <section key={section.label} className={styles.section} data-reveal>
              <p className="eyebrow">{section.label}</p>
              {section.title && <h2>{section.title}</h2>}
              <p className="project-copy">{section.body}</p>
              {isResponsive ? (
                <div className={styles.mobileGallery}>
                  {mobileMedia.map((item) => (
                    <figure key={item.label}>
                      <Image
                        src={item.src!}
                        alt={item.alt}
                        width={500}
                        height={900}
                        sizes="(max-width: 48rem) 48vw, 11rem"
                      />
                    </figure>
                  ))}
                </div>
              ) : (
                media?.src && (
                  <figure className={styles.mediaImage}>
                    <Image
                      src={media.src}
                      alt={media.alt}
                      width={1920}
                      height={1080}
                      sizes="(max-width: 48rem) 100vw, 46rem"
                    />
                  </figure>
                )
              )}
            </section>
          );
        })}
      {!isCantinho && !isArenaX && !isMarcai && !isGymTracker && (
        <section className={styles.section} data-reveal>
          <p className="project-copy">{text.noDetails}</p>
        </section>
      )}
      <section className={styles.section} data-reveal>
        <p className="eyebrow">{text.technologies}</p>
        <div className={styles.tags}>
          {project.technologies.map((technology) => (
            <span key={technology}>{technology}</span>
          ))}
        </div>
      </section>
      {project.gallery.length > 0 &&
        !isArenaX &&
        !isCantinho &&
        !isMarcai &&
        !isGymTracker && (
          <section className={styles.section} data-reveal>
            <p className="eyebrow">{text.media}</p>
            <div className={styles.gallery}>
              {project.gallery.map((media) => (
                <div
                  key={media.label}
                  className={styles.mediaSlot}
                  aria-label={media.alt}
                >
                  <span>{text.pending}</span>
                  <strong>{media.label}</strong>
                </div>
              ))}
              <div className={`${styles.mediaSlot} ${styles.mobileSlot}`}>
                <span>{text.pending}</span>
                <strong>{text.responsive}</strong>
              </div>
            </div>
          </section>
        )}
      <section className={styles.section} data-reveal>
        <p className="eyebrow">{text.links}</p>
        <a
          className="button button--secondary"
          href={project.repositoryUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          {isArenaX || isMarcai || isGymTracker ? text.github : text.repository}{" "}
          <span aria-hidden="true">↗</span>
        </a>
      </section>
    </main>
  );
}
