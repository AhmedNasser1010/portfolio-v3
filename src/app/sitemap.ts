import { MetadataRoute } from "next";
import { PROJECTS, CONSTANTS } from "@/constants";

const { baseUrl } = CONSTANTS;

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: MetadataRoute.Sitemap = [];

  // Home
  routes.push({
    url: `${baseUrl}/en`,
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

  // Projects
  PROJECTS.forEach((project) => {
    const slug = project.title.toLowerCase().replace(/\s+/g, "-");
    const images = project.gallery.map((img) => `${baseUrl}${img}`);

    routes.push({
      url: `${baseUrl}/en/projects/${slug}`,
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
  });

  return routes;
}
