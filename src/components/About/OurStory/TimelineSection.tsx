import { useEffect, useState } from "react";
import image1984A from "../../../assets/History/1984 1.png";
import image1984B from "../../../assets/History/1984 2.png";
import image1984C from "../../../assets/History/1984 3.png";
import image1994A from "../../../assets/History/1994.png";
import image1994B from "../../../assets/History/1994-1.png";
import image1994C from "../../../assets/History/1994-2.png";
import image1996A from "../../../assets/History/1996.png";
import image1996B from "../../../assets/History/1996-1.png";
import image1996C from "../../../assets/History/1996-2.png";
import image1996D from "../../../assets/History/1996-3.png";
import image1998A from "../../../assets/History/1998.png";
import image1998B from "../../../assets/History/1998-1.png";
import image1998C from "../../../assets/History/1998-2.png";
import image1998D from "../../../assets/History/1998-3.png";
import image2005A from "../../../assets/History/2005.png";
import image2005B from "../../../assets/History/2005-1.png";
import image2005C from "../../../assets/History/2005-2.png";
import image2005D from "../../../assets/History/2005-3.png";
import image2014A from "../../../assets/History/2014.png";
import image2014B from "../../../assets/History/2014-1.png";
import image2014C from "../../../assets/History/2014-2.png";
import image2014D from "../../../assets/History/2014-3.png";
import image2018A from "../../../assets/History/2018.png";
import image2018B from "../../../assets/History/2018-1.png";
import image2018C from "../../../assets/History/2018 2.png";
import SectionContainer from "../../shared/SectionContainer";

const timelineItems = [
  {
    year: "1984",
    title: "FON LTD Commences Operations as a Paper Trader",
    copy: "Founder and Chairman Frederick Osafo Ntim Snr. established FON Limited after returning to Ghana with a vision to build a locally grounded business. The company's early operations focused on trading various varieties of paper for the printing and converting industry.",
    images: [image1984A, image1984B, image1984C],
  },
  {
    year: "1994",
    title: "FON LTD Expands into Paper Processing",
    copy: "After a decade of successful paper trading, the group made a strategic shift into full-scale manufacturing. By adding value to its main product lines, the company began developing strong in-house production capabilities for tissue and paper products.",
    images: [image1994A, image1994B, image1994C],
  },
  {
    year: "1996",
    title: "Expansion into Commercial Printing With The Launch of FONSTAT LTD",
    copy: "The group expanded its portfolio by incorporating Fonstat Limited. For over two decades, this entity has led the way in Ghanaian commercial and security printing, stationery manufacturing, and paper converting.",
    images: [image1996A, image1996B, image1996C, image1996D],
  },
  {
    year: "1998",
    title: "FON LTD Expansion into Tissue Conversion",
    copy: "To reduce dependence on imported materials, the group strengthened its manufacturing capabilities and grew its tissue conversion operations for Ghanaian and West African markets.",
    images: [image1998A, image1998B, image1998C, image1998D],
  },
  {
    year: "2005",
    title: "Commission of FON LTD Spintex Factory",
    copy: "The group expanded its operating footprint with the commissioning of the FON LTD Spintex factory, giving its manufacturing and paper converting work a stronger industrial base.",
    images: [image2005A, image2005B, image2005C, image2005D],
  },
  {
    year: "2014",
    title: "Expansion into Corrugated Packaging With The Launch and Commissioning of FON Packaging Ventures Factory",
    copy: "To reduce dependence on imported materials, the group established FON Packaging Ventures. This subsidiary transitioned the company from a major importer of cartons to a local manufacturer of corrugated packaging solutions.",
    images: [image2014A, image2014B, image2014C, image2014D],
  },
  {
    year: "2018",
    title: "FONSTAT LTD expands into Light Packaging",
    copy: "In response to a dynamic market, Fonstat expanded into the Primary Paper Packaging industry. This move allowed the group to become a certified manufacturer of light packaging specifically focused on Fast Moving Consumer Goods (FMCG).",
    images: [image2018A, image2018B, image2018C],
  },
];

function TimelineSection() {
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setImageIndex((current) => current + 1);
    }, 3000);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="bg-white pb-24 sm:pb-32">
      <SectionContainer>
        <div className="relative mx-auto max-w-6xl">
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-slate-400 lg:block" />

          <div className="grid gap-14">
            {timelineItems.map((item) => {
              const activeImage = item.images[imageIndex % item.images.length];

              return (
                <article key={item.year} className="relative grid gap-8 lg:grid-cols-[1fr_96px_1fr] lg:items-start">
                  <div className="lg:pr-10">
                    <div className="overflow-hidden rounded-md bg-slate-100 shadow-sm">
                      <img
                        src={activeImage}
                        alt={`${item.year} FON Group history`}
                        className="aspect-[1.18/1] w-full object-cover transition-opacity duration-500"
                      />
                    </div>
                  </div>

                  <div className="relative hidden h-full justify-center lg:flex">
                    <span className="mt-1 h-4 w-4 rounded-full border-4 border-white bg-slate-600 shadow-[0_0_0_1px_rgba(71,85,105,0.35)]" />
                  </div>

                  <div className="lg:pl-2">
                    <p className="font-heading text-4xl font-medium leading-none text-slate-500">{item.year}</p>
                    <h2 className="font-heading mt-7 max-w-xl text-2xl font-medium leading-tight text-slate-500 sm:text-3xl">
                      {item.title}
                    </h2>
                    <p className="mt-7 max-w-xl text-sm leading-6 text-slate-500">{item.copy}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}

export default TimelineSection;
