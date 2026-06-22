import emmanuelImage from "../../assets/optimized/Team/Emmanuel.webp";
import executiveDirectorImage from "../../assets/optimized/Team/Exec Director.webp";
import founderImage from "../../assets/optimized/Team/Founder.webp";
import frederickImage from "../../assets/optimized/Team/Frederick.webp";
import samuelImage from "../../assets/optimized/Team/Samuel.webp";
import williamImage from "../../assets/optimized/Team/William.webp";

export type TeamMember = {
  slug: string;
  name: string;
  role: string;
  profileRole: string;
  company?: string;
  image: string;
  hasEmail?: boolean;
  hasLinkedIn?: boolean;
  linkedInUrl?: string;
  biography: string[];
};

export const teamMembers: TeamMember[] = [
  {
    slug: "frederick-osafo-ntim-snr",
    name: "Frederick Osafo Ntim Snr",
    role: "Founder and Chairman",
    profileRole: "Founder and Chairman",
    image: founderImage,
    hasLinkedIn: true,
    biography: [
      "Mr. Frederick Osafo Ntim Snr is a Ghanaian entrepreneur and the Founder and Chairman of The FON Group, a business that has grown from paper trading into a leading manufacturer and distributor of tissue, packaging, and paper products in Ghana.",
      "A graduate of Kwame Nkrumah University of Science and Technology, where he studied Land Economy, he founded FON Limited in 1984 after returning to Ghana with a vision to build a sustainable business within the paper industry. Under his leadership, the company expanded from trading into manufacturing, developing well-known brands such as FONTISSUE and ADEPA while building strong production and distribution capabilities.",
      "Over the years, Mr. Ntim has guided the business through changing market conditions with a hands-on leadership style focused on operational excellence, long-term growth, and strong industry relationships. He has also championed more sustainable manufacturing practices and played an important role in shaping the company's strategic direction.",
      "Beyond business, he remains committed to community development, supporting initiatives in education and healthcare across Kwahu and other parts of Ghana. Together with his wife, Mrs. Agnes Osafo Ntim, he has built a strong foundation for generational continuity, with the next generation actively involved in the Group's continued growth.",
    ],
  },
  {
    slug: "agnes-osafo-ntim",
    name: "Agnes Osafo Ntim",
    role: "Executive Director",
    profileRole: "Executive Director",
    image: executiveDirectorImage,
    hasLinkedIn: true,
    biography: [
      "Mrs. Agnes Osafo Ntim is a Ghanaian entrepreneur and business leader who has played a foundational role in the growth and development of The FON Group.",
      "With an entrepreneurial background that began through her retail venture, Tesano Mothercare, she developed strong expertise in trading, customer engagement, and market development. In the early years of the business, she worked alongside her husband during the company's paper trading operations in Tudu and later dedicated herself fully to helping grow the business into a larger manufacturing and distribution enterprise.",
      "Over the years, Mrs. Osafo Ntim has been deeply involved in the company's financial and operational activities, overseeing supplier relationships, payments, customer engagement, and key commercial functions. Her strong understanding of local markets and consumer behavior has played an important role in product expansion and the growth of the company's flagship tissue brands.",
      "Beyond her corporate contributions, she is widely respected for her mentorship, entrepreneurial journey, and commitment to community development. She actively supports charitable initiatives across Ghana, including outreach programs involving healthcare, rehabilitation, and community support projects. As a wife, mother, and business leader, she continues to play an important role in shaping both the culture of the business and its next generation of leadership.",
    ],
  },
  {
    slug: "emmanuel-osei-ntim",
    name: "Emmanuel Osei Ntim",
    role: "General Manager",
    profileRole: "General Manager",
    company: "FON Packaging Ventures",
    image: emmanuelImage,
    hasEmail: true,
    hasLinkedIn: true,
    linkedInUrl: "https://www.linkedin.com/in/emmanueloseintim/",
    biography: [
      "Emmanuel Osei Ntim is a business executive and operations leader serving as General Manager of FON Packaging Ventures, The FON Group's corrugated packaging subsidiary.",
      "With over a decade of leadership experience within the business, he oversees all aspects of the company's operations, including manufacturing, sales, customer relationships, sourcing, and financial management. His hands-on leadership style and deep expertise in corrugated packaging, paper manufacturing, and supply chain management have been instrumental in strengthening the company's operational performance and growth.",
      "Prior to leading FON Packaging Ventures, Emmanuel served as General Manager of FON Limited, where he gained broad experience across trading, distribution, and commercial operations within the Group. He holds a Bachelor's degree from Bryant University in Accounting, French, and Global Supply Chain Management and is also an alumnus of the Stanford Seed Transformation Program.",
      "Beyond his corporate responsibilities, Emmanuel is actively involved in business leadership and community initiatives, including the Kwahu Professionals Network and Young Kwahu Forum. He also participates in discussions around entrepreneurship and family business in Ghana and maintains interests in agribusiness ventures focused on value-added agricultural products.",
    ],
  },
  {
    slug: "frederick-osafo-ntim-jnr",
    name: "Frederick Osafo Ntim Jnr",
    role: "General Manager",
    profileRole: "General Manager",
    company: "FONSTAT LTD",
    image: frederickImage,
    hasEmail: true,
    hasLinkedIn: true,
    linkedInUrl: "https://www.linkedin.com/in/frederick-osafo-ntim/",
    biography: [
      "Frederick Osafo Ntim Jnr. is a business executive and operations leader serving as General Manager of FONSTAT Limited, The FON Group's printing and light packaging subsidiary.",
      "With close to a decade of leadership experience within the business, he oversees all aspects of FONSTAT's operations, including production, sales, financial management, and day-to-day administration. He has developed strong expertise in printing and paper-based packaging solutions, playing a key role in expanding the company beyond traditional printing into packaging products such as paper bags, kraft food boxes, and other consumer packaging solutions.",
      "Frederick has been instrumental in guiding the company's transition into light packaging, helping position FONSTAT to respond to growing market demand for alternative and sustainable packaging solutions. He also oversees major institutional and government printing projects, including electoral and security printing assignments that require high levels of precision, reliability, and operational discipline.",
      "A graduate of Bryant University, Frederick combines formal business training with hands-on industry leadership. Beyond his role within The FON Group, he is an entrepreneur and founder of ventures spanning sports talent management and event services, reflecting his broader interest in developing businesses across multiple sectors.",
    ],
  },
  {
    slug: "william-boateng-ntim",
    name: "William Boateng Ntim",
    role: "General Manager (Factory Operations)",
    profileRole: "General Manager",
    company: "FON LTD",
    image: williamImage,
    hasEmail: true,
    hasLinkedIn: true,
    linkedInUrl: "https://www.linkedin.com/in/william-ntim/",
    biography: [
      "William Boateng Ntim is a business executive and operations leader serving as General Manager at FON Limited, where he oversees manufacturing operations and product development within the Group's tissue and paper converting business.",
      "He leads factory operations, supervising production, machinery performance, and day-to-day manufacturing activities, while working closely with suppliers and technical partners to optimize operational efficiency. William has been instrumental in driving product innovation and diversification within the company's tissue portfolio, leading the rollout of new product formats, packaging configurations, and expanded product offerings aligned with changing retail and consumer trends.",
      "He also played a key role in maximizing the capabilities of the company's high-capacity tissue production machinery, helping expand FON Limited's manufacturing capacity and product range. In addition to tissue products, he oversees the production of related paper products including A4 paper, exercise books, and sheeted brown paper.",
      "William holds a degree from Northeastern University and brings international industry experience from International Forest Products in Massachusetts, where he worked in market research and logistics within the paper sector. Prior to his current role, he also served as Operations Manager at FON Packaging Ventures.",
      "Beyond The FON Group, William is the Founder of Govora, a venture focused on operational systems and digital infrastructure for businesses, and co-host of the Exponentials Podcast, where he explores themes around business, technology, and growth.",
    ],
  },
  {
    slug: "samuel-amponsah-ntim",
    name: "Samuel Amponsah Ntim",
    role: "General Manager (Commercial Operations)",
    profileRole: "General Manager",
    company: "FON LTD",
    image: samuelImage,
    hasEmail: true,
    hasLinkedIn: true,
    linkedInUrl: "http://www.linkedin.com/in/samuel-amponsah-ntim",
    biography: [
      "Samuel Amponsah Ntim is a business executive and entrepreneur serving as General Manager of FON Limited, where he oversees commercial operations within The FON Group's tissue and paper converting business.",
      "His responsibilities include sales, customer relationship management, accounts coordination, and finished goods inventory management. He works closely with clients across sectors including corporate institutions, banking, manufacturing, healthcare, hospitality, and retail, playing a key role in expanding the company's commercial reach and customer relationships.",
      "Samuel also works closely with FONSTAT Limited and FON Packaging Ventures, leading the commercialization and distribution of market-facing products across the Group's subsidiaries. Beyond day-to-day operations, he is actively involved in product development, market expansion, and strategic initiatives aimed at improving operational structure and supporting long-term growth.",
      "He holds a Bachelor of Science degree from Babson College in Massachusetts, graduating cum laude in 2021. In addition to his role within The FON Group, he is the Founder of Savannah Fields, a venture focused on natural botanicals, renewable energy, and food systems, with interests spanning natural ingredients, solar infrastructure, and future opportunities in agri-processing and consumer food products.",
    ],
  },
];

export const founders = teamMembers.filter((member) => member.role.includes("Founder") || member.role.includes("Executive"));

export const management = teamMembers.filter((member) => !founders.includes(member));

export function getTeamMemberBySlug(slug: string | undefined) {
  return teamMembers.find((member) => member.slug === slug);
}
