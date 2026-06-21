import { Mail } from "lucide-react";
import { Link } from "react-router-dom";
import SectionContainer from "../shared/SectionContainer";
import { founders, management } from "./teamData";

function TeamSections() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <SectionContainer>
        <h2 className="font-heading text-center text-3xl font-medium text-slate-950 sm:text-4xl">Founders</h2>

        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          {founders.map((member) => (
            <Link
              key={member.name}
              to={`/meet-the-team/${member.slug}`}
              className="group overflow-hidden rounded-xl bg-slate-100 outline-none ring-[#f1c400] transition duration-300 hover:-translate-y-1 hover:shadow-xl focus-visible:ring-2"
            >
              <div className="relative aspect-3/4 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 bg-white/90 px-7 py-6 backdrop-blur-sm">
                  <h3 className="font-heading text-2xl font-bold leading-tight text-slate-950 sm:text-3xl">
                    {member.name}
                  </h3>
                  <p className="mt-2 text-xl leading-7 text-slate-400">{member.role}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <h2 className="font-heading mt-28 text-center text-3xl font-medium text-slate-950 sm:text-4xl">Management</h2>

        <div className="mt-12 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {management.map((member) => (
            <article key={member.name} className="min-w-0">
              <div className="relative overflow-hidden rounded-lg bg-slate-100">
                <Link
                  to={`/meet-the-team/${member.slug}`}
                  className="group block outline-none ring-[#f1c400] focus-visible:ring-2"
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="aspect-3/4 w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </Link>
                <div className="absolute right-4 top-4 grid gap-3">
                  <a
                    href="#"
                    onClick={(event) => event.stopPropagation()}
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/85 text-xs font-bold text-blue-600 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:bg-white"
                    aria-label={`${member.name} LinkedIn`}
                  >
                    in
                  </a>
                  <a
                    href="#"
                    onClick={(event) => event.stopPropagation()}
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/85 text-slate-700 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:bg-white"
                    aria-label={`Email ${member.name}`}
                  >
                    <Mail aria-hidden="true" size={17} strokeWidth={2.2} />
                  </a>
                </div>
              </div>

              <Link to={`/meet-the-team/${member.slug}`} className="group/name mt-5 block outline-none">
                <h3 className="font-heading text-xl font-bold leading-tight text-slate-950 transition duration-200 group-hover/name:text-[#003246]">
                  {member.name}
                </h3>
              </Link>
              <p className="mt-2 text-base leading-6 text-slate-600">{member.role}</p>
              <p className="mt-1 text-sm font-medium uppercase tracking-normal text-slate-400">{member.company}</p>
            </article>
          ))}
        </div>
      </SectionContainer>
    </section>
  );
}

export default TeamSections;
