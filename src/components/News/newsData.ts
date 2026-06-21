export type NewsBodySection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

export type NewsItem = {
  id: string;
  slug: string;
  source: string;
  date: string;
  readTime: string;
  title: string;
  excerpt: string[];
  category: string;
  href: string;
  shade: string;
  heroShade: string;
  author: string;
  authorRole: string;
  authorBio: string;
  quote: string;
  bodySections: NewsBodySection[];
};

const defaultAuthor = {
  author: "FON Group Editorial Team",
  authorRole: "Corporate Communications",
  authorBio:
    "Writing on company milestones, manufacturing progress, community impact, and the people shaping the FON Group story.",
};

export const newsItems: NewsItem[] = [
  {
    id: "fon-group-inaugurates-new-factory",
    slug: "fon-group-inaugurates-new-factory",
    source: "Graphic Online",
    date: "Dec 12, 2017",
    readTime: "6 min",
    title: "FON Group inaugurates new Factory",
    excerpt: [
      "A corrugated carton box manufacturing factory has been inaugurated in Accra by FON Packaging Ventures to produce global standard packaging products to feed local manufacturing industries in the country.",
      "The factory is expected to address the issue of poor packaging associated with Ghanaian products.",
      "The Deputy Minister of Trade and Industry said the country would save millions in foreign exchange if it could address the issues of poor packaging.",
    ],
    category: "News",
    href: "/news/fon-group-inaugurates-new-factory",
    shade: "bg-[#d2d2d2]",
    heroShade: "bg-[#cfcfcf]",
    ...defaultAuthor,
    quote: "Manufacturing progress is strongest when local ambition is matched with practical capacity.",
    bodySections: [
      {
        heading: "A new chapter for local packaging",
        paragraphs: [
          "The inauguration of FON Packaging Ventures marked a significant addition to Ghana's local manufacturing infrastructure. The facility was created to serve businesses that need dependable carton packaging made close to home.",
          "For manufacturers, access to quality packaging is more than presentation. It affects logistics, product protection, shelf confidence, and how local goods compete in wider markets.",
        ],
      },
      {
        heading: "Why packaging capacity matters",
        paragraphs: [
          "The factory is expected to help reduce the pressure businesses face when they depend heavily on imported packaging solutions. Building this capacity locally supports faster turnaround, better customization, and a stronger manufacturing ecosystem.",
        ],
        bullets: [
          "Reduced dependence on imported carton packaging",
          "Improved response time for local manufacturers",
          "A stronger supply chain for Ghanaian products",
        ],
      },
      {
        heading: "Built for the long view",
        paragraphs: [
          "FON Group's investment in packaging reflects a broader belief that African manufacturing can be practical, competitive, and durable. The factory stands as a working example of that commitment.",
        ],
      },
    ],
  },
  {
    id: "fon-packaging-graduate-industry-gap",
    slug: "fon-packaging-graduate-industry-gap",
    source: "BFT Online",
    date: "May 22, 2026",
    readTime: "5 min",
    title: "FON Packaging Ventures moves to bridge graduate-industry gap",
    excerpt: [
      "A placeholder news entry for future staff-managed stories about FON Packaging Ventures and industry partnerships.",
    ],
    category: "Blog",
    href: "/news/fon-packaging-graduate-industry-gap",
    shade: "bg-[#bcbcbc]",
    heroShade: "bg-[#c7c7c7]",
    ...defaultAuthor,
    quote: "The strongest talent pipelines are built where classrooms and factories stay in conversation.",
    bodySections: [
      {
        heading: "Connecting learning to industry",
        paragraphs: [
          "This placeholder article represents future staff-managed coverage about how FON Packaging Ventures can support young professionals entering manufacturing and packaging careers.",
          "The story will eventually hold details on training, exposure visits, partnerships, and practical learning opportunities.",
        ],
      },
      {
        heading: "A practical talent bridge",
        paragraphs: [
          "Manufacturing careers become more visible when students can see the machinery, decisions, and standards that shape daily production.",
        ],
        bullets: ["Factory exposure", "Industry mentorship", "Career pathway awareness"],
      },
    ],
  },
  {
    id: "fon-packaging-accra-regional-hospital",
    slug: "fon-packaging-accra-regional-hospital",
    source: "Daily Guide Network",
    date: "April 9, 2020",
    readTime: "4 min",
    title: "Fon Packaging gives to Accra Regional Hospital",
    excerpt: ["A placeholder item for externally sourced coverage and company updates."],
    category: "News",
    href: "/news/fon-packaging-accra-regional-hospital",
    shade: "bg-[#c8c8c8]",
    heroShade: "bg-[#d5d5d5]",
    ...defaultAuthor,
    quote: "Community support is part of the responsibility that comes with building locally.",
    bodySections: [
      {
        heading: "Supporting essential institutions",
        paragraphs: [
          "This article placeholder is reserved for coverage of FON Packaging's support to Accra Regional Hospital.",
          "When the newsroom is connected, this page can hold the full story, images, external source notes, and staff commentary.",
        ],
      },
      {
        heading: "A wider responsibility",
        paragraphs: [
          "The FON Group story includes manufacturing, employment, and community relationships. This entry keeps that broader impact visible until final content is added.",
        ],
      },
    ],
  },
  {
    id: "fon-group-donate-ppe",
    slug: "fon-group-donate-ppe",
    source: "News Ghana",
    date: "June 6, 2020",
    readTime: "5 min",
    title: "FON Group of Companies donate PPE to health institutions",
    excerpt: ["A placeholder story summary for the future news management flow."],
    category: "News",
    href: "/news/fon-group-donate-ppe",
    shade: "bg-[#9f9f9f]",
    heroShade: "bg-[#bababa]",
    ...defaultAuthor,
    quote: "In moments of public need, institutions are remembered for how they show up.",
    bodySections: [
      {
        heading: "Responding to public health needs",
        paragraphs: [
          "This placeholder article represents coverage of FON Group's donation of PPE to health institutions.",
          "The final managed version can include source links, details on beneficiary institutions, and quotes from the teams involved.",
        ],
      },
      {
        heading: "Coordinated group action",
        paragraphs: [
          "The article can later explain how the Group's companies worked together to support practical health and safety needs.",
        ],
        bullets: ["Group-level coordination", "Health institution support", "Community-focused response"],
      },
    ],
  },
  {
    id: "fon-group-award-winners",
    slug: "fon-group-award-winners",
    source: "Graphic Online",
    date: "June 3, 2019",
    readTime: "4 min",
    title: "FON Group among award winners",
    excerpt: ["A placeholder award and media mention entry."],
    category: "Awards",
    href: "/news/fon-group-award-winners",
    shade: "bg-[#a8a8a8]",
    heroShade: "bg-[#c2c2c2]",
    ...defaultAuthor,
    quote: "Recognition matters most when it reflects years of consistent work.",
    bodySections: [
      {
        heading: "Recognition for manufacturing excellence",
        paragraphs: [
          "This placeholder article gives the awards story a home inside the news experience while the complete staff-managed version is prepared.",
          "The page can later include award details, event context, and links to related Awards content.",
        ],
      },
      {
        heading: "Beyond a single moment",
        paragraphs: [
          "Awards coverage helps connect public recognition to the systems, people, and standards behind the Group's work.",
        ],
      },
    ],
  },
  {
    id: "kwahu-pepease-health-centre",
    slug: "kwahu-pepease-health-centre",
    source: "News Ghana",
    date: "June 6, 2020",
    readTime: "4 min",
    title: "Kwahu Pepease citizens donates to health centre",
    excerpt: ["A placeholder community story for future publication."],
    category: "Community",
    href: "/news/kwahu-pepease-health-centre",
    shade: "bg-[#cfcfcf]",
    heroShade: "bg-[#d8d8d8]",
    ...defaultAuthor,
    quote: "Community stories give context to the people and places around the business.",
    bodySections: [
      {
        heading: "Community impact in context",
        paragraphs: [
          "This placeholder entry will hold the full community story once content management is connected.",
          "Until then, it keeps the article visible in the archive and lets visitors understand the intended reading experience.",
        ],
      },
      {
        heading: "A record for future updates",
        paragraphs: [
          "The structure supports future photos, source attribution, and richer reporting without changing the overall page layout.",
        ],
      },
    ],
  },
  {
    id: "fon-foundation-regional-communities",
    slug: "fon-foundation-regional-communities",
    source: "Daily Guide",
    date: "June 8, 2020",
    readTime: "4 min",
    title: "FON Foundation reaches regional communities",
    excerpt: ["A placeholder foundation update for future newsroom content."],
    category: "Foundation",
    href: "/news/fon-foundation-regional-communities",
    shade: "bg-[#b6b6b6]",
    heroShade: "bg-[#cccccc]",
    ...defaultAuthor,
    quote: "Sustained impact is built through presence, follow-through, and long-term commitment.",
    bodySections: [
      {
        heading: "Foundation work and continuity",
        paragraphs: [
          "This placeholder article represents future coverage of FON Foundation activities across regional communities.",
          "The eventual article can include project updates, beneficiary stories, and links to related community initiatives.",
        ],
      },
      {
        heading: "Keeping the archive ready",
        paragraphs: [
          "Using the same detail template for every article keeps the newsroom consistent while allowing staff-managed content to grow over time.",
        ],
        bullets: ["Consistent article structure", "Room for future media", "Clear source and category metadata"],
      },
    ],
  },
];
