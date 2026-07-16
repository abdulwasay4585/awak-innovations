"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function PortfolioPreview() {
  const projects = [
    {
      title: "Nova AI Analytics",
      category: "Enterprise SaaS",
      tags: ["AI", "React", "Python"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "EchoCommerce",
      category: "Retail & E-Commerce",
      tags: ["Next.js", "Serverless", "Stripe"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "OmniChain Ledger",
      category: "Web3 / Fintech",
      tags: ["Blockchain", "Fintech"],
      image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?q=80&w=800&auto=format&fit=crop"
    }
  ];

  return (
    <section className="py-32 bg-muted/30">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Recent Deployments
          </h2>
          <p className="text-muted-foreground text-lg">
            Explore our latest enterprise implementations, from complex cloud migrations to seamless web applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-video rounded-3xl overflow-hidden mb-6 bg-card border border-border shadow-sm">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-60" />
              </div>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20 border-none">
                    {tag}
                  </Badge>
                ))}
              </div>
              
              <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-muted-foreground">
                {project.category}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button asChild size="lg" variant="outline" className="border-border bg-background hover:bg-muted h-14 px-8 text-base shadow-sm">
            <Link href="/portfolio">View Full Portfolio</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
