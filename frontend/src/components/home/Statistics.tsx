"use client";

import { motion } from "framer-motion";

export function Statistics() {
  const stats = [
    { value: "$150M+", label: "Value Secured in Web3" },
    { value: "41%", label: "Avg. Conversion Increase" },
    { value: "99.99%", label: "Uptime Guaranteed" },
    { value: "50+", label: "Enterprise Partners" },
  ];

  return (
    <section className="py-20 border-y border-border bg-muted/50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <div className="text-4xl md:text-5xl font-extrabold text-foreground mb-2">{stat.value}</div>
              <div className="text-sm md:text-base text-primary uppercase tracking-wider font-semibold">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
