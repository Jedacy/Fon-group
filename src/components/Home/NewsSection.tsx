import { useMemo, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { newsItems } from "../News/newsData";
import SectionContainer from "../shared/SectionContainer";

const previewItems = newsItems;

function NewsSection() {
  const visibleCount = Math.min(5, previewItems.length);
  const [activeIndex, setActiveIndex] = useState(0);
  const visibleItems = useMemo(
    () =>
      Array.from({ length: visibleCount }, (_, offset) => previewItems[(activeIndex + offset) % previewItems.length]),
    [activeIndex, visibleCount],
  );

  const showPrevious = () => {
    setActiveIndex((currentIndex) => (currentIndex - 1 + previewItems.length) % previewItems.length);
  };

  const showNext = () => {
    setActiveIndex((currentIndex) => (currentIndex + 1) % previewItems.length);
  };

  return (
    <section id="news" className="bg-[#003246] py-24 text-white sm:py-28">
      <SectionContainer>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="font-heading text-center text-4xl font-medium sm:text-left sm:text-5xl">News</h2>
          <div className="flex justify-center gap-3 sm:justify-end">
            <button
              type="button"
              onClick={showPrevious}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/80 transition duration-200 hover:border-white/40 hover:bg-white hover:text-[#003246] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f1c400]"
              aria-label="Show previous news items"
            >
              <ChevronLeft aria-hidden="true" size={18} />
            </button>
            <button
              type="button"
              onClick={showNext}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/80 transition duration-200 hover:border-white/40 hover:bg-white hover:text-[#003246] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f1c400]"
              aria-label="Show next news items"
            >
              <ChevronRight aria-hidden="true" size={18} />
            </button>
          </div>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {visibleItems.map((card) => (
            <Link
              key={card.id}
              to={card.href}
              className="group min-w-0 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f1c400]"
            >
              <article className="min-w-0">
                <div className="aspect-[1.35/1] w-full overflow-hidden rounded-md bg-white/10 transition duration-300 group-hover:-translate-y-1 group-hover:shadow-xl group-hover:shadow-black/20">
                  <img
                    src={card.image}
                    alt={card.imageAlt}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <p className="mt-4 text-[11px] font-semibold leading-4 text-white/45">
                  {card.source} - {card.date}
                </p>
                <h3 className="font-heading mt-2 text-sm font-semibold leading-5 text-white transition duration-200 group-hover:text-[#f1c400]">
                  {card.title}
                </h3>
              </article>
            </Link>
          ))}
        </div>
      </SectionContainer>
    </section>
  );
}

export default NewsSection;
