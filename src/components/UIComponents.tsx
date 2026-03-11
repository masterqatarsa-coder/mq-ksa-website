import { useEffect, useRef, useState } from "react";

interface StatCounterProps {
  value: number;
  suffix?: string;
  label: string;
  delay?: number;
}

export function StatCounter({ value, suffix = "", label, delay = 0 }: StatCounterProps) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    const timer = setTimeout(() => {
      const duration = 1800;
      const steps = 60;
      const increment = value / steps;
      let current = 0;
      const interval = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(interval);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);
      return () => clearInterval(interval);
    }, delay);
    return () => clearTimeout(timer);
  }, [started, value, delay]);

  return (
    <div ref={ref} className="text-center">
      <div className="font-condensed font-extrabold text-5xl md:text-6xl text-gold leading-none mb-2">
        {count}{suffix}
      </div>
      <div className="text-sm md:text-base text-primary-foreground/70 font-medium uppercase tracking-wider">
        {label}
      </div>
    </div>
  );
}

interface SectionHeadingProps {
  label?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
  light?: boolean;
}

export function SectionHeading({ label, title, subtitle, center = false, light = false }: SectionHeadingProps) {
  return (
    <div className={center ? "text-center" : ""}>
      {label && (
        <span className="inline-block text-xs font-bold uppercase tracking-widest text-accent bg-accent/10 px-3 py-1 rounded mb-3">
          {label}
        </span>
      )}
      <h2 className={`font-condensed font-extrabold text-3xl md:text-4xl lg:text-5xl mb-3 leading-tight ${light ? "text-primary-foreground" : "text-primary"}`}>
        {title}
      </h2>
      <div className={`divider-gold mb-4 ${center ? "mx-auto" : ""}`} />
      {subtitle && (
        <p className={`text-base md:text-lg max-w-2xl leading-relaxed ${center ? "mx-auto" : ""} ${light ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}

interface PageHeroProps {
  title: string;
  subtitle?: string;
  bg?: string;
}

export function PageHero({ title, subtitle, bg }: PageHeroProps) {
  return (
    <section
      className="relative h-64 md:h-80 flex items-end pb-10 overflow-hidden"
      style={bg ? { backgroundImage: `url(${bg})`, backgroundSize: "cover", backgroundPosition: "center" } : {}}
    >
      <div className="absolute inset-0 bg-gradient-hero opacity-90" />
      <div className="absolute inset-0 pattern-dots opacity-20" />
      <div className="container mx-auto px-4 relative z-10">
        <p className="text-gold text-xs font-bold uppercase tracking-widest mb-2">Master Qatar W.L.L. — Saudi Arabia</p>
        <h1 className="font-condensed font-extrabold text-4xl md:text-6xl text-primary-foreground">
          {title}
        </h1>
        {subtitle && <p className="text-primary-foreground/70 mt-2 max-w-xl">{subtitle}</p>}
      </div>
    </section>
  );
}
