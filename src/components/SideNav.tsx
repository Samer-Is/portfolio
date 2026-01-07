"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const sections = [
  { id: "about", label: "About" },
  { id: "core-strengths", label: "Strengths" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "experience", label: "Experience" },
  { id: "collaboration", label: "Collaborate" },
  { id: "contact", label: "Contact" },
];

export function SideNav() {
  const [activeSection, setActiveSection] = useState<string>("about");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i].id);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className="fixed left-4 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-2">
      {sections.map((section) => (
        <button
          key={section.id}
          onClick={() => scrollToSection(section.id)}
          className="group flex items-center gap-3"
        >
          {/* Dot indicator */}
          <div className="relative flex items-center justify-center">
            <div
              className={cn(
                "w-2.5 h-2.5 rounded-full transition-all duration-300",
                activeSection === section.id
                  ? "bg-primary scale-125"
                  : "bg-muted-foreground/30 group-hover:bg-muted-foreground/60"
              )}
            />
            {activeSection === section.id && (
              <motion.div
                layoutId="activeSection"
                className="absolute inset-0 w-2.5 h-2.5 rounded-full bg-primary/30"
                initial={false}
                transition={{ type: "spring", stiffness: 350, damping: 30 }}
                style={{ scale: 2 }}
              />
            )}
          </div>

          {/* Label */}
          <span
            className={cn(
              "text-sm font-medium transition-all duration-300 whitespace-nowrap",
              activeSection === section.id
                ? "text-primary opacity-100 translate-x-0"
                : "text-muted-foreground/60 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0"
            )}
          >
            {section.label}
          </span>
        </button>
      ))}
    </nav>
  );
}
