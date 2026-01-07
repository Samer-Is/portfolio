"use client";

import { motion } from "framer-motion";
import { MapPin, ArrowDown } from "lucide-react";
import { Container } from "./Container";
import { Button } from "@/components/ui/button";
import { resumeData } from "@/content/resume";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-16">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-3xl"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="flex items-center gap-2 text-muted-foreground mb-4"
          >
            <MapPin size={16} />
            <span className="text-sm">{resumeData.location}</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
          >
            {resumeData.name}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-xl sm:text-2xl text-muted-foreground mb-8 leading-relaxed"
          >
            {resumeData.headline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-wrap gap-4"
          >
            <Button asChild size="lg">
              <a href={resumeData.links.calendly} target="_blank" rel="noopener noreferrer">
                Schedule a Call
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#about">
                Learn More
                <ArrowDown size={16} className="ml-2" />
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
