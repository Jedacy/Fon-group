import { ExternalLink } from "lucide-react";
import { motion } from "motion/react";
import appSinarmasLogo from "../../assets/Partners/APP SINARMAS.png";
import belimpexLogo from "../../assets/Partners/Belimpex.png";
import bomoLogo from "../../assets/Partners/Bomo.png";
import bobstLogo from "../../assets/Partners/Bobst.png";
import bwPapersystemsLogo from "../../assets/Partners/BW Papersystems.png";
import elofHanssonLogo from "../../assets/Partners/Elof Hansson.png";
import esswellLogo from "../../assets/Partners/Eswell.png";
import firnLogo from "../../assets/Partners/FIRN.png";
import fortexLogo from "../../assets/Partners/Fortex.png";
import group153Logo from "../../assets/Partners/Group 153.png";
import heidelbergLogo from "../../assets/Partners/Heidelberg.png";
import htiLogo from "../../assets/Partners/Hti.png";
import ifpLogo from "../../assets/Partners/ifpcorp 1.png";
import internationalPaperLogo from "../../assets/Partners/International Paper.png";
import roxcelLogo from "../../assets/Partners/Logo-Roxcel-rgb-auf-dunklem-hintergrund 1.png";
import manucharLogo from "../../assets/Partners/Manuchar.png";
import mmLogo from "../../assets/Partners/MM.png";
import navigatorLogo from "../../assets/Partners/Navigator.png";
import plastyleniaLogo from "../../assets/Partners/Plastylenia.png";
import sappiLogo from "../../assets/Partners/Sappi.png";
import tcyLogo from "../../assets/Partners/tcy-logo_2023_-_1_ 1.png";
import thoscoLogo from "../../assets/Partners/THOSCO.png";
import tuniseOuateLogo from "../../assets/Partners/Tunise Ouate.png";
import valmetLogo from "../../assets/Partners/valmet_logo 1.png";
import SectionContainer from "../shared/SectionContainer";

const partnerGroups = [
  {
    category: "Paper & Raw Materials",
    description: "Trusted suppliers across paper, pulp, tissue, and converting inputs.",
    partners: [
      { name: "International Paper", image: internationalPaperLogo, href: "https://www.internationalpaper.com" },
      { name: "International Forest Products", image: ifpLogo, href: "https://www.ifpcorp.com" },
      { name: "Navigator", image: navigatorLogo, href: "https://thenavigatorcompany.com/en/" },
      { name: "APP Sinarmas", image: appSinarmasLogo, href: "https://app.co.id" },
      { name: "Tunisie Ouate", image: tuniseOuateLogo, href: "https://www.tunisieouate.com" },
      { name: "Roxcel", image: roxcelLogo, href: "https://www.roxcel.com" },
      { name: "Sappi", image: sappiLogo, href: "https://www.sappi.com/en-za/" },
      { name: "Bomo-Cypap", image: bomoLogo, href: "https://www.bomo-cypap.com" },
    ],
  },
  {
    category: "Machinery & Equipment",
    description: "Technology partners supporting production, finishing, and plant capability.",
    partners: [
      { name: "Valmet", image: valmetLogo, href: "https://www.valmet.com" },
      { name: "TCY Machinery", image: tcyLogo, href: "https://www.tcy.com" },
      { name: "Bobst", image: bobstLogo, href: "https://www.bobst.com/chen/" },
      { name: "Heidelberg", image: heidelbergLogo, href: "https://www.heidelberg.com/global/en/index.jsp" },
      { name: "BW Papersystems", image: bwPapersystemsLogo, href: "https://www.bwpapersystems.com" },
    ],
  },
  {
    category: "Packaging, Inks & Industrial Supply",
    description: "Specialist partners for packaging materials, print inputs, and industrial-grade supply chains.",
    partners: [
      { name: "MM Group", image: mmLogo, href: "https://mm.group" },
      { name: "THOSCO", image: thoscoLogo, href: "https://www.thosco.com/en/" },
      { name: "Fortex", image: fortexLogo, href: "https://www.fortex.se" },
      { name: "FIRN", image: firnLogo, href: "https://www.firn.org" },
      { name: "Plastylenia", image: plastyleniaLogo, href: "https://www.plastylenia.it" },
      { name: "HTI", image: htiLogo, href: "http://hitechinks.co.za" },
      { name: "Esswell", image: esswellLogo, href: "https://www.esswell.se" },
    ],
  },
  {
    category: "Trade & Distribution",
    description: "Global sourcing and distribution relationships that keep operations moving.",
    partners: [
      { name: "Manuchar", image: manucharLogo, href: "https://www.manuchar.com/worldwide/en" },
      { name: "Belimpex", image: belimpexLogo, href: "https://belimpex.ng" },
      { name: "Elof Hansson", image: elofHanssonLogo, href: "https://www.elofhansson.com" },
      { name: "Glopaca", image: group153Logo, href: "https://glopaca.com" },
    ],
  },
];

