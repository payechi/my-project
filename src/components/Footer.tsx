import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-[hsl(220_25%_6%)] text-white">
            <div className="container-narrow section-padding py-20">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
                    <div className="space-y-5">
                        <div className="flex items-center gap-2.5">
                            <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center shadow-md shadow-primary/20">
                                <span className="text-primary-foreground font-display font-bold text-sm">L&C</span>
                            </div>
                            <span className="font-display font-bold text-lg">L&C Global Solutions</span>
                        </div>
                        <p className="text-sm text-[hsl(220_15%_50%)] leading-[1.7]">
                            Empowering businesses and careers through expert website development and software training.
                        </p>
                    </div>

                    <div className="space-y-5">
                        <h4 className="font-display font-bold text-xs uppercase tracking-[0.2em] text-[hsl(220_15%_40%)]">Quick Links</h4>
                        <div className="flex flex-col gap-3">
                            {[
                                { to: "/", label: "Home" },
                                { to: "/about", label: "About Us" },
                                { to: "/services", label: "Services" },
                                { to: "/courses", label: "Courses" },
                                { to: "/contact", label: "Contact" },
                            ].map((l) => (
                                <Link key={l.to} to={l.to} className="text-sm text-[hsl(220_15%_50%)] hover:text-white transition-colors">
                                    {l.label}
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-5">
                        <h4 className="font-display font-bold text-xs uppercase tracking-[0.2em] text-[hsl(220_15%_40%)]">Contact</h4>
                        <div className="space-y-4">
                            <a href="tel:7842280317" className="flex items-center gap-3 text-sm text-[hsl(220_15%_50%)] hover:text-white transition-colors">
                                <Phone size={14} className="shrink-0" /> 7842280317
                            </a>
                            <a href="mailto:lcglobalsolutions191@gmail.com" className="flex items-center gap-3 text-sm text-[hsl(220_15%_50%)] hover:text-white transition-colors break-all">
                                <Mail size={14} className="shrink-0" /> lcglobalsolutions191@gmail.com
                            </a>
                            <div className="flex items-start gap-3 text-sm text-[hsl(220_15%_50%)]">
                                <MapPin size={14} className="shrink-0 mt-0.5" /> Hyderabad, India
                            </div>
                        </div>
                    </div>

                    <div className="space-y-5">
                        <h4 className="font-display font-bold text-xs uppercase tracking-[0.2em] text-[hsl(220_15%_40%)]">Follow Us</h4>
                        <div className="flex gap-3">
                            {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                                <a
                                    key={i}
                                    href="#"
                                    className="w-10 h-10 rounded-xl bg-[hsl(220_20%_12%)] border border-[hsl(220_15%_18%)] flex items-center justify-center text-[hsl(220_15%_50%)] hover:bg-primary hover:border-primary hover:text-white hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 active:scale-95"
                                >
                                    <Icon size={16} />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="mt-16 pt-8 border-t border-[hsl(220_15%_15%)] text-center text-sm text-[hsl(220_15%_35%)]">
                    © {new Date().getFullYear()} L&C Global Solutions. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
