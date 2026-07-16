"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function PricingPage() {
  const models = [
    {
      title: "Discovery & MVP",
      type: "Fixed Price",
      description: "Best for startups and new product launches where requirements can be tightly scoped. We collaborate to define a strict minimum viable product.",
      idealFor: "Startups & New Products",
      timeline: "6 - 12 Weeks",
      advantage: "Predictable budget and guaranteed delivery date for your initial launch.",
      features: [
        "UI/UX Prototyping",
        "Core Feature Development",
        "Rigorous QA Testing",
        "Initial Launch & Deployment"
      ]
    },
    {
      title: "Dedicated Teams",
      type: "Retainer",
      description: "Best for growing companies that need to rapidly scale their engineering capacity without the overhead of hiring in-house. We integrate directly into your workflow.",
      idealFor: "Growing Companies & Scale-ups",
      timeline: "3+ Months",
      advantage: "Maximum flexibility. Pivot product direction easily without renegotiating contracts.",
      features: [
        "Full-time dedicated engineers",
        "Flexible agile sprint planning",
        "Direct Slack & Jira integration",
        "Dedicated Project Manager"
      ],
      featured: true
    },
    {
      title: "Digital Transformation",
      type: "Milestone Based",
      description: "Best for large organizations undertaking massive legacy modernization or complex AI integration projects. The project is broken down into large milestones.",
      idealFor: "Enterprises & Complex Integrations",
      timeline: "6 - 18 Months",
      advantage: "Risk mitigation. You pay as tangible business value is delivered at each milestone.",
      features: [
        "Deep architectural consulting",
        "Legacy system migration",
        "Massive data ingestion pipelines",
        "High-level security compliance"
      ]
    }
  ];

  return (
    <main className="min-h-screen py-32 relative">
      <div className="absolute top-0 right-1/4 w-[800px] h-[800px] bg-primary/10 blur-[150px] rounded-full pointer-events-none -translate-y-1/2" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6"
          >
            Transparent <span className="text-primary">Partnerships.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-muted-foreground leading-relaxed"
          >
            We don't do generic fixed prices because every business challenge is unique. Instead, we offer tailored engagement models designed to align with your specific risk profile, timeline, and scale.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {models.map((model, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`relative p-8 rounded-3xl border ${model.featured ? 'bg-card border-primary shadow-xl shadow-primary/10' : 'bg-card border-border shadow-sm'} flex flex-col h-full`}
            >
              {model.featured && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider py-1 px-4 rounded-full shadow-lg">
                  Most Popular
                </div>
              )}
              
              <div className="mb-8">
                <span className="text-primary font-medium text-sm uppercase tracking-wider">{model.type}</span>
                <h3 className="text-2xl font-bold text-foreground mt-2 mb-2">{model.title}</h3>
                <p className="text-muted-foreground text-sm">{model.description}</p>
              </div>

              <div className="mb-8 p-4 rounded-2xl bg-muted/50 border border-border">
                <div className="text-sm text-foreground/80 font-medium mb-1">Ideal for:</div>
                <div className="text-foreground font-semibold">{model.idealFor}</div>
              </div>

              <ul className="space-y-4 mb-10 flex-1">
                {model.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start text-sm text-foreground/90">
                    <Check className="w-5 h-5 text-primary mr-3 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="border-t border-border pt-6 space-y-3 mb-8">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-muted-foreground font-medium">Timeline:</span>
                  <span className="text-foreground font-semibold">{model.timeline}</span>
                </div>
                <div className="flex flex-col gap-1 text-sm">
                  <span className="text-muted-foreground font-medium">Key Advantage:</span>
                  <span className="text-foreground/80 text-xs leading-relaxed">{model.advantage}</span>
                </div>
              </div>

              <Button asChild size="lg" variant={model.featured ? "default" : "outline"} className="w-full h-14 text-base mt-auto">
                <Link href="/contact">
                  Discuss Your Project <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-24 max-w-4xl mx-auto text-center bg-muted/50 border border-border rounded-2xl p-12">
          <h3 className="text-2xl font-bold mb-4 text-foreground">Need Hourly Consulting?</h3>
          <p className="text-muted-foreground mb-8">
            Best for CTOs and technical teams needing highly specialized expertise in AI model training, Cloud infrastructure optimization, or severe performance debugging.
          </p>
          <Button asChild variant="outline" className="border-border hover:bg-muted">
            <Link href="/contact">Inquire About Consulting Rates</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
