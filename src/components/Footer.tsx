"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Calendar, MapPin, Download, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "./Container";
import { resumeData } from "@/content/resume";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-muted/30">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="py-16"
        >
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Contact Info */}
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <div className="space-y-3 text-sm text-muted-foreground">
                <a
                  href={`mailto:${resumeData.email}`}
                  className="flex items-center gap-2 hover:text-foreground transition-colors"
                >
                  <Mail size={16} />
                  {resumeData.email}
                </a>
                <a
                  href={`tel:${resumeData.phone.replace(/\s/g, '')}`}
                  className="flex items-center gap-2 hover:text-foreground transition-colors"
                >
                  <Phone size={16} />
                  {resumeData.phone}
                </a>
                <div className="flex items-center gap-2">
                  <MapPin size={16} />
                  {resumeData.location}
                </div>
              </div>
            </div>

            {/* Links */}
            <div>
              <h3 className="font-semibold mb-4">Links</h3>
              <div className="space-y-3 text-sm text-muted-foreground">
                <a
                  href={resumeData.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-foreground transition-colors"
                >
                  <Linkedin size={16} />
                  LinkedIn
                </a>
                <a
                  href={resumeData.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-foreground transition-colors"
                >
                  <Github size={16} />
                  GitHub
                </a>
                <a
                  href={resumeData.links.calendly}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-foreground transition-colors"
                >
                  <Calendar size={16} />
                  Calendly
                </a>
              </div>
            </div>

            {/* Download CV */}
            <div>
              <h3 className="font-semibold mb-4">Resume</h3>
              <Button variant="outline" asChild>
                <a href="/Samer-Ismail-CV.pdf" download>
                  <Download size={16} className="mr-2" />
                  Download CV
                </a>
              </Button>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
            <p>© {currentYear} {resumeData.name}. All rights reserved.</p>
          </div>
        </motion.div>
      </Container>
    </footer>
  );
}
