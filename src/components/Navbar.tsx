import { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  ArrowRight,
  ChevronDown,
  Mail,
  MapPin,
  Package,
  Phone,
  Settings,
  Users,
  Wifi,
  Wrench,
  Zap,
} from "lucide-react";
import { useIsCompactNav } from "@/hooks/use-compact-nav";
import mqLogo from "../assets/MQ-LOGO.png";

const serviceItems = [
  { label: "MEP Contracting", href: "/services#mep", icon: Zap, desc: "Electrical, plumbing, HVAC, fire fighting" },
  { label: "ELV Systems", href: "/services#elv", icon: Wifi, desc: "BMS, CCTV, access control, cabling" },
  { label: "Automation Systems", href: "/services#automation", icon: Settings, desc: "Auto doors, shutters, barriers, loading bays" },
  { label: "Facility Management", href: "/services#fm", icon: Wrench, desc: "Building maintenance and cleaning operations" },
  { label: "Workforce Solutions", href: "/services#workforce", icon: Users, desc: "Skilled manpower, HR, mobilization support" },
  { label: "Trading", href: "/services#trading", icon: Package, desc: "HVAC and engineering equipment supply" },
];

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services", children: serviceItems },
  { label: "Projects", href: "/projects" },
  { label: "Clients", href: "/clients" },
  { label: "Certifications", href: "/certifications" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const servicesMenuRef = useRef<HTMLDivElement | null>(null);
  const location = useLocation();
  const navigate = useNavigate();
  const isCompactNav = useIsCompactNav();
  const isHome = location.pathname === "/";

  const getNavTarget = (href: string) => {
    if (!isCompactNav) {
      return href;
    }

    if (href === "/") {
      return "/";
    }

    return `/#${href.replace("/", "")}`;
  };

  const getServiceTarget = (href: string) => {
    if (!isCompactNav) {
      return href;
    }

    const [, hash] = href.split("#");
    return hash ? `/#${hash}` : "/#services";
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setServicesOpen(false);
    setMobileServicesOpen(false);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handlePointerDown = (event: MouseEvent | TouchEvent) => {
      if (!servicesMenuRef.current?.contains(event.target as Node)) {
        setServicesOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setServicesOpen(false);
      }
    };

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("touchstart", handlePointerDown, { passive: true });
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("touchstart", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleServiceClick = (href: string) => {
    if (isCompactNav) {
      navigate(getServiceTarget(href));
      setServicesOpen(false);
      setMobileServicesOpen(false);
      setIsOpen(false);
      return;
    }

    const [path, hash] = href.split("#");
    if (location.pathname === path && hash) {
      const section = document.getElementById(hash);
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
        setServicesOpen(false);
        setMobileServicesOpen(false);
        setIsOpen(false);
        return;
      }
    }

    navigate(href);
    setServicesOpen(false);
    setMobileServicesOpen(false);
    setIsOpen(false);
  };

  const handleNavItemClick = (href: string) => {
    navigate(getNavTarget(href));
    setIsOpen(false);
    setMobileServicesOpen(false);
    setServicesOpen(false);
  };

  const isOverlayMode = isHome && !scrolled;
  const servicesActive = location.pathname === "/services" || (isCompactNav && location.hash === "#services");

  const shellClasses = isOverlayMode
    ? "border-white/14 bg-navy-950/72 shadow-[0_18px_60px_-28px_rgba(7,19,38,0.75)] backdrop-blur-2xl"
    : "border-slate-300/80 bg-white/88 shadow-[0_18px_60px_-28px_rgba(15,23,42,0.18)] backdrop-blur-2xl";
  const topBarClasses = isOverlayMode
    ? "border-white/10 bg-black/10 text-white/80"
    : "border-slate-200/90 bg-slate-100/70 text-slate-700";
  const topBarLeadClasses = isOverlayMode ? "text-white/88" : "text-slate-800";
  const topBarSubtleClasses = isOverlayMode ? "text-white/62" : "text-slate-500";
  const brandTitleClasses = isOverlayMode ? "text-white" : "text-navy-900";
  const navIdleClasses = isOverlayMode
    ? "text-white/86 hover:bg-white/8 hover:text-white"
    : "text-navy-900/88 hover:bg-slate-100 hover:text-navy-950";
  const navActiveClasses = isOverlayMode ? "bg-white/12 text-gold" : "bg-primary/6 text-primary";
  const mobilePanelClasses = isOverlayMode
    ? "border-white/10 bg-navy-950/96"
    : "border-slate-200/90 bg-white/96";
  const mobileButtonClasses = isOverlayMode
    ? "border-white/10 bg-white/6 text-white/92 hover:border-white/20 hover:bg-white/10"
    : "border-slate-200 bg-slate-50 text-navy-950 hover:border-slate-300 hover:bg-white";
  const mobileLabelClasses = isOverlayMode ? "text-white/90" : "text-navy-950";
  const mobileDescClasses = isOverlayMode ? "text-white/68" : "text-slate-600";
  const utilityCardClasses = isOverlayMode
    ? "border-white/10 bg-white/6 text-white/92 hover:bg-white/10"
    : "border-slate-200 bg-slate-50 text-navy-950 hover:bg-white";
  const utilityLabelClasses = isOverlayMode ? "text-white/62" : "text-slate-500";

  return (
    <nav
      className={`fixed inset-x-0 z-50 px-3 transition-all duration-300 md:px-5 ${isOverlayMode ? "top-0 pt-3 md:pt-4" : "top-0 pt-2.5"}`}
    >
      <div className="mx-auto max-w-[1380px]">
        <div className={`relative rounded-[1.7rem] border transition-all duration-300 ${shellClasses}`}>
          <div className={`hidden items-center justify-between rounded-t-[1.7rem] border-b px-5 py-2 text-[11px] font-medium md:flex ${topBarClasses}`}>
            <div className="flex items-center gap-4 uppercase tracking-[0.24em]">
              <span className={`inline-flex items-center gap-2 ${topBarLeadClasses}`}>
                <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                Engineering and technology delivery
              </span>
              <span className={`hidden lg:inline ${topBarSubtleClasses}`}>Kingdom of Saudi Arabia </span>
            </div>
            <div className={`flex items-center gap-5 ${topBarLeadClasses}`}>
              <span className="inline-flex items-center gap-2">
                <MapPin size={12} /> Jeddah, Saudi Arabia
              </span>
              <a href="tel:+966000000000" className="inline-flex items-center gap-2 transition-colors hover:text-gold">
                <Phone size={12} /> +966 00 000 0000
              </a>
              <a href="mailto:mail@qatarmaster.com" className="inline-flex items-center gap-2 transition-colors hover:text-gold">
                <Mail size={12} /> mail@qatarmaster.com
              </a>
            </div>
          </div>

          <div className="flex h-[76px] items-center justify-between px-4 md:px-5 xl:px-6">
            <Link to="/" className="group flex shrink-0 items-center gap-2.5 sm:gap-3">
              <img src={mqLogo} alt="MQ logo" className="h-12 w-19 object-cover rounded-2xl" />
              <div className="min-w-0 max-w-[9.5rem] sm:max-w-none">
                <div className={`truncate font-condensed text-[15px] font-black leading-none tracking-[0.08em] sm:text-[18px] ${brandTitleClasses}`}>
                  MASTER QATAR
                </div>
                <div className="mt-1 truncate text-[9px] font-semibold uppercase tracking-[0.22em] text-gold/90 sm:text-[10px] sm:tracking-[0.28em]">
                  Kingdom of Saudi Arabia 
                </div>
              </div>
            </Link>

            <div className="hidden items-center gap-1 lg:flex">
              {navItems.map((item) =>
                item.children ? (
                  <div
                    key={item.label}
                    ref={servicesMenuRef}
                    className="relative z-20"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    <button
                      type="button"
                      onClick={() => setServicesOpen((open) => !open)}
                      aria-expanded={servicesOpen}
                      aria-haspopup="menu"
                      className={`group relative flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold transition-all duration-200 ${
                        servicesActive ? navActiveClasses : navIdleClasses
                      }`}
                    >
                      {item.label}
                      <ChevronDown
                        size={14}
                        className={`transition-transform duration-300 ${servicesOpen ? "rotate-180 text-gold" : ""}`}
                      />
                      <span
                        className={`absolute inset-x-4 bottom-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent transition-opacity duration-200 ${
                          servicesActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                        }`}
                      />
                    </button>

                    <div
                      className={`absolute left-1/2 top-full z-30 w-[600px] -translate-x-1/2 pt-3 transition-all duration-300 ${
                        servicesOpen
                          ? "visible translate-y-0 opacity-100 pointer-events-auto"
                          : "invisible -translate-y-2 opacity-0 pointer-events-none"
                      }`}
                    >
                      <div
                        className={`rounded-[1.75rem] border p-3 backdrop-blur-2xl ${
                          isOverlayMode
                            ? "border-white/10 bg-navy-950/96 shadow-[0_28px_80px_-32px_rgba(3,10,24,0.85)]"
                            : "border-slate-200 bg-white/96 shadow-[0_24px_60px_-28px_rgba(15,23,42,0.18)]"
                        }`}
                      >
                        <div
                          className={`flex items-center justify-between rounded-[1.2rem] border px-4 py-3 ${
                            isOverlayMode ? "border-white/10 bg-white/6" : "border-slate-200 bg-slate-50"
                          }`}
                        >
                          <div>
                            <div className={`text-[11px] font-semibold uppercase tracking-[0.24em] ${isOverlayMode ? "text-white/70" : "text-slate-500"}`}>
                              Service matrix
                            </div>
                            <div className={`mt-1 text-sm font-semibold ${isOverlayMode ? "text-white" : "text-navy-950"}`}>
                              Explore the full engineering stack we deliver.
                            </div>
                          </div>
                          <Link
                            to="/services"
                            className={`inline-flex items-center gap-2 rounded-full border px-3 py-2 text-xs font-semibold uppercase tracking-[0.22em] transition-colors ${
                              isOverlayMode
                                ? "border-white/12 text-gold hover:border-gold/30 hover:text-white"
                                : "border-slate-200 text-primary hover:border-primary/20 hover:text-navy-950"
                            }`}
                          >
                            View all <ArrowRight size={12} />
                          </Link>
                        </div>

                        <div className="mt-3 grid grid-cols-2 gap-3">
                          {item.children.map((child) => {
                            const Icon = child.icon;
                            return (
                              <button
                                key={child.label}
                                type="button"
                                onClick={() => handleServiceClick(child.href)}
                                className={`group/item flex min-h-[108px] items-start gap-3 rounded-[1.25rem] border px-4 py-4 text-left transition-all duration-200 ${
                                  isOverlayMode
                                    ? "border-white/10 bg-white/6 hover:border-accent/30 hover:bg-white/10"
                                    : "border-slate-200 bg-slate-50 hover:border-primary/18 hover:bg-white"
                                }`}
                              >
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-accent/14 text-accent transition-colors group-hover/item:bg-accent/22 group-hover/item:text-gold">
                                  <Icon size={18} />
                                </div>
                                <div>
                                  <div className={`text-sm font-semibold group-hover/item:text-gold ${isOverlayMode ? "text-white" : "text-navy-950"}`}>
                                    {child.label}
                                  </div>
                                  <div className={`mt-2 text-xs leading-relaxed ${isOverlayMode ? "text-white/72" : "text-slate-600"}`}>
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
                    className={`group relative rounded-full px-4 py-2.5 text-sm font-semibold transition-all duration-200 ${
                      location.pathname === item.href ? navActiveClasses : navIdleClasses
                    }`}
                  >
                    {item.label}
                    <span
                      className={`absolute inset-x-4 bottom-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent transition-opacity duration-200 ${
                        location.pathname === item.href ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                      }`}
                    />
                  </Link>
                )
              )}

              <Link
                to="/contact"
                className="ml-2 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent to-secondary px-5 py-3 text-sm font-bold uppercase tracking-[0.18em] text-white shadow-[0_20px_40px_-20px_rgba(27,160,255,0.75)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_24px_46px_-18px_rgba(27,160,255,0.78)]"
              >
                Request Proposal
                <ArrowRight size={15} />
              </Link>
            </div>

            <button
              type="button"
              onClick={() => setIsOpen((open) => !open)}
              className={`group flex h-11 w-11 items-center justify-center rounded-2xl border transition-all lg:hidden ${mobileButtonClasses}`}
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              <div className="relative h-4 w-5">
                <span className={`absolute left-0 top-0 block h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${isOpen ? "translate-y-[7px] rotate-45" : ""}`} />
                <span className={`absolute left-0 top-[7px] block h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${isOpen ? "opacity-0" : ""}`} />
                <span className={`absolute left-0 top-[14px] block h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${isOpen ? "-translate-y-[7px] -rotate-45" : ""}`} />
              </div>
            </button>
          </div>

          <div className={`overflow-hidden transition-all duration-300 lg:hidden ${isOpen ? "max-h-[700px] opacity-100" : "max-h-0 opacity-0"}`}>
            <div className={`rounded-b-[1.7rem] border-t px-4 pb-5 pt-4 backdrop-blur-2xl ${mobilePanelClasses}`}>
              <div className="grid grid-cols-1 gap-2">
                {navItems.map((item) => (
                  <div key={item.label}>
                    {item.children ? (
                      <>
                        <button
                          type="button"
                          onClick={() => setMobileServicesOpen((open) => !open)}
                          className={`flex w-full items-center justify-between rounded-2xl border px-4 py-3 text-sm font-semibold transition-colors ${mobileButtonClasses}`}
                          aria-expanded={mobileServicesOpen}
                        >
                          <span className={mobileLabelClasses}>{item.label}</span>
                          <ChevronDown size={15} className={`transition-transform duration-300 ${mobileServicesOpen ? "rotate-180 text-gold" : ""}`} />
                        </button>
                        <div className={`grid transition-all duration-300 ${mobileServicesOpen ? "grid-rows-[1fr] pt-2" : "grid-rows-[0fr]"}`}>
                          <div className="overflow-hidden">
                            <div className={`space-y-2 rounded-[1.4rem] border p-2 ${isOverlayMode ? "border-white/10 bg-white/5" : "border-slate-200 bg-slate-50"}`}>
                              <button
                                type="button"
                                onClick={() => handleNavItemClick("/services")}
                                className={`flex w-full items-center justify-between rounded-xl px-3 py-3 text-left transition-colors ${isOverlayMode ? "hover:bg-white/8" : "hover:bg-white"}`}
                              >
                                <div>
                                  <div className={`text-sm font-semibold ${mobileLabelClasses}`}>All Services</div>
                                  <div className={`mt-1 text-xs leading-relaxed ${mobileDescClasses}`}>Jump to the full services section in the mobile scroll view.</div>
                                </div>
                                <ArrowRight size={15} className="shrink-0 text-gold" />
                              </button>
                              {item.children.map((child) => {
                                const Icon = child.icon;
                                return (
                                  <button
                                    key={child.label}
                                    type="button"
                                    onClick={() => handleServiceClick(child.href)}
                                    className={`flex w-full items-start gap-3 rounded-xl px-3 py-3 text-left transition-colors ${isOverlayMode ? "hover:bg-white/8" : "hover:bg-white"}`}
                                  >
                                    <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl bg-accent/14 text-accent">
                                      <Icon size={16} />
                                    </div>
                                    <div>
                                      <div className={`text-sm font-semibold ${mobileLabelClasses}`}>{child.label}</div>
                                      <div className={`mt-1 text-xs leading-relaxed ${mobileDescClasses}`}>{child.desc}</div>
                                    </div>
                                  </button>
                                );
                              })}
                            </div>
                          </div>
                        </div>
                      </>
                    ) : (
                      <button
                        type="button"
                        onClick={() => handleNavItemClick(item.href)}
                        className={`block w-full rounded-2xl border px-4 py-3 text-left text-sm font-semibold transition-all ${
                          location.pathname === item.href || (isCompactNav && location.hash === `#${item.href.replace("/", "")}`)
                            ? isOverlayMode
                              ? "border-gold/20 bg-white/10 text-gold"
                              : "border-primary/15 bg-primary/6 text-primary"
                            : mobileButtonClasses
                        }`}
                      >
                        {item.label}
                      </button>
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
                <a href="tel:+966000000000" className={`rounded-2xl border px-4 py-3 text-sm transition-colors ${utilityCardClasses}`}>
                  <span className={`mb-1 block text-[11px] font-semibold uppercase tracking-[0.22em] ${utilityLabelClasses}`}>Phone</span>
                  +966 00 000 0000
                </a>
                <a href="mailto:mail@qatarmaster.com" className={`rounded-2xl border px-4 py-3 text-sm transition-colors ${utilityCardClasses}`}>
                  <span className={`mb-1 block text-[11px] font-semibold uppercase tracking-[0.22em] ${utilityLabelClasses}`}>Email</span>
                  mail@qatarmaster.com
                </a>
              </div>

              <button
                type="button"
                onClick={() => handleNavItemClick("/contact")}
                className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-accent to-secondary px-5 py-3.5 text-sm font-bold uppercase tracking-[0.18em] text-white"
              >
                Request Proposal
                <ArrowRight size={15} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

