import { PageHero, SectionHeading } from "@/components/UIComponents";
import { Award, CheckCircle, Shield } from "lucide-react";

const certifications = [
  {
    code: "ISO 9001:2015",
    title: "Quality Management System",
    description:
      "Certified for maintaining a robust Quality Management System that ensures consistent delivery of products and services that meet customer and regulatory requirements.",
    icon: Award,
    color: "accent",
  },
  {
    code: "ISO 45001:2018",
    title: "Occupational Health & Safety",
    description:
      "Certified for implementing an Occupational Health & Safety Management System, demonstrating our commitment to providing a safe and healthy workplace for all employees.",
    icon: Shield,
    color: "gold",
  },
];

const qualityPoints = [
  "Rigorous quality control procedures at every project phase",
  "Regular internal and external audits",
  "Continuous improvement culture across all teams",
  "Compliance with international engineering standards",
  "Zero-defect approach to project delivery",
  "Comprehensive HSE management programs",
  "Approved by Supreme Committee of Delivery & Legacy (FIFA Qatar)",
  "Award-winning labour camp facilities",
];

const awards = [
  {
    title: "FIFA World Cup 2022 Approved Contractor",
    body: "Supreme Committee of Delivery & Legacy, Qatar",
    year: "2020",
  },
  {
    title: "Award-Winning Labour Camp",
    body: "Qatar Ministry of Labour",
    year: "2019",
  },
  {
    title: "Best MEP Contractor — Project Excellence",
    body: "GCC Construction Industry Awards",
    year: "2018",
  },
];

interface CertificationsPageProps {
  embedded?: boolean;
}

export default function CertificationsPage({ embedded = false }: CertificationsPageProps) {
  return (
    <div>
      {!embedded && (
        <PageHero
        title="Certifications"
        subtitle="International standards and quality certifications demonstrating our commitment to excellence"
      />
      )}

      {/* ISO Certifications */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeading
            label="Our Certifications"
            title="ISO Certified Excellence"
            subtitle="Our internationally recognized certifications reflect our commitment to quality, safety, and continuous improvement."
            center
          />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {certifications.map(({ code, title, description, icon: Icon }) => (
              <div
                key={code}
                className="bg-card rounded-2xl border border-border shadow-elevated p-8 hover-lift"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-16 h-16 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                    <Icon size={28} className="text-accent" />
                  </div>
                  <div>
                    <div className="font-condensed font-extrabold text-3xl text-primary leading-none">{code}</div>
                    <div className="text-muted-foreground text-sm mt-1 font-medium">{title}</div>
                  </div>
                </div>
                <div className="divider-gold mb-4" />
                <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
                <div className="mt-5 flex items-center gap-2 text-xs text-accent font-semibold">
                  <CheckCircle size={14} />
                  Internationally Certified & Active
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Standards */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <SectionHeading
              label="Quality Assurance"
              title="Our Quality Commitment"
              subtitle="Quality is not just a certification — it is embedded in every process, every project, and every team member."
              center
              light
            />
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {qualityPoints.map((point) => (
                <div
                  key={point}
                  className="flex items-start gap-3 bg-navy-800/50 rounded-lg p-4 text-left border border-navy-700"
                >
                  <CheckCircle size={16} className="text-gold shrink-0 mt-0.5" />
                  <span className="text-sm text-primary-foreground/80">{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <SectionHeading
            label="Recognition"
            title="Awards & Achievements"
            center
          />
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {awards.map((award) => (
              <div
                key={award.title}
                className="bg-card rounded-xl p-6 shadow-card border border-border text-center hover-lift"
              >
                <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4">
                  <Award size={24} className="text-gold" />
                </div>
                <div className="inline-block text-xs font-bold bg-gold/10 text-gold px-2 py-0.5 rounded mb-3">
                  {award.year}
                </div>
                <h4 className="font-condensed font-bold text-lg text-foreground mb-2">{award.title}</h4>
                <p className="text-xs text-muted-foreground">{award.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}


