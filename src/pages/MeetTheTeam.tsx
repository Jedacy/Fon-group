import TeamSections from "../components/MeetTheTeam/TeamSections"
import PageHero from "../components/shared/PageHero"

function MeetTheTeam() {
  return (
    <main className="bg-white pt-20">
      <PageHero title="Meet the Team"/>
      <TeamSections />
    </main>
  )
}

export default MeetTheTeam
