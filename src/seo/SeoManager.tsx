import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getSeoForPath } from "./seoConfig";

function upsertMeta(selector: string, attributes: Record<string, string>) {
  let element = document.head.querySelector<HTMLMetaElement>(selector);

  if (!element) {
    element = document.createElement("meta");
    document.head.appendChild(element);
  }

  Object.entries(attributes).forEach(([key, value]) => element?.setAttribute(key, value));
}

function upsertLink(selector: string, attributes: Record<string, string>) {
  let element = document.head.querySelector<HTMLLinkElement>(selector);

  if (!element) {
    element = document.createElement("link");
    document.head.appendChild(element);
  }

  Object.entries(attributes).forEach(([key, value]) => element?.setAttribute(key, value));
}

function SeoManager() {
  const { pathname } = useLocation();

  useEffect(() => {
    const seo = getSeoForPath(pathname);
    const schemaId = "site-json-ld";

    document.title = seo.title;
    upsertMeta('meta[name="description"]', { name: "description", content: seo.description });
    upsertMeta('meta[name="robots"]', { name: "robots", content: "index, follow" });
    upsertMeta('meta[property="og:site_name"]', { property: "og:site_name", content: "The FON Group" });
    upsertMeta('meta[property="og:type"]', { property: "og:type", content: pathname.startsWith("/news/") ? "article" : "website" });
    upsertMeta('meta[property="og:title"]', { property: "og:title", content: seo.title });
    upsertMeta('meta[property="og:description"]', { property: "og:description", content: seo.description });
    upsertMeta('meta[property="og:url"]', { property: "og:url", content: seo.canonical });
    upsertMeta('meta[property="og:image"]', { property: "og:image", content: seo.image });
    upsertMeta('meta[name="twitter:card"]', { name: "twitter:card", content: "summary_large_image" });
    upsertMeta('meta[name="twitter:title"]', { name: "twitter:title", content: seo.title });
    upsertMeta('meta[name="twitter:description"]', { name: "twitter:description", content: seo.description });
    upsertMeta('meta[name="twitter:image"]', { name: "twitter:image", content: seo.image });
    upsertLink('link[rel="canonical"]', { rel: "canonical", href: seo.canonical });

    document.getElementById(schemaId)?.remove();

    const schemaScript = document.createElement("script");
    schemaScript.id = schemaId;
    schemaScript.type = "application/ld+json";
    schemaScript.textContent = JSON.stringify(seo.schema);
    document.head.appendChild(schemaScript);
  }, [pathname]);

  return null;
}

export default SeoManager;
