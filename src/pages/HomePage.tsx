import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";
import { StatCounter, SectionHeading } from "@/components/UIComponents";
import heroImage from "@/assets/hero-construction.jpg";
import mepImg from "@/assets/service-mep.jpg";
import elvImg from "@/assets/service-elv.jpg";
import autoImg from "@/assets/service-automation.jpg";
import fmImg from "@/assets/service-fm.jpg";
import airportImg from "@/assets/project-airport.jpg";
import stadiumImg from "@/assets/project-stadium.jpg";
import hotelImg from "@/assets/project-hotel.jpg";
import railImg from "@/assets/project-railway.jpg";

const services = [
  { title: "MEP Contracting", desc: "Electrical, plumbing, HVAC & fire fighting systems for major infrastructure projects.", img: mepImg },
  { title: "ELV Systems", desc: "BMS, access control, CCTV surveillance, public address & structured cabling.", img: elvImg },
  { title: "Automation Systems", desc: "Automatic doors, roller shutters, high-speed doors, loading bay & gate barriers.", img: autoImg },
  { title: "Facility Management", desc: "Comprehensive building maintenance, HVAC servicing, cleaning & housekeeping.", img: fmImg },
];

const projects = [
  { title: "International Airports", img: airportImg },
  { title: "Sports Stadiums", img: stadiumImg },
  { title: "Luxury Hotels", img: hotelImg },
  { title: "Railways & Metro", img: railImg },
];

const strengths = [
  "12+ Years of Engineering Expertise",
  "1,300+ Skilled Professional Workforce",
  "20+ Multinational Client Portfolio",
  "ISO 9001:2015 & ISO 45001:2018 Certified",
  "Approved for FIFA World Cup Stadiums",
  "Proven Track Record Across GCC Region",
];

