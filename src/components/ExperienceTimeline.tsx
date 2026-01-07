"use client";

import { motion } from "framer-motion";
import { Experience } from "@/content/resume";

interface ExperienceTimelineProps {
  experiences: Experience[];
}

export function ExperienceTimeline({ experiences }: ExperienceTimelineProps) {
  return (
    <div className="space-y-12">
      {experiences.map((exp, index) => (
        <motion.div
          key={`${exp.company}-${exp.title}`}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
          className="relative pl-8 border-l-2 border-border"
        >
          {/* Timeline dot */}
          <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-background" />
          
          <div className="mb-2">
            <h3 className="text-lg font-semibold">{exp.title}</h3>
            <div className="flex flex-wrap items-center gap-2 text-muted-foreground">
              <span className="font-medium text-foreground">{exp.company}</span>
              <span className="text-sm">•</span>
              <span className="text-sm">{exp.dates}</span>
            </div>
          </div>
          
          <ul className="mt-4 space-y-2">
            {exp.bullets.map((bullet, bulletIndex) => (
              <li
                key={bulletIndex}
                className="text-muted-foreground text-sm leading-relaxed flex gap-2"
              >
                <span className="text-primary mt-1.5 shrink-0">•</span>
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  );
}
