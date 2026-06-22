import { Mail } from "lucide-react";
import { Link } from "react-router-dom";
import SectionContainer from "../shared/SectionContainer";
import type { TeamMember } from "./teamData";

type TeamProfileDetailProps = {
  member: TeamMember;
};

function TeamProfileDetail({ member }: TeamProfileDetailProps) {
  return (
    <section className="bg-white py-12">
      <SectionContainer>
        <Link
          to="/meet-the-team"
          className="text-base font-medium text-[#626ac8] transition duration-200 hover:text-[#30378f]"
        >
          Meet the team &gt; {member.profileRole}
        </Link>

        <p className="mt-4 text-xl font-medium text-slate-950">{member.company ?? member.profileRole}</p>
        <h1 className="font-heading mt-4 text-4xl font-semibold leading-tight text-black sm:text-5xl md:text-6xl">
          {member.name}
        </h1>

        <div className="mt-14 grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <div>
            <div className=" rounded-2xl bg-[#d2d2d2] ring-1 ring-slate-300">
              <img
                src={member.image}
                alt={member.name}
                className="overflow-x-visible aspect-[0.74/1] w-full object-cover object-top"
                decoding="async"
                loading="lazy"
              />
            </div>

            <div className="mt-9 flex flex-wrap gap-4">
              {member.linkedInUrl ? (
                <a
                  href={member.linkedInUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-md bg-[#1145d8] px-4 py-3 text-sm font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:bg-[#0d35aa]"
                >
                  <span className="inline-flex h-5 w-5 items-center justify-center rounded-sm bg-white text-xs font-bold text-[#1145d8]">
                    in
                  </span>
                  LinkedIn
                </a>
              ) : null}

              {member.hasEmail ? (
                <a
                  href="#"
                  className="inline-flex items-center gap-2 rounded-md bg-[#111318] px-4 py-3 text-sm font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:bg-black"
                >
                  <Mail aria-hidden="true" size={18} />
                  Email
                </a>
              ) : null}
            </div>
          </div>

          <div className="space-y-7 text-lg leading-8 text-black sm:text-xl sm:leading-9">
            {member.biography.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}

export default TeamProfileDetail;
