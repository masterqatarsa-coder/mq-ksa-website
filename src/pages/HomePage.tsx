import { Link } from "react-router-dom";
import { ArrowRight, Building2, CheckCircle, Clock3, Shield, Zap } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import Reveal from "@/components/Reveal";
import { SectionHeading, StatCounter } from "@/components/UIComponents";
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
  {
    title: "MEP Contracting",
    desc: "Electrical, plumbing, HVAC, and fire-fighting systems delivered with one coordinated execution team.",
    img: mepImg,
    points: ["HVAC and chilled water", "Electrical infrastructure", "Fire-fighting systems"],
  },
  {
    title: "ELV Systems",
    desc: "Integrated building intelligence, security, and communications for modern commercial and infrastructure assets.",
    img: elvImg,
    points: ["BMS and access control", "CCTV and PA systems", "Structured cabling"],
  },
  {
    title: "Automation Systems",
    desc: "Reliable automated entrances, shutters, barriers, and loading solutions designed around operational flow.",
    img: autoImg,
    points: ["Automatic doors", "Roller shutters", "Loading bay equipment"],
  },
  {
    title: "Facility Management",
    desc: "Preventive and responsive maintenance programs that keep mission-critical spaces operating at peak efficiency.",
    img: fmImg,
    points: ["HVAC servicing", "Building maintenance", "Cleaning and support"],
  },
];

const projectShowcase = [
  {
    title: "International Airports",
    img: airportImg,
    detail: "Large-scale passenger environments with MEP and ELV coordination at infrastructure scale.",
    span: "lg:col-span-2",
  },
  {
    title: "Sports Stadiums",
    img: stadiumImg,
    detail: "High-performance venues requiring resilient systems and demanding delivery timelines.",
    span: "",
  },
  {
    title: "Luxury Hotels",
    img: hotelImg,
    detail: "Hospitality builds where guest experience depends on invisible technical precision.",
    span: "",
  },
  {
    title: "Railways and Metro",
    img: railImg,
    detail: "Transit environments that need reliability, safety, and systems integration at every layer.",
    span: "lg:col-span-2",
  },
];

const strengths = [
  "12+ years of GCC engineering expertise",
  "1,300+ skilled workforce across core disciplines",
  "20+ multinational clients served",
  "ISO-certified quality and safety systems",
  "FIFA stadium project experience",
  "Integrated delivery from supply to operations",
];

const highlightCards = [
  {
    icon: Building2,
    title: "Integrated Delivery",
    body: "Clients work with one coordinated partner across engineering, supply, installation, and operational support.",
  },
  {
    icon: Clock3,
    title: "Operational Readiness",
    body: "We focus on dependable turnover, efficient maintenance planning, and clean handoff between project phases.",
  },
  {
    icon: Shield,
    title: "Quality and Safety",
    body: "Processes are structured around certified standards, site discipline, and long-term client confidence.",
  },
];

const partnerTicker = [
  "Siemens",
  "Honeywell",
  "Schneider Electric",
  "Johnson Controls",
  "ABB",
  "Bosch",
  "Daikin",
  "Carrier",
  "Tyco Fire",
  "ASSA ABLOY",
];

const clientLogos = Array.from({ length: 59 }, (_, i) => new URL(`../assets/c${i + 1}.jpg`, import.meta.url).href);

const deliverySteps = [
  {
    step: "01",
    title: "Scope the system",
    body: "We align technical requirements, timelines, and interfaces early so execution stays stable.",
  },
  {
    step: "02",
    title: "Coordinate disciplines",
    body: "Engineering, procurement, and specialist trades stay connected through one delivery structure.",
  },
  {
    step: "03",
    title: "Execute with control",
    body: "Teams work against clear milestones, quality checks, and practical site-ready decision making.",
  },
  {
    step: "04",
    title: "Support operations",
    body: "We help clients move from installation to reliable day-to-day performance without losing momentum.",
  },
];

