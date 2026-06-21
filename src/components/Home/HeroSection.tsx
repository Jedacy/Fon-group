import { useEffect, useState } from "react";
import heroOne from "../../assets/optimized/Heroes/Hero1.webp";
import heroTwo from "../../assets/optimized/Heroes/Hero2.webp";
import heroThree from "../../assets/optimized/Heroes/Hero3.webp";
import watermark from "../../assets/optimized/Watermark.webp";
import SectionContainer from "../shared/SectionContainer";

const heroSlides = [
  {
    image: heroOne,
    alt: "Manufacturing floor at FON Group",
    headline: "Pioneering the Future of African Manufacturing Since 1984.",
    zoomDirection: "in",
  },
  {
    image: heroTwo,
    alt: "FON Group paper and tissue products",
    headline: "Premium Paper, Tissue, and Packaging Solutions for West Africa.",
    zoomDirection: "out",
  },
  {
    image: heroThree,
    alt: "FON Group industrial operations",
    headline: "Three Decades of Ghanaian Industrial Excellence.",
    zoomDirection: "in",
  },
];

function usePrefersReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setPrefersReducedMotion(mediaQuery.matches);

    updatePreference();
    mediaQuery.addEventListener("change", updatePreference);

    return () => mediaQuery.removeEventListener("change", updatePreference);
  }, []);

  return prefersReducedMotion;
}

function HeroSection() {
  const [activeSlide, setActiveSlide] = useState(0);
  const prefersReducedMotion = usePrefersReducedMotion();
  const currentSlide = heroSlides[activeSlide];

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length);
    }, 6000);

    return () => window.clearInterval(timer);
  }, [prefersReducedMotion]);

  return (
    <section id="home" className="relative flex min-h-160 items-center overflow-hidden pt-20 text-white md:min-h-175">
      {heroSlides.map((slide, index) => {
        const isActive = index === activeSlide;
        const zoomAnimation =
          slide.zoomDirection === "out"
            ? "motion-safe:animate-[hero-image-zoom-out_6000ms_ease-out_forwards]"
            : "motion-safe:animate-[hero-image-zoom-in_6000ms_ease-out_forwards]";

        return (
          <img
            key={slide.headline}
            src={slide.image}
            alt={slide.alt}
            decoding="async"
            fetchPriority={index === 0 ? "high" : "auto"}
            loading="eager"
            className={`absolute inset-0 h-full w-full scale-100 object-cover transition-opacity duration-1200ms ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transform-none motion-reduce:transition-none ${
              isActive ? `opacity-100 ${zoomAnimation}` : "opacity-0"
            }`}
          />
        );
      })}
      <div className="absolute inset-0 bg-black/55" />

      <SectionContainer className="relative w-full">
        <div className="max-w-3xl">
          <h1
            key={currentSlide.headline}
            className="font-heading text-4xl font-medium leading-tight tracking-normal opacity-100 transition duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] motion-safe:animate-[hero-headline-in_700ms_cubic-bezier(0.16,1,0.3,1)] sm:text-5xl md:text-6xl"
          >
            {currentSlide.headline}
          </h1>
          <a
            href="#contact"
            className="mt-8 inline-flex rounded-sm border border-white px-6 py-3 text-base font-semibold text-slate-100 transition duration-200 hover:-translate-y-0.5 hover:bg-slate-100 backdrop-blur-xs"
          >
            Contact Us
          </a>
        </div>
      </SectionContainer>

      <img
        src={watermark}
        alt=""
        decoding="async"
        className="pointer-events-none absolute bottom-20 right-12 hidden h-14 w-14 opacity-45 md:block"
      />
    </section>
  );
}

export default HeroSection;
