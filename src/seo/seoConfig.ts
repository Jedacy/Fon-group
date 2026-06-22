import logoUrl from "../assets/optimized/Logo.webp";
import heroUrl from "../assets/optimized/Heroes/Hero1.webp";
import { newsItems } from "../components/News/newsData";
import { getTeamMemberBySlug } from "../components/MeetTheTeam/teamData";

const SITE_URL = "https://fon-group.pages.dev";
const SITE_NAME = "The FON Group";
const DEFAULT_IMAGE = `${SITE_URL}${heroUrl}`;
const LOGO_IMAGE = `${SITE_URL}${logoUrl}`;

type SeoEntry = {
  title: string;
  description: string;
  image?: string;
  schema?: Record<string, unknown> | Record<string, unknown>[];
};

const staticSeo: Record<string, SeoEntry> = {
  "/": {
    title: "FON Group | Ghanaian Paper, Tissue & Packaging Manufacturers",
    description:
      "FON Group is a Ghanaian-owned manufacturing group producing tissue, paper, corrugated packaging, commercial printing and packaging solutions since 1984.",
  },
  "/who-we-are": {
    title: "Who We Are | FON Group Ghana",
    description:
      "Meet FON Group, a Ghanaian-owned group of companies advancing paper, tissue, packaging and manufacturing excellence across West Africa.",
  },
  "/our-story": {
    title: "Our Story | FON Group Since 1984",
    description:
      "Trace FON Group's journey from paper trading in 1984 to a diversified Ghanaian manufacturing group in tissue, packaging and printing.",
  },
  "/meet-the-team": {
    title: "Meet The Team | FON Group Leadership",
    description:
      "Meet the founders and management team leading FON Group's tissue, paper, packaging, printing and property businesses in Ghana.",
  },
  "/the-group": {
    title: "The Group | FON LTD, FON Packaging, FONSTAT & More",
    description:
      "Explore FON Group companies including FON LTD, FON Packaging, FONSTAT, Chop Time Brands and Oasis Properties in Ghana.",
  },
  "/partners": {
    title: "Global Partners | FON Group Manufacturing Network",
    description:
      "FON Group works with global paper, packaging, machinery and industrial supply partners including Valmet, Bobst, Heidelberg and more.",
  },
  "/news": {
    title: "News | FON Group Updates, Media & Manufacturing Stories",
    description:
      "Read FON Group news, media coverage, community updates, awards and manufacturing stories from Ghana and West Africa.",
  },
  "/gallery": {
    title: "Gallery | FON Group Videos & Media",
    description:
      "Watch FON Group videos and media features covering manufacturing, packaging, paper products and company milestones in Ghana.",
  },
  "/awards": {
    title: "Awards | FON Group Manufacturing Recognition",
    description:
      "View awards and recognition earned by FON Group, FON LTD, FONTISSUE and FON Packaging for tissue and packaging excellence.",
  },
  "/oasis": {
    title: "Oasis Properties | FON Group Accommodation & Properties",
    description:
      "Explore Oasis Properties by FON Group, including Oasis Lodge, residences and commercial property options in Accra, Ghana.",
  },
  "/contact": {
    title: "Contact FON Group | Ghana Manufacturing & Business Enquiries",
    description:
      "Contact FON Group companies in Ghana for tissue, paper, packaging, printing, property and business enquiries.",
  },
};

function absoluteUrl(pathname: string) {
  return `${SITE_URL}${pathname === "/" ? "" : pathname}`;
}

function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    logo: LOGO_IMAGE,
    foundingDate: "1984",
    description:
      "A Ghanaian-owned group of companies advancing paper, tissue, packaging, printing, food packaging and property operations across Ghana and West Africa.",
    sameAs: [
      "https://www.linkedin.com/company/thefongroup/posts/?feedView=all",
      "https://www.instagram.com/thefongroup?igsh=MWJkdGgzdzBiZTFlaA==",
      "https://fonltd.com/",
      "https://fonpackaging.com/",
      "https://fonstat.com/",
    ],
  };
}

