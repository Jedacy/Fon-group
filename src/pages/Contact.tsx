
import ContactDirectory from "../components/Contact/ContactDirectory";
import PageHero from "../components/shared/PageHero";

function Contact() {
  return (
    <main className="bg-white pt-20">
      <PageHero title="Contact us" />
      <ContactDirectory />
    </main>
  );
}

export default Contact;
