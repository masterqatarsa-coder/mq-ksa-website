import { useState } from "react";
import { PageHero, SectionHeading } from "@/components/UIComponents";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      <PageHero
        title="Contact Us"
        subtitle="Get in touch with our engineering team in Jeddah, Saudi Arabia"
      />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
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
                    lines: ["Jeddah, Kingdom of Saudi Arabia"],
                  },
                  {
                    icon: Phone,
                    title: "Phone",
                    lines: ["+966 00 000 0000"],
                  },
                  {
                    icon: Mail,
                    title: "Email",
                    lines: ["info@mastergcc.com", "sales@mastergcc.com"],
                  },
                  {
                    icon: Clock,
                    title: "Business Hours",
                    lines: ["Sunday – Thursday: 8:00 AM – 6:00 PM", "Friday – Saturday: Closed"],
                  },
                ].map(({ icon: Icon, title, lines }) => (
                  <div key={title} className="flex gap-4 p-4 bg-card rounded-xl border border-border shadow-card">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                      <Icon size={18} className="text-accent" />
                    </div>
                    <div>
                      <div className="font-semibold text-sm text-foreground mb-1">{title}</div>
                      {lines.map((l) => (
                        <div key={l} className="text-sm text-muted-foreground">{l}</div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Sister company note */}
              <div className="p-4 bg-muted rounded-xl border border-border">
                <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2">Sister Company</div>
                <div className="font-condensed font-bold text-lg text-primary">Qatar Masters</div>
                <div className="text-sm text-muted-foreground">Doha, Qatar | Established 2011</div>
                <div className="text-sm text-muted-foreground mt-1">ISO 9001:2015 • ISO 45001:2018</div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-card rounded-2xl shadow-elevated border border-border p-8">
                {submitted ? (
                  <div className="flex flex-col items-center justify-center py-16 text-center">
                    <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                      <Send size={28} className="text-accent" />
                    </div>
                    <h3 className="font-condensed font-bold text-2xl text-primary mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-muted-foreground max-w-sm">
                      Thank you for contacting Master Qatar W.L.L. Our team will get back to you within 24 hours.
                    </p>
                    <button
                      onClick={() => { setSubmitted(false); setForm({ name: "", email: "", phone: "", service: "", message: "" }); }}
                      className="mt-6 px-6 py-2.5 bg-accent text-accent-foreground font-semibold text-sm rounded hover:bg-accent/85 transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <>
                    <h3 className="font-condensed font-bold text-2xl text-primary mb-6">Send Us a Message</h3>
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-1.5">
                            Full Name <span className="text-destructive">*</span>
                          </label>
                          <input
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            required
                            placeholder="Your full name"
                            className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-1.5">
                            Email Address <span className="text-destructive">*</span>
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            required
                            placeholder="your@email.com"
                            className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition"
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-1.5">
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            value={form.phone}
                            onChange={handleChange}
                            placeholder="+966 XX XXX XXXX"
                            className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-1.5">
                            Service Required
                          </label>
                          <select
                            name="service"
                            value={form.service}
                            onChange={handleChange}
                            className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring transition"
                          >
                            <option value="">Select a service</option>
                            <option>MEP Contracting</option>
                            <option>ELV Systems</option>
                            <option>Automation Systems</option>
                            <option>Facility Management</option>
                            <option>Workforce Solutions</option>
                            <option>Trading</option>
                            <option>General Inquiry</option>
                          </select>
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1.5">
                          Message <span className="text-destructive">*</span>
                        </label>
                        <textarea
                          name="message"
                          value={form.message}
                          onChange={handleChange}
                          required
                          rows={5}
                          placeholder="Tell us about your project requirements..."
                          className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition resize-none"
                        />
                      </div>
                      <button
                        type="submit"
                        className="w-full py-3.5 bg-primary hover:bg-primary/85 text-primary-foreground font-bold text-sm uppercase tracking-wide rounded-lg transition-all flex items-center justify-center gap-2"
                      >
                        <Send size={16} />
                        Send Message
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="h-80 bg-muted relative overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d233.1!2d39.1925!3d21.4858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c3d01fb1137e59%3A0xe059b5b9a96b8f16!2sJeddah%2C%20Saudi%20Arabia!5e0!3m2!1sen!2s!4v1234567890"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Master GCC Saudi Arabia Location"
        />
      </section>
    </div>
  );
}
