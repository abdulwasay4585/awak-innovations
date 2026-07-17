"use client";

import { motion } from "framer-motion";
import { Bot, Code2, Globe, Cloud, ArrowRight, Smartphone, PenTool } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function FeaturedServices() {
  const services = [
    {
      title: "AI Development",
      description: "Custom AI models, Generative AI (LLMs), and RAG pipelines tailored to your logic.",
      icon: <Bot className="w-6 h-6 text-primary" />
    },
    {
      title: "Enterprise Software",
      description: "Bespoke ERP, CRM, and internal portal solutions that unify your workflows.",
      icon: <Code2 className="w-6 h-6 text-primary" />
    },
    {
      title: "Headless E-Commerce",
      description: "Lightning-fast, highly responsive web applications using serverless architectures.",
      icon: <Globe className="w-6 h-6 text-primary" />
    },
    {
      title: "Mobile App Development",
      description: "Native and cross-platform mobile experiences that engage users on iOS and Android.",
      icon: <Smartphone className="w-6 h-6 text-primary" />
    },
    {
      title: "UI/UX Design",
      description: "User-centric interfaces and intuitive experiences that elevate your digital brand.",
      icon: <PenTool className="w-6 h-6 text-primary" />
    },
    {
      title: "Cloud & DevOps",
      description: "Resilient, auto-scaling cloud environments with robust CI/CD pipelines.",
      icon: <Cloud className="w-6 h-6 text-primary" />
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <div className="mb-12 md:mb-24 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-foreground mb-4 md:mb-6">
              Engineering Excellence Across Domains.
            </h2>
            <p className="text-muted-foreground text-base md:text-lg">
              We leverage the latest technologies to build scalable, secure, and performant solutions tailored to your unique business needs.
            </p>
          </div>
          <Button asChild variant="outline" className="shrink-0 border-border bg-background hover:bg-muted w-full sm:w-auto">
            <Link href="/services">Explore All Services <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative p-6 md:p-8 rounded-3xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="mb-5 inline-flex p-4 rounded-2xl bg-primary/10 text-primary">
                {service.icon}
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3 md:mb-4 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-6 md:mb-8 leading-relaxed text-sm md:text-base">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
