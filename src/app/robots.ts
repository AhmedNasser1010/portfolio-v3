import { MetadataRoute } from "next";
import { CONSTANTS } from "@/constants";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: `${CONSTANTS.baseUrl}/sitemap.xml`,
  };
}
