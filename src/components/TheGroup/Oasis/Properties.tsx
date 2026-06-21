import { useEffect, useId, useState } from "react";
import {
  AirVent,
  BedDouble,
  BriefcaseBusiness,
  Camera,
  Car,
  ChevronRight,
  Clock3,
  Globe2,
  Mail,
  MapPin,
  Tv,
  Utensils,
  WashingMachine,
  Waves,
  Wifi,
  X,
} from "lucide-react";
import adwoaOne from "../../../assets/optimized/Oasis Properties/Adwoa Boatemaa 1.webp";
import adwoaTwo from "../../../assets/optimized/Oasis Properties/Adwoa Boatemaa 2.webp";
import adwoaThree from "../../../assets/optimized/Oasis Properties/Adwoa Boatemaa 3.webp";
import commercialImage from "../../../assets/optimized/Oasis Properties/Commercial.webp";
import oasisExterior from "../../../assets/optimized/Oasis Properties/oasis.webp";
import oasisLodgeOne from "../../../assets/optimized/Oasis Properties/Oasis Lodge1.webp";
import oasisLodgeTwo from "../../../assets/optimized/Oasis Properties/Oasis Lodge2.webp";
import oasisLodgeThree from "../../../assets/optimized/Oasis Properties/Oasis Lodge3.webp";
import osafoOne from "../../../assets/optimized/Oasis Properties/Osafo 1.webp";
import osafoTwo from "../../../assets/optimized/Oasis Properties/Osafo 2.webp";
import osafoThree from "../../../assets/optimized/Oasis Properties/Osafo 3.webp";
import SectionContainer from "../../shared/SectionContainer";

type AmenityIcon =
  | "air"
  | "camera"
  | "car"
  | "kitchen"
  | "pool"
  | "tv"
  | "washer"
  | "wifi"
  | "workspace";

type PropertyCta =
  | { type: "links"; links: { label: string; href: string; variant: "dark" | "gold" | "pink"; icon: "airbnb" | "email" | "website" }[] }
  | { type: "coming-soon" };

type OasisProperty = {
  id: string;
  title: string;
  cardTitle: string;
  location: string;
  cardLocation: string;
  beds?: string;
  description: string[];
  amenities: { label: string; icon: AmenityIcon }[];
  thumbnail: string;
  gallery: string[];
  cta: PropertyCta;
};

const amenityIcons: Record<AmenityIcon, typeof Utensils> = {
  air: AirVent,
  camera: Camera,
  car: Car,
  kitchen: Utensils,
  pool: Waves,
  tv: Tv,
  washer: WashingMachine,
  wifi: Wifi,
  workspace: BriefcaseBusiness,
};

