import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import choptimeLogo from "../../assets/optimized/Choptime.webp";
import fonPackagingLogo from "../../assets/optimized/Fon Packaging.webp";
import fonStatLogo from "../../assets/optimized/FonStat.webp";
import fonLtdLogo from "../../assets/optimized/Fon Ltd.webp";
import oasisLogo from "../../assets/optimized/Oasis.webp";
import groupLogos from "../../assets/optimized/Home/group-logos.webp";
import SectionContainer from "../shared/SectionContainer";

const companyLogos = [
  {
    image: fonLtdLogo,
    alt: "FON Ltd",
  },
  {
    image: fonStatLogo,
    alt: "FonStat",
  },
  {
    image: fonPackagingLogo,
    alt: "FON Packaging",
  },
  {
    image: choptimeLogo,
    alt: "Chop Time",
  },
  {
    image: oasisLogo,
    alt: "Oasis Properties",
  },
];

function GroupCompaniesSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="group" className="overflow-hidden bg-white py-24 sm:py-28">
      <SectionContainer className="text-center">
        <p className="font-section-label text-xs font-bold uppercase tracking-[0.35em] text-slate-500">What we do</p>
        <h2 className="font-heading mt-4 text-4xl font-semibold leading-tight text-[#1f2b3f] sm:text-5xl">
          Our Group of Companies
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-slate-500">
          Innovation-driven practices across our diverse group of pioneering Ghanaian industries.
        </p>
        <img
          src={groupLogos}
          alt="FON Group company logos"
          decoding="async"
          loading="lazy"
          className="mx-auto mt-12 w-full max-w-190 object-contain md:hidden"
        />
        <div className="mt-12 hidden overflow-hidden py-4 md:block">
          <motion.div
            animate={prefersReducedMotion ? undefined : { x: [-16, 16, -16] }}
            className="grid w-full grid-cols-5 items-center gap-6 lg:gap-10"
            transition={
              prefersReducedMotion
                ? undefined
                : {
                    duration: 6.5,
                    ease: "easeInOut",
                    repeat: Infinity,
                  }
            }
          >
            {companyLogos.map((logo) => (
              <div
                key={logo.alt}
                className="flex h-28 items-center justify-center rounded-md bg-white px-4 transition duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1"
              >
                <img
                  src={logo.image}
                  alt={logo.alt}
                  className="max-h-20 w-full object-contain"
                  decoding="async"
                  loading="lazy"
                />
              </div>
            ))}
          </motion.div>
        </div>
        <a
          href="/the-group"
          className="mt-12 inline-flex items-center gap-2 text-sm font-semibold text-slate-600 transition duration-200 hover:text-[#002f43]"
        >
          Learn More
          <ArrowRight aria-hidden="true" size={14} />
        </a>
      </SectionContainer>
    </section>
  );
}

export default GroupCompaniesSection;
