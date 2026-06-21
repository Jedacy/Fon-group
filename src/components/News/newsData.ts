import awardsImage from "../../assets/optimized/News/Awards.webp";
import accraHospitalImage from "../../assets/optimized/News/fon-packaging-700x406.webp";
import factoryImage from "../../assets/optimized/News/fon inaug.webp";
import kwahuImage from "../../assets/optimized/News/kwahu-pepease-citizens.webp";
import graduateGapImage from "../../assets/News/FON-Packaging-Ventures-moves-to-bridge-graduate-industry-gap-1.webp";
import ppeDonationImage from "../../assets/News/newsghana.webp";

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
  externalUrl: string;
  image: string;
  imageAlt: string;
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
    id: "fon-packaging-graduate-industry-gap",
    slug: "fon-packaging-graduate-industry-gap",
    source: "B&FT Online",
    date: "May 22, 2026",
    readTime: "5 min",
    title: "FON Packaging Ventures moves to bridge graduate-industry gap",
    excerpt: [
      "FON Packaging Ventures is strengthening the connection between university training and factory practice by giving KNUST packaging technology students structured exposure to industrial production.",
      "The initiative is designed to help graduates better understand machinery, workflow discipline, quality expectations, and the practical demands of packaging careers before they enter the job market.",
    ],
    category: "Education",
    href: "/news/fon-packaging-graduate-industry-gap",
    externalUrl:
      "https://thebftonline.com/2026/05/22/fon-packaging-ventures-moves-to-bridge-graduate-industry-gap/",
    image: graduateGapImage,
    imageAlt: "FON Packaging Ventures team with KNUST packaging technology students",
    shade: "bg-[#bcbcbc]",
    heroShade: "bg-[#c7c7c7]",
    ...defaultAuthor,
    quote: "The strongest talent pipelines are built where classrooms and factories stay in conversation.",
    bodySections: [
      {
        heading: "Connecting classrooms to factory floors",
        paragraphs: [
          "The B&FT report highlights FON Packaging Ventures' work with students from KNUST's packaging technology programme. Rather than treating industrial experience as an afterthought, the company is creating room for students to see how packaging is produced at commercial scale.",
          "That exposure matters because manufacturing roles ask graduates to move quickly from theory into systems, equipment, teamwork, and quality control. The visit gives students a clearer sense of what employers expect and where their skills can fit.",
        ],
      },
      {
        heading: "A practical bridge for future talent",
        paragraphs: [
          "The programme positions FON Packaging Ventures as an active partner in developing the next generation of packaging professionals. By opening its factory environment to students, the company helps reduce the distance between academic preparation and the pace of real production.",
        ],
        bullets: [
          "Factory exposure for packaging technology students",
          "Clearer understanding of industrial standards and workflow",
          "A stronger handoff from university training into manufacturing careers",
        ],
      },
      {
        heading: "Why the model matters",
        paragraphs: [
          "For Ghana's manufacturing base to deepen, students need more than classroom knowledge. They need to understand how products move through equipment, how teams solve production problems, and how quality decisions affect customers. This kind of partnership makes that learning visible.",
        ],
      },
    ],
  },
  {
    id: "fon-group-inaugurates-new-factory",
    slug: "fon-group-inaugurates-new-factory",
    source: "Graphic Online",
    date: "Dec 12, 2017",
    readTime: "6 min",
    title: "FON Group inaugurates new Factory",
    excerpt: [
      "FON Packaging Ventures inaugurated a corrugated carton manufacturing factory in Accra to supply globally competitive packaging to local manufacturers.",
      "The investment was presented as a practical response to the packaging challenges that can weaken the competitiveness of Ghanaian products at home and abroad.",
      "Government and industry stakeholders connected the factory to wider goals around industrialisation, import substitution, and stronger export readiness.",
    ],
    category: "Manufacturing",
    href: "/news/fon-group-inaugurates-new-factory",
    externalUrl: "https://www.graphic.com.gh/business/business-news/fon-group-inaugurates-new-factory.html",
    image: factoryImage,
    imageAlt: "FON Packaging Ventures corrugated carton factory inauguration",
    shade: "bg-[#d2d2d2]",
    heroShade: "bg-[#cfcfcf]",
    ...defaultAuthor,
    quote: "Manufacturing progress is strongest when local ambition is matched with practical capacity.",
    bodySections: [
      {
        heading: "A new chapter for local packaging",
        paragraphs: [
          "The Graphic Online story frames the factory as a major step in FON Group's packaging journey. The facility was established to produce corrugated cartons that can serve Ghanaian manufacturers with stronger consistency, quality, and local availability.",
          "Packaging is part of industrial competitiveness. It affects product protection, shelf confidence, logistics, and the ability of local goods to meet buyer expectations in domestic and export markets.",
        ],
      },
      {
        heading: "Built for Ghanaian industry",
        paragraphs: [
          "The inauguration brought attention to the cost of poor packaging and the foreign exchange pressure created when manufacturers rely too heavily on imported solutions. FON Packaging Ventures' investment helps keep more of that value chain inside Ghana.",
        ],
        bullets: [
          "Expanded local carton packaging capacity",
          "Support for manufacturers seeking stronger product presentation",
          "A contribution to Ghana's industrialisation and export-readiness agenda",
        ],
      },
      {
        heading: "A long-term manufacturing signal",
        paragraphs: [
          "Beyond one facility, the factory represents FON Group's belief that local manufacturers can meet international standards when the right infrastructure, machinery, and operating discipline are in place.",
        ],
      },
    ],
  },
  {
    id: "fon-group-award-winners",
    slug: "fon-group-award-winners",
    source: "Graphic Online",
    date: "May 29, 2026",
    readTime: "4 min",
    title: "FON Group among award winners",
    excerpt: [
      "Graphic Online reported that 34 individuals and companies were honoured for their contributions to Ghana's manufacturing sector.",
      "FON Packaging Ventures was listed among the recognised companies, placing the Group within a wider national story of industrial performance and manufacturing leadership.",
    ],
    category: "Awards",
    href: "/news/fon-group-award-winners",
    externalUrl:
      "https://www.graphic.com.gh/news/general-news/ghana-news-34-individuals-companies-honoured-for-promoting-manufacturing-sector.html",
    image: awardsImage,
    imageAlt: "Award presentation event recognising Ghanaian manufacturers",
    shade: "bg-[#a8a8a8]",
    heroShade: "bg-[#c2c2c2]",
    ...defaultAuthor,
    quote: "Recognition matters most when it reflects years of consistent work.",
    bodySections: [
      {
        heading: "Recognition across the manufacturing sector",
        paragraphs: [
          "The Graphic Online awards report covered a national recognition event for manufacturers and individuals contributing to Ghana's productive economy. The story placed FON Packaging Ventures among companies whose work has been noticed in the sector.",
          "For a business built around paper, tissue, packaging, and manufacturing services, public recognition is useful because it points back to the operational standards, investment, and teams behind the brand.",
        ],
      },
      {
        heading: "Part of a wider industrial story",
        paragraphs: [
          "Awards are not the work itself, but they help visitors understand how the company is seen within the broader manufacturing ecosystem. FON Packaging Ventures' inclusion connects its day-to-day production work to a national conversation about industrial progress.",
        ],
        bullets: [
          "Recognition alongside other Ghanaian manufacturing contributors",
          "Visibility for FON Packaging Ventures' role in the sector",
          "A public marker of sustained industrial commitment",
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
    excerpt: [
      "FON Group donated hygiene and protective products valued at GH¢30,000 to support frontline health institutions during the Covid-19 period.",
      "The donation reached Ga East Municipal Hospital and Greater Accra Regional Hospital, reflecting the Group's practical response to public health pressure.",
    ],
    category: "Community",
    href: "/news/fon-group-donate-ppe",
    externalUrl: "https://www.newsghana.com.gh/fon-group-of-companies-donate-ppe-to-health-institutions/",
    image: ppeDonationImage,
    imageAlt: "FON Group PPE and hygiene product donation to health institutions",
    shade: "bg-[#9f9f9f]",
    heroShade: "bg-[#bababa]",
    ...defaultAuthor,
    quote: "In moments of public need, institutions are remembered for how they show up.",
    bodySections: [
      {
        heading: "Support during a public health crisis",
        paragraphs: [
          "News Ghana reported that FON Group supplied hygiene and protective products to health institutions at a time when frontline facilities were under serious pressure. The donation was valued at GH¢30,000 and focused on practical items that could support daily hospital operations.",
          "The beneficiary institutions included Ga East Municipal Hospital and Greater Accra Regional Hospital, two facilities that were important to Ghana's Covid-19 response.",
        ],
      },
      {
        heading: "Group-wide responsibility",
        paragraphs: [
          "The donation reflected more than corporate visibility. It showed how a manufacturing group can use its products, logistics, and institutional relationships to respond when public systems need immediate support.",
        ],
        bullets: [
          "Hygiene and protective products valued at GH¢30,000",
          "Support for Ga East Municipal Hospital",
          "Support for Greater Accra Regional Hospital",
        ],
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
    excerpt: [
      "FON Packaging presented assorted paper and hygiene products to Greater Accra Regional Hospital as part of its support for frontline health workers.",
      "The donation placed practical supplies in the hands of a key public health institution during a period when hospitals were carrying heavy responsibility.",
    ],
    category: "Community",
    href: "/news/fon-packaging-accra-regional-hospital",
    externalUrl: "https://dailyguidenetwork.com/fon-packaging-gives-to-accra-regional-hospital/",
    image: accraHospitalImage,
    imageAlt: "FON Packaging donation presentation at Accra Regional Hospital",
    shade: "bg-[#c8c8c8]",
    heroShade: "bg-[#d5d5d5]",
    ...defaultAuthor,
    quote: "Community support is part of the responsibility that comes with building locally.",
    bodySections: [
      {
        heading: "Responding to frontline needs",
        paragraphs: [
          "Daily Guide Network's coverage focused on FON Packaging's donation to Greater Accra Regional Hospital. The company presented assorted paper and hygiene products intended to support the hospital's daily work.",
          "At a time when health workers were under pressure, contributions like these helped supply essential institutions with items that are easy to overlook until they are urgently needed.",
        ],
      },
      {
        heading: "A practical form of care",
        paragraphs: [
          "The story fits within FON Group's wider community footprint: using available products and company capacity to support institutions that serve the public.",
        ],
        bullets: [
          "Donation of paper and hygiene products",
          "Support directed to Greater Accra Regional Hospital",
          "Community response during a high-pressure public health period",
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
    excerpt: [
      "Kwahu Pepease citizens, led by Frederick Osafo Ntim, donated hygiene products and computers to the Pepease Health Centre.",
      "The initiative combined health support with basic technology resources, showing how community members can strengthen local institutions through coordinated action.",
    ],
    category: "Community",
    href: "/news/kwahu-pepease-health-centre",
    externalUrl: "https://www.newsghana.com.gh/kwahu-pepease-citizens-donates-to-health-centre/",
    image: kwahuImage,
    imageAlt: "Kwahu Pepease citizens donation to Pepease Health Centre",
    shade: "bg-[#cfcfcf]",
    heroShade: "bg-[#d8d8d8]",
    ...defaultAuthor,
    quote: "Community stories give context to the people and places around the business.",
    bodySections: [
      {
        heading: "Community support for local healthcare",
        paragraphs: [
          "News Ghana reported that citizens from Kwahu Pepease, led by Frederick Osafo Ntim, supported the Pepease Health Centre with hygiene products and computers.",
          "The donation was rooted in local responsibility. It helped a community health facility with both immediate sanitary needs and basic technology tools that can improve administrative work.",
        ],
      },
      {
        heading: "Strengthening institutions close to home",
        paragraphs: [
          "The story shows how business leaders and citizens can remain connected to the communities that shaped them. The support was not abstract; it was directed at a health centre serving local residents.",
        ],
        bullets: [
          "Hygiene products for health-centre use",
          "Computers to support facility operations",
          "Community-led action connected to Kwahu Pepease",
        ],
      },
    ],
  },
];
