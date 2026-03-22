import ScrollReveal from "@/components/ScrollReveal";
import { Globe, Code2, GraduationCap, Briefcase, CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const sections = [
    {
        icon: Globe,
        title: "Website Development",
        desc: "From business websites to e-commerce platforms, we build responsive, SEO-optimized websites tailored to your brand and business goals.",
        points: ["Business & Corporate Websites", "E-Commerce Platforms", "Landing Pages & Portfolios", "SEO & Performance Optimization", "Mobile-Responsive Design"],
    },
    {
        icon: Code2,
        title: "Software Development",
        desc: "Custom software solutions built with modern technologies. We develop scalable applications using Java, Python, .NET, React, and more.",
        points: ["Java Application Development", "Python & Django Solutions", ".NET Enterprise Applications", "React Frontend Development", "API Development & Integration"],
    },
    {
        icon: GraduationCap,
        title: "Training Programs",
        desc: "Comprehensive software training designed to make you job-ready. Learn from experienced professionals through project-based coursework.",
        points: ["Full Stack Development Training", "Generative AI & Machine Learning", "Hands-on Project Work", "Industry-Aligned Curriculum", "Placement Assistance"],
    },
    {
        icon: Briefcase,
        title: "Internship Programs",
        desc: "Gain real-world experience with live projects. Our internship programs bridge the gap between academic knowledge and industry requirements.",
        points: ["Live Client Projects", "Mentorship from Senior Developers", "Certificate of Completion", "Portfolio-Building Opportunities", "Flexible Duration Options"],
    },
];

const Services = () => {
    return (
        <>
            <section className="relative overflow-hidden py-24 md:py-32">
                <div className="absolute inset-0 bg-[hsl(220_25%_6%)]" />
                <div className="absolute inset-0 bg-gradient-to-br from-[hsl(220_70%_14%)] via-[hsl(220_50%_10%)] to-[hsl(220_25%_6%)]" />
                <div className="absolute bottom-0 right-0 w-72 h-72 bg-[hsl(190_75%_42%/0.08)] rounded-full blur-[100px]" />
                <div className="container-narrow section-padding relative z-10">
                    <ScrollReveal>
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[hsl(220_70%_70%)] mb-4">Our Services</p>
                        <h1 className="text-4xl md:text-5xl font-display font-black leading-[1.08] mb-6 max-w-2xl text-white">
                            Solutions That Drive Growth
                        </h1>
                        <p className="text-lg text-[hsl(220_15%_60%)] max-w-xl leading-[1.7]">
                            End-to-end development services and training programs built to help businesses and individuals succeed in the digital world.
                        </p>
                    </ScrollReveal>
                </div>
            </section>

            <section className="py-24 md:py-32">
                <div className="container-narrow section-padding space-y-20">
                    {sections.map((s, i) => (
                        <ScrollReveal key={i} delay={0} direction={i % 2 === 0 ? "left" : "right"}>
                            <div className={`grid md:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? "md:[direction:rtl] md:*:[direction:ltr]" : ""}`}>
                                <div>
                                    <div className="w-13 h-13 rounded-xl bg-primary/8 flex items-center justify-center mb-6 w-[52px] h-[52px]">
                                        <s.icon size={24} style={{ color: "#3b82f6" }} />
                                    </div>
                                    <h2 className="text-2xl font-display font-bold text-foreground mb-4 leading-[1.2]">{s.title}</h2>
                                    <p className="text-muted-foreground leading-[1.7] mb-7">{s.desc}</p>
                                    <Link to="/contact">
                                        <Button size="sm" className="rounded-xl">Learn More <ArrowRight size={16} /></Button>
                                    </Link>
                                </div>
                                <div className="bg-card rounded-2xl p-8 border border-border shadow-card">
                                    <ul className="space-y-4">
                                        {s.points.map((p, j) => (
                                            <li key={j} className="flex items-center gap-3.5 text-sm text-foreground">
                                                <CheckCircle2 size={17} style={{ color: "#3b82f6" }} className="shrink-0" />
                                                {p}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </section>
        </>
    );
};

export default Services;
