import { MetadataRoute } from "next";
import { PROJECTS } from "@/constants";

const BASE_URL = "https://ahmednasser-portfolio.vercel.app";

const locales = ["en", "ar"];

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: MetadataRoute.Sitemap = [];

  locales.forEach((locale) => {
    // Home page
    routes.push({
      url: `${BASE_URL}/${locale}`,
      lastModified: new Date(),
      alternates: {
        languages: {
          en: `${BASE_URL}/en`,
          ar: `${BASE_URL}/ar`,
        },
      },
    });

    // Projects pages
    PROJECTS.forEach((project) => {
      const slug = project.title.toLowerCase().replace(/\s+/g, "-");

      routes.push({
        url: `${BASE_URL}/${locale}/projects/${slug}`,
        lastModified: new Date(),
        alternates: {
          languages: {
            en: `${BASE_URL}/en/projects/${slug}`,
            ar: `${BASE_URL}/ar/projects/${slug}`,
          },
        },
      });
    });
  });

  return routes;
}
