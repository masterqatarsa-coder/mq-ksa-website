import { PageHero, SectionHeading } from "@/components/UIComponents";

const clients = [
  { name: "Siemens", sector: "Engineering" },
  { name: "Honeywell", sector: "Automation & Controls" },
  { name: "Schneider Electric", sector: "Energy Management" },
  { name: "Johnson Controls", sector: "Building Technology" },
  { name: "ABB", sector: "Power & Automation" },
  { name: "Bosch", sector: "Technology" },
  { name: "Hager Group", sector: "Electrical Systems" },
  { name: "Legrand", sector: "Electrical Infrastructure" },
  { name: "Lutron", sector: "Lighting Control" },
  { name: "Axis Communications", sector: "Network Video" },
  { name: "ASSA ABLOY", sector: "Entrance Solutions" },
  { name: "Dorma Kaba", sector: "Access & Security" },
  { name: "Hilti", sector: "Construction Tools" },
  { name: "Grundfos", sector: "Pumps & Water Solutions" },
  { name: "Victaulic", sector: "Piping Systems" },
  { name: "Tyco Fire", sector: "Fire Protection" },
  { name: "Daikin", sector: "HVAC" },
  { name: "Carrier", sector: "HVAC & Refrigeration" },
  { name: "York", sector: "HVAC Systems" },
  { name: "Trane", sector: "Climate Control" },
];

const testimonials = [
  {
    quote: "Qatar Masters has been a reliable partner on multiple major projects. Their quality of work and professionalism is consistently outstanding.",
    author: "Senior Project Director",
    company: "Multinational Construction Firm",
  },
  {
    quote: "Their MEP team is highly skilled and well-organized. They completed the electrical works on our flagship project ahead of schedule.",
    author: "Project Manager",
    company: "International Real Estate Developer",
  },
  {
    quote: "We have been awarding contracts to Qatar Masters for over 5 years. Their commitment to quality and safety standards is unmatched.",
    author: "Engineering Director",
    company: "GCC Infrastructure Company",
  },
];

export default function ClientsPage() {
  return (
    <div>
      <PageHero
        title="Our Clients"
        subtitle="Trusted by 20+ leading multinational companies across the GCC region"
      />

      {/* Stats */}
      <section className="py-12 bg-primary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { num: "20+", label: "MNC Clients" },
              { num: "12+", label: "Years of Partnerships" },
              { num: "100+", label: "Projects Delivered" },
              { num: "GCC", label: "Regional Coverage" },
            ].map((s) => (
              <div key={s.label}>
                <div className="font-condensed font-extrabold text-4xl text-gold">{s.num}</div>
                <div className="text-xs text-primary-foreground/60 uppercase tracking-widest mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeading
            label="Trusted Partners"
            title="Our Valued Clients"
            subtitle="We are proud to have partnered with some of the world's most respected engineering and technology companies."
            center
          />
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {clients.map((client) => (
              <div
                key={client.name}
                className="group bg-card border border-border rounded-xl p-5 text-center shadow-card hover-lift"
              >
                <div className="w-14 h-14 rounded-full bg-muted flex items-center justify-center mx-auto mb-3">
                  <span className="font-condensed font-extrabold text-xl text-accent">
                    {client.name.slice(0, 2).toUpperCase()}
                  </span>
                </div>
                <div className="font-semibold text-sm text-foreground">{client.name}</div>
                <div className="text-xs text-muted-foreground mt-1">{client.sector}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <SectionHeading
            label="What They Say"
            title="Client Testimonials"
            center
          />
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-card rounded-xl p-6 shadow-card border border-border">
                <div className="text-4xl text-accent/30 font-condensed font-black leading-none mb-3">"</div>
                <p className="text-sm text-muted-foreground leading-relaxed italic mb-5">{t.quote}</p>
                <div className="border-t border-border pt-4">
                  <div className="font-semibold text-sm text-foreground">{t.author}</div>
                  <div className="text-xs text-muted-foreground">{t.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
