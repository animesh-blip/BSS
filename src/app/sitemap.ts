import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://balsansarindia.com";

  const routes = [
    "",
    "/about",
    "/projects",
    "/projects/bsps",
    "/projects/sedi",
    "/projects/taiyari",
    "/projects/completed",
    "/members",
    "/stories",
    "/gallery",
    "/blog",
    "/donate",
    "/get-involved",
    "/contact",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/donate" ? 0.9 : 0.8,
  }));
}