export default function HomePage() {
  const [showAllClients, setShowAllClients] = useState(false);

  return (
    <div>
      <section className="relative min-h-screen overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-navy-950/96 via-primary/86 to-secondary/72" />
        <div className="hero-grid absolute inset-0 opacity-25" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(31,167,255,0.26),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(255,201,87,0.18),transparent_28%)]" />
        <div className="accent-orb absolute -left-20 top-28 h-60 w-60 rounded-full bg-accent/16 blur-3xl" />
        <div className="accent-orb absolute right-0 top-48 h-56 w-56 rounded-full bg-gold/14 blur-3xl" />

        <div className="container relative z-10 mx-auto grid min-h-screen items-center gap-12 px-4 pb-16 pt-32 lg:grid-cols-[1.1fr_0.9fr] lg:pt-40">
          <div>
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/6 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.26em] text-white/90">
                <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                Engineering excellence in Saudi Arabia
              </div>
            </Reveal>

            <Reveal delay={80}>
              <h1 className="mt-6 max-w-4xl font-condensed text-5xl font-black leading-[0.88] text-white md:text-7xl xl:text-[5.5rem]">
                A sharper digital face for
                <span className="block text-gradient-blue">a high-capability engineering partner.</span>
              </h1>
            </Reveal>

            <Reveal delay={150}>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/90 md:text-xl">
                Master Qatar W.L.L. brings MEP, ELV, automation, facility management, and workforce delivery together under one disciplined team for high-stakes projects across the GCC.
              </p>
            </Reveal>

            <Reveal delay={220} className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent to-secondary px-7 py-4 text-sm font-bold uppercase tracking-[0.18em] text-white shadow-[0_24px_40px_-18px_rgba(23,160,255,0.75)] transition-all duration-200 hover:-translate-y-0.5"
              >
                Explore Services
                <ArrowRight size={16} />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/18 bg-white/6 px-7 py-4 text-sm font-bold uppercase tracking-[0.18em] text-white transition-all duration-200 hover:border-gold/40 hover:bg-white/10"
              >
                Book a Consultation
              </Link>
            </Reveal>

            <Reveal delay={300} className="mt-10 grid max-w-3xl grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3">
              {highlightCards.map(({ icon: Icon, title, body }) => (
                <div
                  key={title}
                  className="rounded-[1.5rem] border border-white/10 bg-white/[0.06] p-4 backdrop-blur-xl"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-gold">
                    <Icon size={20} />
                  </div>
                  <div className="mt-4 text-sm font-semibold uppercase tracking-[0.2em] text-white/92">
                    {title}
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-white/74">{body}</p>
                </div>
              ))}
            </Reveal>
          </div>

          <Reveal delay={140} className="lg:justify-self-end">
            <div className="relative overflow-hidden rounded-[2rem] border border-white/12 bg-white/[0.08] p-6 text-white shadow-[0_28px_70px_-30px_rgba(4,10,24,0.75)] backdrop-blur-2xl md:p-7">
              <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-gold/80 to-transparent" />
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-[11px] font-semibold uppercase tracking-[0.26em] text-white/90">
                    Delivery snapshot
                  </div>
                  <div className="mt-2 font-condensed text-3xl font-black leading-none md:text-4xl">
                    Built for complex projects.
                  </div>
                </div>
                <div className="rounded-full border border-white/10 bg-white/6 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-gold">
                  GCC Ready
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3">
                <div className="rounded-[1.4rem] border border-white/10 bg-navy-950/38 p-4">
                  <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/68">Experience</div>
                  <div className="mt-2 font-condensed text-4xl font-black text-gold">12+</div>
                  <div className="text-sm text-white/76">years across major GCC sectors</div>
                </div>
                <div className="rounded-[1.4rem] border border-white/10 bg-navy-950/38 p-4">
                  <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/68">Workforce</div>
                  <div className="mt-2 font-condensed text-4xl font-black text-gold">1300+</div>
                  <div className="text-sm text-white/76">specialized personnel</div>
                </div>
              </div>

              <div className="mt-4 rounded-[1.5rem] border border-white/10 bg-navy-950/34 p-5">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/68">Capabilities</div>
                    <div className="mt-1 text-sm text-white/90">A balanced mix of engineering execution and operational support.</div>
                  </div>
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-accent/16 text-accent">
                    <Zap size={18} />
                  </div>
                </div>

                <div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
                  {services.map((service) => (
                    <div key={service.title} className="rounded-2xl border border-white/8 bg-white/5 px-4 py-3">
                      <div className="text-sm font-semibold text-white/90">{service.title}</div>
                      <div className="mt-1 text-xs leading-relaxed text-white/72">{service.points[0]}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-4 rounded-[1.4rem] border border-gold/18 bg-gold/10 px-4 py-3 text-sm leading-relaxed text-white/90">
                Designed to communicate trust faster, move people through the site more clearly, and give the brand a stronger premium presence.
              </div>
            </div>
          </Reveal>
        </div>

        <div className="relative z-10 border-y border-white/10 bg-navy-950/36 backdrop-blur-md">
          <div className="overflow-hidden py-4">
            <div className="ticker-track flex min-w-max items-center gap-8 px-4">
              {[...partnerTicker, ...partnerTicker].map((partner, index) => (
                <div key={`${partner}-${index}`} className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.24em] text-white/76">
                  <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                  {partner}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
            <StatCounter value={12} suffix="+" label="Years of Expertise" delay={0} />
            <StatCounter value={1300} suffix="+" label="Professional Workforce" delay={80} />
            <StatCounter value={20} suffix="+" label="MNC Client Portfolio" delay={160} />
            <StatCounter value={6000} suffix="+" label="Sq. Mtr. Award Camp" delay={240} />
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <SectionHeading
                label="Who We Are"
                title="Engineering excellence across the GCC, now presented with more confidence."
                subtitle="Master Qatar W.L.L. is the Saudi expansion of a trusted Qatar-based engineering business with a long track record in high-profile infrastructure, hospitality, transport, and public-sector work."
              />

              <Reveal delay={120}>
                <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
                  The company story is already strong. This refreshed interface makes that strength easier to feel through clearer hierarchy, more premium surfaces, and a better rhythm between proof points, services, and calls to action.
                </p>
              </Reveal>

              <Reveal delay={180} className="mt-8 grid gap-3 sm:grid-cols-2">
                {strengths.map((strength) => (
                  <div key={strength} className="surface-panel rounded-[1.35rem] border border-white/60 px-4 py-4 text-sm text-muted-foreground">
                    <div className="flex items-start gap-3">
                      <CheckCircle size={16} className="mt-0.5 shrink-0 text-accent" />
                      <span>{strength}</span>
                    </div>
                  </div>
                ))}
              </Reveal>
            </div>

            <Reveal delay={140}>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="surface-panel rounded-[1.8rem] border border-white/60 p-6 sm:col-span-2">
                  <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-accent">Brand direction</div>
                  <div className="mt-3 font-condensed text-3xl font-black leading-none text-primary">A more premium interface for a company that already works at a premium level.</div>
                  <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
                    The new UI system uses stronger contrast, layered surfaces, motion with restraint, and a clearer narrative arc so the website feels closer to the quality of the work being described.
                  </p>
                </div>
                {highlightCards.map(({ icon: Icon, title, body }) => (
                  <div key={title} className="interactive-card surface-panel relative overflow-hidden rounded-[1.8rem] border border-white/60 p-6">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-accent/12 text-accent">
                      <Icon size={20} />
                    </div>
                    <div className="mt-5 font-condensed text-2xl font-bold text-primary">{title}</div>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{body}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <div className="mt-10">
            <div className="overflow-hidden rounded-[1.5rem] border border-white/15 bg-navy-950/20 p-4">
              <div className="client-marquee flex items-center gap-6 whitespace-nowrap">
                {[...clientLogos, ...clientLogos].map((logo, index) => (
                  <div key={`${logo}-${index}`} className="flex-none w-48 rounded-xl border border-white/20 bg-white/10 p-4 transition hover:scale-[1.04] hover:border-white/40">
                    <img
                      src={logo}
                      alt={`Client logo ${index + 1}`}
                      className="h-12 w-full object-contain"
                      onError={(event) => {
                        if (event.currentTarget.src !== "/placeholder.svg") {
                          event.currentTarget.src = "/placeholder.svg";
                        }
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-3 text-center">
              <button
                type="button"
                onClick={() => setShowAllClients((prev) => !prev)}
                className="rounded-full border border-primary px-6 py-2 text-sm font-semibold text-primary transition hover:bg-primary/10"
              >
                {showAllClients ? "Hide all clients" : "View all clients"}
              </button>
            </div>

            {showAllClients && (
              <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 p-4">
                <div className="relative mx-auto mt-10 mb-10 w-full max-w-6xl rounded-[2rem] border border-white/20 bg-white p-5 shadow-[0_20px_80px_rgba(13,15,23,0.35)] sm:p-8">
                  <button
                    type="button"
                    onClick={() => setShowAllClients(false)}
                    className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-600 transition hover:bg-slate-100"
                    aria-label="Close client modal"
                  >
                    ✕
                  </button>

                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-slate-900">Our Clients</h3>
                    <p className="mt-1 text-sm text-slate-500">Explore the full client portfolio in one place.</p>
                  </div>

                  <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5">
                    {clientLogos.map((logo, index) => (
                      <div key={`all-${logo}-${index}`} className="rounded-xl border border-slate-200 bg-slate-50 p-3 text-center">
                        <img
                          src={logo}
                          alt={`Client logo ${index + 1}`}
                          className="mx-auto h-16 w-full object-contain"
                          onError={(event) => {
                            if (event.currentTarget.src !== "/placeholder.svg") {
                              event.currentTarget.src = "/placeholder.svg";
                            }
                          }}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="bg-muted py-24">
        <div className="container mx-auto px-4">
          <SectionHeading
            label="Core Services"
            title="A service grid that feels more specific, more tactile, and easier to scan."
            subtitle="Each service now has more visual depth and faster cues about scope, making the site easier to navigate for decision-makers with limited time."
            center
          />

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service, index) => (
              <Reveal key={service.title} delay={index * 80}>
                <div className="group interactive-card surface-panel relative h-full overflow-hidden rounded-[1.8rem] border border-white/70">
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={service.img}
                      alt={service.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-900/18 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="font-condensed text-2xl font-bold text-white">{service.title}</div>
                    </div>
                  </div>
                  <div className="p-5">
                    <p className="text-sm leading-relaxed text-muted-foreground">{service.desc}</p>
                    <div className="mt-5 space-y-2">
                      {service.points.map((point) => (
                        <div key={point} className="flex items-center gap-2 text-sm text-primary/75">
                          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                          {point}
                        </div>
                      ))}
                    </div>
                    <Link
                      to="/services"
                      className="mt-6 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-accent transition-colors hover:text-primary"
                    >
                      Learn More
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary py-24 text-white">
        <div className="container mx-auto px-4">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <SectionHeading
                label="How We Work"
                title="A clearer story from first conversation to long-term support."
                subtitle="The interface now explains the delivery model in a way clients can grasp quickly, which improves trust and reduces friction before the first meeting."
                light
              />
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {deliverySteps.map((item, index) => (
                <Reveal key={item.step} delay={index * 80}>
                  <div className="rounded-[1.7rem] border border-white/10 bg-white/[0.05] p-6 backdrop-blur-xl">
                    <div className="text-[11px] font-semibold uppercase tracking-[0.28em] text-gold/82">Step {item.step}</div>
                    <div className="mt-3 font-condensed text-2xl font-bold text-white">{item.title}</div>
                    <p className="mt-3 text-sm leading-relaxed text-white/78">{item.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <SectionHeading
            label="Project Types"
            title="Portfolio highlights that use space and image scale more effectively."
            subtitle="The new project layout creates more contrast between sectors, helping visitors understand the breadth of experience without reading dense copy first."
            center
          />

          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {projectShowcase.map((project, index) => (
              <Reveal key={project.title} delay={index * 90} className={project.span}>
                <div className="interactive-card group relative h-[22rem] overflow-hidden rounded-[1.9rem] border border-white/60 shadow-card">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/92 via-navy-900/36 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-7">
                    <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/8 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-gold/90">
                      Sector focus
                    </div>
                    <div className="mt-4 font-condensed text-3xl font-black text-white md:text-4xl">
                      {project.title}
                    </div>
                    <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/80">{project.detail}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="container mx-auto px-4">
          <Reveal>
            <div className="relative overflow-hidden rounded-[2rem] bg-gradient-hero px-6 py-10 text-white shadow-hero md:px-10 md:py-12">
              <div className="hero-grid absolute inset-0 opacity-20" />
              <div className="accent-orb absolute -right-10 top-1/2 h-52 w-52 -translate-y-1/2 rounded-full bg-accent/16 blur-3xl" />
              <div className="relative z-10 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/6 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.24em] text-gold/85">
                    <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                    Ready for the next pass
                  </div>
                  <h2 className="mt-5 max-w-2xl font-condensed text-4xl font-black leading-none md:text-5xl">
                    This pass gives the site stronger polish. The next step is content accuracy and conversion flow.
                  </h2>
                  <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/82">
                    We can keep going by replacing placeholders, tightening service messaging, wiring the contact form, and polishing the rest of the inner pages to match this new standard.
                  </p>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center gap-2 rounded-[1.4rem] bg-gold px-5 py-4 text-sm font-bold uppercase tracking-[0.18em] text-gold-foreground transition-transform duration-200 hover:-translate-y-0.5"
                  >
                    Contact Us
                    <ArrowRight size={15} />
                  </Link>
                  <Link
                    to="/projects"
                    className="inline-flex items-center justify-center gap-2 rounded-[1.4rem] border border-white/14 bg-white/6 px-5 py-4 text-sm font-bold uppercase tracking-[0.18em] text-white transition-colors hover:bg-white/10"
                  >
                    View Projects
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}