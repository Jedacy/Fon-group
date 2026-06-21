import { useEffect, useState } from "react";
import { Calendar, Play, PlayCircle, X } from "lucide-react";
import SectionContainer from "../shared/SectionContainer";

type MediaItem = {
  id: string;
  source: string;
  date: string;
  title: string;
  youtubeId: string;
};

const mediaItems: MediaItem[] = [
  {
    id: "fon-packaging-factory",
    source: "The FON Group",
    date: "Featured video",
    title: "FON Packaging Ventures factory feature",
    youtubeId: "10DcMyzU1i4",
  },
  {
    id: "fon-group-manufacturing-story",
    source: "The FON Group",
    date: "Company media",
    title: "Inside FON Group manufacturing",
    youtubeId: "uHv8N1K499c",
  },
  {
    id: "fon-packaging-industrial-update",
    source: "The FON Group",
    date: "Company media",
    title: "FON Packaging industrial update",
    youtubeId: "rEE6m0dPZCs",
  },
  {
    id: "fon-group-business-feature",
    source: "The FON Group",
    date: "Company media",
    title: "FON Group business feature",
    youtubeId: "H1HRlHuussg",
  },
  {
    id: "fon-ltd-paper-solutions",
    source: "The FON Group",
    date: "Company media",
    title: "FON paper and tissue solutions",
    youtubeId: "QkMKEJuzCZ0",
  },
  {
    id: "fon-packaging-media-spotlight",
    source: "The FON Group",
    date: "Company media",
    title: "FON Packaging media spotlight",
    youtubeId: "qs2Af7uBs-8",
  },
  {
    id: "fon-group-community-and-industry",
    source: "The FON Group",
    date: "Company media",
    title: "FON Group community and industry",
    youtubeId: "sDceQIRA1ik",
  },
];

function MediaBadge({ className = "" }: { className?: string }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full bg-slate-950 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-white ${className}`}
    >
      <PlayCircle aria-hidden="true" size={13} strokeWidth={2.2} />
      Video
    </span>
  );
}

function VideoThumbnail({
  item,
  className = "",
  onPlay,
  featured = false,
}: {
  item: MediaItem;
  className?: string;
  onPlay: (item: MediaItem) => void;
  featured?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={() => onPlay(item)}
      className={`group/thumb relative block overflow-hidden rounded-md bg-slate-950 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#003a4f] focus-visible:ring-offset-2 ${className}`}
      aria-label={`Play ${item.title}`}
    >
      <img
        src={`https://i.ytimg.com/vi/${item.youtubeId}/hqdefault.jpg`}
        alt=""
        loading="lazy"
        decoding="async"
        className="h-full w-full object-cover opacity-85 transition duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/thumb:scale-105 group-hover/thumb:opacity-100"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/65 via-slate-950/10 to-transparent" />
      <span
        className={`absolute left-1/2 top-1/2 inline-flex -translate-x-1/2 -translate-y-1/2 scale-90 items-center justify-center rounded-full bg-white/95 text-slate-950 opacity-0 shadow-2xl transition duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/thumb:scale-100 group-hover/thumb:opacity-100 group-focus-visible/thumb:scale-100 group-focus-visible/thumb:opacity-100 ${
          featured ? "h-20 w-20" : "h-12 w-12"
        }`}
      >
        <Play aria-hidden="true" size={featured ? 34 : 22} fill="currentColor" strokeWidth={1.5} />
      </span>
      <span className="absolute bottom-4 left-4 right-4 translate-y-2 text-xs font-bold uppercase tracking-[0.18em] text-white/80 opacity-0 transition duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/thumb:translate-y-0 group-hover/thumb:opacity-100 group-focus-visible/thumb:translate-y-0 group-focus-visible/thumb:opacity-100">
        Play video
      </span>
    </button>
  );
}

