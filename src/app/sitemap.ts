import { MetadataRoute } from "next";
const BASE = "https://usapvf-new.vercel.app";
const industries = ["oil-gas","petrochemical","power-generation","waterworks","chemical-processing","mining","pulp-paper","food-beverage","agriculture","hvac","marine","data-centers"];
const blogSlugs = ["baa-baba-ais-the-domestic-content-rules-engineers-need-to-know","domestic-melt-vs-domestic-manufacture-why-the-distinction-matters","api-6a-flanges-a-practical-spec-guide-for-pipeline-and-wellhead-service"];
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const routes = ["","/about","/contact","/privacy-policy","/products","/products/flanges","/products/fittings","/products/valves","/products/custom-machining","/standards","/standards/asme-flanges","/standards/api-flanges","/standards/awwa-flanges","/standards/din-flanges","/compliance","/compliance/baa","/compliance/baba","/compliance/ais","/materials","/materials/carbon-steel","/materials/stainless-steel","/materials/alloy-steel","/materials/exotic-alloys","/industries","/resources","/resources/flange-dimensions","/resources/mtr-documentation","/resources/cad-drawings","/resources/technical-specs","/tools","/tools/bolt-torque-calculator","/tools/flange-dimension-calculator","/tools/pressure-temperature-rating","/blog"];
  return [
    ...routes.map((r) => ({ url: `${BASE}${r}`, lastModified, changeFrequency: "weekly" as const, priority: r === "" ? 1 : 0.7 })),
    ...industries.map((slug) => ({ url: `${BASE}/industries/${slug}`, lastModified, changeFrequency: "monthly" as const, priority: 0.6 })),
    ...blogSlugs.map((slug) => ({ url: `${BASE}/blog/${slug}`, lastModified, changeFrequency: "monthly" as const, priority: 0.6 }))
  ];
}
