import award2016 from "../../assets/Awards/Awards 2016.jpeg";
import award2018 from "../../assets/Awards/Awards 2018.jpeg";
import award2019 from "../../assets/Awards/Awards 2019.jpeg";
import SectionContainer from "../shared/SectionContainer";

const awards = [
  {
    year: "2016",
    title: "Tissue Paper of the Year - FON LTD / FONTISSUE",
    image: award2016,
  },
  {
    year: "2018",
    title: "Indigenous Manufacturer of the Year - FON GROUP",
    image: award2018,
  },
  {
    year: "2019",
    title: "Packaging Company of the Year - FON PACKAGING",
    image: award2019,
  },
];

function AwardsGrid() {
  return (
    <section className="bg-white py-20 sm:py-24 lg:py-28">
      <SectionContainer>
        <div className="grid gap-10 md:grid-cols-3">
          {awards.map((award) => (
            <article key={award.year} className="min-w-0">
              <div className="overflow-hidden rounded-lg bg-slate-100">
                <img
                  src={award.image}
                  alt={`${award.year} ${award.title}`}
                  className="aspect-[1.55/1] w-full object-cover transition duration-500 hover:scale-105"
                  decoding="async"
                  loading="lazy"
                />
              </div>
              <h2 className="font-heading mt-9 text-2xl font-bold leading-tight text-slate-950">{award.year}</h2>
              <p className="mt-5 max-w-sm text-lg leading-7 text-slate-600">{award.title}</p>
            </article>
          ))}
        </div>
      </SectionContainer>
    </section>
  );
}

export default AwardsGrid;
