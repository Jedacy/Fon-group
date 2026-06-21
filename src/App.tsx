import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
import ScrollToTop from "./components/shared/ScrollToTop";

const Awards = lazy(() => import("./pages/Awards"));
const Contact = lazy(() => import("./pages/Contact"));
const Gallery = lazy(() => import("./pages/Gallery"));
const Home = lazy(() => import("./pages/Home"));
const MeetTheTeam = lazy(() => import("./pages/MeetTheTeam"));
const News = lazy(() => import("./pages/News"));
const NewsDetail = lazy(() => import("./pages/NewsDetail"));
const Oasis = lazy(() => import("./pages/Oasis"));
const OurStory = lazy(() => import("./pages/OurStory"));
const Partners = lazy(() => import("./pages/Partners"));
const TeamProfile = lazy(() => import("./pages/TeamProfile"));
const TheGroup = lazy(() => import("./pages/TheGroup"));
const WhoWeAre = lazy(() => import("./pages/WhoWeAre"));

function RouteFallback() {
  return (
    <main className="min-h-screen bg-white pt-20">
      <div className="mx-auto flex min-h-120 max-w-7xl items-center px-6 sm:px-10 lg:px-14">
        <div className="h-2 w-28 overflow-hidden rounded-full bg-slate-100">
          <div className="h-full w-12 rounded-full bg-[#003246] motion-safe:animate-[news-shimmer_1.8s_ease-in-out_infinite]" />
        </div>
      </div>
    </main>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen w-full bg-white text-slate-950">
        <ScrollToTop />
        <Navbar />
        <Suspense fallback={<RouteFallback />}>
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
        </Suspense>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
