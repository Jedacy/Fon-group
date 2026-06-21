import NewsListing from "../components/News/NewsListing";
import PageHero from "../components/shared/PageHero";

function News() {
  return (
    <main className="bg-white pt-20">
      <PageHero title="News" />
      <NewsListing />
    </main>
  );
}

export default News;
