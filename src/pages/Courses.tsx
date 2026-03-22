import ScrollReveal from "@/components/ScrollReveal";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, BarChart3, BookOpen } from "lucide-react";

const courses = [
    {
        title: "Java Full Stack",
        desc: "Master Java, Spring Boot, Hibernate, REST APIs, and frontend technologies to become a complete full-stack developer.",
        duration: "3-4 Months",
        level: "Beginner to Advanced",
        modules: 12,
    },
    {
        title: "Python Full Stack",
        desc: "Learn Python, Django, Flask, databases, and frontend frameworks. Build end-to-end web applications with Python.",
        duration: "3-4 Months",
        level: "Beginner to Advanced",
        modules: 14,
    },
    {
        title: ".NET Full Stack",
        desc: "Comprehensive training in C#, ASP.NET, Entity Framework, and modern frontend development with enterprise-grade patterns.",
        duration: "3-4 Months",
        level: "Intermediate",
        modules: 11,
    },
    {
        title: "React Development",
        desc: "Build modern, interactive UIs with React, TypeScript, state management, hooks, and component architecture.",
        duration: "2-3 Months",
        level: "Beginner to Intermediate",
        modules: 10,
    },
    {
        title: "Django Development",
        desc: "Deep dive into Django — models, views, templates, REST framework, authentication, and deployment strategies.",
        duration: "2-3 Months",
        level: "Beginner to Intermediate",
        modules: 9,
    },
    {
        title: "Generative AI",
        desc: "Explore large language models, prompt engineering, LangChain, vector databases, and building AI-powered applications.",
        duration: "2-3 Months",
        level: "Intermediate to Advanced",
        modules: 8,
    },
];

const Courses = () => {
    return (
        <>
            <section className="relative overflow-hidden py-24 md:py-32">
                <div className="absolute inset-0 bg-[hsl(220_25%_6%)]" />
                <div className="absolute inset-0 bg-gradient-to-br from-[hsl(220_70%_14%)] via-[hsl(220_50%_10%)] to-[hsl(220_25%_6%)]" />
                <div className="absolute top-0 right-[-60px] w-72 h-72 bg-[hsl(220_70%_50%/0.10)] rounded-full blur-[120px]" />
                <div className="container-narrow section-padding relative z-10">
                    <ScrollReveal>
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[hsl(220_70%_70%)] mb-4">Our Courses</p>
                        <h1 className="text-4xl md:text-5xl font-display font-black leading-[1.08] mb-6 max-w-2xl text-white">
                            Industry-Ready Training Programs
                        </h1>
                        <p className="text-lg text-[hsl(220_15%_60%)] max-w-xl leading-[1.7]">
                            Practical, project-based courses designed to make you job-ready. Learn from professionals with real industry experience.
                        </p>
                    </ScrollReveal>
                </div>
            </section>

            <section className="py-24 md:py-32">
                <div className="container-narrow section-padding">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {courses.map((c, i) => (
                            <ScrollReveal key={i} delay={i * 70}>
                                <div className="group bg-card rounded-2xl border border-border shadow-card hover:shadow-card-hover transition-all duration-300 overflow-hidden h-full flex flex-col hover:-translate-y-1">
                                    <div className="h-1.5 bg-gradient-to-r from-primary to-accent" />
                                    <div className="p-7 flex-1 flex flex-col">
                                        <h3 className="text-lg font-display font-bold text-foreground mb-2.5">{c.title}</h3>
                                        <p className="text-sm text-muted-foreground leading-[1.7] mb-6 flex-1">{c.desc}</p>
                                        <div className="flex flex-wrap gap-2.5 mb-7">
                                            <span className="flex items-center gap-1.5 text-xs text-muted-foreground bg-muted/70 px-3 py-1.5 rounded-lg font-medium">
                                                <Clock size={12} /> {c.duration}
                                            </span>
                                            <span className="flex items-center gap-1.5 text-xs text-muted-foreground bg-muted/70 px-3 py-1.5 rounded-lg font-medium">
                                                <BarChart3 size={12} /> {c.level}
                                            </span>
                                            <span className="flex items-center gap-1.5 text-xs text-muted-foreground bg-muted/70 px-3 py-1.5 rounded-lg font-medium">
                                                <BookOpen size={12} /> {c.modules} Modules
                                            </span>
                                        </div>
                                        <Link to="/contact">
                                            <Button variant="outline" size="sm" className="w-full rounded-xl">
                                                Enroll Now <ArrowRight size={14} />
                                            </Button>
                                        </Link>
                                    </div>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Courses;
