"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { useMotion } from "@/animations/useMotion";
import { useLocale } from "@/components/LocaleProvider";
import { getProjects, getProject } from "@/content/projects";
import styles from "./project.module.css";

const labels = {
  "pt-BR": {
    back: "Voltar para os trabalhos",
    overview: "Visão geral",
    problem: "Problema",
    solution: "Solução",
    features: "Principais funcionalidades",
    technologies: "Tecnologias",
    role: "Papel",
    status: "Status",
    repository: "Repositório",
    nextProject: "Próximo projeto",
    viewRepository: "Ver repositório",
    allProjects: "Ver todos os projetos",
    experience: "Experiência do cliente",
    admin: "Painel administrativo",
    responsive: "Responsividade",
    cantinhoExperience:
      "O fluxo reúne catálogo, visualização de produtos, personalização do açaí, carrinho, entrega, pagamento e finalização pelo WhatsApp.",
    cantinhoAdmin:
      "A área administrativa concentra autenticação e a gestão de pedidos, produtos, variantes, adicionais, categorias, configurações da loja e formas de pagamento.",
    cantinhoResponsive:
      "As telas móveis preservam os fluxos essenciais de montagem, cardápio, checkout e gestão, com leitura confortável em telas menores.",
  },
  en: {
    back: "Back to work",
    overview: "Overview",
    problem: "Problem",
    solution: "Solution",
    features: "Key features",
    technologies: "Technologies",
    role: "Role",
    status: "Status",
    repository: "Repository",
    nextProject: "Next project",
    viewRepository: "View repository",
    allProjects: "View all projects",
    experience: "Customer experience",
    admin: "Admin dashboard",
    responsive: "Responsiveness",
    cantinhoExperience:
      "The flow brings together catalog browsing, product views, açaí customization, cart, delivery, payment and WhatsApp completion.",
    cantinhoAdmin:
      "The administrative area centralizes authentication and the management of orders, products, variants, add-ons, categories, store settings and payment methods.",
    cantinhoResponsive:
      "Mobile screens preserve the essential building, menu, checkout and management flows with comfortable reading on smaller displays.",
  },
} as const;

function CaseImage({
  src,
  alt,
  priority = false,
}: {
  src: string;
  alt: string;
  priority?: boolean;
}) {
  return (
    <Image
      src={src}
      alt={alt}
      width={1920}
      height={1080}
      priority={priority}
      sizes="(max-width: 47.99rem) 100vw, (max-width: 75rem) 88vw, 72rem"
    />
  );
}

