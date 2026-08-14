import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Lucas França | Front-end Developer",
    template: "%s | Lucas França",
  },
  description:
    "Portfólio de Lucas França, desenvolvedor front-end em evolução para full-stack.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
