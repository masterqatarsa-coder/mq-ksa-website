import { PageHero, SectionHeading } from "@/components/UIComponents";
import { useState, useEffect } from 'react';
import abrajBayImg from "@/assets/projects/abraj-bay-100.jpg";
import alBaytStadiumImg from "@/assets/projects/al-bayt-stadium.jpg";
import alBqerHotelImg from "@/assets/projects/al-bqer-hotel-100.jpg";
import alJanubStadiumImg from "@/assets/projects/al-janub-stadium(FIFA).jpg";
import alJazeeraImg from "@/assets/projects/al-jazeera.jpg";
import alThumammaImg from "@/assets/projects/al-thumamma-100.jpg";
import amanHospitalImg from "@/assets/projects/aman-hospital-100.jpg";
import barwaCommercialImg from "@/assets/projects/barwa-commercial-100.jpg";
import binAlSheikhImg from "@/assets/projects/bin-al-sheikh-towers-100.jpg";
import brtBusDepotImg from "@/assets/projects/brt-bus-depot-100.jpg";
import dohaCityHubImg from "@/assets/projects/doha-city-hub-100.jpg";
import dohaMetroImg from "@/assets/projects/doha-metro.jpg";
import educationalCityImg from "@/assets/projects/educational-city-100.jpg";
import emiriTerminalImg from "@/assets/projects/emiri-terminal.jpg";
import hamadIntAirportImg from "@/assets/projects/hamad-int-airport.png";
import kataraTowerImg from "@/assets/projects/katara-tower-100.jpg";
import khalifAstadiumImg from "@/assets/projects/khalif-astadium-100.jpg";
import lusailStadiumImg from "@/assets/projects/lusail-stadium.jpg";
import lussailMarinaImg from "@/assets/projects/lussail-marina-100.jpg";
import miqrabDowntownImg from "@/assets/projects/miqrab-downtown-100.jpg";
import navalBaseImg from "@/assets/projects/naval-base-100.jpg";
import neworbitalhighwayImg from "@/assets/projects/neworbitalhighway.jpg";
import pearlQatarImg from "@/assets/projects/pearl-qatar.jpg";
import plasticFactoryImg from "@/assets/projects/plastic-factory-100.jpg";
import qatarFoundationFutureSchoolImg from "@/assets/projects/qatar-foundation-future-school.jpg";
import qatarMilitaryImg from "@/assets/projects/qatar-military-100.jpg";
import qatarCentralBankImg from "@/assets/projects/qatarcentralbank.jpeg";
import qatarFoundationHqImg from "@/assets/projects/qatarfoundation-hq.jpg";
import qnccImg from "@/assets/projects/qncc.jpg";
import souqwaqifUndergroundImg from "@/assets/projects/souqwaqifundergroundparking.jpeg";
import tenbekHospitalImg from "@/assets/projects/tenbek-hospital-100.jpg";
import viewHospitalImg from "@/assets/projects/view-hospital-100.jpg";
import mepImg from "../assets/service-mep.jpg";
import elvImg from "../assets/service-elv.jpg";

const qatarProjects = [
  {
    name: "Abraj Bay",
    category: "Commercial",
    scope: "MEP & ELV",
    img: abrajBayImg,
  },
  {
    name: "Al Bayt Stadium",
    category: "Stadium",
    scope: "MEP Contracting",
    img: alBaytStadiumImg,
  },
  {
    name: "Al Bqer Hotel",
    category: "Hotel",
    scope: "MEP & ELV Systems",
    img: alBqerHotelImg,
  },
  {
    name: "Al Janub Stadium (FIFA)",
    category: "Stadium",
    scope: "MEP & ELV",
    img: alJanubStadiumImg,
  },
  {
    name: "Al Jazeera",
    category: "Commercial",
    scope: "MEP",
    img: alJazeeraImg,
  },
  {
    name: "Al Thumamma",
    category: "Stadium",
    scope: "MEP Contracting",
    img: alThumammaImg,
  },
  {
    name: "Aman Hospital",
    category: "Hospital",
    scope: "MEP & ELV Systems",
    img: amanHospitalImg,
  },
  {
    name: "Barwa Commercial",
    category: "Commercial",
    scope: "MEP & ELV",
    img: barwaCommercialImg,
  },
  {
    name: "Bin Al Sheikh Towers",
    category: "Commercial",
    scope: "MEP Contracting",
    img: binAlSheikhImg,
  },
  {
    name: "BRT Bus Depot",
    category: "Infrastructure",
    scope: "MEP & ELV",
    img: brtBusDepotImg,
  },
  {
    name: "Doha City Hub",
    category: "Commercial",
    scope: "MEP",
    img: dohaCityHubImg,
  },
  {
    name: "Doha Metro",
    category: "Railway",
    scope: "MEP & ELV Systems",
    img: dohaMetroImg,
  },
  {
    name: "Educational City",
    category: "Education",
    scope: "MEP Contracting",
    img: educationalCityImg,
  },
  {
    name: "Emiri Terminal",
    category: "Airport",
    scope: "MEP & ELV",
    img: emiriTerminalImg,
  },
  {
    name: "Hamad International Airport",
    category: "Airport",
    scope: "MEP & ELV Systems",
    img: hamadIntAirportImg,
  },
  {
    name: "Katara Tower",
    category: "Commercial",
    scope: "MEP",
    img: kataraTowerImg,
  },
  {
    name: "Khalif A Stadium",
    category: "Stadium",
    scope: "MEP Contracting",
    img: khalifAstadiumImg,
  },
  {
    name: "Lusail Stadium",
    category: "Stadium",
    scope: "MEP & ELV",
    img: lusailStadiumImg,
  },
  {
    name: "Lussail Marina",
    category: "Residential",
    scope: "MEP",
    img: lussailMarinaImg,
  },
  {
    name: "Miqrab Downtown",
    category: "Commercial",
    scope: "MEP & Automation",
    img: miqrabDowntownImg,
  },
  {
    name: "Naval Base",
    category: "Infrastructure",
    scope: "MEP & ELV",
    img: navalBaseImg,
  },
  {
    name: "New Orbital Highway",
    category: "Infrastructure",
    scope: "MEP",
    img: neworbitalhighwayImg,
  },
  {
    name: "Pearl Qatar",
    category: "Residential",
    scope: "MEP Contracting",
    img: pearlQatarImg,
  },
  {
    name: "Plastic Factory",
    category: "Industrial",
    scope: "MEP",
    img: plasticFactoryImg,
  },
  {
    name: "Qatar Foundation Future School",
    category: "Education",
    scope: "MEP & ELV",
    img: qatarFoundationFutureSchoolImg,
  },
  {
    name: "Qatar Military",
    category: "Infrastructure",
    scope: "MEP & ELV",
    img: qatarMilitaryImg,
  },
  {
    name: "Qatar Central Bank",
    category: "Commercial",
    scope: "MEP",
    img: qatarCentralBankImg,
  },
  {
    name: "Qatar Foundation HQ",
    category: "Commercial",
    scope: "MEP Contracting",
    img: qatarFoundationHqImg,
  },
  {
    name: "Qatar National Convention Center",
    category: "Convention",
    scope: "MEP Contracting",
    img: qnccImg,
  },
  {
    name: "Souq Waqif Underground Parking",
    category: "Infrastructure",
    scope: "MEP",
    img: souqwaqifUndergroundImg,
  },
  {
    name: "Tenbek Hospital",
    category: "Hospital",
    scope: "MEP & ELV Systems",
    img: tenbekHospitalImg,
  },
  {
    name: "View Hospital",
    category: "Hospital",
    scope: "MEP & ELV",
    img: viewHospitalImg,
  },
];

