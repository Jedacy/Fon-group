import { CircleDot, Zap } from "lucide-react";
import SectionContainer from "../../shared/SectionContainer";

function MissionSection() {
  return (
    <section className="bg-[#f5f7f8] py-24 sm:py-28">
      <SectionContainer className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="font-section-label text-xs font-bold uppercase tracking-[0.35em] text-slate-500">
            The Mission
          </p>
          <h2 className="font-heading mt-8 max-w-md text-4xl font-medium leading-tight text-[#002f43] sm:text-5xl">
            Demystifying African Manufacturing.
          </h2>
        </div>

        <div>
          <blockquote className="border-l-4 border-[#002f43] pl-7 text-2xl font-medium italic leading-10 text-slate-500">
            "To be a model manufacturing group at the forefront of innovation, focusing on delivering quality products
            and services, while improving the lives of fellow citizens."
          </blockquote>

          <div className="mt-14 grid gap-10 sm:grid-cols-2">
            <article>
              <div className="flex items-center gap-2 text-[#002f43]">
                <Zap aria-hidden="true" size={16} />
                <h3 className="font-heading text-base font-bold">Catalyst for Change</h3>
              </div>
              <p className="mt-5 text-base leading-7 text-slate-500">
                We aim to motivate fellow Ghanaian and West-African industries to impose quality and innovation as the
                main foundation of success.
              </p>
            </article>

            <article>
              <div className="flex items-center gap-2 text-[#002f43]">
                <CircleDot aria-hidden="true" size={16} />
                <h3 className="font-heading text-base font-bold">The Foundation</h3>
              </div>
              <p className="mt-5 text-base leading-7 text-slate-500">
                Our focus is on the principle that enhanced performance leads directly to increased productivity and
                widespread economic benefits.
              </p>
            </article>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}

export default MissionSection;
