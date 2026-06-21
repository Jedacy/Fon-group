import { lazy, Suspense, type ReactNode } from "react";
import HeroSection from "../components/Home/HeroSection";
import LazyOnVisible from "../components/shared/LazyOnVisible";

const GroupCompaniesSection = lazy(() => import("../components/Home/GroupCompaniesSection"));
const NewsSection = lazy(() => import("../components/Home/NewsSection"));
const OurStorySection = lazy(() => import("../components/Home/OurStorySection"));
const VideoPlaceholderSection = lazy(() => import("../components/Home/VideoPlaceholderSection"));
const WhoWeAreSection = lazy(() => import("../components/Home/WhoWeAreSection"));

function SectionFallback({ className = "min-h-120" }: { className?: string }) {
  return <div className={`bg-white ${className}`} aria-hidden="true" />;
}

function DeferredSection({
  children,
  fallbackClassName,
}: {
  children: ReactNode;
  fallbackClassName?: string;
}) {
  const fallback = <SectionFallback className={fallbackClassName} />;

  return (
    <LazyOnVisible fallback={fallback}>
      <Suspense fallback={fallback}>{children}</Suspense>
    </LazyOnVisible>
  );
}

function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-white">
      <HeroSection />
      <DeferredSection fallbackClassName="min-h-140">
        <WhoWeAreSection />
      </DeferredSection>
      <DeferredSection fallbackClassName="min-h-screen bg-[#1f1b17]">
        <VideoPlaceholderSection />
      </DeferredSection>
      <DeferredSection fallbackClassName="min-h-140 bg-slate-50">
        <OurStorySection />
      </DeferredSection>
      <DeferredSection fallbackClassName="min-h-110">
        <GroupCompaniesSection />
      </DeferredSection>
      <DeferredSection fallbackClassName="min-h-120 bg-[#003246]">
        <NewsSection />
      </DeferredSection>
    </main>
  );
}

export default Home;
