import { MetadataRoute } from "next";
import { PROJECTS, CONSTANTS } from "@/constants";
import { routing } from "@/i18n/routing";

const { baseUrl } = CONSTANTS;
const { locales } = routing;

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    routes.push({
      url: `${baseUrl}/${locale}`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
      images: [`${baseUrl}/og-image.webp`],
      alternates: {
        languages: {
          en: `${baseUrl}/en`,
          ar: `${baseUrl}/ar`,
        },
      },
    });

    for (const project of PROJECTS) {
      const slug = project.title.toLowerCase().replace(/\s+/g, "-");
      const images = project.gallery.map((img) => `${baseUrl}${img}`);

      routes.push({
        url: `${baseUrl}/${locale}/projects/${slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.5,
        images,
        alternates: {
          languages: {
            en: `${baseUrl}/en/projects/${slug}`,
            ar: `${baseUrl}/ar/projects/${slug}`,
          },
        },
      });
    }
  }

  return routes;
}
