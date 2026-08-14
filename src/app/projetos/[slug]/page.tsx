import { notFound } from "next/navigation";
export function generateStaticParams() {
  return [{ slug: "projeto-exemplo" }];
}
export default async function CaseStudy({ params }: PageProps<"/projetos/[slug]">) {
  const { slug } = await params;
  if (slug !== "projeto-exemplo") notFound();
  return (
    <main className="container" style={{ paddingBlock: "var(--space-3xl)" }}>
      <p>Case study placeholder</p>
      <h1>Projeto exemplo</h1>
      <p>
        Descrição, problema, solução, tecnologias, imagens e links serão inseridos com
        conteúdo real.
      </p>
      <h2>Problema</h2>
      <p>Placeholder.</p>
      <h2>Solução</h2>
      <p>Placeholder.</p>
      <h2>Tecnologias</h2>
      <p>Exemplo: React, JavaScript.</p>
      <p>GitHub e demo: links a definir.</p>
    </main>
  );
}
