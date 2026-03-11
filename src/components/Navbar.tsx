import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Phone, Mail } from "lucide-react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "MEP Contracting", href: "/services#mep" },
      { label: "ELV Systems", href: "/services#elv" },
      { label: "Automation Systems", href: "/services#automation" },
      { label: "Facility Management", href: "/services#fm" },
      { label: "Workforce Solutions", href: "/services#workforce" },
      { label: "Trading", href: "/services#trading" },
    ],
  },
  { label: "Projects", href: "/projects" },
  { label: "Clients", href: "/clients" },
  { label: "Certifications", href: "/certifications" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navBg =
    scrolled || !isHome
      ? "bg-primary shadow-elevated"
      : "bg-transparent";

  return (
    <>
      {/* Top bar */}
      <div className="hidden md:flex bg-navy-950 text-primary-foreground/70 text-sm py-2 px-4 justify-end gap-6">
        <a href="tel:+966000000000" className="flex items-center gap-1.5 hover:text-gold transition-colors">
          <Phone size={13} /> +966 00 000 0000
        </a>
        <a href="mailto:info@mastergcc.com" className="flex items-center gap-1.5 hover:text-gold transition-colors">
          <Mail size={13} /> info@mastergcc.com
        </a>
      </div>

      <nav className={`fixed left-0 right-0 z-50 transition-all duration-300 ${navBg} ${scrolled || !isHome ? "top-0" : "top-0 md:top-8"}`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-18">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded bg-accent flex items-center justify-center font-condensed font-extrabold text-lg text-accent-foreground shadow">
                M
              </div>
              <div>
                <div className="font-condensed font-extrabold text-xl text-primary-foreground leading-none tracking-wide">
                  MASTER GCC
                </div>
                <div className="text-gold text-xs font-semibold tracking-widest uppercase leading-none">
                  Saudi Arabia
                </div>
              </div>
            </Link>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) =>
                item.children ? (
                  <div
                    key={item.label}
                    className="relative group"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    <button className="flex items-center gap-1 px-3 py-2 text-primary-foreground/90 hover:text-gold font-medium text-sm transition-colors">
                      {item.label}
                      <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-200" />
                    </button>
                    <div className={`absolute top-full left-0 w-52 bg-primary shadow-elevated rounded overflow-hidden transition-all duration-200 ${servicesOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"}`}>
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          to={child.href}
                          className="block px-4 py-2.5 text-sm text-primary-foreground/80 hover:text-gold hover:bg-navy-800 transition-colors border-b border-navy-700 last:border-0"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    key={item.label}
                    to={item.href}
                    className={`px-3 py-2 text-sm font-medium transition-colors ${
                      location.pathname === item.href
                        ? "text-gold"
                        : "text-primary-foreground/90 hover:text-gold"
                    }`}
                  >
                    {item.label}
                  </Link>
                )
              )}
              <Link
                to="/contact"
                className="ml-2 px-4 py-2 bg-accent hover:bg-accent/80 text-accent-foreground text-sm font-semibold rounded transition-colors"
              >
                Get a Quote
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-primary-foreground p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="lg:hidden bg-primary border-t border-navy-700 py-4">
            <div className="container mx-auto px-4 flex flex-col gap-1">
              {navItems.map((item) => (
                <div key={item.label}>
                  <Link
                    to={item.href}
                    className="block px-3 py-2.5 text-primary-foreground/90 hover:text-gold font-medium text-sm"
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <div className="pl-4">
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          to={child.href}
                          className="block px-3 py-2 text-sm text-primary-foreground/60 hover:text-gold"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
