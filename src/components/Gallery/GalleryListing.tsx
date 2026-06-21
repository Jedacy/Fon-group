import { Calendar, Image, PlayCircle } from "lucide-react";
import SectionContainer from "../shared/SectionContainer";

type MediaItem = {
  id: string;
  type: "image" | "video";
  source: string;
  date: string;
  title: string;
  shade: string;
};

const mediaItems: MediaItem[] = [
  {
    id: "watch-fon-packaging-factory",
    type: "video",
    source: "The FON Group",
    date: "8 years ago",
    title: "WATCH: FON Packaging inaugurates new factory",
    shade: "bg-[#d5d5d5]",
  },
  {
    id: "factory-tour",
    type: "video",
    source: "The FON Group",
    date: "April 9, 2026",
    title: "Factory Tour: FON Packaging Ventures",
    shade: "bg-[#c3c3c3]",
  },
  {
    id: "abcde-visits",
    type: "image",
    source: "The FON Group",
    date: "5 years ago",
    title: "ABCDE Visits FON Packaging",
    shade: "bg-[#b8b8b8]",
  },
  {
    id: "package-product-company",
    type: "video",
    source: "GhanaWeb Tv",
    date: "6 years ago",
    title: "Fon Packaging Ventures wins Package Product Company of the Year - Paper",
    shade: "bg-[#a8a8a8]",
  },
  {
    id: "knust-students",
    type: "image",
    source: "Fon Ltd",
    date: "Recent",
    title: "KNUST Students visit FON Packaging",
    shade: "bg-[#cecece]",
  },
  {
    id: "business-live",
    type: "video",
    source: "Joy News",
    date: "5 years ago",
    title: "COVID-19 Pandemic: FON Ltd sees surge in demands - Business Live on JoyNews",
    shade: "bg-[#b1b1b1]",
  },
  {
    id: "featured-fon-packaging",
    type: "image",
    source: "The FON Group",
    date: "5 years ago",
    title: "Featured: FON Packaging",
    shade: "bg-[#c9c9c9]",
  },
  {
    id: "featured-fon-ltd",
    type: "image",
    source: "The FON Group",
    date: "5 years ago",
    title: "Featured: FON LTD",
    shade: "bg-[#bbbbbb]",
  },
];

function MediaBadge({ type }: { type: MediaItem["type"] }) {
  const Icon = type === "video" ? PlayCircle : Image;

  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-950 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-white">
      <Icon aria-hidden="true" size={13} strokeWidth={2.2} />
      {type}
    </span>
  );
}

function MediaSkeleton({ shade, className = "" }: { shade: string; className?: string }) {
  return (
    <div className={`relative overflow-hidden rounded-md ${shade} ${className}`} aria-hidden="true">
      <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/35 to-transparent opacity-70 motion-safe:animate-[news-shimmer_2.6s_ease-in-out_infinite]" />
    </div>
  );
}

function CompactMediaItem({ item }: { item: MediaItem }) {
  return (
    <article className="group grid gap-5 rounded-md focus-within:ring-2 focus-within:ring-[#003a4f] sm:grid-cols-[174px_1fr]">
      <MediaSkeleton
        shade={item.shade}
        className="aspect-square transition duration-300 group-hover:-translate-y-1 group-hover:shadow-lg"
      />
      <div className="min-w-0 py-2">
        <p className="text-[11px] font-semibold leading-4 text-slate-500">
          {item.source}
          <span className="mx-3 inline-block h-px w-5 translate-y-[-3px] bg-slate-300" />
          {item.date}
        </p>
        <h2 className="font-heading mt-3 text-lg font-semibold leading-snug text-slate-950">{item.title}</h2>
        <div className="mt-4">
          <MediaBadge type={item.type} />
        </div>
      </div>
    </article>
  );
}

function GalleryListing() {
  const [featured, ...restItems] = mediaItems;
  const railItems = restItems.slice(0, 3);
  const moreItems = restItems.slice(3);

  return (
    <section className="bg-white py-24 sm:py-28">
      <SectionContainer>
        <div className="grid gap-14 lg:grid-cols-[1.35fr_0.95fr] lg:gap-16">
          <article className="relative min-h-[430px] overflow-hidden rounded-xl">
            <MediaSkeleton shade={featured.shade} className="absolute inset-0 h-full w-full" />
            <div className="relative z-10 flex min-h-[430px] items-center px-5 py-6 sm:px-8">
              <div className="flex min-h-80 w-full max-w-80 flex-col rounded-lg bg-white/95 p-7 shadow-2xl backdrop-blur">
                <div>
                  <span className="inline-flex rounded-md bg-[#11151b] px-5 py-3 text-xs font-bold text-white">
                    {featured.date}
                  </span>
                  <div className="mt-8">
                    <MediaBadge type={featured.type} />
                  </div>
                  <h1 className="font-heading mt-6 text-3xl font-semibold leading-tight text-slate-950">
                    {featured.title}
                  </h1>
                </div>
                <p className="mt-auto pt-12 text-sm font-semibold text-slate-600">
                  by. <span className="border-b border-slate-600">{featured.source}</span>
                </p>
              </div>
            </div>
          </article>

          <aside className="grid content-start gap-7">
            {railItems.map((item) => (
              <CompactMediaItem key={item.id} item={item} />
            ))}
          </aside>
        </div>

        <div className="mt-18 sm:mt-20">
          <h2 className="font-heading text-3xl font-semibold text-slate-950 sm:text-4xl">More Media</h2>
          <div className="mt-8 grid max-w-5xl gap-7">
            {moreItems.map((item) => (
              <article
                key={item.id}
                className="group grid gap-5 rounded-md transition duration-300 hover:-translate-y-0.5 sm:grid-cols-[96px_1fr]"
              >
                <MediaSkeleton shade={item.shade} className="aspect-square w-24 transition duration-300 group-hover:shadow-lg" />
                <div className="min-w-0 py-1">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-[11px] font-semibold text-slate-500">
                    <span>{item.source}</span>
                    <span className="h-px w-5 bg-slate-300" />
                    <span className="inline-flex items-center gap-1.5">
                      <Calendar aria-hidden="true" size={13} />
                      {item.date}
                    </span>
                    <MediaBadge type={item.type} />
                  </div>
                  <h3 className="font-heading mt-3 text-lg font-semibold leading-snug text-slate-950 sm:text-xl">
                    {item.title}
                  </h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}

export default GalleryListing;
