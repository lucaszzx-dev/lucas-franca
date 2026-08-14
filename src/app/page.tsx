import { Header } from "@/components/Header/Header";
import { Hero } from "@/sections/Hero";
import { PortfolioSections } from "@/sections/PortfolioSections";

export default function Home() {
  return (
    <>
      <Header />
      <main id="inicio">
        <Hero />
        <PortfolioSections />
      </main>
    </>
  );
}
