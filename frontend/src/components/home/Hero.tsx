"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-24 pb-20 md:pt-32 md:pb-48">
      {/* Background Gradients */}
      <div className="absolute inset-0 z-0 bg-background">
        <div className="absolute -top-[30%] -right-[10%] h-[500px] w-[500px] md:h-[800px] md:w-[800px] rounded-full bg-primary/10 blur-[120px] mix-blend-multiply opacity-50 animate-pulse" />
        <div className="absolute -bottom-[20%] -left-[10%] h-[400px] w-[400px] md:h-[600px] md:w-[600px] rounded-full bg-blue-500/10 blur-[100px] mix-blend-multiply" />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-8">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs sm:text-sm font-medium text-primary backdrop-blur-sm"
          >
            <span className="relative flex h-2 w-2 mr-2 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Building the Next Generation of Software
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-6 md:mb-8 max-w-5xl text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground md:text-7xl lg:text-8xl"
          >
            Transforming Visions into{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-500">
              Digital Reality.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-10 md:mb-12 max-w-2xl text-base sm:text-lg text-muted-foreground md:text-xl px-2"
          >
            We are a forward-thinking digital agency specializing in cutting-edge web development, creative design, and intelligent data-driven solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <Button asChild size="lg" className="h-12 sm:h-14 px-6 sm:px-8 text-sm sm:text-base shadow-lg shadow-primary/20 transition-all hover:scale-105 w-full sm:w-auto">
              <Link href="/contact">Start a Project</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-12 sm:h-14 px-6 sm:px-8 text-sm sm:text-base border-border bg-background hover:bg-muted transition-all hover:scale-105 shadow-sm w-full sm:w-auto">
              <Link href="/portfolio">View Our Work</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
