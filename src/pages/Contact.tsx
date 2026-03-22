import { useState, type FormEvent } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
    const { toast } = useToast();
    const [form, setForm] = useState({ name: "", email: "", message: "" });

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        toast({ title: "Message sent!", description: "We'll get back to you soon." });
        setForm({ name: "", email: "", message: "" });
    };

    return (
        <>
            <section className="relative overflow-hidden py-24 md:py-32">
                <div className="absolute inset-0 bg-[hsl(220_25%_6%)]" />
                <div className="absolute inset-0 bg-gradient-to-br from-[hsl(220_70%_14%)] via-[hsl(220_50%_10%)] to-[hsl(220_25%_6%)]" />
                <div className="absolute bottom-0 left-[-40px] w-64 h-64 bg-[hsl(220_70%_50%/0.08)] rounded-full blur-[100px]" />
                <div className="container-narrow section-padding relative z-10">
                    <ScrollReveal>
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[hsl(220_70%_70%)] mb-4">Contact Us</p>
                        <h1 className="text-4xl md:text-5xl font-display font-black leading-[1.08] mb-6 max-w-2xl text-white">
                            Let's Start a Conversation
                        </h1>
                        <p className="text-lg text-[hsl(220_15%_60%)] max-w-xl leading-[1.7]">
                            Have a project in mind or want to enroll in a course? Reach out — we'd love to hear from you.
                        </p>
                    </ScrollReveal>
                </div>
            </section>

            <section className="py-24 md:py-32">
                <div className="container-narrow section-padding">
                    <div className="grid md:grid-cols-5 gap-12">
                        <div className="md:col-span-2 space-y-8">
                            <ScrollReveal direction="left">
                                <h2 className="text-2xl font-display font-bold text-foreground mb-8">Get in Touch</h2>
                                <div className="space-y-6">
                                    <a href="tel:7842280317" className="flex items-center gap-4 group">
                                        <div className="w-12 h-12 rounded-xl bg-primary/8 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:shadow-lg group-hover:shadow-primary/25 transition-all duration-300">
                                            <Phone size={18} className="text-primary group-hover:text-primary-foreground transition-colors" />
                                        </div>
                                        <div>
                                            <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">Phone</p>
                                            <p className="text-sm font-semibold text-foreground">7842280317</p>
                                        </div>
                                    </a>
                                    <a href="mailto:lcglobalsolutions191@gmail.com" className="flex items-center gap-4 group">
                                        <div className="w-12 h-12 rounded-xl bg-primary/8 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:shadow-lg group-hover:shadow-primary/25 transition-all duration-300">
                                            <Mail size={18} className="text-primary group-hover:text-primary-foreground transition-colors" />
                                        </div>
                                        <div>
                                            <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">Email</p>
                                            <p className="text-sm font-semibold text-foreground break-all">lcglobalsolutions191@gmail.com</p>
                                        </div>
                                    </a>
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-xl bg-primary/8 flex items-center justify-center shrink-0">
                                            <MapPin size={18} className="text-primary" />
                                        </div>
                                        <div>
                                            <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">Location</p>
                                            <p className="text-sm font-semibold text-foreground">Hyderabad, India</p>
                                        </div>
                                    </div>
                                </div>
                            </ScrollReveal>
                        </div>

                        <div className="md:col-span-3">
                            <ScrollReveal direction="right">
                                <form onSubmit={handleSubmit} className="bg-card rounded-2xl border border-border shadow-card p-8 md:p-10 space-y-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">Name</label>
                                        <input
                                            id="name"
                                            required
                                            value={form.name}
                                            onChange={(e) => setForm({ ...form, name: e.target.value })}
                                            className="w-full h-12 rounded-xl border border-input bg-background px-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all"
                                            placeholder="Your name"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">Email</label>
                                        <input
                                            id="email"
                                            type="email"
                                            required
                                            value={form.email}
                                            onChange={(e) => setForm({ ...form, email: e.target.value })}
                                            className="w-full h-12 rounded-xl border border-input bg-background px-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all"
                                            placeholder="you@email.com"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">Message</label>
                                        <textarea
                                            id="message"
                                            required
                                            rows={5}
                                            value={form.message}
                                            onChange={(e) => setForm({ ...form, message: e.target.value })}
                                            className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all resize-none"
                                            placeholder="Tell us about your project or course interest..."
                                        />
                                    </div>
                                    <Button type="submit" size="lg" className="w-full rounded-xl">
                                        Send Message <Send size={16} />
                                    </Button>
                                </form>
                            </ScrollReveal>
                        </div>
                    </div>

                    <ScrollReveal className="mt-16">
                        <div className="rounded-2xl overflow-hidden border border-border shadow-card h-72 bg-muted">
                            <iframe
                                title="Location"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243647.31698079!2d78.24323005!3d17.4123487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0xae93b78392bafbc2!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                                className="w-full h-full border-0"
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>
                    </ScrollReveal>
                </div>
            </section>
        </>
    );
};

export default Contact;
