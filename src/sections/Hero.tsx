import styles from "./sections.module.css";

export function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <div className="container">
        <p className={styles.eyebrow}>Disponível para novas conexões</p>
        <div className={styles.heroGrid}>
          <div>
            <h1 id="hero-title">
              Lucas
              <br />
              França<span>.</span>
            </h1>
            <p className={styles.role}>Front-end Developer</p>
          </div>
          <div className={styles.intro}>
            <p>
              Desenvolvedor front-end focado em transformar ideias em experiências
              digitais modernas, funcionais e bem construídas.
            </p>
            <a className="button button--primary" href="#trabalhos">
              Ver trabalhos
            </a>
          </div>
        </div>
        <div
          className={styles.photo}
          role="img"
          aria-label="Placeholder temporário para foto de Lucas França"
        >
          Foto temporária
          <br />a definir
        </div>
      </div>
    </section>
  );
}
