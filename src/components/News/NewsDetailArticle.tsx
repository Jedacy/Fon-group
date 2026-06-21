import { ArrowLeft, ArrowUpRight, Clock, Link as LinkIcon, Share2 } from "lucide-react";
import { Link } from "react-router-dom";
import SectionContainer from "../shared/SectionContainer";
import { type NewsItem, newsItems } from "./newsData";

function ArticleImage({
  src,
  alt,
  className = "",
  loading = "lazy",
}: {
  src: string;
  alt: string;
  className?: string;
  loading?: "eager" | "lazy";
}) {
  return (
    <div className={`overflow-hidden rounded-md bg-slate-200 ${className}`}>
      <img
        src={src}
        alt={alt}
        loading={loading}
        decoding="async"
        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
      />
    </div>
  );
}

function NotFoundState() {
  return (
    <main className="bg-white pt-20">
      <section className="py-24 sm:py-28">
        <SectionContainer>
          <div className="mx-auto max-w-2xl text-center">
            <p className="font-section-label text-xs font-bold uppercase tracking-[0.3em] text-slate-500">
              Article not found
            </p>
            <h1 className="font-heading mt-5 text-4xl font-semibold text-slate-950 sm:text-5xl">
              This story is not available.
            </h1>
            <p className="mt-5 text-base leading-7 text-slate-600">
              The article may have moved, or it may be waiting for final newsroom content.
            </p>
            <Link
              to="/news"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#003246] px-6 py-3 text-sm font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:bg-[#06465f]"
            >
              <ArrowLeft aria-hidden="true" size={16} />
              Back to News
            </Link>
          </div>
        </SectionContainer>
      </section>
    </main>
  );
}

function RelatedCard({ item }: { item: NewsItem }) {
  return (
    <Link
      to={item.href}
      className="group rounded-lg border border-slate-200 bg-white p-3 transition duration-300 hover:-translate-y-1 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[#003246]"
    >
      <ArticleImage src={item.image} alt={item.imageAlt} className="aspect-[1.62] w-full" />
      <div className="p-2 pt-5">
        <p className="font-section-label text-[10px] font-bold uppercase tracking-[0.22em] text-[#008d6b]">
          {item.category}
          <span className="mx-2 text-slate-300">/</span>
          {item.date}
        </p>
        <h3 className="font-heading mt-3 text-base font-semibold leading-snug text-slate-950">{item.title}</h3>
        <p className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold text-slate-400">
          <Clock aria-hidden="true" size={13} />
          {item.readTime}
          <ArrowUpRight
            aria-hidden="true"
            size={13}
            className="ml-auto text-slate-300 transition duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-slate-950"
          />
        </p>
      </div>
    </Link>
  );
}

function NewsDetailArticle({ article }: { article: NewsItem | undefined }) {
  if (!article) {
    return <NotFoundState />;
  }

  const relatedItems = newsItems.filter((item) => item.slug !== article.slug).slice(0, 3);

  return (
    <main className="bg-white pt-20">
      <article className="py-20 sm:py-24">
        <SectionContainer>
          <div className="mx-auto max-w-3xl">
            <Link
              to="/news"
              className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 transition duration-200 hover:text-slate-950"
            >
              <ArrowLeft aria-hidden="true" size={15} />
              All articles
            </Link>

            <div className="mt-8 flex flex-wrap items-center gap-3 text-xs font-semibold text-slate-500">
              <span className="rounded-full bg-emerald-500 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-white">
                {article.category}
              </span>
              <span>{article.date}</span>
              <span className="h-1 w-1 rounded-full bg-slate-300" />
              <span className="inline-flex items-center gap-1.5">
                <Clock aria-hidden="true" size={13} />
                {article.readTime}
              </span>
            </div>

            <h1 className="font-heading mt-5 text-4xl font-bold leading-tight text-slate-950 sm:text-6xl">
              {article.title}
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-500">{article.excerpt[0]}</p>

            <ArticleImage
              src={article.image}
              alt={article.imageAlt}
              loading="eager"
              className="mt-12 aspect-[1.76] w-full"
            />

            <div className="mt-10 border-t border-slate-200 pt-10">
              <div className="space-y-10 text-base leading-8 text-slate-600">
                {article.excerpt.slice(1).map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}

                {article.bodySections.map((section) => (
                  <section key={section.heading}>
                    <h2 className="font-heading text-2xl font-bold leading-tight text-slate-950">{section.heading}</h2>
                    <div className="mt-3 space-y-4">
                      {section.paragraphs.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>
                    {section.bullets ? (
                      <ul className="mt-5 grid gap-2 pl-5 text-slate-600">
                        {section.bullets.map((bullet) => (
                          <li key={bullet} className="list-disc">
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </section>
                ))}

                <blockquote className="border-l-2 border-indigo-500 py-1 pl-5 text-base font-bold italic leading-7 text-slate-800">
                  {article.quote}
                </blockquote>

                <a
                  href={article.externalUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-5 py-3 text-sm font-bold text-slate-800 transition duration-200 hover:-translate-y-0.5 hover:border-slate-300 hover:bg-slate-50"
                >
                  Read original source
                  <ArrowUpRight aria-hidden="true" size={15} />
                </a>
              </div>

              <div className="mt-14 rounded-xl border border-slate-200 bg-slate-50 p-6 sm:flex sm:items-center sm:gap-5">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-slate-300 text-lg font-bold text-slate-700">
                  {article.author
                    .split(" ")
                    .slice(0, 2)
                    .map((part) => part[0])
                    .join("")}
                </div>
                <div className="mt-4 sm:mt-0">
                  <p className="font-section-label text-[10px] font-bold uppercase tracking-[0.22em] text-slate-400">
                    Written by
                  </p>
                  <h2 className="font-heading mt-1 text-base font-bold text-slate-950">{article.author}</h2>
                  <p className="text-sm text-slate-500">{article.authorRole}</p>
                  <p className="mt-3 max-w-xl text-sm leading-6 text-slate-500">{article.authorBio}</p>
                </div>
              </div>

              <div className="mt-12 flex flex-col gap-5 border-t border-slate-200 pt-8 sm:flex-row sm:items-center sm:justify-between">
                <Link
                  to="/news"
                  className="inline-flex items-center gap-2 text-sm font-bold text-slate-700 transition duration-200 hover:text-slate-950"
                >
                  <ArrowLeft aria-hidden="true" size={15} />
                  Back to all articles
                </Link>
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-400">
                  <span>Share</span>
                  {[Share2, LinkIcon, ArrowUpRight].map((Icon, index) => (
                    <button
                      key={index}
                      type="button"
                      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition duration-200 hover:border-slate-300 hover:text-slate-950"
                      aria-label="Share article"
                    >
                      <Icon aria-hidden="true" size={15} />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </SectionContainer>
      </article>

      <section className="border-t border-slate-200 bg-white py-20 sm:py-24">
        <SectionContainer>
          <h2 className="font-heading text-3xl font-bold text-slate-950 sm:text-4xl">
            Keep reading. <span className="text-slate-400">More from the team.</span>
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {relatedItems.map((item) => (
              <RelatedCard key={item.id} item={item} />
            ))}
          </div>
        </SectionContainer>
      </section>
    </main>
  );
}

export default NewsDetailArticle;
