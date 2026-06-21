import { Mail, MapPin, Phone } from "lucide-react";
import fonLtdLogo from "../../assets/optimized/Fon Ltd.webp";
import fonPackagingLogo from "../../assets/optimized/Fon Packaging.webp";
import fonstatLogo from "../../assets/optimized/FonStat.webp";
import oasisLogo from "../../assets/optimized/Oasis.webp";
import SectionContainer from "../shared/SectionContainer";

const contacts = [
  {
    name: "FON LTD",
    logo: fonLtdLogo,
    logoClassName: "h-20",
    email: "info@fontd.com",
    phone: "+233 302 235 053",
    address: ["Sales Depot: Paper House, Alajo, Accra, Ghana", "Factory: Spintex Road, Accra, Ghana"],
  },
  {
    name: "FON Packaging",
    logo: fonPackagingLogo,
    logoClassName: "h-[52px]",
    email: "info@fonpackaging.com",
    phone: "+233 302 814 812",
    address: ["Spintex Rd, Accra, Ghana"],
  },
  {
    name: "Fonstat",
    logo: fonstatLogo,
    logoClassName: "h-16",
    email: "info@fonstat.com",
    phone: "+233 302 231 794",
    address: ["Fadama St, Accra, Ghana"],
  },
  {
    name: "Oasis Properties",
    logo: oasisLogo,
    logoClassName: "h-[68px]",
    email: "reservations@oasislodge.com",
    phone: "+233 302 770 627",
    address: ["47 North Airport Residential Area, Accra, Ghana"],
  },
];

function ContactDirectory() {
  return (
    <section className="bg-white py-24 sm:py-28">
      <SectionContainer>
        <h2 className="font-heading text-3xl font-medium leading-tight text-slate-950 sm:text-4xl">
          Reach out to us via
        </h2>

        <div className="mt-14 grid gap-x-24 gap-y-20 lg:grid-cols-2">
          {contacts.map((contact) => (
            <article key={contact.name} className="min-w-0">
              <div className="flex h-24 items-center">
                <img
                  src={contact.logo}
                  alt={contact.name}
                  className={`${contact.logoClassName} w-auto object-contain`}
                  decoding="async"
                  loading="lazy"
                />
              </div>

              <div className="mt-7 grid gap-5 text-[15px] text-slate-950">
                <a
                  href={`mailto:${contact.email}`}
                  className="flex items-center gap-5 underline decoration-slate-950 underline-offset-4 transition duration-200 hover:text-[#003246]"
                >
                  <Mail aria-hidden="true" size={20} strokeWidth={2} className="shrink-0" />
                  <span className="break-all">{contact.email}</span>
                </a>

                <a
                  href={`tel:${contact.phone.replaceAll(" ", "")}`}
                  className="flex items-center gap-5 transition duration-200 hover:text-[#003246]"
                >
                  <Phone aria-hidden="true" size={20} strokeWidth={2} className="shrink-0" />
                  <span>{contact.phone}</span>
                </a>

                <div className="flex items-start gap-5">
                  <MapPin aria-hidden="true" size={21} strokeWidth={2} className="mt-0.5 shrink-0" />
                  <p className="max-w-md text-[15px] leading-7 text-slate-950">
                    {contact.address.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </SectionContainer>
    </section>
  );
}

export default ContactDirectory;
