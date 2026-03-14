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

const clientLogos = Array.from({ length: 59 }, (_, index) => new URL(`../assets/c${index + 1}.jpg`, import.meta.url).href);

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

interface ClientsPageProps {
  embedded?: boolean;
}

export default function ClientsPage({ embedded = false }: ClientsPageProps) {
  return (
    <div>

      {!embedded && (
        <PageHero
        title="Our Clients"
        subtitle="Trusted by 20+ leading multinational companies across the GCC region"
      />
      )}

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
            {clientLogos.map((logo, index) => (
              <div
                key={`logo-${index}`}
                className="bg-card border border-border rounded-xl p-4 flex items-center justify-center shadow-card hover:shadow-lg transition"
              >
                <img
                  src={logo}
                  alt={`Client logo ${index + 1}`}
                  className="max-h-14 max-w-full object-contain"
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
      </section>


    </div>
  );
}


