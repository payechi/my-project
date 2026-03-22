import { useEffect, useRef, useState, type ReactNode } from "react";

interface ScrollRevealProps {
    children: ReactNode;
    className?: string;
    delay?: number;
    direction?: "up" | "left" | "right" | "fade";
}

const ScrollReveal = ({ children, className = "", delay = 0, direction = "up" }: ScrollRevealProps) => {
    const ref = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        // Skip animation if user prefers reduced motion
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            setIsVisible(true);
            return;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    const animationClass = {
        up: "animate-fade-up",
        left: "animate-slide-in-left",
        right: "animate-slide-in-right",
        fade: "animate-fade-in",
    }[direction];

    return (
        <div
            ref={ref}
            className={`${className} ${isVisible ? animationClass : "opacity-0"}`}
            style={delay ? { animationDelay: `${delay}ms` } : undefined}
        >
            {children}
        </div>
    );
};

export default ScrollReveal;
