import Link from "next/link";
import styles from "./sections.module.css";

const works = ["Projeto exemplo 01", "Projeto exemplo 02", "Projeto exemplo 03"];

export function PortfolioSections() {
  return (
    <>
      <section id="trabalhos" className={styles.section}>
        <div className="container">
          <p className={styles.eyebrow}>Selected works</p>
          <h2>Projetos em destaque</h2>
          <div className={styles.cards}>
            {works.map((title) => (
              <article key={title} className={styles.card}>
                <p className={styles.notice}>Placeholder — dados fictícios</p>
                <h3>{title}</h3>
                <p>
                  Descrição de exemplo para validar a estrutura dos futuros projetos
                  reais.
                </p>
                <small>React · JavaScript · Exemplo</small>
                <Link className="text-link" href="/projetos/projeto-exemplo">
                  Ver case study
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section id="sobre" className={styles.section}>
        <div className="container">
          <p className={styles.eyebrow}>Sobre</p>
          <h2>Em evolução constante.</h2>
          <p className={styles.copy}>
            Rascunho: desenvolvedor front-end evoluindo para full-stack, interessado em
            unir código, interface e experiência do usuário.
          </p>
        </div>
      </section>
      <section id="stack" className={styles.section}>
        <div className="container">
          <p className={styles.eyebrow}>Stack</p>
          <h2>Ferramentas do caminho.</h2>
          <div className={styles.tags}>
            <span>React</span>
            <span>JavaScript</span>
            <span>Node.js</span>
            <span>PostgreSQL</span>
            <span>TypeScript — em aprendizado</span>
          </div>
        </div>
      </section>
      <section id="experiencia" className={styles.section}>
        <div className="container">
          <p className={styles.eyebrow}>Serviços & experiência</p>
          <h2>Estrutura em construção.</h2>
          <p className={styles.copy}>
            Placeholder: serviços, experiências e colaborações reais serão adicionados
            aqui.
          </p>
        </div>
      </section>
      <section id="contato" className={styles.section}>
        <div className="container">
          <p className={styles.eyebrow}>Contato</p>
          <h2>Vamos construir algo com intenção.</h2>
          <p className={styles.copy}>
            E-mail: contato@exemplo.com · GitHub e LinkedIn: links a definir.
          </p>
        </div>
      </section>
      <footer className={styles.footer}>
        <div className="container">
          © {new Date().getFullYear()} Lucas França — conteúdo em construção.
        </div>
      </footer>
    </>
  );
}
