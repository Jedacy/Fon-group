import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import Home from "./pages/Home";
import MeetTheTeam from "./pages/MeetTheTeam";
import News from "./pages/News";
import NewsDetail from "./pages/NewsDetail";
import OurStory from "./pages/OurStory";
import Partners from "./pages/Partners";
import TheGroup from "./pages/TheGroup";
import TeamProfile from "./pages/TeamProfile";
import WhoWeAre from "./pages/WhoWeAre";
import Awards from "./pages/Awards";
import Oasis from "./pages/Oasis";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen w-full bg-white text-slate-950">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/who-we-are" element={<WhoWeAre />} />
          <Route path="/our-story" element={<OurStory />} />
          <Route path="/meet-the-team" element={<MeetTheTeam />} />
          <Route path="/meet-the-team/:slug" element={<TeamProfile />} />
          <Route path="/the-group" element={<TheGroup />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/news" element={<News />} />
          <Route path="/news/:slug" element={<NewsDetail />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/awards" element={<Awards />} />
          <Route path="/oasis" element={<Oasis />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
