import Hls from "hls.js";
import { useEffect, useRef, useSyncExternalStore } from "react";

const HLS_SOURCE = "/media/home-video/master.m3u8";
const FALLBACK_SOURCE = "/media/home-video/home-video-fallback.mp4";

type NetworkInformationLike = {
  effectiveType?: string;
  saveData?: boolean;
};

type NavigatorWithConnection = Navigator & {
  connection?: NetworkInformationLike;
};

function getReducedMotionSnapshot() {
  if (typeof window === "undefined") {
    return false;
  }

  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function subscribeToReducedMotion(onStoreChange: () => void) {
  if (typeof window === "undefined") {
    return () => undefined;
  }

  const query = window.matchMedia("(prefers-reduced-motion: reduce)");
  query.addEventListener("change", onStoreChange);

  return () => query.removeEventListener("change", onStoreChange);
}

function shouldStartLowQuality() {
  const connection = (navigator as NavigatorWithConnection).connection;
  const effectiveType = connection?.effectiveType?.toLowerCase();

  return Boolean(connection?.saveData || effectiveType === "slow-2g" || effectiveType === "2g" || effectiveType === "3g");
}

function VideoPlaceholderSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const prefersReducedMotion = useSyncExternalStore(
    subscribeToReducedMotion,
    getReducedMotionSnapshot,
    () => false,
  );

  useEffect(() => {
    const video = videoRef.current;

    if (!video) {
      return;
    }

    if (prefersReducedMotion) {
      video.pause();
      video.removeAttribute("src");
      video.load();
      return;
    }

    const startLowQuality = shouldStartLowQuality();

    if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = HLS_SOURCE;
      void video.play().catch(() => undefined);
      return;
    }

    if (Hls.isSupported()) {
      const hls = new Hls({
        capLevelToPlayerSize: true,
        startLevel: startLowQuality ? 0 : -1,
      });

      hls.loadSource(HLS_SOURCE);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        if (startLowQuality) {
          hls.currentLevel = 0;
        }

        void video.play().catch(() => undefined);
      });

      return () => hls.destroy();
    }

    video.src = FALLBACK_SOURCE;
    void video.play().catch(() => undefined);
  }, [prefersReducedMotion]);

  return (
    <section id="media" className="relative flex min-h-117.5 h-screen items-center justify-center overflow-hidden bg-[#1f1b17]">
      <video
        ref={videoRef}
        aria-label="FON Group manufacturing video"
        autoPlay={!prefersReducedMotion}
        className="absolute inset-0 h-full w-full object-cover"
        disablePictureInPicture
        loop
        muted
        playsInline
        preload="metadata"
      />
      <div className="absolute inset-0 bg-black/35" />
      {prefersReducedMotion ? (
        <p className="sr-only">The FON Group video is paused because reduced motion is enabled.</p>
      ) : null}
    </section>
  );
}

export default VideoPlaceholderSection;
