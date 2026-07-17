"use client";

import { motion } from "framer-motion";
import { 
  Building2, Users, Rocket, Target, Cpu, 
  ArrowRight, Shield, Globe
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function AboutPage() {
  const values = [
    {
      title: "Radical Transparency",
      description: "No black boxes. We communicate openly about technical debt, timelines, and architectural tradeoffs.",
      icon: <Building2 className="w-6 h-6 text-primary" />
    },
    {
      title: "Engineering Excellence",
      description: "We don't cut corners. Clean architecture, rigorous testing, and scalable cloud infrastructure are standard.",
      icon: <Cpu className="w-6 h-6 text-primary" />
    },
    {
      title: "Outcome Oriented",
      description: "We don't just ship features; we solve business problems. We measure our success by your ROI.",
      icon: <Target className="w-6 h-6 text-primary" />
    },
    {
      title: "Security First",
      description: "From day one, security is baked into our CI/CD pipelines and architectural choices.",
      icon: <Shield className="w-6 h-6 text-primary" />
    }
  ];

  const timeline = [
    { year: "2026", title: "Founded", desc: "AWAK Innovations launched with a mission to modernize enterprise software delivery." },
    { year: "2027", title: "AI Expansion", desc: "Scaled our AI engineering practice to help clients integrate LLMs into production workflows." },
    { year: "2028", title: "Global Reach", desc: "Expanded operations to support distributed teams across North America and Europe." }
  ];

  return (
    <main className="min-h-screen bg-background pt-32 pb-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden mb-24">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className="inline-flex items-center justify-center px-3 py-1 mb-6 text-sm font-medium text-primary bg-primary/10 rounded-full">Who We Are</div>
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
                Architects of the <span className="text-primary">Digital Frontier.</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                We are a collective of senior software engineers, cloud architects, and product designers dedicated to building robust, scalable solutions for forward-thinking companies.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="h-14 px-8 text-base shadow-md">
                  <Link href="/contact">Work With Us</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="h-14 px-8 text-base border-border bg-background shadow-sm hover:bg-muted">
                  <Link href="/portfolio">View Our Work</Link>
                </Button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="relative aspect-square lg:aspect-auto lg:h-[600px] rounded-3xl overflow-hidden border border-border shadow-lg"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent z-10" />
              {/* Note: Placeholder image - replace with actual team or office photo */}
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2850&auto=format&fit=crop')] bg-cover bg-center grayscale opacity-80" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-muted/30 border-y border-border relative">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Our Mission</h2>
            <p className="text-2xl text-muted-foreground leading-relaxed italic">
              "To bridge the gap between complex technology and tangible business value. We exist to build software that accelerates growth, automates the mundane, and secures the future."
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-32 relative">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Our Core Values</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              These principles guide every architectural decision we make and every line of code we write.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-card border border-border p-8 rounded-3xl hover:border-primary/50 transition-colors"
              >
                <div className="bg-primary/10 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 border border-primary/20">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