const properties: OasisProperty[] = [
  {
    id: "oasis-lodge",
    title: "Oasis Lodge",
    cardTitle: "Oasis Lodge",
    location: "West Airport Residential Area",
    cardLocation: "N Airport Residential Area",
    beds: "2 - 4 Beds",
    description: [
      "Oasis Lodge is the epitome of luxury and privacy comprising eight fully furnished flats located at the luxurious Airport Residential area, Accra.",
      "At Oasis Lodge, our goal is to provide the perfect environment for our guests who are especially desirous of living in a Home while on vacation or business trip to Accra. We aim to improve the facilities we offer, our service and your surroundings to ensure you and your family enjoy the very best of both worlds.",
    ],
    amenities: [
      { label: "Kitchen", icon: "kitchen" },
      { label: "Wifi", icon: "wifi" },
      { label: "Dedicated Workspace", icon: "workspace" },
      { label: "Free parking on premises", icon: "car" },
      { label: "Pool", icon: "pool" },
      { label: "TV", icon: "tv" },
      { label: "Washer", icon: "washer" },
      { label: "Air Conditioning", icon: "air" },
      { label: "Exterior security cameras on property", icon: "camera" },
    ],
    thumbnail: oasisLodgeOne,
    gallery: [oasisLodgeOne, oasisLodgeTwo, oasisLodgeThree, oasisExterior],
    cta: {
      type: "links",
      links: [
        { label: "Visit website", href: "#", variant: "gold", icon: "website" },
        { label: "Book with airbnb", href: "#", variant: "pink", icon: "airbnb" },
      ],
    },
  },
  {
    id: "adwoa-boatemma",
    title: "Adwoa Boatemma Residences",
    cardTitle: "Adwoa Boatemma Residences",
    location: "West Airport Residential Area",
    cardLocation: "W Airport Residential Area",
    beds: "2 - 4 Beds",
    description: [
      "Currently in the development phase, the Adwoa Boatemma Residences is envisioned as a serene and modern sanctuary that blends luxury with tranquility.",
      "While the project is currently taking shape, current visual representations including detailed 3D renderings showcase an end goal defined by sophisticated design and premium amenities.",
    ],
    amenities: [
      { label: "Kitchen", icon: "kitchen" },
      { label: "Dedicated Workspace", icon: "workspace" },
      { label: "Wifi", icon: "wifi" },
      { label: "Free parking on premises", icon: "car" },
    ],
    thumbnail: adwoaOne,
    gallery: [adwoaOne, adwoaTwo, adwoaThree],
    cta: { type: "coming-soon" },
  },
  {
    id: "commercial-property",
    title: "Commercial Property for Rent - (Fonstat Limited Building)",
    cardTitle: "Commercial Property for Rent - (Fonstat Limited Building)",
    location: "Abelenkpe",
    cardLocation: "Abelenkpe",
    description: [
      "Position your business within a landmark of Ghanaian industrial excellence. Located within the established premises of Fonstat Limited, we are offering versatile commercial floor space designed to meet the needs of businesses seeking a secure, well-managed, and accessible location.",
      "Situated within a high-activity industrial and commercial hub, it is ideal for logistics, satellite offices, or service-based businesses.",
    ],
    amenities: [
      { label: "Kitchen", icon: "kitchen" },
      { label: "Dedicated Workspace", icon: "workspace" },
      { label: "Wifi", icon: "wifi" },
      { label: "Free parking on premises", icon: "car" },
    ],
    thumbnail: commercialImage,
    gallery: [commercialImage],
    cta: {
      type: "links",
      links: [{ label: "Email", href: "#", variant: "dark", icon: "email" }],
    },
  },
  {
    id: "osafo-residences",
    title: "Osafo Residences",
    cardTitle: "Osafo Residences",
    location: "Abelenkpe",
    cardLocation: "Abelenkpe",
    beds: "4 bedroom each",
    description: [
      "Osafo Residences is the newest premium residential landmark within the Oasis Properties portfolio, strategically situated in the heart of Abelenkpe.",
      "Currently nearing completion, the project is transitioning from its vision phase into a tangible sanctuary for urban dwellers. It is designed to offer a sophisticated lifestyle defined by privacy, comfort, and elegance.",
    ],
    amenities: [
      { label: "Kitchen", icon: "kitchen" },
      { label: "Wifi", icon: "wifi" },
      { label: "Dedicated Workspace", icon: "workspace" },
      { label: "Free parking on premises", icon: "car" },
      { label: "Pool", icon: "pool" },
      { label: "TV", icon: "tv" },
      { label: "Washer", icon: "washer" },
      { label: "Air Conditioning", icon: "air" },
      { label: "Exterior security cameras on property", icon: "camera" },
    ],
    thumbnail: osafoOne,
    gallery: [osafoOne, osafoTwo, osafoThree],
    cta: { type: "coming-soon" },
  },
];

function PropertyCard({ property, onOpen }: { property: OasisProperty; onOpen: (property: OasisProperty) => void }) {
  return (
    <button
      type="button"
      onClick={() => onOpen(property)}
      className="group grid max-h-36 w-full grid-cols-[132px_1fr_auto] items-center overflow-hidden rounded-2xl border border-slate-200 bg-white text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#003a4f] sm:grid-cols-[170px_1fr_auto] transition duration-300 hover:border-slate-300 hover:shadow-xl cursor-pointer"
    >
      <img
        src={property.thumbnail}
        alt=""
        className="h-full min-h-36 w-full object-cover"
        decoding="async"
        loading="lazy"
      />
      <div className="min-w-0 px-5 py-5 sm:px-6">
        <h2 className="font-heading text-lg font-medium leading-snug text-slate-950 sm:text-xl">{property.cardTitle}</h2>
        <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-slate-700">
          <span className="inline-flex items-center gap-2">
            <MapPin aria-hidden="true" size={18} strokeWidth={2} />
            {property.cardLocation}
          </span>
          {property.id === "osafo-residences" && property.beds ? (
            <span className="inline-flex items-center gap-2">
              <BedDouble aria-hidden="true" size={18} strokeWidth={2} />
              {property.beds}
            </span>
          ) : null}
        </div>
      </div>
      <span className="mr-5 flex h-10 w-10 items-center justify-center text-slate-950 transition duration-300 group-hover:translate-x-1">
        <ChevronRight aria-hidden="true" size={34} strokeWidth={2.4} />
      </span>
    </button>
  );
}

function AmenityList({ amenities }: { amenities: OasisProperty["amenities"] }) {
  return (
    <div className="grid gap-x-8 gap-y-5 sm:grid-cols-2 lg:grid-cols-3">
      {amenities.map((amenity) => {
        const Icon = amenityIcons[amenity.icon];

        return (
          <div key={amenity.label} className="flex items-center gap-2.5 text-sm text-slate-600">
            <Icon aria-hidden="true" size={22} strokeWidth={1.9} className="shrink-0 text-slate-950" />
            <span>{amenity.label}</span>
          </div>
        );
      })}
    </div>
  );
}

