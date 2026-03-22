import ScrollReveal from "@/components/ScrollReveal";
import { Target, Eye, Heart, Award } from "lucide-react";

const About = () => {
    return (
        <>
            {/* Hero */}
            <section className="relative overflow-hidden py-24 md:py-32">
                <div className="absolute inset-0 bg-[hsl(220_25%_6%)]" />
                <div className="absolute inset-0 bg-gradient-to-br from-[hsl(220_70%_14%)] via-[hsl(220_50%_10%)] to-[hsl(220_25%_6%)]" />
                <div className="absolute top-10 -left-20 w-80 h-80 bg-[hsl(220_70%_50%/0.10)] rounded-full blur-[120px]" />
                <div className="container-narrow section-padding relative z-10">
                    <ScrollReveal>
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[hsl(220_70%_70%)] mb-4">About Us</p>
                        <h1 className="text-4xl md:text-5xl font-display font-black leading-[1.08] mb-6 max-w-2xl text-white">
                            Building Digital Futures, One Project at a Time
                        </h1>
                        <p className="text-lg text-[hsl(220_15%_60%)] max-w-xl leading-[1.7]">
                            L&C Global Solutions is a startup dedicated to helping businesses establish a strong online presence and empowering individuals with in-demand tech skills.
                        </p>
                    </ScrollReveal>
                </div>
            </section>

            {/* Who We Are */}
            <section className="py-24 md:py-32">
                <div className="container-narrow section-padding">
                    <div className="grid md:grid-cols-2 gap-14 items-center">
                        <ScrollReveal direction="left">
                            <div>
                                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-3">Who We Are</p>
                                <h2 className="text-3xl font-display font-bold text-foreground mb-6 leading-[1.15]">A Startup with a Mission</h2>
                                <div className="space-y-4 text-muted-foreground leading-[1.7]">
                                    <p>
                                        L&C Global Solutions was founded to bridge the gap between quality web development services and affordable software training. We believe every business deserves a professional digital presence, and every aspiring developer deserves access to real-world training.
                                    </p>
                                    <p>
                                        Our team combines development expertise with a passion for teaching. We offer end-to-end website development services for businesses of all sizes, alongside comprehensive training programs that include internships with live projects.
                                    </p>
                                </div>
                            </div>
                        </ScrollReveal>
                        <ScrollReveal direction="right">
                            <div className="grid grid-cols-2 gap-5">
                                {[
                                    { icon: Target, title: "Mission-Driven", desc: "Focused on delivering measurable results for every client and student." },
                                    { icon: Award, title: "Quality First", desc: "We never compromise on code quality or training standards." },
                                    { icon: Heart, title: "Passionate Team", desc: "Engineers and trainers who genuinely care about your success." },
                                    { icon: Eye, title: "Forward-Looking", desc: "Always adopting the latest technologies and best practices." },
                                ].map((item, i) => (
                                    <div key={i} className="bg-card rounded-2xl p-6 border border-border shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1">
                                        <div className="w-10 h-10 rounded-xl bg-primary/8 flex items-center justify-center mb-4">
                                            <item.icon size={18} className="text-primary" />
                                        </div>
                                        <h3 className="font-display font-bold text-sm text-foreground mb-1.5">{item.title}</h3>
                                        <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-24 md:py-32 bg-muted/50">
                <div className="container-narrow section-padding">
                    <div className="grid md:grid-cols-2 gap-8">
                        <ScrollReveal delay={0}>
                            <div className="bg-card rounded-2xl p-9 md:p-11 border border-border shadow-card h-full">
                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                                    <Target size={22} className="text-primary" />
                                </div>
                                <h3 className="text-xl font-display font-bold text-foreground mb-4">Our Mission</h3>
                                <p className="text-muted-foreground leading-[1.7]">
                                    To provide high-quality, affordable web development services and software training that enables businesses to grow online and individuals to build rewarding tech careers. We focus on practical, project-based learning and real-world solutions.
                                </p>
                            </div>
                        </ScrollReveal>
                        <ScrollReveal delay={120}>
                            <div className="bg-card rounded-2xl p-9 md:p-11 border border-border shadow-card h-full">
                                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                                    <Eye size={22} className="text-accent" />
                                </div>
                                <h3 className="text-xl font-display font-bold text-foreground mb-4">Our Vision</h3>
                                <p className="text-muted-foreground leading-[1.7]">
                                    To become a leading technology partner for startups and small businesses, while establishing a recognized training institute that produces industry-ready developers. We envision a future where quality tech solutions and education are accessible to everyone.
                                </p>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>
        </>
    );
};

export default About;
