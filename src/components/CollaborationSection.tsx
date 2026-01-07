"use client";

import { motion } from "framer-motion";
import { Calendar, Mail, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { resumeData } from "@/content/resume";

export function CollaborationSection() {
  return (
    <div className="max-w-3xl">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="text-muted-foreground mb-8 leading-relaxed"
      >
        {resumeData.collaborationIntro}
      </motion.p>

      <motion.ul
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="space-y-3 mb-10"
      >
        {resumeData.collaborationBullets.map((bullet, index) => (
          <li key={index} className="flex items-start gap-3">
            <CheckCircle size={18} className="text-primary mt-0.5 shrink-0" />
            <span className="text-muted-foreground">{bullet}</span>
          </li>
        ))}
      </motion.ul>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="flex flex-wrap gap-4"
      >
        <Button asChild size="lg">
          <a
            href={resumeData.links.calendly}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Calendar size={18} className="mr-2" />
            Schedule a Call
          </a>
        </Button>
        <Button variant="outline" size="lg" asChild>
          <a href={`mailto:${resumeData.email}`}>
            <Mail size={18} className="mr-2" />
            Send Email
          </a>
        </Button>
      </motion.div>
    </div>
  );
}
