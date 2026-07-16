"use client";

import { motion } from "framer-motion";
import { Bot, Code2, Globe, Cloud, ArrowRight } from "lucide-react";
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
      title: "Cloud & DevOps",
      description: "Resilient, auto-scaling cloud environments with robust CI/CD pipelines.",
      icon: <Cloud className="w-6 h-6 text-primary" />,
      features: ["Kubernetes Scaling", "Automated CI/CD", "Cloud Infrastructure"]
    }
  ];

  return (
    <section className="py-32 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Engineering Excellence Across Domains.
            </h2>
            <p className="text-muted-foreground text-lg">
              We leverage the latest technologies to build scalable, secure, and performant solutions tailored to your unique business needs.
            </p>
          </div>
          <Button asChild variant="outline" className="shrink-0 border-border bg-background hover:bg-muted">
            <Link href="/services">Explore All Services <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative p-8 rounded-3xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="mb-6 inline-flex p-4 rounded-2xl bg-primary/10 text-primary">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-3">
                {service.features?.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-center text-sm text-foreground/90 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
