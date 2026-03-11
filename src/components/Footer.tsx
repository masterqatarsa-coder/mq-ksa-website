import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Linkedin, Twitter, Instagram, ArrowUpRight } from "lucide-react";

const services = [
  "MEP Contracting",
  "ELV Systems",
  "Automation Systems",
  "Facility Management",
  "Workforce Solutions",
  "Trading",
];

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Clients", href: "/clients" },
  { label: "Certifications", href: "/certifications" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-primary-foreground/65 relative overflow-hidden">
      {/* Decorative gradient top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
      <div className="absolute top-0 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3 pointer-events-none" />

      {/* Main footer content */}
      <div className="container mx-auto px-4 xl:px-6 pt-16 pb-10 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">

          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-flex items-center gap-3 group mb-5">
              <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-accent to-secondary flex items-center justify-center shadow-lg">
                <span className="font-condensed font-black text-2xl text-primary-foreground">M</span>
              </div>
              <div>
                <div className="font-condensed font-black text-[17px] text-primary-foreground leading-none tracking-wide">
                  MASTER QATAR
                </div>
                <div className="text-gold text-[9px] font-bold tracking-[0.2em] uppercase mt-0.5">
                  W.L.L. — Saudi Arabia
                </div>
              </div>
            </Link>

            <p className="text-sm leading-relaxed mb-6 text-primary-foreground/55">
              A trusted engineering & technology partner delivering world-class MEP, ELV, Automation, and Facility Management solutions across the GCC region.
            </p>

            <div className="flex gap-2">
              {[Facebook, Linkedin, Twitter, Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-8 h-8 rounded-lg bg-navy-800 hover:bg-accent flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-condensed font-bold text-base text-primary-foreground mb-5 uppercase tracking-[0.12em] flex items-center gap-2">
              <span className="w-5 h-0.5 bg-gold rounded-full" />
              Services
            </h4>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s}>
                  <Link
                    to="/services"
                    className="text-sm hover:text-gold transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-accent/50 group-hover:bg-gold transition-colors shrink-0" />
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-condensed font-bold text-base text-primary-foreground mb-5 uppercase tracking-[0.12em] flex items-center gap-2">
              <span className="w-5 h-0.5 bg-gold rounded-full" />
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    to={l.href}
                    className="text-sm hover:text-gold transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-accent/50 group-hover:bg-gold transition-colors shrink-0" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-condensed font-bold text-base text-primary-foreground mb-5 uppercase tracking-[0.12em] flex items-center gap-2">
              <span className="w-5 h-0.5 bg-gold rounded-full" />
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-md bg-navy-800 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin size={13} className="text-gold" />
                </div>
                <span className="text-sm leading-relaxed">Jeddah, Kingdom of Saudi Arabia</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-md bg-navy-800 flex items-center justify-center shrink-0">
                  <Phone size={13} className="text-gold" />
                </div>
                <a href="tel:+966000000000" className="text-sm hover:text-gold transition-colors">
                  +966 00 000 0000
                </a>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-md bg-navy-800 flex items-center justify-center shrink-0">
                  <Mail size={13} className="text-gold" />
                </div>
                <a href="mailto:info@masterqatar.com" className="text-sm hover:text-gold transition-colors">
                  info@masterqatar.com
                </a>
              </li>
            </ul>

            <div className="mt-5 pt-4 border-t border-navy-800/80">
              <p className="text-[10px] text-primary-foreground/35 uppercase tracking-widest mb-1.5">Sister Company</p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-primary-foreground/65">Master Qatar W.L.L.</p>
                  <p className="text-xs text-primary-foreground/35">Doha, Qatar | Est. 2011</p>
                </div>
                <ArrowUpRight size={14} className="text-accent/50" />
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 pt-6 border-t border-navy-800/60 flex flex-col md:flex-row justify-between items-center gap-3">
          <span className="text-xs text-primary-foreground/35">
            © 2025 Master Qatar W.L.L. — Saudi Arabia Branch. All rights reserved.
          </span>
          <span className="flex gap-5 text-xs text-primary-foreground/35">
            <a href="#" className="hover:text-gold transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gold transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-gold transition-colors">Sitemap</a>
          </span>
        </div>
      </div>
    </footer>
  );
}
