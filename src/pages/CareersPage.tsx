import { useState, useRef } from "react";
import { PageHero, SectionHeading } from "@/components/UIComponents";
import { MapPin, Phone, Mail, Clock, User } from "lucide-react";

interface CareersPageProps {
  embedded?: boolean;
}

export default function CareersPage({ embedded = false }: CareersPageProps) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    role: "",
    message: "",
  });
  const [selectedRole, setSelectedRole] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);
  const formRef = useRef<HTMLDivElement | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleApply = (role: string) => {
    setForm((prev) => ({ ...prev, role }));
    setSelectedRole(role);
    setFormError(null);
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.phone.trim() || !form.role.trim() || !form.message.trim()) {
      setFormError("Please fill in all fields: name, email, phone, role, and message.");
      return;
    }
    setFormError(null);
    setSubmitted(true);
  };

  return (
    <div>
      {!embedded && (
        <PageHero
          title="Careers"
          subtitle="Join our team in Saudi Arabia and build a future with Master Qatar"
        />
      )}

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-1 space-y-6">
              <SectionHeading
                label="Opportunities"
                title="Be part of our growth"
                subtitle="We’re hiring engineering, operations, and delivery specialists across Saudi Arabia."
              />

              <div className="space-y-4 mt-8">
                {[ 
                  {
                    icon: MapPin,
                    title: "Office",
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
                    lines: ["mail@qatarmaster.com"],
                  },
                  {
                    icon: Clock,
                    title: "Working Hours",
                    lines: ["Sunday – Thursday: 8:00 AM – 6:00 PM"],
                  },
                ].map(({ icon: Icon, title, lines }) => (
                  <div key={title} className="flex gap-4 p-4 bg-card rounded-xl border border-border shadow-card">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                      <Icon size={18} className="text-accent" />
                    </div>
                    <div>
                      <div className="font-semibold text-sm text-foreground mb-1">{title}</div>
                      {lines.map((l) => (
                        <div key={l.toString()} className="text-sm text-muted-foreground">
                          {l}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="rounded-2xl border border-border bg-card p-4 mb-6">
                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">Open roles</div>
                <h3 className="mt-2 text-xl font-bold text-foreground">Current Openings</h3>
                <p className="mt-2 text-sm text-muted-foreground">Explore roles you can apply for today.</p>
              </div>

              <div className="mb-8 grid gap-4 md:grid-cols-2">
                {[{
                  title: "MEP Project Engineer",
                  type: "Full-time",
                  location: "Jeddah",
                  summary: "Lead electrical and mechanical delivery for high-rise and infrastructure projects.",
                }, {
                  title: "ELV Systems Specialist",
                  type: "Full-time",
                  location: "Jeddah",
                  summary: "Design and deploy BMS, CCTV, access control and fire alarm systems.",
                }, {
                  title: "Facility Management Coordinator",
                  type: "Full-time",
                  location: "Jeddah",
                  summary: "Manage FM operations and client service excellence for enterprise portfolios.",
                }, {
                  title: "Site Safety Officer",
                  type: "Full-time",
                  location: "Jeddah",
                  summary: "Ensure compliance with SAF standards and drive safe execution on site.",
                }].map((job) => (
                  <div key={job.title} className="rounded-2xl border border-border bg-white/8 p-5">
                    <div className="flex items-center justify-between gap-3">
                      <h4 className="font-semibold text-foreground">{job.title}</h4>
                      <span className="rounded-full bg-accent/10 px-2 py-0.5 text-xs font-semibold text-accent">{job.type}</span>
                    </div>
                    <p className="mt-1 text-sm text-foreground">{job.location}</p>
                    <p className="mt-3 text-sm text-foreground">{job.summary}</p>
                    <button
                      type="button"
                      onClick={() => handleApply(job.title)}
                      className="mt-4 w-full rounded-lg border border-accent bg-accent/10 px-3 py-2 text-sm font-semibold text-accent transition hover:bg-accent/20"
                    >
                      Apply Now
                    </button>
                  </div>
                ))}
              </div>

              <div ref={formRef} className="bg-card rounded-2xl shadow-elevated border border-border p-8">
                {submitted ? (
                  <div className="flex flex-col items-center justify-center py-16 text-center">
                    <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                      <User size={28} className="text-accent" />
                    </div>
                    <h3 className="font-condensed font-bold text-2xl text-primary mb-2">Application sent!</h3>
                    <p className="text-muted-foreground max-w-sm">
                      Thank you for your application. We will review your profile and contact you if there is a matching role.
                    </p>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setForm({ name: "", email: "", phone: "", role: "", message: "" });
                      }}
                      className="mt-6 px-6 py-2.5 bg-accent text-accent-foreground font-semibold text-sm rounded hover:bg-accent/85 transition-colors"
                    >
                      Submit another application
                    </button>
                  </div>
                ) : (
                  <>
                    <h3 className="font-condensed font-bold text-2xl text-primary mb-6">Apply Now</h3>
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-1.5">Full Name</label>
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
                          <label className="block text-sm font-medium text-foreground mb-1.5">Email Address</label>
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
                          <label className="block text-sm font-medium text-foreground mb-1.5">Phone Number</label>
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
                          <label className="block text-sm font-medium text-foreground mb-1.5">Desired Role</label>
                          <input
                            type="text"
                            name="role"
                            value={form.role}
                            onChange={handleChange}
                            placeholder="Position you're applying for"
                            className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition"
                          />
                        </div>
                      </div>

                      {formError && (
                        <div className="rounded-lg border border-red-300 bg-red-50 p-3 text-sm text-red-700">
                          {formError}
                        </div>
                      )}

                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1.5">Cover Message</label>
                        <textarea
                          name="message"
                          value={form.message}
                          onChange={handleChange}
                          rows={5}
                          placeholder="Tell us about your experience and strengths"
                          className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition resize-none"
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full py-3.5 bg-primary hover:bg-primary/85 text-primary-foreground font-bold text-sm uppercase tracking-wide rounded-lg transition-all"
                      >
                        Submit Application
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
