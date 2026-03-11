import { PageHero, SectionHeading } from "@/components/UIComponents";
import airportImg from "@/assets/project-airport.jpg";
import stadiumImg from "@/assets/project-stadium.jpg";
import hotelImg from "@/assets/project-hotel.jpg";
import railImg from "@/assets/project-railway.jpg";
import hospitalImg from "@/assets/project-hospital.jpg";
import commercialImg from "@/assets/project-commercial.jpg";
import mepImg from "@/assets/service-mep.jpg";
import elvImg from "@/assets/service-elv.jpg";

const qatarProjects = [
  {
    name: "Hamad International Airport",
    category: "Airport",
    scope: "MEP & ELV Systems",
    img: airportImg,
  },
  {
    name: "FIFA World Cup Stadiums",
    category: "Stadium",
    scope: "MEP Contracting",
    img: stadiumImg,
  },
  {
    name: "Sidra Medical & Research Center",
    category: "Hospital",
    scope: "MEP & ELV Systems",
    img: hospitalImg,
  },
  {
    name: "Msheireb Downtown Doha",
    category: "Commercial",
    scope: "MEP & Automation",
    img: commercialImg,
  },
  {
    name: "Qatar National Convention Center",
    category: "Convention",
    scope: "MEP Contracting",
    img: hotelImg,
  },
  {
    name: "Kahramaa Substations",
    category: "Infrastructure",
    scope: "Electrical Works",
    img: mepImg,
  },
  {
    name: "Barwa Commercial Avenue",
    category: "Commercial",
    scope: "MEP & ELV",
    img: elvImg,
  },
  {
    name: "Pearl Qatar",
    category: "Residential / Mixed Use",
    scope: "MEP Contracting",
    img: railImg,
  },
];

const industries = [
  { title: "Airports", img: airportImg, desc: "International aviation facilities requiring complex MEP and ELV integration." },
  { title: "Stadiums", img: stadiumImg, desc: "Sports venues with advanced electrical, automation, and public address systems." },
  { title: "Hotels & Hospitality", img: hotelImg, desc: "Luxury hospitality projects demanding precision MEP and building automation." },
  { title: "Railways & Metro", img: railImg, desc: "Mass transit infrastructure with sophisticated electrical and ELV systems." },
  { title: "Hospitals", img: hospitalImg, desc: "Critical healthcare facilities requiring specialized MEP solutions." },
  { title: "Commercial Buildings", img: commercialImg, desc: "Corporate towers, retail, and mixed-use developments across the GCC." },
];

export default function ProjectsPage() {
  return (
    <div>
      <PageHero
        title="Our Projects"
        subtitle="A track record of excellence across landmark projects in the GCC region"
      />

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
                <img
                  src={ind.img}
                  alt={ind.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
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
