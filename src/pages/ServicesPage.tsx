import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { PageHero, SectionHeading } from "@/components/UIComponents";
import { Zap, Wifi, Settings, Wrench, Users, Package, ChevronDown } from "lucide-react";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import mepImg from "@/assets/service-mep.jpg";
import elvImg from "@/assets/service-elv.jpg";
import autoImg from "@/assets/automation-system-doors-profile.png";
import fmImg from "@/assets/service-fm.jpg";
import freshAirLouversImg from "@/assets/fresh-air-louvers.jpg";
import volumeControlDamperImg from "@/assets/volume-control-damper.jpg";
import nonReturnDampersImg from "@/assets/non-return-damper-1000x1000.png";
import acousticLouversImg from "@/assets/acoustic-louvers.jpg";
import soundAttenuatorsImg from "@/assets/sound-attenuators.jpg";
import pressureReliefDampersImg from "@/assets/pressure-relief-dampers.jpg";
import constantAirVolumeImg from "@/assets/constant-air-volume.jpg";
import sandTrapLouversImg from "@/assets/sand-trap-louvers.jpg";
import linearSlotDiffusersImg from "@/assets/linear-slot-diffusers.jpg";
import roundCeilingDiffusersImg from "@/assets/round-ceiling-diffusers.jpg";
import swirlDiffusersImg from "@/assets/swirl-diffusers.jpg";
import jetDiffusersImg from "@/assets/jet-diffusers.jpg";
import ceilingDiffusersImg from "@/assets/ceiling-diffusers.jpg";
import linearDiffusersImg from "@/assets/linear-diffusers.jpg";
import registersImg from "@/assets/registers.jpg";
import grillesImg from "@/assets/grilles.jpg";
import variableAirVolumeImg from "@/assets/variable-air-volume.jpg";
import fireDampersImg from "@/assets/fire-dampers.jpg";
import discValvesImg from "@/assets/disc-valves.jpg";
import doors5Img from "@/assets/doors5.jpg";
import doors6Img from "@/assets/doors6.jpg";
import doors7Img from "@/assets/doors7.jpg";
import door8Img from "@/assets/door8.png";
import doors9Img from "@/assets/doors9.jpg";
import accessControlImg from "@/assets/ELV/accesscontrollsystem.jpeg";
import airflowControlImg from "@/assets/ELV/airflow-control-system.jpg";
import bmsImg from "@/assets/ELV/bms1.jpeg";
import homeAutomationImg from "@/assets/ELV/homeautomation.jpeg";
import lightingControlImg from "@/assets/ELV/lighting-controll-system.jpg";
import publicAddressImg from "@/assets/ELV/public-address-system.jpg";
import rpmsImg from "@/assets/ELV/rpms.jpeg";
import securityImg from "@/assets/ELV/security.jpg";
import structuredCableImg from "@/assets/ELV/structured-cable-solution.jpg";
import electricalWorksImg from "@/assets/MEP/electrical-works.jpg";
import fireFightingImg from "@/assets/MEP/fire-fighting.jpg";
import hvacImg from "@/assets/MEP/hvac.jpg";
import mepSectorImg from "@/assets/MEP/mep-sector.jpg";
import plumbingImg from "@/assets/MEP/plumbing.jpg";

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

