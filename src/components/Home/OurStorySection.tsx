import { CircleArrowRight } from "lucide-react";
import ourStoryImage from "../../assets/optimized/Home/OurStory.webp";
import SectionContainer from "../shared/SectionContainer";

function OurStorySection() {
  return (
    <section id="story" className="bg-[#f3f3f3] py-24 sm:py-28">
      <SectionContainer className="grid items-center gap-14 lg:grid-cols-2">
        

        <div>
          <p className="font-section-label text-xs font-bold uppercase tracking-[0.35em] text-slate-500">Our Story</p>
          <h2 className="font-heading mt-4 max-w-xl text-4xl font-semibold leading-tight text-[#08063d] sm:text-5xl">
            Innovation and Higher Standards
          </h2>
          <p className="mt-7 max-w-xl text-sm leading-6 text-slate-500">
            We believe innovation is key in today's dynamic manufacturing environment. We are constantly innovating and
            sourcing high quality raw materials in order to provide clients with the best value for money.
          </p>
          <p className="mt-5 max-w-xl text-sm leading-6 text-slate-500">
            Our values are driven by a simple and direct principle: enhanced performance leads to increased productivity,
            increased productivity speeds up the economic cycle and benefits the private sector and people as a whole.
          </p>
          <a
            href="/our-story"
           className="mt-8 inline-flex items-center gap-3 rounded-md bg-[#002f43] px-7 py-4 text-sm font-medium text-white transition duration-200 hover:-translate-y-0.5 hover:bg-[#06465f]"
          >
            Read More
            <CircleArrowRight aria-hidden="true" size={16} strokeWidth={1.8} />
          </a>
        </div>

        <div className="relative mx-auto w-full h-full max-w-xl">
          <div className="absolute -bottom-2 -left-2 h-full w-4/5 rounded-md bg-[#002f43] sm:-bottom-5 sm:-left-5" />
          <div className="relative overflow-hidden rounded-md bg-white w-4/5 h-full">
            <img
              src={ourStoryImage}
              alt="FON Group Founder operating manufacturing machinery"
              decoding="async"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}

export default OurStorySection;