export default function HomePage() {
  return (
    <div>
      {/* ── Hero ── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-85" />
        <div className="absolute inset-0 pattern-dots opacity-10" />

        {/* Animated accent line */}
        <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-transparent via-gold to-transparent" />

        <div className="container mx-auto px-4 relative z-10 pt-28 pb-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-accent/20 border border-accent/30 rounded px-3 py-1.5 mb-6 animate-fade-up" style={{ animationDelay: "0.1s", opacity: 0 }}>
              <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
              <span className="text-xs font-bold text-primary-foreground/90 uppercase tracking-widest">
                Engineering Excellence — Jeddah, Saudi Arabia
              </span>
            </div>

            <h1
              className="font-condensed font-extrabold text-5xl md:text-7xl text-primary-foreground leading-none mb-6 animate-fade-up"
              style={{ animationDelay: "0.2s", opacity: 0 }}
            >
              A Trusted Partner for
              <br />
              <span className="text-gradient-blue">Engineering &</span>
              <br />
              <span className="text-gold">Technology Projects</span>
              <br />
              in Saudi Arabia
            </h1>

            <p
              className="text-primary-foreground/80 text-lg md:text-xl max-w-xl leading-relaxed mb-8 animate-fade-up"
              style={{ animationDelay: "0.35s", opacity: 0 }}
            >
              Master Qatar W.L.L. delivers world-class MEP, ELV, Automation, and Facility Management solutions — built on 12+ years of GCC excellence.
            </p>

            <div
              className="flex flex-wrap gap-4 animate-fade-up"
              style={{ animationDelay: "0.5s", opacity: 0 }}
            >
              <Link
                to="/services"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-accent hover:bg-accent/85 text-accent-foreground font-bold text-sm uppercase tracking-wide rounded transition-all hover:shadow-elevated hover:-translate-y-0.5"
              >
                Explore Services <ArrowRight size={16} />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 border-2 border-primary-foreground/40 hover:border-gold text-primary-foreground font-bold text-sm uppercase tracking-wide rounded transition-all"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in" style={{ animationDelay: "1s", opacity: 0 }}>
          <div className="w-5 h-8 border-2 border-primary-foreground/40 rounded-full flex justify-center pt-1">
            <div className="w-1 h-2 bg-gold rounded-full animate-bounce" />
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="bg-primary py-14">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-y-2 md:divide-y-0 md:divide-x divide-navy-700">
            <StatCounter value={12} suffix="+" label="Years of Expertise" delay={0} />
            <StatCounter value={1300} suffix="+" label="Professional Workforce" delay={100} />
            <StatCounter value={20} suffix="+" label="MNC Clients" delay={200} />
            <StatCounter value={6000} suffix="+" label="Sq. Mtr. Award Winning Camp" delay={300} />
          </div>
        </div>
      </section>

      {/* ── About Intro ── */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <SectionHeading
                label="Who We Are"
                title="Engineering Excellence Across the GCC Region"
                subtitle="Master Qatar W.L.L. is the proud expansion of Qatar Masters — one of the most trusted engineering and MEP contracting companies in the GCC region. We bring over a decade of proven expertise to serve the rapidly growing Saudi Arabian market."
              />
              <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {strengths.map((s) => (
                  <li key={s} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle size={16} className="text-accent mt-0.5 shrink-0" />
                    {s}
                  </li>
                ))}
              </ul>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-primary hover:bg-primary/85 text-primary-foreground font-semibold text-sm rounded transition-colors"
              >
                About Our Company <ArrowRight size={15} />
              </Link>
            </div>
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-accent/20 rounded-lg" />
              <img
                src={heroImage}
                alt="Master GCC Engineering"
                className="relative rounded-lg shadow-elevated w-full object-cover h-80 lg:h-96"
              />
              <div className="absolute bottom-4 right-4 bg-primary/90 backdrop-blur-sm rounded-lg p-4 shadow-card">
                <div className="font-condensed font-extrabold text-3xl text-gold">2011</div>
                <div className="text-xs text-primary-foreground/70 uppercase tracking-wide">Founded in Qatar</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <SectionHeading
            label="What We Do"
            title="Our Core Services"
            subtitle="Comprehensive engineering and technology solutions delivered with precision and quality."
            center
          />
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((svc) => (
              <div
                key={svc.title}
                className="group rounded-xl overflow-hidden shadow-card bg-card hover-lift cursor-pointer"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={svc.img}
                    alt={svc.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 to-transparent" />
                  <h3 className="absolute bottom-4 left-4 font-condensed font-bold text-xl text-primary-foreground">
                    {svc.title}
                  </h3>
                </div>
                <div className="p-5">
                  <p className="text-sm text-muted-foreground leading-relaxed">{svc.desc}</p>
                  <Link
                    to="/services"
                    className="inline-flex items-center gap-1 mt-3 text-accent text-sm font-semibold hover:gap-2 transition-all"
                  >
                    Learn More <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-7 py-3 border-2 border-primary hover:bg-primary hover:text-primary-foreground text-primary font-bold text-sm uppercase tracking-wide rounded transition-all"
            >
              View All Services <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Notable Projects ── */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeading
            label="Our Portfolio"
            title="Industries We Serve"
            subtitle="From international airports to world-class stadiums — we deliver engineering excellence across major sectors."
            center
          />
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {projects.map((proj) => (
              <div
                key={proj.title}
                className="group relative rounded-xl overflow-hidden h-64 cursor-pointer"
              >
                <img
                  src={proj.img}
                  alt={proj.title}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-600"
                  style={{ transition: "transform 0.6s ease" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-900/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="font-condensed font-bold text-xl text-primary-foreground">
                    {proj.title}
                  </h3>
                  <div className="h-0.5 w-8 bg-gold mt-1 group-hover:w-16 transition-all duration-300" />
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 px-7 py-3 bg-primary hover:bg-primary/85 text-primary-foreground font-bold text-sm uppercase tracking-wide rounded transition-all"
            >
              View All Projects <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 pattern-dots opacity-15" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="font-condensed font-extrabold text-4xl md:text-6xl text-primary-foreground mb-4">
            Ready to Start Your Next Project?
          </h2>
          <p className="text-primary-foreground/70 text-lg max-w-xl mx-auto mb-8">
            Partner with Master GCC Saudi Arabia — where engineering meets innovation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="px-8 py-4 bg-gold hover:bg-gold/85 text-gold-foreground font-bold text-sm uppercase tracking-wide rounded transition-all hover:shadow-hero"
            >
              Get in Touch
            </Link>
            <Link
              to="/services"
              className="px-8 py-4 border-2 border-primary-foreground/40 hover:border-gold text-primary-foreground font-bold text-sm uppercase tracking-wide rounded transition-all"
            >
              Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
