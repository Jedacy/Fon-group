import { ArrowRight } from "lucide-react";
import choptimeLogo from "../../assets/optimized/Choptime.webp";
import fonLtdLogo from "../../assets/optimized/Fon Ltd.webp";
import fonPackagingLogo from "../../assets/optimized/Group FON Packaging.webp";
import fonstatLogo from "../../assets/optimized/FonStat.webp";
import oasisLogo from "../../assets/optimized/Group Oasis.webp";
import SectionContainer from "../shared/SectionContainer";

const companies = [
  {
    name: "Fon Ltd",
    logo: fonLtdLogo,
    logoAlt: "FON LTD",
    panelClassName: "bg-[#f4ded5]",
    logoClassName: "h-24",
    tagline: "Tissue & Paper Converters",
    description:
      "Beginning operations in 1984, FON LTD is Ghana's leading manufacturer of Tissue & Paper products, with our flagship brands FONTISSUE, ADEPA & TEMPLE, working through competition over the years to become household names by delivering exceptional quality and value for money.",
    action: "Visit Website",
    link: "https://fonltd.com/",
  },
  {
    name: "Fonstat",
    logo: fonstatLogo,
    logoAlt: "Fonstat",
    panelClassName: "bg-[#d6eef5]",
    logoClassName: "h-24",
    tagline: "Commercial Printing & Light Packaging Solutions",
    description:
      "Incorporated in 1996, FONSTAT is the premier Commercial Printing and Light Packaging firm in the West African subregion, known for delivering exceptional quality at scale to customers in industries such as Pharmaceuticals, Food & Beverage, Tissue, Cosmetic & Beauty, and many more.",
    action: "Visit Website",
    link: "https://fonstat.com/",
  },
  {
    name: "Fon Packaging",
    logo: fonPackagingLogo,
    logoAlt: "FON Packaging",
    panelClassName: "bg-[#eadbf8]",
    logoClassName: "h-48",
    // tagline: "Corrugated Packaging Solutions",
    description:
      "Established in 2014 to meet the growing demand for quality corrugated carton packaging in the region, FON Packaging is already the leading manufacturer of corrugated cartons in Ghana for the local and international market.",
    action: "Visit Website",
    link: "https://fonpackaging.com/",
  },
  {
    name: "Chop Time Brands",
    logo: choptimeLogo,
    logoAlt: "Chop Time",
    panelClassName: "bg-[#d8f5e7]",
    logoClassName: "h-[136px]",
    description:
      "Being the latest addition to the FON GROUP, Chop time is looking to expand and take on food packaging. With prior experience in packaging, Choptime serves as the groups response to quality food packages that are recyclable and of good quality.",
    action: "View Brochure",
    link: "/chop time.pdf",
    actionClassName: "text-blue-600 hover:text-blue-700",
  },
  {
    name: "Oasis Properties",
    logo: oasisLogo,
    logoAlt: "Oasis Properties",
    panelClassName: "bg-[#f6f1d9]",
    logoClassName: "h-36",
    description:
      "Oasis Properties represents the latest chapter in the FON Group's legacy of excellence. This new venture is dedicated to creating a sanctuary of comfort, where modern design meets tranquility. Every detail is meticulously curated to provide a well-furnished and serene environment, offering residents and guests a sophisticated escape.",
    action: "See More",
    link: "/oasis",
    actionClassName: "text-blue-600 hover:text-blue-700",
  },
];

function CompanyGrid() {
  return (
    <section className="bg-white py-24 sm:py-28">
      <SectionContainer>
        <div className="grid gap-x-16 gap-y-20 lg:grid-cols-2">
          {companies.map((company) => (
            <article key={company.name} className="min-w-0">
              <div
                className={`flex aspect-[2.2/1] items-center justify-center rounded-lg px-8 ${company.panelClassName}`}
              >
                <div className="text-center">
                  <img
                    src={company.logo}
                    alt={company.logoAlt}
                    className={`mx-auto w-auto max-w-full object-contain ${company.logoClassName}`}
                    decoding="async"
                    loading="lazy"
                  />
                  {company.tagline ? (
                    <p className="mt-5 text-sm font-bold italic leading-5 text-slate-900">{company.tagline}</p>
                  ) : null}
                </div>
              </div>

              <h2 className="font-heading mt-9 text-3xl font-bold leading-tight text-slate-950 sm:text-4xl">
                {company.name}
              </h2>
              <div className="mt-6 h-px w-full bg-slate-200" />

              <div className="mt-6">
                <p className="text-sm font-bold text-slate-950">About</p>
                <p className="mt-4 max-w-xl text-base leading-7 text-slate-500">{company.description}</p>
              </div>

              <div className="mt-8 h-px w-full bg-slate-200" />
              <a
                href={company.link}
                target={company.link.endsWith(".pdf") || company.link.startsWith("http") ? "_blank" : undefined}
                rel={company.link.endsWith(".pdf") || company.link.startsWith("http") ? "noopener noreferrer" : undefined}
                className={`mt-6 inline-flex items-center gap-1.5 text-sm font-bold underline-offset-4 transition duration-200 hover:underline ${
                  company.actionClassName ?? "text-slate-950 hover:text-[#003246]"
                }`}
              >
                {company.action}
                {company.action === "Visit Website" ? <ArrowRight aria-hidden="true" size={14} /> : null}
              </a>
            </article>
          ))}
        </div>
      </SectionContainer>
    </section>
  );
}

export default CompanyGrid;
