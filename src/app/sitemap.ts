import type { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://lucaszzx-dev.github.io/lucas-franca", lastModified: new Date() },
    {
      url: "https://lucaszzx-dev.github.io/lucas-franca/projetos/projeto-exemplo",
      lastModified: new Date(),
    },
  ];
}