const summaryCards = [
  {
    value: "24",
    label: "Global partner relationships",
  },
  {
    value: "4",
    label: "Core supply categories",
  },
  {
    value: "30+",
    label: "Years of industrial collaboration",
  },
];

function PartnersGrid() {
  return (
    <section className="relative isolate overflow-hidden bg-[#f7f8f4] py-24 sm:py-28">
      <div className="absolute left-0 top-28 -z-10 h-72 w-72 rounded-full bg-[#dfe7df]/60 blur-3xl" />
      <div className="absolute bottom-20 right-0 -z-10 h-80 w-80 rounded-full bg-[#e6edf2]/75 blur-3xl" />

      <SectionContainer>
        <div className="flex gap-10 rounded-2rem p-6 sm:p-8 flex-col items-center lg:p-10">
          <div>
            {/* <p className="font-section-label text-center text-xs font-bold uppercase tracking-[0.35em] text-slate-500">
              Our Partners
            </p>
            <h2 className="font-heading text-center mt-4 max-w-3xl text-4xl font-semibold leading-tight text-[#172235] sm:text-5xl">
              Global Partners
            </h2> */}
            <p className="max-w-3xl text-center text-sm leading-7 text-slate-600 sm:text-base">
              FON Group works with an international network of paper, packaging, machinery, and industrial supply
              partners to strengthen production quality and keep our manufacturing ecosystem moving.
            </p>
          </div>

          <div className="gap-4 sm:grid-cols-3 grid w-full max-w-3xl grid-cols-1">
            {summaryCards.map((card) => (
              <div key={card.label} className="rounded-2xl border border-slate-200 bg-[#fbfcfa] p-5 text-left">
                <p className="font-heading text-3xl font-semibold text-[#003246]">{card.value}</p>
                <p className="mt-2 text-sm leading-5 text-slate-500">{card.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 space-y-14">
          {partnerGroups.map((group) => (
            <div key={group.category}>
              <div className="flex flex-col gap-3 border-b border-slate-200 pb-5 text-left md:flex-row md:items-end md:justify-between">
                <div>
                  <p className="font-section-label text-[0.68rem] font-bold uppercase tracking-[0.3em] text-slate-400">
                    Partner Category
                  </p>
                  <h3 className="font-heading mt-2 text-2xl font-semibold text-[#172235]">{group.category}</h3>
                </div>
                <p className="max-w-xl text-sm leading-6 text-slate-500">{group.description}</p>
              </div>

              <div className="mt-7 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {group.partners.map((partner, index) => (
                  <motion.a
                    key={partner.name}
                    href={partner.href}
                    target="_blank"
                    rel="noreferrer"
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.35 }}
                    transition={{ duration: 0.42, delay: index * 0.035, ease: [0.16, 1, 0.3, 1] }}
                    aria-label={`Visit ${partner.name} website`}
                    className="group relative flex h-34 items-center justify-center rounded-2xl border border-slate-200/80 bg-white px-6 shadow-[0_12px_32px_rgba(15,23,42,0.04)] transition duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:border-[#003246]/25 hover:shadow-[0_22px_55px_rgba(15,23,42,0.09)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#003246] focus-visible:ring-offset-4"
                  >
                    <span className="absolute right-3 top-3 flex h-7 w-7 items-center justify-center rounded-full bg-slate-100 text-slate-400 opacity-0 transition duration-300 group-hover:opacity-100 group-hover:text-[#003246] group-focus-visible:opacity-100 group-focus-visible:text-[#003246]">
                      <ExternalLink aria-hidden="true" size={13} strokeWidth={1.9} />
                    </span>
                    <span className="sr-only">Visit website</span>
                    <img
                      src={partner.image}
                      alt={partner.name}
                      className="max-h-18 max-w-50 object-contain transition duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
                    />
                  </motion.a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </SectionContainer>
    </section>
  );
}

export default PartnersGrid;
