"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-24 pb-32 md:pt-32 md:pb-48">
      {/* Background Gradients */}
      <div className="absolute inset-0 z-0 bg-background">
        <div className="absolute -top-[30%] -right-[10%] h-[800px] w-[800px] rounded-full bg-primary/20 blur-[120px] mix-blend-screen opacity-50 animate-pulse" />
        <div className="absolute -bottom-[20%] -left-[10%] h-[600px] w-[600px] rounded-full bg-purple-500/10 blur-[100px] mix-blend-screen" />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-8">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary backdrop-blur-sm"
          >
            <span className="relative flex h-2 w-2 mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Building the Next Generation of Software
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-8 max-w-5xl text-5xl font-extrabold tracking-tight text-white md:text-7xl lg:text-8xl"
          >
            Transforming Visions into{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-400">
              Digital Reality.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-12 max-w-2xl text-lg text-muted-foreground md:text-xl"
          >
            We are a forward-thinking digital agency specializing in cutting-edge web development, creative design, and intelligent data-driven solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <Button size="lg" className="h-14 px-8 text-base shadow-lg shadow-primary/20 transition-all hover:scale-105">
              Start a Project
            </Button>
            <Button size="lg" variant="outline" className="h-14 px-8 text-base border-white/20 bg-white/5 backdrop-blur-md hover:bg-white/10 transition-all hover:scale-105">
              View Our Work
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
