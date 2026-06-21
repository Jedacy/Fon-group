import { Link } from "react-router-dom";
import { newsItems } from "../News/newsData";
import SectionContainer from "../shared/SectionContainer";

function NewsSection() {
  const previewItems = newsItems.slice(0, 5);

  return (
    <section id="news" className="bg-[#003246] py-24 text-white sm:py-28">
      <SectionContainer>
        <h2 className="font-heading text-center text-4xl font-bold sm:text-5xl">News</h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {previewItems.map((card) => (
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
