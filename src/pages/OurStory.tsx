import Intro from "../components/About/OurStory/Intro"
import TimelineSection from "../components/About/OurStory/TimelineSection"
import PageHero from "../components/shared/PageHero"

function OurStory() {
  return (
    <main className="bg-white pt-20">
      <PageHero title="Our Story" />
      <Intro/>
      <TimelineSection />
    </main>
  )
}

export default OurStory
