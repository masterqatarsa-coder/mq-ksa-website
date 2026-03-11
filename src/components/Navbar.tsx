import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, ChevronDown, Phone, Mail, Zap, Wifi, Settings, Wrench, Users, Package } from "lucide-react";

const serviceItems = [
  { label: "MEP Contracting", href: "/services#mep", icon: Zap, desc: "Electrical, Plumbing, HVAC, Fire Fighting" },
  { label: "ELV Systems", href: "/services#elv", icon: Wifi, desc: "BMS, CCTV, Access Control, Cabling" },
  { label: "Automation Systems", href: "/services#automation", icon: Settings, desc: "Auto Doors, Shutters, Barriers" },
  { label: "Facility Management", href: "/services#fm", icon: Wrench, desc: "Building Maintenance & Cleaning" },
  { label: "Workforce Solutions", href: "/services#workforce", icon: Users, desc: "Skilled Manpower & HR Services" },
  { label: "Trading", href: "/services#trading", icon: Package, desc: "HVAC & Engineering Equipment" },
];

const navItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services", children: serviceItems },
  { label: "Projects", href: "/projects" },
  { label: "Clients", href: "/clients" },
  { label: "Certifications", href: "/certifications" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Handle hash navigation: if already on /services, scroll to section
  const handleServiceClick = (href: string) => {
    const [path, hash] = href.split("#");
    if (location.pathname === path && hash) {
      const el = document.getElementById(hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
    }
    navigate(href);
    setServicesOpen(false);
  };

  const navScrolled = scrolled || !isHome;

  return (
    <>
      {/* Top announcement bar */}
      <div
        className={`hidden md:flex bg-navy-950 text-primary-foreground/60 text-xs py-2 px-6 justify-between items-center transition-all duration-300 ${navScrolled ? "h-0 overflow-hidden py-0 opacity-0" : "opacity-100"}`}
      >
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
          <span className="font-medium tracking-wide">Engineering & Technology Solutions — Jeddah, Saudi Arabia</span>
        </div>
        <div className="flex items-center gap-6">
          <a href="tel:+966000000000" className="flex items-center gap-1.5 hover:text-gold transition-colors">
            <Phone size={12} /> +966 00 000 0000
          </a>
          <a href="mailto:info@masterqatar.com" className="flex items-center gap-1.5 hover:text-gold transition-colors">
            <Mail size={12} /> info@masterqatar.com
          </a>
        </div>
      </div>

      {/* Main nav */}
      <nav
        className={`fixed left-0 right-0 z-50 transition-all duration-400 ${navScrolled ? "top-0 bg-primary/95 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.3)]" : "top-0 md:top-[36px] bg-transparent"}`}
      >
        {/* Gold accent line at top */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent opacity-60" />

        <div className="container mx-auto px-4 xl:px-6">
          <div className="flex items-center justify-between h-[68px]">

            {/* ── Logo ── */}
            <Link to="/" className="flex items-center gap-3 group shrink-0">
              <div className="relative w-11 h-11 rounded-lg bg-gradient-to-br from-accent to-secondary flex items-center justify-center shadow-lg overflow-hidden">
                <span className="font-condensed font-black text-2xl text-primary-foreground z-10">M</span>
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="flex flex-col">
                <span className="font-condensed font-black text-[18px] text-primary-foreground leading-none tracking-[0.06em]">
                  MASTER QATAR
                </span>
                <span className="text-gold text-[9px] font-bold tracking-[0.22em] uppercase leading-tight mt-0.5">
                  W.L.L. — Saudi Arabia
                </span>
              </div>
            </Link>

            {/* ── Desktop Navigation ── */}
            <div className="hidden lg:flex items-center gap-0.5">
              {navItems.map((item) =>
                item.children ? (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    <button
                      className={`group flex items-center gap-1.5 px-3.5 py-2 text-sm font-semibold transition-all duration-200 rounded-md relative
                        ${location.pathname === "/services" ? "text-gold" : "text-primary-foreground/85 hover:text-primary-foreground"}
                      `}
                    >
                      {/* Active underline */}
                      <span className={`absolute bottom-0 left-3.5 right-3.5 h-[2px] bg-gold rounded-full transition-all duration-200 ${location.pathname === "/services" ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`} />
                      {item.label}
                      <ChevronDown
                        size={13}
                        className={`transition-transform duration-300 ${servicesOpen ? "rotate-180 text-gold" : ""}`}
                      />
                    </button>

                    {/* Mega dropdown */}
                    <div
                      className={`absolute top-full left-1/2 -translate-x-1/2 mt-1 w-[520px] transition-all duration-300 ${
                        servicesOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2 pointer-events-none"
                      }`}
                    >
                      {/* Arrow */}
                      <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-navy-800 rotate-45 border-t border-l border-navy-700" />

                      <div className="mt-1.5 bg-navy-800/98 backdrop-blur-xl border border-navy-600/50 rounded-xl shadow-[0_20px_60px_rgba(0,0,0,0.5)] overflow-hidden">
                        {/* Header */}
                        <div className="px-5 py-3 border-b border-navy-700 flex items-center justify-between">
                          <span className="text-xs font-bold text-primary-foreground/50 uppercase tracking-widest">Our Services</span>
                          <Link
                            to="/services"
                            onClick={() => setServicesOpen(false)}
                            className="text-xs text-accent hover:text-gold font-semibold transition-colors"
                          >
                            View All →
                          </Link>
                        </div>

                        {/* Grid of services */}
                        <div className="grid grid-cols-2 gap-0 p-3">
                          {item.children.map((child) => {
                            const Icon = child.icon;
                            return (
                              <button
                                key={child.label}
                                onClick={() => handleServiceClick(child.href)}
                                className="group/item flex items-start gap-3 p-3 rounded-lg hover:bg-navy-700/60 transition-all duration-150 text-left"
                              >
                                <div className="w-9 h-9 rounded-lg bg-accent/15 group-hover/item:bg-accent/25 flex items-center justify-center shrink-0 transition-colors">
                                  <Icon size={16} className="text-accent group-hover/item:text-gold transition-colors" />
                                </div>
                                <div>
                                  <div className="text-sm font-semibold text-primary-foreground group-hover/item:text-gold transition-colors">
                                    {child.label}
                                  </div>
                                  <div className="text-xs text-primary-foreground/45 mt-0.5 leading-tight">
                                    {child.desc}
                                  </div>
                                </div>
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    key={item.label}
                    to={item.href}
                    className={`group relative px-3.5 py-2 text-sm font-semibold transition-all duration-200 rounded-md
                      ${location.pathname === item.href
                        ? "text-gold"
                        : "text-primary-foreground/85 hover:text-primary-foreground"
                      }`}
                  >
                    <span className={`absolute bottom-0 left-3.5 right-3.5 h-[2px] bg-gold rounded-full transition-all duration-200 ${location.pathname === item.href ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`} />
                    {item.label}
                  </Link>
                )
              )}

              {/* CTA */}
              <Link
                to="/contact"
                className="ml-3 px-5 py-2.5 bg-gradient-to-r from-accent to-secondary hover:from-accent/90 hover:to-secondary/90 text-primary-foreground text-sm font-bold rounded-lg transition-all duration-200 shadow-lg hover:shadow-accent/25 hover:-translate-y-0.5 tracking-wide"
              >
                Get a Quote
              </Link>
            </div>

            {/* ── Mobile hamburger ── */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden relative w-9 h-9 flex flex-col items-center justify-center gap-1.5 group"
              aria-label="Toggle menu"
            >
              <span className={`block h-0.5 w-6 bg-primary-foreground rounded-full transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`block h-0.5 w-6 bg-primary-foreground rounded-full transition-all duration-300 ${isOpen ? "opacity-0" : ""}`} />
              <span className={`block h-0.5 w-6 bg-primary-foreground rounded-full transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </button>
          </div>
        </div>

        {/* ── Mobile menu ── */}
        <div className={`lg:hidden overflow-hidden transition-all duration-400 ${isOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"}`}>
          <div className="bg-navy-900/98 backdrop-blur-xl border-t border-navy-700/50">
            <div className="container mx-auto px-4 py-4 space-y-1">
              {navItems.map((item) => (
                <div key={item.label}>
                  {item.children ? (
                    <>
                      <button
                        onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                        className="w-full flex items-center justify-between px-4 py-3 text-sm font-semibold text-primary-foreground/85 hover:text-gold hover:bg-navy-800/50 rounded-lg transition-all"
                      >
                        {item.label}
                        <ChevronDown size={14} className={`transition-transform duration-300 ${mobileServicesOpen ? "rotate-180 text-gold" : ""}`} />
                      </button>
                      {mobileServicesOpen && (
                        <div className="ml-3 mt-1 space-y-0.5 border-l-2 border-accent/30 pl-3">
                          {item.children.map((child) => {
                            const Icon = child.icon;
                            return (
                              <button
                                key={child.label}
                                onClick={() => { handleServiceClick(child.href); setIsOpen(false); }}
                                className="w-full flex items-center gap-3 px-3 py-2.5 text-sm text-primary-foreground/70 hover:text-gold hover:bg-navy-800/40 rounded-lg transition-all text-left"
                              >
                                <Icon size={14} className="text-accent shrink-0" />
                                {child.label}
                              </button>
                            );
                          })}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      to={item.href}
                      className={`block px-4 py-3 text-sm font-semibold rounded-lg transition-all ${
                        location.pathname === item.href
                          ? "text-gold bg-navy-800/50"
                          : "text-primary-foreground/85 hover:text-gold hover:bg-navy-800/50"
                      }`}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
              <div className="pt-2 pb-1">
                <Link
                  to="/contact"
                  className="block text-center px-4 py-3 bg-gradient-to-r from-accent to-secondary text-primary-foreground font-bold text-sm rounded-xl"
                >
                  Get a Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
