import type { MetadataRoute } from "next";

import { SITE_INFO } from "@/config/site";

// Generate sitemap for current site pages only (no blog).
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  // Public routes to include in the sitemap
  const routes = ["", "/projects"].map((route) => ({
    url: `${SITE_INFO.url}${route}`,
    lastModified: now,
  }));

  return routes;
}
