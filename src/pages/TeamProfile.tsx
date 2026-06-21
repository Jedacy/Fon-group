import { Link, useParams } from "react-router-dom";
import TeamProfileDetail from "../components/MeetTheTeam/TeamProfileDetail";
import { getTeamMemberBySlug } from "../components/MeetTheTeam/teamData";
import SectionContainer from "../components/shared/SectionContainer";

function TeamProfile() {
  const { slug } = useParams();
  const member = getTeamMemberBySlug(slug);

  if (!member) {
    return (
      <main className="bg-white pt-20">
        <section className="py-24">
          <SectionContainer>
            <p className="text-sm font-medium text-[#626ac8]">Meet the team</p>
            <h1 className="font-heading mt-4 text-4xl font-bold text-slate-950">Profile not found</h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-slate-500">
              The team profile you are looking for is not available.
            </p>
            <Link
              to="/meet-the-team"
              className="mt-8 inline-flex rounded-md bg-[#002f43] px-5 py-3 text-sm font-semibold text-white transition duration-200 hover:bg-[#06465f]"
            >
              Back to the team
            </Link>
          </SectionContainer>
        </section>
      </main>
    );
  }

  return (
    <main className="bg-white pt-20">
      <TeamProfileDetail member={member} />
    </main>
  );
}

export default TeamProfile;