function VideoModal({ item, onClose }: { item: MediaItem | null; onClose: () => void }) {
  useEffect(() => {
    if (!item) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [item, onClose]);

  if (!item) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-[80] flex items-center justify-center bg-slate-950/85 px-4 py-8 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="gallery-video-title"
      onMouseDown={onClose}
    >
      <div
        className="w-full max-w-5xl overflow-hidden rounded-2xl bg-slate-950 shadow-2xl transition duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4 border-b border-white/10 px-5 py-4 text-white sm:px-6">
          <div>
            <p className="font-section-label text-[10px] font-bold uppercase tracking-[0.22em] text-white/45">
              {item.source} / {item.date}
            </p>
            <h2 id="gallery-video-title" className="font-heading mt-1 text-lg font-semibold sm:text-xl">
              {item.title}
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-white transition duration-200 hover:bg-white hover:text-slate-950 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            aria-label="Close video"
          >
            <X aria-hidden="true" size={20} />
          </button>
        </div>
        <div className="aspect-video bg-black">
          <iframe
            className="h-full w-full"
            src={`https://www.youtube-nocookie.com/embed/${item.youtubeId}?autoplay=1&rel=0`}
            title={item.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
}

function CompactMediaItem({ item, onPlay }: { item: MediaItem; onPlay: (item: MediaItem) => void }) {
  return (
    <article className="group grid gap-5 rounded-md sm:grid-cols-[174px_1fr]">
      <VideoThumbnail
        item={item}
        onPlay={onPlay}
        className="aspect-video transition duration-300 group-hover:-translate-y-1 group-hover:shadow-lg"
      />
      <div className="min-w-0 py-2">
        <p className="text-[11px] font-semibold leading-4 text-slate-500">
          {item.source}
          <span className="mx-3 inline-block h-px w-5 translate-y-[-3px] bg-slate-300" />
          {item.date}
        </p>
        <h2 className="font-heading mt-3 text-lg font-semibold leading-snug text-slate-950">{item.title}</h2>
        <div className="mt-4">
          <MediaBadge />
        </div>
      </div>
    </article>
  );
}

function GalleryListing() {
  const [selectedVideo, setSelectedVideo] = useState<MediaItem | null>(null);
  const [featured, ...restItems] = mediaItems;
  const railItems = restItems.slice(0, 3);
  const moreItems = restItems.slice(3);

  return (
    <section className="bg-white py-24 sm:py-28">
      <SectionContainer>
        <div className="grid gap-14 lg:grid-cols-[1.35fr_0.95fr] lg:gap-16">
          <article className="relative overflow-hidden rounded-xl bg-slate-950">
            <VideoThumbnail
              item={featured}
              onPlay={setSelectedVideo}
              featured
              className="aspect-video min-h-[430px] rounded-xl"
            />
            <div className="pointer-events-none absolute inset-0 flex items-center px-5 py-6 sm:px-8">
              <div className="flex min-h-80 w-full max-w-80 flex-col rounded-lg bg-white/95 p-7 shadow-2xl backdrop-blur">
                <div>
                  <span className="inline-flex rounded-md bg-[#11151b] px-5 py-3 text-xs font-bold text-white">
                    {featured.date}
                  </span>
                  <div className="mt-8">
                    <MediaBadge />
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
              <CompactMediaItem key={item.id} item={item} onPlay={setSelectedVideo} />
            ))}
          </aside>
        </div>

        <div className="mt-18 sm:mt-20">
          <h2 className="font-heading text-3xl font-semibold text-slate-950 sm:text-4xl">More Media</h2>
          <div className="mt-8 grid max-w-5xl gap-7">
            {moreItems.map((item) => (
              <article
                key={item.id}
                className="group grid gap-5 rounded-md transition duration-300 hover:-translate-y-0.5 sm:grid-cols-[180px_1fr]"
              >
                <VideoThumbnail
                  item={item}
                  onPlay={setSelectedVideo}
                  className="aspect-video transition duration-300 group-hover:shadow-lg"
                />
                <div className="min-w-0 py-1">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-[11px] font-semibold text-slate-500">
                    <span>{item.source}</span>
                    <span className="h-px w-5 bg-slate-300" />
                    <span className="inline-flex items-center gap-1.5">
                      <Calendar aria-hidden="true" size={13} />
                      {item.date}
                    </span>
                    <MediaBadge />
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

      <VideoModal item={selectedVideo} onClose={() => setSelectedVideo(null)} />
    </section>
  );
}

export default GalleryListing;