function ModalGallery({ property }: { property: OasisProperty }) {
  if (property.gallery.length === 1) {
    return (
      <img
        src={property.gallery[0]}
        alt=""
        className="mt-10 aspect-[1.65] w-full object-cover"
        decoding="async"
        loading="lazy"
      />
    );
  }

  return (
    <div className="mt-10 grid gap-4">
      <img
        src={property.gallery[0]}
        alt=""
        className="aspect-[2.55] w-full object-cover"
        decoding="async"
        loading="lazy"
      />
      <div className="grid gap-4 sm:grid-cols-2">
        {property.gallery.slice(1).map((image) => (
          <img
            key={image}
            src={image}
            alt=""
            className="aspect-[1.45] w-full object-cover"
            decoding="async"
            loading="lazy"
          />
        ))}
      </div>
    </div>
  );
}

function PropertyActions({ cta }: { cta: PropertyCta }) {
  if (cta.type === "coming-soon") {
    return (
      <div className="mt-14 flex flex-col items-center justify-center gap-4 py-4 text-center text-slate-700">
        <Clock3 aria-hidden="true" size={34} strokeWidth={1.8} className="text-indigo-600" />
        <p className="font-heading text-3xl font-medium">Coming Soon!!</p>
      </div>
    );
  }

  return (
    <div className="mt-10">
      <p className="text-base text-slate-600">For more information, contact us via</p>
      <div className="mt-5 flex flex-wrap gap-4">
        {cta.links.map((link) => {
          const isGold = link.variant === "gold";
          const isPink = link.variant === "pink";

          return (
            <a
              key={link.label}
              href={link.href}
              className={`inline-flex items-center gap-3 rounded-xl px-7 py-4 text-base font-semibold text-white transition duration-300 hover:-translate-y-0.5 ${
                isGold ? "bg-[#d18600] hover:bg-[#b97600]" : isPink ? "bg-[#ff385c] hover:bg-[#e52f50]" : "bg-[#0e1117] hover:bg-[#20242c]"
              }`}
            >
              {link.icon === "website" ? <Globe2 aria-hidden="true" size={25} /> : null}
              {link.icon === "email" ? <Mail aria-hidden="true" size={25} /> : null}
              {link.icon === "airbnb" ? <span className="text-2xl leading-none">A</span> : null}
              {link.label}
            </a>
          );
        })}
      </div>
    </div>
  );
}

function PropertyModal({ property, onClose }: { property: OasisProperty | null; onClose: () => void }) {
  const titleId = useId();

  useEffect(() => {
    if (!property) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose, property]);

  if (!property) {
    return null;
  }

  return (
    <div
      className="oasis-modal-overlay fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-slate-950/55 px-4 py-6 backdrop-blur-sm sm:px-6 sm:py-10"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <article
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="oasis-modal-panel relative w-full max-w-4xl rounded-3xl bg-white px-6 py-8 text-slate-950 shadow-2xl sm:px-12 sm:py-12 lg:px-14"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close property details"
          className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-200 text-slate-950 transition duration-200 hover:bg-slate-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-950"
        >
          <X aria-hidden="true" size={27} strokeWidth={1.8} />
        </button>

        <h2 id={titleId} className="font-heading mt-10 max-w-3xl text-4xl font-semibold leading-tight sm:text-5xl">
          {property.title}
        </h2>

        <div className="mt-8 max-w-3xl space-y-5 text-base leading-7 text-slate-600">
          {property.description.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <div className="mt-7 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-slate-600">
          <span className="inline-flex items-center gap-2">
            <MapPin aria-hidden="true" size={21} strokeWidth={1.9} className="text-slate-950" />
            {property.location}
          </span>
          {property.beds ? (
            <span className="inline-flex items-center gap-2">
              <BedDouble aria-hidden="true" size={22} strokeWidth={1.9} className="text-slate-950" />
              {property.beds}
            </span>
          ) : null}
        </div>

        <div className="mt-8">
          <h3 className="font-heading text-lg font-semibold text-slate-950">What this place offers</h3>
          <div className="mt-6">
            <AmenityList amenities={property.amenities} />
          </div>
        </div>

        <ModalGallery property={property} />
        <PropertyActions cta={property.cta} />
      </article>
    </div>
  );
}

function Properties() {
  const [selectedProperty, setSelectedProperty] = useState<OasisProperty | null>(null);

  return (
    <section className="bg-white py-24 sm:py-28">
      <SectionContainer>
        <h1 className="font-heading text-2xl font-medium text-slate-950 sm:text-3xl">
          Check out a number of our properties
        </h1>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {properties.map((property) => (
            <PropertyCard key={property.id} property={property} onOpen={setSelectedProperty} />
          ))}
        </div>

        <div className="mt-16 sm:ml-10">
          <h2 className="font-heading text-xl font-medium text-slate-950 sm:text-2xl">Locations under development:</h2>
          <div className="mt-6 grid gap-5 text-sm text-slate-700">
            {["Aburi", "Katamanso"].map((location) => (
              <div key={location} className="flex items-center gap-3">
                <MapPin aria-hidden="true" size={22} strokeWidth={2} className="text-slate-950" />
                {location}
              </div>
            ))}
          </div>
        </div>
      </SectionContainer>

      <PropertyModal property={selectedProperty} onClose={() => setSelectedProperty(null)} />
    </section>
  );
}

export default Properties;
