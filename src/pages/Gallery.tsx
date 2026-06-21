import GalleryListing from "../components/Gallery/GalleryListing";
import PageHero from "../components/shared/PageHero";

function Gallery() {
  return (
    <main className="bg-white pt-20">
      <PageHero title="Gallery"/>
      <GalleryListing />
    </main>
  );
}

export default Gallery;
