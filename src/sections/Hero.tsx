"use client";

import { useRef } from "react";
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
        <div
          className={styles.photo}
          role="img"
          aria-label={hero.photoLabel}
          data-reveal
        >
          {hero.photo.split("\n").map((line, index) => (
            <span key={line}>
              {index > 0 && <br />}
              {line}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
