import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About Us" },
    { to: "/services", label: "Services" },
    { to: "/courses", label: "Courses" },
    { to: "/contact", label: "Contact" },
];

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const location = useLocation();

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-card/70 backdrop-blur-xl border-b border-border/40">
            <div className="container-narrow section-padding">
                <div className="flex items-center justify-between h-[68px]">
                    <Link to="/" className="flex items-center gap-2.5">
                        <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center shadow-md shadow-primary/20">
                            <span className="text-primary-foreground font-display font-bold text-sm">L&C</span>
                        </div>
                        <span className="font-display font-bold text-foreground text-[1.05rem] hidden sm:block">
                            L&C Global Solutions
                        </span>
                    </Link>

                    <div className="hidden md:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.to}
                                to={link.to}
                                className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-colors ${location.pathname === link.to
                                        ? "text-primary bg-primary/8"
                                        : "text-muted-foreground hover:text-foreground hover:bg-muted/60"
                                    }`}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <Link to="/contact" className="ml-3">
                            <Button style={{ backgroundColor: "#3b82f6", color: "white" }} size="sm" className="rounded-lg shadow-md shadow-primary/15">Get Started</Button>
                        </Link>
                    </div>

                    <button
                        onClick={() => setOpen(!open)}
                        className="md:hidden p-2 rounded-lg text-foreground hover:bg-muted active:scale-95 transition-all"
                    >
                        {open ? <X size={22} /> : <Menu size={22} />}
                    </button>
                </div>

                {open && (
                    <div className="md:hidden pb-5 pt-2 space-y-1 animate-fade-up">
                        {navLinks.map((link) => (
                            <Link
                                key={link.to}
                                to={link.to}
                                onClick={() => setOpen(false)}
                                className={`block px-4 py-3 rounded-xl text-sm font-medium transition-colors ${location.pathname === link.to
                                        ? "text-primary bg-primary/8"
                                        : "text-muted-foreground hover:text-foreground hover:bg-muted/60"
                                    }`}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <Link to="/contact" onClick={() => setOpen(false)} className="block pt-2 px-1">
                            <Button style={{ backgroundColor: "#3b82f6", color: "white" }} size="sm" className="w-full rounded-xl">Get Started</Button>
                        </Link>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
