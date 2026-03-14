import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { PageHero, SectionHeading } from "@/components/UIComponents";
import { Zap, Wifi, Settings, Wrench, Users, Package, ChevronDown } from "lucide-react";
import mepImg from "@/assets/service-mep.jpg";
import elvImg from "@/assets/service-elv.jpg";
import autoImg from "@/assets/service-automation.jpg";
import fmImg from "@/assets/service-fm.jpg";

const services = [
  {
    id: "mep",
    icon: Zap,
    title: "MEP Contracting",
    img: mepImg,
    description:
      "Engineering, Procurement and Construction of complete MEP systems for major infrastructure projects across Saudi Arabia and the GCC region.",
    sub: [
      {
        title: "Electrical Works",
        items: [
          "Medium Voltage Panels",
          "Final Distribution Boards & Sub Main Panels",
          "Feeder & Tap-off Bus Bars Risers",
          "Internal & External Light Fittings",
          "Wiring, Cabling & Accessories",
          "M.I.C.C / Fire Resistant Cabling",
          "Earthing, Bonding & Lightning Protection",
        ],
      },
      {
        title: "Plumbing Works",
        items: [
          "Domestic Cold & Hot Water Systems",
          "Sanitary & Drainage Systems",
          "Swimming Pool Systems",
          "Irrigation Systems",
        ],
      },
      {
        title: "HVAC Systems",
        items: [
          "Central Chilled Water Systems",
          "Split / VRF / VRV Systems",
          "AHU / FCU Installations",
          "Ventilation & Pressurization Systems",
        ],
      },
      {
        title: "Fire Fighting Systems",
        items: [
          "Wet & Dry Riser Systems",
          "Sprinkler Systems",
          "Gas Suppression Systems",
          "Fire Hydrant Systems",
        ],
      },
    ],
  },
  {
    id: "elv",
    icon: Wifi,
    title: "ELV Systems",
    img: elvImg,
    description:
      "Complete Extra Low Voltage system solutions for smart and intelligent buildings, providing security, communication, and operational efficiency.",
    sub: [
      {
        title: "Building & Security Systems",
        items: [
          "Building Management Systems (BMS)",
          "Access Control Systems",
          "CCTV Surveillance Systems",
          "Intruder Alarm Systems",
          "Public Address Systems",
        ],
      },
      {
        title: "Data & Communications",
        items: [
          "Networking & Structured Cabling",
          "Fiber Optic Networks",
          "Audio / Visual Systems",
          "IPTV Systems",
        ],
      },
    ],
  },
  {
    id: "automation",
    icon: Settings,
    title: "Automation Systems",
    img: autoImg,
    description:
      "State-of-the-art automated entrance and loading systems for commercial, industrial, and logistics facilities.",
    sub: [
      {
        title: "Entrance & Access Solutions",
        items: [
          "Automatic Sliding Doors",
          "Automatic Swing Doors",
          "Revolving Doors",
          "Roller Shutters",
          "High-Speed Doors",
          "Loading Bay Equipment",
          "Gate Barriers & Bollards",
          "Parking Management Systems",
        ],
      },
    ],
  },
  {
    id: "fm",
    icon: Wrench,
    title: "Facility Management",
    img: fmImg,
    description:
      "Comprehensive facility management services to keep your buildings running at peak efficiency — reducing downtime and operating costs.",
    sub: [
      {
        title: "Maintenance Services",
        items: [
          "Electrical Maintenance",
          "HVAC Maintenance & Servicing",
          "Plumbing Maintenance",
          "Building Maintenance",
          "ELV Systems Maintenance",
          "Automation Systems Maintenance",
        ],
      },
      {
        title: "Support Services",
        items: [
          "Cleaning & Housekeeping",
          "Pest Control",
          "Landscaping",
          "Waste Management",
        ],
      },
    ],
  },
  {
    id: "workforce",
    icon: Users,
    title: "Workforce Solutions",
    img: mepImg,
    description:
      "With over 1,300 professionals in our workforce, we provide skilled manpower and HR solutions tailored to the construction and engineering sector.",
    sub: [
      {
        title: "HR & Manpower Services",
        items: [
          "Skilled Manpower Supply",
          "Contract Staffing",
          "Mobilization & Relocation",
          "PRO Services",
          "Payroll Management",
          "Labour Camp Accommodation",
        ],
      },
    ],
  },
  {
    id: "trading",
    icon: Package,
    title: "Trading",
    img: elvImg,
    description:
      "Authorized supply of premium HVAC materials, MEP equipment, and engineering products from leading global manufacturers.",
    sub: [
      {
        title: "Products & Equipment",
        items: [
          "HVAC Equipment & Materials",
          "Electrical Equipment",
          "Plumbing Materials",
          "Fire Fighting Equipment",
          "ELV System Components",
          "Automation Equipment",
        ],
      },
    ],
  },
];

