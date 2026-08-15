"use client";

import { useRef } from "react";
import Image from "next/image";
import { useMotion } from "@/animations/useMotion";
import { useLocale } from "@/components/LocaleProvider";
import styles from "./sections.module.css";

export function Hero() {
  const { content, locale } = useLocale();
  const ref = useRef<HTMLElement>(null);
  useMotion(ref, { hero: true });
  const { hero } = content;
  return (
    <section ref={ref} className={styles.hero} aria-labelledby="hero-title">
      <div className="container">
        <div className={styles.heroGrid}>
          <aside className={styles.heroIdentity} data-hero-intro>
            <a
              className={styles.heroPortrait}
              href="#sobre"
              aria-label={
                locale === "pt-BR" ? "Ir para a seção Sobre" : "Go to the About section"
              }
            >
              <Image
                src="/images/lucas-franca.jpg"
                alt={hero.photoLabel}
                fill
                preload
                sizes="56px"
              />
            </a>
            <p>
              <span>{hero.introduction[0]}</span>
              <strong>{hero.introduction[1]}</strong>
              <strong>{hero.introduction[2]}</strong>
            </p>
          </aside>
          <div className={styles.heroMain}>
            <p className={styles.heroStatus} data-hero-intro>
              {hero.availability}
            </p>
            <h1 id="hero-title" data-hero-headline>
              Front-end
              <br />
              Developer<span>.</span>
            </h1>
            <p className={styles.heroDescription} data-hero-headline>
              {hero.shortDescription}
            </p>
            <a className={styles.heroCta} href="#trabalhos" data-hero-cta>
              {hero.action}
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
