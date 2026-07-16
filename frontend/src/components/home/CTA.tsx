"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function CTA() {
  return (
    <section className="py-24 relative overflow-hidden bg-primary text-primary-foreground">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
      
      <div className="container relative z-10 mx-auto px-4 md:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Ready to Engineer Your Future?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-10">
            Let's discuss how our technical expertise can accelerate your business growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="h-14 px-8 text-base text-primary font-semibold hover:scale-105 transition-all">
              <Link href="/contact">Book a Free Consultation</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