const tradingProducts = [
  {
    name: "Fresh Air Louvers",
    image: freshAirLouversImg
  },
  {
    name: "Volume Control Damper",
    image: volumeControlDamperImg
  },
  {
    name: "Non Return Dampers",
    image: nonReturnDampersImg
  },
  {
    name: "Acoustic Louvers",
    image: acousticLouversImg
  },
  {
    name: "Sound Attenuators",
    image: soundAttenuatorsImg
  },
  {
    name: "Pressure Relief Dampers",
    image: pressureReliefDampersImg
  },
  {
    name: "Constant Air Volume (CAV)",
    image: constantAirVolumeImg
  },
  {
    name: "Sand Trap Louvers",
    image: sandTrapLouversImg
  },
  {
    name: "Linear Slot Diffusers",
    image: linearSlotDiffusersImg
  },
  {
    name: "Round Ceiling Diffusers",
    image: roundCeilingDiffusersImg
  },
  {
    name: "Swirl Diffusers",
    image: swirlDiffusersImg
  },
  {
    name: "Jet Diffusers",
    image: jetDiffusersImg
  },
  {
    name: "Ceiling Diffusers",
    image: ceilingDiffusersImg
  },
  {
    name: "Linear Diffusers",
    image: linearDiffusersImg
  },
  {
    name: "Registers",
    image: registersImg
  },
  {
    name: "Grilles",
    image: grillesImg
  },
  {
    name: "Variable Air Volume (VAV)",
    image: variableAirVolumeImg
  },
  {
    name: "Fire Dampers",
    image: fireDampersImg
  },
  {
    name: "Disc Valves",
    image: discValvesImg
  }
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
              const serviceElement = (
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

              if (svc.id === "mep") {
                return (
                  <div key={svc.id}>
                    {serviceElement}
                    
                    {/* MEP Systems Gallery */}
                    <div className="mt-20">
                      <div className="text-center mb-12">
                        <h3 className="font-condensed font-bold text-2xl text-primary mb-4">MEP Systems Gallery</h3>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                          Explore our comprehensive MEP engineering solutions for building infrastructure and systems
                        </p>
                      </div>

                      <div className="mep-systems-slider">
                        <Slider
                          dots={true}
                          infinite={true}
                          speed={500}
                          slidesToShow={3}
                          slidesToScroll={1}
                          autoplay={true}
                          autoplaySpeed={4000}
                          pauseOnHover={true}
                          arrows={true}
                          responsive={[
                            {
                              breakpoint: 1024,
                              settings: {
                                slidesToShow: 2,
                                slidesToScroll: 1,
                              }
                            },
                            {
                              breakpoint: 768,
                              settings: {
                                slidesToShow: 1,
                                slidesToScroll: 1
                              }
                            }
                          ]}
                        >
                          {[
                            { img: mepSectorImg, title: "MEP Sector Overview" },
                            { img: electricalWorksImg, title: "Electrical Works" },
                            { img: plumbingImg, title: "Plumbing Systems" },
                            { img: hvacImg, title: "HVAC Systems" },
                            { img: fireFightingImg, title: "Fire Fighting Systems" }
                          ].map((mep, index) => (
                            <div key={index} className="item-card px-2">
                              <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                                <img
                                  src={mep.img}
                                  alt={mep.title}
                                  className="w-full h-64 object-cover"
                                  loading="lazy"
                                />
                                <div className="p-4">
                                  <h3 className="font-semibold text-lg text-primary text-center">{mep.title}</h3>
                                </div>
                              </div>
                            </div>
                          ))}
                        </Slider>
                      </div>
                    </div>
                  </div>
                );
              }

              if (svc.id === "automation") {
                return (
                  <div key={svc.id}>
                    {serviceElement}
                    
                    {/* Automation Door Systems Gallery */}
                    <div className="mt-20">
                      <div className="text-center mb-12">
                        <h3 className="font-condensed font-bold text-2xl text-primary mb-4">Automation Door Systems</h3>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                          Discover our range of automated entrance solutions for commercial, industrial, and logistics facilities
                        </p>
                      </div>

                      <div className="automation-doors-slider">
                        <Slider
                          dots={true}
                          infinite={true}
                          speed={500}
                          slidesToShow={3}
                          slidesToScroll={1}
                          autoplay={true}
                          autoplaySpeed={4000}
                          pauseOnHover={true}
                          arrows={true}
                          responsive={[
                            {
                              breakpoint: 1024,
                              settings: {
                                slidesToShow: 2,
                                slidesToScroll: 1,
                              }
                            },
                            {
                              breakpoint: 768,
                              settings: {
                                slidesToShow: 1,
                                slidesToScroll: 1
                              }
                            }
                          ]}
                        >
                          {[
                            { img: doors5Img, title: "Automatic Sliding Doors" },
                            { img: doors6Img, title: "Automatic Swing Doors" },
                            { img: doors7Img, title: "Revolving Doors" },
                            { img: door8Img, title: "Roller Shutters" },
                            { img: doors9Img, title: "High-Speed Doors" }
                          ].map((door, index) => (
                            <div key={index} className="item-card px-2">
                              <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                                <img
                                  src={door.img}
                                  alt={door.title}
                                  className="w-full h-64 object-cover"
                                  loading="lazy"
                                />
                                <div className="p-4">
                                  <h3 className="font-semibold text-lg text-primary text-center">{door.title}</h3>
                                </div>
                              </div>
                            </div>
                          ))}
                        </Slider>
                      </div>
                    </div>
                  </div>
                );
              }

              if (svc.id === "elv") {
                return (
                  <div key={svc.id}>
                    {serviceElement}
                    
                    {/* ELV Systems Gallery */}
                    <div className="mt-20">
                      <div className="text-center mb-12">
                        <h3 className="font-condensed font-bold text-2xl text-primary mb-4">ELV Systems Gallery</h3>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                          Explore our comprehensive ELV solutions for intelligent building systems and smart infrastructure
                        </p>
                      </div>

                      <div className="elv-systems-slider">
                        <Slider
                          dots={true}
                          infinite={true}
                          speed={500}
                          slidesToShow={3}
                          slidesToScroll={1}
                          autoplay={true}
                          autoplaySpeed={4000}
                          pauseOnHover={true}
                          arrows={true}
                          responsive={[
                            {
                              breakpoint: 1024,
                              settings: {
                                slidesToShow: 2,
                                slidesToScroll: 1,
                              }
                            },
                            {
                              breakpoint: 768,
                              settings: {
                                slidesToShow: 1,
                                slidesToScroll: 1
                              }
                            }
                          ]}
                        >
                          {[
                            { img: bmsImg, title: "Building Management Systems (BMS)" },
                            { img: accessControlImg, title: "Access Control Systems" },
                            { img: securityImg, title: "Security & Surveillance" },
                            { img: lightingControlImg, title: "Lighting Control Systems" },
                            { img: publicAddressImg, title: "Public Address Systems" },
                            { img: structuredCableImg, title: "Structured Cable Solutions" },
                            { img: homeAutomationImg, title: "Home Automation" },
                            { img: airflowControlImg, title: "Airflow Control Systems" },
                            { img: rpmsImg, title: "Room Pressure Monitoring Systems" }
                          ].map((elv, index) => (
                            <div key={index} className="item-card px-2">
                              <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                                <img
                                  src={elv.img}
                                  alt={elv.title}
                                  className="w-full h-64 object-cover"
                                  loading="lazy"
                                />
                                <div className="p-4">
                                  <h3 className="font-semibold text-lg text-primary text-center">{elv.title}</h3>
                                </div>
                              </div>
                            </div>
                          ))}
                        </Slider>
                      </div>
                    </div>
                  </div>
                );
              }

              return serviceElement;
            })}
          </div>
        </div>
      </section>

      {/* Trading Products Slider */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-condensed font-bold text-3xl text-primary mb-4">Trading Products</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore our comprehensive range of HVAC and MEP products from leading manufacturers
            </p>
          </div>

          <div className="trading-slider">
            <Slider
              dots={true}
              infinite={true}
              speed={500}
              slidesToShow={4}
              slidesToScroll={1}
              autoplay={true}
              autoplaySpeed={3000}
              pauseOnHover={true}
              arrows={true}
              responsive={[
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                  }
                },
                {
                  breakpoint: 768,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                }
              ]}>
              {tradingProducts.map((product, index) => (
                <div key={index} className="item-card px-2">
                  <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-48 object-cover"
                      loading="lazy"
                    />
                    <div className="p-4">
                      <h3 className="font-semibold text-lg text-primary text-center">{product.name}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>
    </div>
  );
}