export function ProjectCaseStudy({ slug }: { slug: string }) {
  const { locale } = useLocale();
  const project = getProject(locale, slug);
  const ref = useRef<HTMLElement>(null);
  useMotion(ref);
  if (!project) return null;

  const text = labels[locale];
  const projects = getProjects(locale);
  const projectIndex = projects.findIndex((item) => item.slug === project.slug);
  const nextProject = projects[(projectIndex + 1) % projects.length];
  const isCantinho = project.slug === "cantinho-do-acai";
  const desktopMedia = project.gallery.filter(
    (media) => media.layout === "wide" && media.src,
  );
  const mobileMedia = project.gallery.filter(
    (media) => media.layout === "mobile" && media.src,
  );
  const cover = desktopMedia[0];

  return (
    <main ref={ref} className={`container ${styles.caseStudy}`}>
      <Link className={`${styles.backLink} text-link`} href="/#trabalhos">
        ← {text.back}
      </Link>
      <header className={styles.hero} data-reveal>
        <p className={styles.caseNumber}>0{projectIndex + 1}</p>
        <p className="eyebrow">{project.status}</p>
        <h1 data-text-reveal>{project.title}</h1>
        <p className={styles.lede}>{project.description}</p>
        <dl className={styles.metadata} data-reveal>
          <div>
            <dt>{text.role}</dt>
            <dd>{project.role}</dd>
          </div>
          <div>
            <dt>{text.status}</dt>
            <dd>{project.status}</dd>
          </div>
          <div>
            <dt>{text.technologies}</dt>
            <dd>{project.technologies.join(" · ")}</dd>
          </div>
          <div>
            <dt>{text.repository}</dt>
            <dd>
              <a href={project.repositoryUrl} target="_blank" rel="noopener noreferrer">
                GitHub ↗
              </a>
            </dd>
          </div>
        </dl>
      </header>
      {cover ? (
        <figure className={styles.coverImage} data-reveal>
          <CaseImage src={cover.src!} alt={cover.alt} priority />
        </figure>
      ) : null}
      <section className={`${styles.section} ${styles.introSection}`} data-reveal>
        <p className="eyebrow">{text.overview}</p>
        <p className={styles.introCopy}>{project.shortDescription}</p>
      </section>
      <section className={`${styles.section} ${styles.problemSolution}`} data-reveal>
        <div>
          <p className="eyebrow">{text.problem}</p>
          <p>{project.problem}</p>
        </div>
        <div>
          <p className="eyebrow">{text.solution}</p>
          <p>{project.solution}</p>
        </div>
      </section>
      {project.highlights ? (
        <section className={`${styles.section} ${styles.features}`} data-reveal>
          <p className="eyebrow">{text.features}</p>
          <ul>
            {project.highlights.map((item, index) => (
              <li key={item}>
                <span>0{index + 1}</span>
                {item}
              </li>
            ))}
          </ul>
        </section>
      ) : null}
      {isCantinho ? (
        <CantinhoNarrative
          desktopMedia={desktopMedia}
          mobileMedia={mobileMedia}
          text={text}
          solution={project.solution ?? ""}
        />
      ) : (
        project.story?.map((section, index) => {
          const media = desktopMedia[index + 1];
          const isResponsive = index === project.story!.length - 1;
          if (isResponsive)
            return (
              <MobileGallery
                key={section.label}
                media={mobileMedia}
                label={section.label}
                body={section.body}
              />
            );
          return (
            <section
              key={section.label}
              className={`${styles.section} ${styles.featureStory} ${index % 2 ? styles.reverse : ""}`}
              data-reveal
            >
              <div className={styles.storyCopy}>
                <p className="eyebrow">{section.label}</p>
                {section.title ? <h2>{section.title}</h2> : null}
                <p>{section.body}</p>
              </div>
              {media ? (
                <figure className={styles.mediaImage}>
                  <CaseImage src={media.src!} alt={media.alt} />
                </figure>
              ) : null}
            </section>
          );
        })
      )}
      <footer className={styles.caseFooter} data-reveal>
        <a
          className="button button--secondary"
          href={project.repositoryUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          {text.viewRepository} <span aria-hidden="true">↗</span>
        </a>
        <div>
          <p className="eyebrow">{text.nextProject}</p>
          <Link href={`/projetos/${nextProject.slug}`}>{nextProject.title} ↗</Link>
        </div>
        <Link className="text-link" href="/#trabalhos">
          {text.allProjects} →
        </Link>
      </footer>
    </main>
  );
}

type CaseText = (typeof labels)[keyof typeof labels];
type Media = { label: string; alt: string; src?: string };

function CantinhoNarrative({
  desktopMedia,
  mobileMedia,
  text,
  solution,
}: {
  desktopMedia: Media[];
  mobileMedia: Media[];
  text: CaseText;
  solution: string;
}) {
  return (
    <>
      {desktopMedia[1] ? (
        <section className={`${styles.section} ${styles.featureStory}`} data-reveal>
          <div className={styles.storyCopy}>
            <p className="eyebrow">{desktopMedia[1].label}</p>
            <p>{solution}</p>
          </div>
          <figure className={styles.mediaImage}>
            <CaseImage src={desktopMedia[1].src!} alt={desktopMedia[1].alt} />
          </figure>
        </section>
      ) : null}
      {desktopMedia[2] && desktopMedia[3] ? (
        <section className={`${styles.section} ${styles.mediaPair}`} data-reveal>
          {[desktopMedia[2], desktopMedia[3]].map((media) => (
            <figure key={media.label}>
              <CaseImage src={media.src!} alt={media.alt} />
              <figcaption>{media.label}</figcaption>
            </figure>
          ))}
        </section>
      ) : null}
      {desktopMedia[4] ? (
        <section
          className={`${styles.section} ${styles.featureStory} ${styles.reverse}`}
          data-reveal
        >
          <figure className={styles.mediaImage}>
            <CaseImage src={desktopMedia[4].src!} alt={desktopMedia[4].alt} />
          </figure>
          <div className={styles.storyCopy}>
            <p className="eyebrow">{text.experience}</p>
            <p>{text.cantinhoExperience}</p>
          </div>
        </section>
      ) : null}
      {desktopMedia[5] ? (
        <section className={`${styles.section} ${styles.fullStory}`} data-reveal>
          <div className={styles.storyCopy}>
            <p className="eyebrow">{text.admin}</p>
            <p>{text.cantinhoAdmin}</p>
          </div>
          <figure className={styles.mediaImage}>
            <CaseImage src={desktopMedia[5].src!} alt={desktopMedia[5].alt} />
          </figure>
        </section>
      ) : null}
      <MobileGallery
        media={mobileMedia}
        label={text.responsive}
        body={text.cantinhoResponsive}
      />
    </>
  );
}

function MobileGallery({
  media,
  label,
  body,
}: {
  media: Media[];
  label: string;
  body: string;
}) {
  if (!media.length) return null;
  return (
    <section className={`${styles.section} ${styles.mobileSection}`} data-reveal>
      <div className={styles.storyCopy}>
        <p className="eyebrow">{label}</p>
        <p>{body}</p>
      </div>
      <div className={styles.mobileGallery}>
        {media.map((item) => (
          <figure key={item.label}>
            <Image
              src={item.src!}
              alt={item.alt}
              width={500}
              height={900}
              sizes="(max-width: 47.99rem) 78vw, (max-width: 75rem) 38vw, 17rem"
            />
          </figure>
        ))}
      </div>
    </section>
  );
}
