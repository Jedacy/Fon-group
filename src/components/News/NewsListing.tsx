import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import SectionContainer from "../shared/SectionContainer";
import { newsItems } from "./newsData";

function NewsImage({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <div className={`overflow-hidden rounded-sm bg-slate-200 ${className}`}>
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
      />
    </div>
  );
}

function NewsListing() {
  const [featured, ...secondaryItems] = newsItems;
  const railItems = secondaryItems.slice(0, 5);

  return (
    <section className="bg-white py-24 sm:py-28">
      <SectionContainer className="grid gap-14 lg:grid-cols-[1.45fr_0.95fr] lg:gap-16">
        <article>
          <Link to={featured.href} className="group block focus:outline-none focus-visible:ring-2 focus-visible:ring-[#003a4f]">
            <NewsImage src={featured.image} alt={featured.imageAlt} className="aspect-[1.72] w-full" />
          </Link>
          <p className="font-section-label mt-9 text-xs font-bold uppercase tracking-[0.28em] text-slate-500">
            {featured.category}
          </p>
          <h1 className="font-heading mt-4 max-w-3xl text-4xl font-medium leading-tight text-slate-950 sm:text-5xl">
            {featured.title}
          </h1>
          <div className="mt-7 max-w-3xl space-y-5 text-base leading-7 text-slate-700">
            {featured.excerpt.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <Link
            to={featured.href}
            className="mt-8 inline-flex items-center gap-2 border-b border-slate-950 pb-0.5 text-sm font-bold text-slate-950 transition duration-200 hover:gap-3"
          >
            Read More
            <ArrowUpRight aria-hidden="true" size={15} strokeWidth={2} />
          </Link>
        </article>

        <aside className="grid content-start gap-9">
          {railItems.map((item) => (
            <Link
              key={item.id}
              to={item.href}
              className="group grid gap-5 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#003a4f] sm:grid-cols-[184px_1fr] lg:grid-cols-[180px_1fr]"
            >
              <NewsImage
                src={item.image}
                alt={item.imageAlt}
                className="aspect-[1.52] w-full transition duration-300 group-hover:-translate-y-1 group-hover:shadow-lg"
              />
              <div className="min-w-0 py-1">
                <p className="text-[11px] font-semibold leading-4 text-slate-500">
                  {item.source}
                  <span className="mx-3 inline-block h-px w-5 translate-y-[-3px] bg-slate-300" />
                  {item.date}
                </p>
                <h2 className="font-heading mt-3 text-lg font-semibold leading-snug text-slate-950 transition duration-200 group-hover:text-[#003246]">
                  {item.title}
                </h2>
              </div>
            </Link>
          ))}
        </aside>
      </SectionContainer>
    </section>
  );
}

export default NewsListing;
