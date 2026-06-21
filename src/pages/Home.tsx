import GroupCompaniesSection from "../components/Home/GroupCompaniesSection";
import HeroSection from "../components/Home/HeroSection";
import NewsSection from "../components/Home/NewsSection";
import OurStorySection from "../components/Home/OurStorySection";
import VideoPlaceholderSection from "../components/Home/VideoPlaceholderSection";
import WhoWeAreSection from "../components/Home/WhoWeAreSection";

function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-white">
      <HeroSection />
      <WhoWeAreSection />
      <VideoPlaceholderSection />
      <OurStorySection />
      <GroupCompaniesSection />
      <NewsSection />
    </main>
  );
}

export default Home;
