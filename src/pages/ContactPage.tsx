import { useState } from "react";
import { PageHero, SectionHeading } from "@/components/UIComponents";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

interface ContactPageProps {
  embedded?: boolean;
}

export default function ContactPage({ embedded = false }: ContactPageProps) {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.phone.trim() || !form.message.trim()) {
      setError("Please fill in all fields before submitting.");
      return;
    }
    setError(null);
    try {
      const response = await fetch('https://mail-service.qatarmaster.com/contact.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });
      if (response.ok) {
        setSubmitted(true);
        setForm({ name: "", email: "", phone: "", message: "" });
      } else {
        setError("Failed to send message. Please try again.");
      }
    } catch (error) {
      setError("Network error. Please check your connection and try again.");
    }
  };

  return (
    <div>
      {!embedded && (
        <PageHero
          title="Contact Us"
          subtitle="Get in touch with our engineering team in Jeddah, Saudi Arabia"
          details={
            <div className="mt-6 grid max-w-md gap-3 text-sm text-primary-foreground/90 md:grid-cols-2">
              <a
                href="https://www.google.com/maps/place/Master+Qatar/@21.5015688,39.1832624,459m/data=!3m1!1e3!4m6!3m5!1s0x15c3cfecb435a733:0xeca822ac116fa5d3!8m2!3d21.5014555!4d39.1843368!16s%2Fg%2F11z2t0179j?entry=ttu&g_ep=EgoyMDI2MDMyMi4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 rounded-xl border border-white/10 bg-white/8 px-4 py-3 text-left hover:border-accent/30 hover:bg-white/12"
              >
                <MapPin className="h-4 w-4 text-accent" />
                <span>
                  Jeddah, Saudi Arabia
                  <span className="block text-xs text-muted-foreground">View on map</span>
                </span>
              </a>
              <div className="grid grid-cols-1 gap-2">
                <a
                  href="tel:+966539817923"
                  className="inline-flex items-center gap-3 rounded-xl border border-white/10 bg-white/8 px-4 py-3 text-left hover:border-accent/30 hover:bg-white/12"
                >
                  <Phone className="h-4 w-4 text-accent" />
                  <span>
                    +966 539817923
                    <span className="block text-xs text-muted-foreground">Call us</span>
                  </span>
                </a>
                <a
                  href="tel:+966509810613"
                  className="inline-flex items-center gap-3 rounded-xl border border-white/10 bg-white/8 px-4 py-3 text-left hover:border-accent/30 hover:bg-white/12"
                >
                  <Phone className="h-4 w-4 text-accent" />
                  <span>
                    +966 509810613
                    <span className="block text-xs text-muted-foreground">Call us</span>
                  </span>
                </a>
              </div>
              <a
                href="mailto:mail.masterqatar@gmail.com"
                className="inline-flex items-center gap-3 rounded-xl border border-white/10 bg-white/8 px-4 py-3 text-left hover:border-accent/30 hover:bg-white/12"
              >
                <Mail className="h-4 w-4 text-accent" />
                <span>
                  mail.masterqatar@gmail.com
                  <span className="block text-xs text-muted-foreground">Send us an email</span>
                </span>
              </a>
            </div>
          }
        />
      )}

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="mx-auto grid max-w-4xl grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-6">
              <SectionHeading
                label="Reach Out"
                title="We'd Love to Hear From You"
                subtitle="Our engineering team is ready to discuss your project requirements."
              />

              <div className="space-y-4 mt-8">
                {[
                  {
                    icon: MapPin,
                    title: "Office Location",
                    lines: [
                      <a
                        key="location"
                        href="https://www.google.com/maps/place/Master+Qatar/@21.5015688,39.1832624,459m/data=!3m1!1e3!4m6!3m5!1s0x15c3cfecb435a733:0xeca822ac116fa5d3!8m2!3d21.5014555!4d39.1843368!16s%2Fg%2F11z2t0179j?entry=ttu&g_ep=EgoyMDI2MDMyMi4wIKXMDSoASAFQAw%3D%3D"
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm text-foreground font-semibold hover:text-primary"
                      >
                        Jeddah, Kingdom of Saudi Arabia
                      </a>,
                    ],
                  },
                  {
                    icon: Phone,
                    title: "Phone",
                    lines: [
                      <a
                        key="phone"
                        href="tel:+966539817923"
                        className="text-sm text-foreground font-semibold hover:text-primary"
                      >
                        +966 539817923 / 509810613
                      </a>,
                    ],
                  },
                  {
                    icon: Mail,
                    title: "Email",
                    lines: [
                      <a
                        key="email"
                        href="mailto:mail.masterqatar@gmail.com"
                        className="text-sm text-foreground font-semibold hover:text-primary"
                      >
                        mail.masterqatar@gmail.com
                      </a>,
                    ],
                  },
                  {
                    icon: Clock,
                    title: "Business Hours",
                    lines: [
                      <span key="hours1" className="text-sm text-foreground">
                        8AM to 5PM
                      </span>,
                      <span key="hours2" className="text-sm text-foreground">
                        Friday – Saturday: Closed
                      </span>,
                    ],
                  },
                ].map(({ icon: Icon, title, lines }) => (
                  <div key={title} className="flex gap-4 p-4 bg-card rounded-xl border border-border shadow-card">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                      <Icon size={18} className="text-accent" />
                    </div>
                    <div>
                      <div className="font-semibold text-sm text-foreground mb-1">{title}</div>
                      {lines.map((l, i) => (
                        <div key={`${title}-${i}`} className="text-sm text-muted-foreground">{l}</div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Sister company note */}
              <a
                href="http://www.qatarmaster.com.qa/"
                target="_blank"
                rel="noreferrer"
                className="block p-4 bg-muted rounded-xl border border-border transition hover:bg-muted/70"
              >
                <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2">
                  Sister Company
                </div>
                <div className="font-condensed font-bold text-lg text-primary">Qatar Masters</div>
                <div className="text-sm text-muted-foreground">Doha, Qatar | Established 2011</div>
                <div className="text-sm text-muted-foreground mt-1">ISO 9001:2015 • ISO 45001:2018</div>
              </a>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-1">
              <div className="rounded-2xl border border-border bg-card p-6 shadow-card">
                <h3 className="text-xl font-bold text-foreground mb-3">Send a Message</h3>
                <p className="text-sm text-muted-foreground mb-5">Fill in the form and we’ll get back within 1-2 business days.</p>

                {submitted ? (
                  <div className="rounded-xl border border-green-200 bg-green-50 p-4 text-sm text-green-700">
                    Thank you! Your message has been received; we will contact you shortly.
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate className="space-y-4">
                    {error && (
                      <div className="rounded-lg border border-red-300 bg-red-50 p-3 text-sm text-red-700">
                        {error}
                      </div>
                    )}

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1">Full Name</label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        className="w-full rounded-lg border border-input px-4 py-2 text-sm text-foreground bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        className="w-full rounded-lg border border-input px-4 py-2 text-sm text-foreground bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1">Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        required
                        className="w-full rounded-lg border border-input px-4 py-2 text-sm text-foreground bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1">Message</label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        rows={5}
                        required
                        className="w-full rounded-lg border border-input px-4 py-2 text-sm text-foreground bg-background focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                      />
                    </div>

                    <button type="submit" className="w-full rounded-lg bg-primary px-4 py-2.5 text-sm font-bold text-primary-foreground hover:bg-primary/90 transition">
                      Send Message
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="h-80 bg-muted relative overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1000!2d39.1843368!3d21.5014555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c3cfecb435a733:0xeca822ac116fa5d3!2sMaster+Qatar!5e0!3m2!1sen!2s!4v"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Master Qatar W.L.L. — Saudi Arabia Office Location"
        />
      </section>
    </div>
  );
}


