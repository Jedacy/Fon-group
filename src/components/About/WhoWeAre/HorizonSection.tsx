import { BadgeCheck } from "lucide-react";
import watermark from "../../../assets/optimized/Watermark.webp";
import SectionContainer from "../../shared/SectionContainer";

const horizonItems = [
  {
    number: "01",
    title: "Market Dominance",
    copy: "Consolidating our position at the forefront of local and export markets through superior product quality.",
  },
  {
    number: "02",
    title: "West African Expansion",
    copy: "Strategic growth into neighboring West African nations, bringing Ghanaian manufacturing excellence to the sub-region.",
  },
  {
    number: "03",
    title: "Capital Investment",
    copy: "Sustained increase in investment towards state-of-the-art production lines and industrial automation.",
  },
  {
    number: "04",
    title: "Supply Chain Autonomy",
    copy: "Ambitious goal to own the raw material supply chain, ensuring total quality control from source to consumer.",
  },
];

function HorizonSection() {
  return (
    <section className="relative overflow-hidden bg-[#003246] py-24 text-white sm:py-28">
      <SectionContainer>
        <div className="max-w-xl">
          <h2 className="font-heading text-4xl font-bold leading-tight sm:text-5xl">The Horizon</h2>
          <p className="mt-6 text-base leading-7 text-cyan-100/55">
            Our roadmap for the next decade focuses on vertical integration and continental leadership.
          </p>
        </div>

        <div className="mt-20 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {horizonItems.map((item) => (
            <article key={item.number} className="relative">
              <p className="font-heading text-5xl font-bold text-cyan-200/10">{item.number}</p>
              <div className="mt-7 flex items-start gap-3">
                <BadgeCheck aria-hidden="true" className="mt-1 shrink-0 text-cyan-200/55" size={18} />
                <div>
                  <h3 className="font-heading text-lg font-bold leading-6">{item.title}</h3>
                  <p className="mt-5 text-sm leading-7 text-cyan-100/45">{item.copy}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </SectionContainer>

      <img
        src={watermark}
        alt=""
        className="pointer-events-none absolute bottom-10 right-8 h-28 w-28 opacity-10 sm:bottom-14 sm:right-16"
        decoding="async"
        loading="lazy"
      />
    </section>
  );
}

export default HorizonSection;
