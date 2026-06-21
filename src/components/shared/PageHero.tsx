import SectionContainer from "./SectionContainer";
import OtherHeroImage from "../../assets/optimized/Heroes/OtherHero.webp";

type PageHeroProps = {
  title: string;
  eyebrow?: string;
};

function PageHero({ title, eyebrow }: PageHeroProps) {
  return (
    <section className="relative isolate flex h-70 items-center overflow-hidden bg-[#001b3a] text-white">
      <img
        src={OtherHeroImage}
        alt=""
        className="absolute inset-0 -z-20 h-full w-full object-cover"
        decoding="async"
        loading="eager"
      />
      {/* <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_88%_10%,rgba(0,158,255,0.95)_0,rgba(0,113,224,0.76)_16%,transparent_35%),radial-gradient(circle_at_32%_18%,rgba(28,83,147,0.48)_0,transparent_42%),linear-gradient(117deg,#00132c_0%,#001c3f_55%,#005ab9_100%)]" />
      <div className="absolute inset-y-0 right-0 -z-10 w-3/4 opacity-65 [background-image:repeating-radial-gradient(ellipse_at_26%_48%,transparent_0,transparent_10px,rgba(61,158,255,0.28)_11px,transparent_12px)]" />
      <div className="absolute -right-16 top-0 -z-10 h-full w-1/2 skew-x-[-26deg] bg-cyan-400/25 blur-sm" />
      <div className="absolute right-0 top-0 -z-10 h-full w-32 bg-blue-400/30 blur-2xl sm:w-56" /> */}

      <SectionContainer>
        <div className="max-w-2xl">
          <h1 className="font-heading text-4xl font-medium leading-tight tracking-normal sm:text-4xl md:text-5xl">
            {title}
          </h1>
          {eyebrow ? <p className="mt-5 text-sm font-medium text-white/45">{eyebrow}</p> : null}
        </div>
      </SectionContainer>
    </section>
  );
}

export default PageHero;
