import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";
import {
    Globe, ShoppingCart, Search, Smartphone, Palette, Layout,
    Briefcase, Video, Code2, Database, Server, Sparkles, Atom,
    Users, FolderKanban, BadgeDollarSign, Rocket, ArrowRight,
    ChevronRight, Zap, Shield, HeartHandshake, Quote, Star,
} from "lucide-react";

const services = [
    { icon: Globe, label: "Business Website Development", desc: "Custom websites that drive growth and conversions." },
    { icon: ShoppingCart, label: "E-Commerce Development", desc: "Online stores with secure payments and inventory." },
    { icon: Search, label: "SEO Optimization", desc: "Rank higher and attract organic traffic." },
    { icon: Smartphone, label: "Mobile Friendly Websites", desc: "Responsive designs that work on every device." },
    { icon: Palette, label: "Professional Design", desc: "Pixel-perfect UI/UX crafted for your brand." },
    { icon: Layout, label: "Website Designing", desc: "Creative layouts that engage your audience." },
    { icon: Briefcase, label: "Internship with Live Projects", desc: "Real-world experience on production projects." },
    { icon: Video, label: "Video Editing", desc: "Professional video production and editing." },
    { icon: Code2, label: "Java Software Development", desc: "Enterprise-grade Java applications." },
    { icon: Database, label: "Python Full Stack", desc: "End-to-end Python web development." },
    { icon: Server, label: ".NET Full Stack", desc: "Scalable .NET solutions for businesses." },
    { icon: Sparkles, label: "Generative AI", desc: "AI-powered tools and integrations." },
    { icon: Atom, label: "React, Spring Boot, Django", desc: "Modern frameworks for modern apps." },
];

const whyUs = [
    { icon: Users, title: "Professional Team", desc: "Skilled developers and trainers with real industry experience delivering results." },
    { icon: FolderKanban, title: "Real-time Projects", desc: "Hands-on learning with live client projects — not tutorials or toy examples." },
    { icon: BadgeDollarSign, title: "Affordable Pricing", desc: "Premium quality services at competitive, startup-friendly rates." },
    { icon: Rocket, title: "Startup Support", desc: "Dedicated guidance to help your business launch and grow online." },
    { icon: Shield, title: "Reliable & Secure", desc: "Industry-standard security practices across every project we deliver." },
    { icon: HeartHandshake, title: "Long-term Partnership", desc: "We don't just build — we maintain, support, and scale with you." },
];

const stats = [
    { value: "120+", label: "Projects Delivered" },
    { value: "85+", label: "Students Trained" },
    { value: "30+", label: "Business Clients" },
    { value: "98%", label: "Client Satisfaction" },
];

const processSteps = [
    { step: "01", title: "Discover", desc: "We learn your goals, audience, and vision." },
    { step: "02", title: "Design", desc: "Wireframes and prototypes tailored to your brand." },
    { step: "03", title: "Develop", desc: "Clean, performant code built to scale." },
    { step: "04", title: "Deliver", desc: "Launch, support, and continuous improvement." },
];

const testimonials = [
    { name: "Priya Sharma", role: "Founder, TechVista", text: "L&C Global Solutions built our e-commerce platform from scratch. The team was responsive, skilled, and delivered ahead of schedule. Our sales grew 3x within months.", rating: 5 },
    { name: "Rahul Menon", role: "Full Stack Trainee", text: "The Python Full Stack course was incredibly hands-on. Working on real client projects gave me confidence that no tutorial could. I landed a job within weeks of completing.", rating: 5 },
    { name: "Kavitha Reddy", role: "CEO, GreenLeaf Organics", text: "They redesigned our website and handled SEO. We went from page 5 to page 1 on Google for our key terms. Professional team, fair pricing, outstanding results.", rating: 5 },
];

