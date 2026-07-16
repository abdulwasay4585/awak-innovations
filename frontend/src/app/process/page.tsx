"use client";

import { motion } from "framer-motion";
import { 
  Search, Code, LayoutTemplate, Zap, 
  ShieldCheck, Rocket, Wrench
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function ProcessPage() {
  const steps = [
    {
      number: "01",
      title: "Discovery & Requirements",
      description: "Before a single line of code is written, we dive deep into your business. We conduct stakeholder interviews, map out user journeys, and define the exact problem we are solving.",
      deliverables: ["Product Requirements Document (PRD)", "Feature Backlog"],
      icon: <Search className="w-6 h-6 text-primary" />
    },
    {
      number: "02",
      title: "Research & Architecture",
      description: "We analyze technical constraints and select the optimal technology stack. For AI projects, this involves data auditing and model selection. We draft the initial system architecture to ensure long-term scalability and security.",
      deliverables: ["System Architecture Diagram", "Database Schema", "Tech Stack Proposal"],
      icon: <Code className="w-6 h-6 text-primary" />
    },
    {
      number: "03",
      title: "UI/UX Design & Wireframing",
      description: "Our design team transforms requirements into low-fidelity wireframes to nail down the user flow. Once approved, we create high-fidelity, pixel-perfect designs and interactive prototypes.",
      deliverables: ["Figma Prototypes", "Design System", "User Flow Maps"],
      icon: <LayoutTemplate className="w-6 h-6 text-primary" />
    },
    {
      number: "04",
      title: "Development Sprints",
      description: "We work in 2-week Agile sprints. You get continuous visibility into our progress. Our engineers write clean, documented, and modular code, focusing on performance from day one.",
      deliverables: ["Working Software Increments", "Code Repositories"],
      icon: <Zap className="w-6 h-6 text-primary" />
    },
    {
      number: "05",
      title: "QA & Testing",
      description: "Quality is non-negotiable. We implement automated test suites alongside rigorous manual testing. We test for security vulnerabilities, load capacity, and cross-device compatibility.",
      deliverables: ["Test Coverage Reports", "Bug-free Staging Environment"],
      icon: <ShieldCheck className="w-6 h-6 text-primary" />
    },
    {
      number: "06",
      title: "Deployment & Monitoring",
      description: "We utilize automated CI/CD pipelines for zero-downtime deployments. Once live, we set up advanced telemetry, logging, and monitoring to catch any issues before your users do.",
      deliverables: ["Live Production Application", "Monitoring Dashboards"],
      icon: <Rocket className="w-6 h-6 text-primary" />
    },
    {
      number: "07",
      title: "Optimization & Maintenance",
      description: "Software is a living entity. Post-launch, we provide ongoing support, optimize performance based on real user data, and scale server infrastructure dynamically as your traffic grows.",
      deliverables: ["Monthly Performance Reports", "Ongoing Feature Updates"],
      icon: <Wrench className="w-6 h-6 text-primary" />
    }
  ];

  return (
    <main className="min-h-screen py-32 bg-background">
      <div className="container mx-auto px-4 md:px-8 max-w-4xl">
        <div className="text-center mb-24">
          <div className="inline-flex items-center justify-center px-3 py-1 mb-4 text-sm font-medium text-primary bg-primary/10 rounded-full">How We Work</div>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Our Engineering Process
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            A battle-tested methodology combining agile execution with rigorous architectural planning to ensure we build the right product, and build the product right.
          </p>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2" />

          <div className="space-y-12 md:space-y-24">
            {steps.map((step, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className={`relative flex flex-col md:flex-row gap-8 md:gap-16 items-start ${isEven ? 'md:flex-row-reverse' : ''}`}
                >
                  {/* Icon/Number Marker */}
                  <div className="absolute left-8 md:left-1/2 top-0 md:top-8 -translate-x-1/2 -translate-y-4 md:-translate-y-1/2 z-10 w-16 h-16 rounded-full bg-card border-4 border-background shadow-lg flex items-center justify-center text-primary font-bold shadow-primary/10">
                    {step.icon}
                  </div>

                  {/* Empty space for alternating layout on desktop */}
                  <div className="hidden md:block flex-1" />

                  {/* Content Card */}
                  <div className="flex-1 ml-20 md:ml-0">
                    <div className="p-8 md:p-10 rounded-3xl bg-card border border-border shadow-sm hover:border-primary/50 transition-colors">
                      <div className="text-sm font-bold text-primary mb-2">PHASE {step.number}</div>
                      <h3 className="text-2xl font-bold text-foreground mb-4">{step.title}</h3>
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {step.description}
                      </p>
                      <ul className="space-y-2">
                        {step.deliverables.map((item, i) => (
                          <li key={i} className="flex items-center text-sm text-foreground/90 font-medium">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary mr-3 shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-32 text-center p-12 rounded-3xl bg-muted/50 border border-border">
          <h2 className="text-3xl font-bold text-foreground mb-4">Ready to start Phase 01?</h2>
          <p className="text-muted-foreground mb-8">Schedule a discovery call with our architectural team.</p>
          <Button asChild size="lg" className="h-14 px-8 shadow-sm">
            <Link href="/contact">Book Discovery Call</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