function breadcrumbSchema(pathname: string, title: string) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: title.split("|")[0].trim(),
        item: absoluteUrl(pathname),
      },
    ],
  };
}

function contactSchema() {
  return [
    organizationSchema(),
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "FON LTD",
      telephone: "+233302235053",
      email: "info@fontd.com",
      address: "Paper House, Alajo, Accra, Ghana; Factory: Spintex Road, Accra, Ghana",
      parentOrganization: { "@type": "Organization", name: SITE_NAME },
      areaServed: ["Ghana", "West Africa"],
    },
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "FON Packaging",
      telephone: "+233302814812",
      email: "info@fonpackaging.com",
      address: "Spintex Rd, Accra, Ghana",
      parentOrganization: { "@type": "Organization", name: SITE_NAME },
      areaServed: ["Ghana", "West Africa"],
    },
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "FONSTAT",
      telephone: "+233302231794",
      email: "info@fonstat.com",
      address: "Fadama St, Accra, Ghana",
      parentOrganization: { "@type": "Organization", name: SITE_NAME },
      areaServed: ["Ghana", "West Africa"],
    },
  ];
}

function articleSeo(slug: string): SeoEntry | undefined {
  const article = newsItems.find((item) => item.slug === slug);

  if (!article) {
    return undefined;
  }

  const pathname = `/news/${article.slug}`;
  const image = `${SITE_URL}${article.image}`;

  return {
    title: `${article.title} | FON Group News`,
    description: article.excerpt[0],
    image,
    schema: {
      "@context": "https://schema.org",
      "@type": "NewsArticle",
      headline: article.title,
      description: article.excerpt[0],
      image,
      datePublished: article.date,
      author: {
        "@type": "Organization",
        name: article.author,
      },
      publisher: {
        "@type": "Organization",
        name: SITE_NAME,
        logo: {
          "@type": "ImageObject",
          url: LOGO_IMAGE,
        },
      },
      mainEntityOfPage: absoluteUrl(pathname),
      citation: article.externalUrl,
    },
  };
}

function teamSeo(slug: string): SeoEntry | undefined {
  const member = getTeamMemberBySlug(slug);

  if (!member) {
    return undefined;
  }

  return {
    title: `${member.name} | ${member.profileRole} at FON Group`,
    description: `Learn about ${member.name}, ${member.profileRole} ${member.company ? `at ${member.company}` : "at FON Group"}, and their leadership role in Ghanaian manufacturing and business growth.`,
    image: `${SITE_URL}${member.image}`,
    schema: {
      "@context": "https://schema.org",
      "@type": "Person",
      name: member.name,
      jobTitle: member.profileRole,
      worksFor: {
        "@type": "Organization",
        name: member.company ?? SITE_NAME,
      },
      image: `${SITE_URL}${member.image}`,
      sameAs: member.linkedInUrl ? [member.linkedInUrl] : undefined,
    },
  };
}

export function getSeoForPath(pathname: string): SeoEntry & { canonical: string; image: string } {
  const normalizedPath = pathname.replace(/\/$/, "") || "/";
  const newsMatch = normalizedPath.match(/^\/news\/([^/]+)$/);
  const teamMatch = normalizedPath.match(/^\/meet-the-team\/([^/]+)$/);

  const dynamicSeo =
    newsMatch?.[1] ? articleSeo(newsMatch[1]) : teamMatch?.[1] ? teamSeo(teamMatch[1]) : undefined;
  const baseSeo = dynamicSeo ?? staticSeo[normalizedPath] ?? staticSeo["/"];
  const canonical = absoluteUrl(normalizedPath);
  const schema = [
    ...(normalizedPath === "/" ? [organizationSchema()] : []),
    ...(normalizedPath === "/contact" ? contactSchema() : []),
    breadcrumbSchema(normalizedPath, baseSeo.title),
    ...(Array.isArray(baseSeo.schema) ? baseSeo.schema : baseSeo.schema ? [baseSeo.schema] : []),
  ];

  return {
    ...baseSeo,
    canonical,
    image: baseSeo.image ?? DEFAULT_IMAGE,
    schema,
  };
}
