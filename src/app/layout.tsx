import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  fallback: ["system-ui", "sans-serif"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: {
    default: "Lucas França | Front-end Developer",
    template: "%s | Lucas França",
  },
  description:
    "Portfólio de Lucas França, desenvolvedor front-end em evolução para full-stack.",
  openGraph: {
    title: "Lucas França | Front-end Developer",
    description: "Portfólio pessoal em construção.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={spaceGrotesk.variable}>
      <body>{children}</body>
    </html>
  );
}