const Home = () => {
    return (
        <>
            {/* Hero */}
            <section className="relative overflow-hidden min-h-[92vh] flex items-center">
                <div className="absolute inset-0 bg-[hsl(220_25%_6%)]" />
                <div className="absolute inset-0 bg-gradient-to-br from-[hsl(220_70%_14%)] via-[hsl(220_50%_10%)] to-[hsl(220_25%_6%)]" />
                <div className="absolute inset-0 opacity-[0.03]" style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, hsl(220 70% 60%) 0.5px, transparent 0)`,
                    backgroundSize: "48px 48px",
                }} />
                <div className="absolute top-20 -left-40 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px]" />
                <div className="absolute bottom-10 right-[-80px] w-[400px] h-[400px] bg-[hsl(190_75%_42%/0.08)] rounded-full blur-[120px]" />

                <div className="container-narrow section-padding relative z-10">
                    <div className="py-20 md:py-28 lg:py-32 grid lg:grid-cols-2 gap-20 items-center">
                        <div>
                            <ScrollReveal>
                                <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-10">
                                    <Zap size={13} className="text-primary" />
                                    <span className="text-xs font-medium tracking-wide text-primary">
                                        Website Development & Software Training
                                    </span>
                                </div>
                            </ScrollReveal>
                            <ScrollReveal delay={80}>
                                <h1 className="text-4xl sm:text-5xl lg:text-[3.75rem] font-display font-black leading-[1.05] text-white mb-7">
                                    Build Your Digital
                                    <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mt-2">
                                        Future With Us
                                    </span>
                                </h1>
                            </ScrollReveal>
                            <ScrollReveal delay={160}>
                                <p className="text-base sm:text-lg text-[hsl(220_15%_65%)] max-w-lg mb-10 leading-[1.7]">
                                    L&C Global Solutions helps businesses launch online and trains the next generation of developers. From concept to deployment — we make it happen.
                                </p>
                            </ScrollReveal>
                            <ScrollReveal delay={240}>
                                <div className="flex flex-wrap gap-4">
                                    <Link to="/contact">
                                        <Button style={{ backgroundColor: "#3b82f6", color: "white" }} size="lg" className="shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/35 rounded-xl px-8">
                                            Get Started <ArrowRight size={18} />
                                        </Button>
                                    </Link>
                                    <Link to="/services">
                                        <Button variant="outline" size="lg" className="border-[hsl(220_20%_25%)] text-white hover:bg-[hsl(220_20%_15%)] hover:text-white hover:border-[hsl(220_20%_35%)] rounded-xl px-8">
                                            Our Services <ChevronRight size={18} />
                                        </Button>
                                    </Link>
                                </div>
                            </ScrollReveal>
                            <ScrollReveal delay={340}>
                                <div className="flex items-center gap-8 mt-14 pt-8 border-t border-[hsl(220_20%_20%)]">
                                    {[
                                        { val: "120+", label: "Projects" },
                                        { val: "85+", label: "Students" },
                                        { val: "98%", label: "Satisfaction" },
                                    ].map((s, i) => (
                                        <div key={i}>
                                            <div className="text-2xl font-display font-bold text-white tabular-nums">{s.val}</div>
                                            <div className="text-[11px] text-[hsl(220_15%_45%)] uppercase tracking-widest mt-1">{s.label}</div>
                                        </div>
                                    ))}
                                </div>
                            </ScrollReveal>
                        </div>

                        <div className="hidden lg:grid grid-cols-2 gap-5">
                            {[
                                { icon: Globe, title: "Web Development", sub: "Modern, scalable sites", highlight: true },
                                { icon: Code2, title: "Software Training", sub: "Industry-ready programs", highlight: false },
                                { icon: Sparkles, title: "AI & Innovation", sub: "Generative AI solutions", highlight: false },
                                { icon: Rocket, title: "Startup Launch", sub: "Idea to production", highlight: false },
                            ].map((card, i) => (
                                <ScrollReveal key={i} delay={220 + i * 90}>
                                    <div className={`group rounded-2xl p-7 border transition-all duration-500 hover:-translate-y-1.5 ${card.highlight
                                            ? "bg-primary/10 border-primary/25 shadow-lg shadow-primary/10"
                                            : "bg-[hsl(220_20%_12%)] border-[hsl(220_15%_18%)] hover:border-primary/30 hover:bg-primary/8"
                                        }`}>
                                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${card.highlight ? "bg-primary/20" : "bg-[hsl(220_15%_18%)] group-hover:bg-primary/15"
                                            } transition-colors duration-300`}>
                                            <card.icon size={22} style={{ color: "#3b82f6" }} className={`transition-colors duration-300`} />
                                        </div>
                                        <h3 className="font-display font-bold text-white text-sm mb-1.5">{card.title}</h3>
                                        <p className="text-xs text-[hsl(220_15%_45%)]">{card.sub}</p>
                                    </div>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className="relative z-10 -mt-10">
                <div className="container-narrow section-padding">
                    <ScrollReveal>
                        <div className="bg-card rounded-2xl shadow-elevated border border-border p-3">
                            <div className="grid grid-cols-2 lg:grid-cols-4">
                                {stats.map((s, i) => (
                                    <div key={i} className={`flex flex-col items-center py-7 ${i < 3 ? "lg:border-r border-border" : ""}`}>
                                        <div className="text-3xl font-display font-black text-primary mb-1.5 tabular-nums">{s.value}</div>
                                        <div className="text-xs text-muted-foreground font-medium uppercase tracking-widest">{s.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* Services */}
            <section className="py-28 md:py-36">
                <div className="container-narrow section-padding">
                    <ScrollReveal>
                        <div className="max-w-2xl mb-16">
                            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4">What We Offer</p>
                            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-5 leading-[1.15]">
                                Services Tailored to Your Growth
                            </h2>
                            <p className="text-muted-foreground leading-relaxed">
                                From building your first website to training your team on cutting-edge tech — we cover it all.
                            </p>
                        </div>
                    </ScrollReveal>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        {services.map((s, i) => (
                            <ScrollReveal key={i} delay={i * 40}>
                                <div className="group rounded-2xl p-6 bg-card border border-border shadow-card hover:shadow-card-hover hover:border-primary/20 transition-all duration-300 hover:-translate-y-1 h-full">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-xl bg-primary/8 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:shadow-lg group-hover:shadow-primary/25 transition-all duration-300">
                                            <s.icon size={20} className="text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                                        </div>
                                        <div className="pt-0.5">
                                            <h3 className="font-display font-bold text-foreground text-[0.9rem] mb-1.5">{s.label}</h3>
                                            <p className="text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
                                        </div>
                                    </div>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process */}
            <section className="py-28 md:py-36 bg-muted/50">
                <div className="container-narrow section-padding">
                    <ScrollReveal>
                        <div className="text-center max-w-2xl mx-auto mb-16">
                            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4">How We Work</p>
                            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground leading-[1.15]">
                                From Idea to Launch in 4 Steps
                            </h2>
                        </div>
                    </ScrollReveal>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {processSteps.map((p, i) => (
                            <ScrollReveal key={i} delay={i * 100}>
                                <div className="relative bg-card rounded-2xl p-8 border border-border shadow-card text-center group hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1">
                                    <div className="text-6xl font-display font-black text-primary/8 group-hover:text-primary/15 transition-colors duration-500 mb-3 leading-none">
                                        {p.step}
                                    </div>
                                    <h3 className="font-display font-bold text-foreground text-lg mb-2">{p.title}</h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-28 md:py-36">
                <div className="container-narrow section-padding">
                    <div className="grid lg:grid-cols-5 gap-16 items-start">
                        <div className="lg:col-span-2 lg:sticky lg:top-28">
                            <ScrollReveal direction="left">
                                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4">Our Edge</p>
                                <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-5 leading-[1.15]">
                                    Why Businesses Choose Us
                                </h2>
                                <p className="text-muted-foreground leading-relaxed mb-8">
                                    We combine technical excellence with genuine partnership to deliver results that matter.
                                </p>
                                <Link to="/about">
                                    <Button variant="outline" className="group rounded-xl">
                                        Learn More About Us <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                    </Button>
                                </Link>
                            </ScrollReveal>
                        </div>
                        <div className="lg:col-span-3 grid sm:grid-cols-2 gap-5">
                            {whyUs.map((item, i) => (
                                <ScrollReveal key={i} delay={i * 70} direction="right">
                                    <div className="bg-card rounded-2xl p-7 border border-border shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 h-full">
                                        <div className="w-12 h-12 rounded-xl bg-primary/8 flex items-center justify-center mb-5">
                                            <item.icon size={20} className="text-primary" />
                                        </div>
                                        <h3 className="font-display font-bold text-foreground mb-2">{item.title}</h3>
                                        <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                                    </div>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-28 md:py-36 bg-muted/50">
                <div className="container-narrow section-padding">
                    <ScrollReveal>
                        <div className="text-center max-w-2xl mx-auto mb-16">
                            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4">Testimonials</p>
                            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground leading-[1.15]">
                                What Our Clients Say
                            </h2>
                        </div>
                    </ScrollReveal>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {testimonials.map((t, i) => (
                            <ScrollReveal key={i} delay={i * 100}>
                                <div className="bg-card rounded-2xl p-8 border border-border shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 flex flex-col h-full">
                                    <div className="flex gap-1 mb-5">
                                        {Array.from({ length: t.rating }).map((_, j) => (
                                            <Star key={j} size={14} className="fill-amber-400 text-amber-400" />
                                        ))}
                                    </div>
                                    <p className="text-sm text-muted-foreground leading-[1.7] flex-1 mb-6">{t.text}</p>
                                    <div className="flex items-center gap-3.5 pt-6 border-t border-border">
                                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                                            <span className="text-sm font-display font-bold text-primary">{t.name[0]}</span>
                                        </div>
                                        <div>
                                            <div className="font-display font-bold text-foreground text-sm">{t.name}</div>
                                            <div className="text-xs text-muted-foreground">{t.role}</div>
                                        </div>
                                    </div>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-28 md:py-36">
                <div className="container-narrow section-padding">
                    <ScrollReveal>
                        <div className="relative overflow-hidden rounded-3xl p-14 md:p-20">
                            <div className="absolute inset-0 bg-[hsl(220_25%_6%)]" />
                            <div className="absolute inset-0 bg-gradient-to-br from-[hsl(220_70%_14%)] via-[hsl(220_50%_10%)] to-[hsl(220_25%_6%)]" />
                            <div className="absolute top-0 right-0 w-80 h-80 bg-[hsl(220_70%_50%/0.15)] rounded-full blur-[120px]" />
                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[hsl(190_75%_42%/0.08)] rounded-full blur-[100px]" />

                            <div className="relative z-10 max-w-2xl mx-auto text-center">
                                <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-5 leading-[1.15]">
                                    Ready to Build Something Great?
                                </h2>
                                <p className="text-[hsl(220_15%_55%)] max-w-lg mx-auto mb-10 leading-relaxed">
                                    Whether you need a website or want to learn full-stack development, we're here to help you succeed.
                                </p>
                                <div className="flex flex-wrap justify-center gap-4">
                                    <Link to="/contact">
                                        <Button variant="default" size="lg" className="shadow-lg shadow-primary/25 rounded-xl px-8">
                                            Contact Us <ArrowRight size={18} />
                                        </Button>
                                    </Link>
                                    <Link to="/courses">
                                        <Button variant="outline" size="lg" className="border-[hsl(220_20%_25%)] text-white hover:bg-[hsl(220_20%_15%)] hover:text-white hover:border-[hsl(220_20%_35%)] rounded-xl px-8">
                                            View Courses
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>
        </>
    );
};

export default Home;
