import type { MetadataRoute } from "next";

const BASE_URL = "https://greenworx.co.nz";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE_URL,                              lastModified: now, changeFrequency: "weekly",  priority: 1.0 },
    { url: `${BASE_URL}/about`,                   lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/our-work`,                lastModified: now, changeFrequency: "weekly",  priority: 0.8 },
    { url: `${BASE_URL}/contact`,                 lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/work-with-us`,            lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/privacy`,                 lastModified: now, changeFrequency: "yearly",  priority: 0.3 },

    // Services listing
    { url: `${BASE_URL}/services`,                lastModified: now, changeFrequency: "monthly", priority: 0.8 },

    // Individual service pages
    { url: `${BASE_URL}/services/landscape-design`,          lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/services/retaining-walls`,           lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/services/garden-maintenance`,        lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/services/lawns-turf`,                lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/services/decking`,                   lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/services/paving-hardscaping`,        lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/services/planting-soft-landscaping`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/services/commercial`,                lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/services/multi-unit-developments`,   lastModified: now, changeFrequency: "monthly", priority: 0.7 },

    // Service areas listing
    { url: `${BASE_URL}/service-areas`,           lastModified: now, changeFrequency: "monthly", priority: 0.7 },

    // Individual suburb pages
    { url: `${BASE_URL}/service-areas/remuera`,   lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/service-areas/st-heliers`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/service-areas/glendowie`,  lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/service-areas/kohimarama`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/service-areas/mission-bay`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/service-areas/orakei`,     lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/service-areas/meadowbank`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/service-areas/epsom`,        lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/service-areas/parnell`,      lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/service-areas/herne-bay`,    lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/service-areas/pt-chevalier`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/service-areas/ellerslie`,    lastModified: now, changeFrequency: "monthly", priority: 0.6 },
  ];

  return staticPages;
}
