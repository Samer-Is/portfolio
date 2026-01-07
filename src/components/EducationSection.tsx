"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Education, Certification } from "@/content/resume";

interface EducationSectionProps {
  education: Education[];
  certifications: Certification[];
}

export function EducationSection({
  education,
  certifications,
}: EducationSectionProps) {
  return (
    <div className="grid gap-12 lg:grid-cols-2">
      {/* Education */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      >
        <div className="flex items-center gap-2 mb-6">
          <GraduationCap size={24} className="text-primary" />
          <h3 className="text-xl font-semibold">Education</h3>
        </div>
        <div className="space-y-6">
          {education.map((edu) => (
            <Card key={edu.degree}>
              <CardHeader className="pb-2">
                <CardTitle className="text-base">{edu.degree}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-medium">{edu.institution}</p>
                <p className="text-sm text-muted-foreground">
                  {edu.location} • {edu.dates}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </motion.div>

      {/* Certifications */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        <div className="flex items-center gap-2 mb-6">
          <Award size={24} className="text-primary" />
          <h3 className="text-xl font-semibold">Certifications</h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {certifications.map((cert) => (
            <Badge key={cert.name} variant="outline" className="py-2 px-3">
              {cert.name}
            </Badge>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
