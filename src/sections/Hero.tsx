"use client";

import { useRef } from "react";
import Image from "next/image";
import { useMotion } from "@/animations/useMotion";
import { useLocale } from "@/components/LocaleProvider";
import styles from "./sections.module.css";

export function Hero() {
  const { content } = useLocale();
  const ref = useRef<HTMLElement>(null);
  useMotion(ref, { hero: true });
  const { hero } = content;
  return (
    <section ref={ref} className={styles.hero} aria-labelledby="hero-title">
      <div className="container">
        <p className={styles.eyebrow} data-reveal>
          {hero.availability}
        </p>
        <div className={styles.heroGrid}>
          <div className={styles.heroTitle}>
            <div className={styles.heroIdentity} data-reveal>
              <Image
                src="/images/lucas-franca.jpg"
                alt={hero.photoLabel}
                width={96}
                height={96}
                priority
                sizes="4rem"
              />
              <span>{hero.availability}</span>
            </div>
            <h1 id="hero-title" data-text-reveal>
              {hero.name[0]}
              <br />
              {hero.name[1]}
              <span>.</span>
            </h1>
            <p className={styles.role} data-reveal>
              {hero.role}
            </p>
          </div>
          <div className={styles.intro} data-reveal>
            <span className={styles.heroKicker}>
              {hero.kicker[0]}
              <br />
              {hero.kicker[1]}
            </span>
            <p>{hero.description}</p>
            <a className="button button--primary" href="#trabalhos">
              {hero.action}
            </a>
          </div>
        </div>
        <div className={styles.heroRule} aria-hidden="true">
          <span>{hero.signature[0]}</span>
          <strong>{hero.signature[1]}</strong>
          <i>LF / 2026</i>
        </div>
      </div>
    </section>
  );
}
