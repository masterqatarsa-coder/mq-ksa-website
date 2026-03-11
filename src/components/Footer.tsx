import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Linkedin, Twitter, Instagram } from "lucide-react";

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
    <footer className="bg-navy-950 text-primary-foreground/70">
      {/* Main footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded bg-accent flex items-center justify-center font-condensed font-extrabold text-lg text-accent-foreground">
                M
              </div>
              <div>
                <div className="font-condensed font-extrabold text-xl text-primary-foreground leading-none">
                  MASTER GCC
                </div>
                <div className="text-gold text-xs font-semibold tracking-widest uppercase">
                  Saudi Arabia
                </div>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-5">
              A trusted engineering & technology partner delivering world-class MEP, ELV, Automation, and Facility Management solutions across the GCC region.
            </p>
            <div className="flex gap-3">
              {[Facebook, Linkedin, Twitter, Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-8 h-8 rounded bg-navy-800 hover:bg-accent flex items-center justify-center transition-colors"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-condensed font-bold text-lg text-primary-foreground mb-4 uppercase tracking-wide">
              Our Services
            </h4>
            <ul className="space-y-2">
              {services.map((s) => (
                <li key={s}>
                  <Link
                    to="/services"
                    className="text-sm hover:text-gold transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-accent group-hover:bg-gold transition-colors" />
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-condensed font-bold text-lg text-primary-foreground mb-4 uppercase tracking-wide">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    to={l.href}
                    className="text-sm hover:text-gold transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-accent group-hover:bg-gold transition-colors" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-condensed font-bold text-lg text-primary-foreground mb-4 uppercase tracking-wide">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-gold mt-0.5 shrink-0" />
                <span className="text-sm">Jeddah, Kingdom of Saudi Arabia</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-gold shrink-0" />
                <a href="tel:+966000000000" className="text-sm hover:text-gold transition-colors">
                  +966 00 000 0000
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-gold shrink-0" />
                <a href="mailto:info@mastergcc.com" className="text-sm hover:text-gold transition-colors">
                  info@mastergcc.com
                </a>
              </li>
            </ul>
            <div className="mt-5 pt-4 border-t border-navy-800">
              <p className="text-xs text-primary-foreground/40 mb-1">Sister Company</p>
              <p className="text-sm font-medium text-primary-foreground/70">Master Qatar</p>
              <p className="text-xs text-primary-foreground/40">Doha, Qatar | Est. 2011</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-navy-800">
        <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center gap-2 text-xs text-primary-foreground/40">
          <span>© 2025 Master GCC Saudi Arabia. All rights reserved.</span>
          <span className="flex gap-4">
            <a href="#" className="hover:text-gold transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gold transition-colors">Terms of Service</a>
          </span>
        </div>
      </div>
    </footer>
  );
}
