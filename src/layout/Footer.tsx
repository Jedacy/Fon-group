import { ArrowUp, BriefcaseBusiness, Camera, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/optimized/Logo.webp";

const groupLinks = [
  { label: "Fon Ltd", to: "/the-group" },
  { label: "Fon Packaging", to: "/the-group" },
  { label: "Fonstat", to: "/the-group" },
  { label: "Oasis Properties", to: "/oasis" },
  { label: "Chop Time", to: "/the-group" },
];

const aboutLinks = [
  { label: "About Us", to: "/who-we-are" },
  { label: "News", to: "/news" },
  { label: "Partners", to: "/partners" },
];

function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer id="contact" className="bg-[#12151a] text-white">
      <div className="mx-auto max-w-7xl px-6 py-14 sm:px-10 lg:px-14">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
          <img
            src={logo}
            alt="FON Group"
            className="h-8 w-auto max-w-[160px] object-contain md:h-10"
            decoding="async"
            loading="lazy"
          />
          <Link
            to="/contact"
            className="inline-flex w-fit items-center justify-center rounded-full bg-white px-7 py-3 text-sm font-semibold text-[#1f242b] transition duration-200 hover:bg-slate-100"
          >
            Make an appointment
          </Link>
        </div>

        <div className="mt-9 h-px w-full bg-white/12" />

        <div className="grid gap-10 py-8 sm:grid-cols-2 lg:grid-cols-[1.35fr_1fr_0.65fr_1.5fr_0.35fr]">
          <div>
            <h2 className="text-base font-semibold">Address</h2>
            <p className="mt-6 max-w-xs text-base leading-7 text-white/55">
              Sales Depot: Paper House, Alajo, Accra, Ghana
              <br />
              Factory: Spintex Road, Accra, Ghana
            </p>
          </div>

          <div>
            <h2 className="text-base font-semibold">The Group</h2>
            <ul className="mt-6 grid gap-3 text-sm text-white/55">
              {groupLinks.map((link, index) => (
                <li key={link.label}>
                  <Link to={link.to} className="transition duration-200 hover:text-white">
                    {link.label}
                    {index < 4 ? <ExternalLink aria-hidden="true" className="ml-1 inline-block" size={12} /> : null}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-base font-semibold">About</h2>
            <ul className="mt-6 grid gap-3 text-sm text-white/55">
              {aboutLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className="transition duration-200 hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-base font-semibold">Contact us</h2>
            <p className="mt-6 text-base leading-7 text-white/55">
              +233 302 235 053 (FON LTD)
              <br />
              +233 302 814 812 (FON PACKAGING)
              <br />
              +233 302 231 794 (FONSTAT LTD)
              <br />
              +233 302 770 627 (OASIS PROPERTIES)
            </p>
          </div>

          <div className="flex items-start gap-3 lg:justify-end">
            <a
              href="https://www.instagram.com/thefongroup?igsh=MWJkdGgzdzBiZTFlaA=="
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-xs font-semibold text-white/80 transition duration-200 hover:bg-white hover:text-[#12151a]"
              aria-label="Instagram"
            >
              <Camera aria-hidden="true" size={18} />
            </a>
            <a
              href="https://www.linkedin.com/company/thefongroup/posts/?feedView=all"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-xs font-semibold text-white/80 transition duration-200 hover:bg-white hover:text-[#12151a]"
              aria-label="LinkedIn"
            >
              <BriefcaseBusiness aria-hidden="true" size={18} />
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-white/45">(c) 2026 Fon Group</p>
          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex h-12 w-12 items-center justify-center self-start rounded-full bg-white text-2xl leading-none text-[#1f242b] transition duration-200 hover:-translate-y-1 hover:bg-slate-100 sm:self-auto"
            aria-label="Scroll to top"
          >
            <ArrowUp aria-hidden="true" size={22} />
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
