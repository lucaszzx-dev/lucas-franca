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
          <div>
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
            <p>{hero.description}</p>
            <a className="button button--primary" href="#trabalhos">
              {hero.action}
            </a>
          </div>
        </div>
        <div className={styles.photo} data-reveal>
          <Image
            src="/images/lucas-franca.jpg"
            alt={hero.photoLabel}
            width={1242}
            height={1656}
            priority
            sizes="(max-width: 47.99rem) 100vw, 40rem"
          />
          <span aria-hidden="true">LF</span>
        </div>
      </div>
    </section>
  );
}