interface ServicesPageProps {
  embedded?: boolean;
}

export default function ServicesPage({ embedded = false }: ServicesPageProps) {
  const [expandedSub, setExpandedSub] = useState<Record<string, boolean>>({});
  const location = useLocation();

  // Scroll to section when navigating via hash
  useEffect(() => {
    if (embedded) {
      return;
    }

    if (location.hash) {
      const id = location.hash.replace("#", "");
      // Small delay to let page render
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          const offset = 90;
          const top = el.getBoundingClientRect().top + window.scrollY - offset;
          window.scrollTo({ top, behavior: "smooth" });
        }
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [embedded, location.hash]);


  const toggle = (key: string) =>
    setExpandedSub((prev) => ({ ...prev, [key]: !prev[key] }));

  return (
    <div>
      {!embedded && (
        <PageHero
        title="Our Services"
        subtitle="End-to-end engineering & technology solutions for every stage of your project"
      />
      )}

      {/* Services overview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeading
            label="What We Offer"
            title="Complete Engineering Solutions"
            subtitle="From MEP contracting to facility management — we handle every aspect of your engineering project with precision and expertise."
            center
          />

          <div className="mt-14 space-y-20">
            {services.map((svc, index) => {
              const Icon = svc.icon;
              const isEven = index % 2 === 0;
              return (
                <div
                  key={svc.id}
                  id={svc.id}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${!isEven ? "lg:flex-row-reverse" : ""}`}
                >
                  <div className={isEven ? "" : "lg:order-2"}>
                    <div className="relative rounded-xl overflow-hidden shadow-elevated">
                      <img
                        src={svc.img}
                        alt={svc.title}
                        className="w-full h-72 object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 to-transparent" />
                      <div className="absolute bottom-4 left-4 flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                          <Icon size={20} className="text-accent-foreground" />
                        </div>
                        <span className="font-condensed font-bold text-xl text-primary-foreground">
                          {svc.title}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className={isEven ? "" : "lg:order-1"}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                        <Icon size={20} className="text-accent" />
                      </div>
                      <h3 className="font-condensed font-bold text-3xl text-primary">{svc.title}</h3>
                    </div>
                    <div className="divider-gold mb-4" />
                    <p className="text-muted-foreground leading-relaxed mb-6">{svc.description}</p>

                    <div className="space-y-3">
                      {svc.sub.map((sub) => {
                        const key = `${svc.id}-${sub.title}`;
                        const open = expandedSub[key] ?? true;
                        return (
                          <div key={sub.title} className="border border-border rounded-lg overflow-hidden">
                            <button
                              onClick={() => toggle(key)}
                              className="w-full flex items-center justify-between px-4 py-3 bg-muted hover:bg-muted/70 transition-colors text-left"
                            >
                              <span className="font-semibold text-sm text-foreground">{sub.title}</span>
                              <ChevronDown
                                size={16}
                                className={`text-muted-foreground transition-transform ${open ? "rotate-180" : ""}`}
                              />
                            </button>
                            {open && (
                              <div className="px-4 py-3 grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                                {sub.items.map((item) => (
                                  <div key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                                    <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                                    {item}
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}





