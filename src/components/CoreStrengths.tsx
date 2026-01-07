"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

interface CoreStrengthsProps {
  strengths: string[];
}

export function CoreStrengths({ strengths }: CoreStrengthsProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="grid gap-4 sm:grid-cols-2"
    >
      {strengths.map((strength, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: index * 0.05 }}
          className="flex items-start gap-3"
        >
          <CheckCircle size={18} className="text-primary mt-0.5 shrink-0" />
          <span className="text-muted-foreground">{strength}</span>
        </motion.div>
      ))}
    </motion.div>
  );
}
