"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { SkillGroup } from "@/content/resume";

interface SkillGroupsProps {
  skillGroups: SkillGroup[];
}

export function SkillGroups({ skillGroups }: SkillGroupsProps) {
  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {skillGroups.map((group, index) => (
        <motion.div
          key={group.category}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
        >
          <h3 className="font-semibold mb-4 text-sm uppercase tracking-wide text-muted-foreground">
            {group.category}
          </h3>
          <div className="flex flex-wrap gap-2">
            {group.skills.map((skill) => (
              <Badge key={skill} variant="outline" className="font-normal">
                {skill}
              </Badge>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