const industries = [
  { title: "Airports", images: [hamadIntAirportImg, emiriTerminalImg], desc: "International aviation facilities requiring complex MEP and ELV integration." },
  { title: "Stadiums", images: [alBaytStadiumImg, alJanubStadiumImg, lusailStadiumImg, khalifAstadiumImg], desc: "Sports venues with advanced electrical, automation, and public address systems." },
  { title: "Hotels & Hospitality", images: [alBqerHotelImg], desc: "Luxury hospitality projects demanding precision MEP and building automation." },
  { title: "Railways & Metro", images: [dohaMetroImg], desc: "Mass transit infrastructure with sophisticated electrical and ELV systems." },
  { title: "Hospitals", images: [amanHospitalImg, tenbekHospitalImg, viewHospitalImg], desc: "Critical healthcare facilities requiring specialized MEP solutions." },
  { title: "Commercial Buildings", images: [abrajBayImg, alJazeeraImg, barwaCommercialImg, binAlSheikhImg, dohaCityHubImg, kataraTowerImg, miqrabDowntownImg, qatarCentralBankImg, qatarFoundationHqImg], desc: "Corporate towers, retail, and mixed-use developments across the GCC." },
];

interface ProjectsPageProps {
  embedded?: boolean;
}

// ImageSlider component that cycles through images
const ImageSlider = ({ images }: { images: string[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <img
      src={images[currentIndex]}
      alt="Project"
      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
    />
  );
};

export default function ProjectsPage({ embedded = false }: ProjectsPageProps) {
  return (
    <div>

      {!embedded && (
        <PageHero
        title="Our Projects"
        subtitle="A track record of excellence across landmark projects in the GCC region"
      />
      )}

      {/* Industries */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeading
            label="Industries We Serve"
            title="Sectors of Excellence"
            subtitle="Our expertise spans across the most demanding sectors of construction and engineering."
            center
          />
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((ind) => (
              <div
                key={ind.title}
                className="group relative rounded-xl overflow-hidden h-72 cursor-pointer shadow-card"
              >
                <ImageSlider images={ind.images} />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-900/50 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-condensed font-bold text-2xl text-primary-foreground mb-1">
                    {ind.title}
                  </h3>
                  <p className="text-primary-foreground/60 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {ind.desc}
                  </p>
                  <div className="h-0.5 w-8 bg-gold mt-2 group-hover:w-16 transition-all duration-300" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Qatar Projects */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <SectionHeading
            label="Notable Projects"
            title="Qatar Landmark Projects"
            subtitle="Projects delivered by our sister company Qatar Masters — demonstrating our engineering capabilities."
            center
          />
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {qatarProjects.map((proj) => (
              <div
                key={proj.name}
                className="bg-card rounded-xl overflow-hidden shadow-card hover-lift border border-border"
              >
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={proj.img}
                    alt={proj.name}
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute top-3 left-3 text-xs font-bold bg-accent text-accent-foreground px-2 py-1 rounded uppercase tracking-wide">
                    {proj.category}
                  </span>
                </div>
                <div className="p-4">
                  <h4 className="font-condensed font-bold text-base text-foreground mb-1">{proj.name}</h4>
                  <p className="text-xs text-muted-foreground">{proj.scope}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-center">
        <div className="container mx-auto px-4">
          <h2 className="font-condensed font-extrabold text-4xl text-primary-foreground mb-3">
            Have a Project in Mind?
          </h2>
          <p className="text-primary-foreground/70 mb-6 max-w-lg mx-auto">
            Share your requirements and our team will get back to you with a tailored proposal.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-3.5 bg-gold hover:bg-gold/85 text-gold-foreground font-bold text-sm uppercase tracking-wide rounded transition-all"
          >
            Discuss Your Project
          </a>
        </div>
      </section>
    </div>
  );
}


