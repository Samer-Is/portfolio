"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface SectionProps {
  id: string;
  title?: string;
  children: ReactNode;
  className?: string;
}

export function Section({ id, title, children, className = "" }: SectionProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={`py-16 sm:py-20 ${className}`}
    >
      {title && (
        <h2 className="mb-10 text-2xl font-semibold tracking-tight sm:text-3xl">
          {title}
        </h2>
      )}
      {children}
    </motion.section>
  );
}
