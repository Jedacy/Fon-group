
import HorizonSection from "../components/About/WhoWeAre/HorizonSection";
import MissionSection from "../components/About/WhoWeAre/MissionSection";
import WhoWeAreIntro from "../components/About/WhoWeAre/WhoWeAreIntro";
import PageHero from "../components/shared/PageHero";

function WhoWeAre() {
  return (
    <main className="bg-white pt-20">
      <PageHero title="Who we are" />
      <WhoWeAreIntro />
      <MissionSection />
      <HorizonSection />
    </main>
  );
}

export default WhoWeAre;
