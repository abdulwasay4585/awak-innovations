"use client";

import { motion } from "framer-motion";
import { ArrowRight, Briefcase, ExternalLink } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function PortfolioPage() {
  const projects = [
    {
      title: "Nova AI Analytics",
      industry: "Finance / Enterprise SaaS",
      problem: "A Fortune 500 financial firm struggled to manually analyze millions of daily market data points, missing critical micro-trends and exposing themselves to unnecessary risk.",
      solution: "We architected a real-time, Generative AI-powered analytics platform that digests global market feeds, news sentiment, and historical data to instantly output predictive trading insights and risk assessments.",
      features: "Real-time LLM market sentiment analysis, sub-50ms data processing pipeline, dynamic risk visualization dashboards.",
      tech: "Python, OpenAI API, React, Node.js, Apache Kafka, PostgreSQL, AWS.",
      results: "Reduced risk-assessment time by 85% and increased actionable trading opportunities by 22% in the first quarter."
    },
    {
      title: "EchoCommerce Headless Platform",
      industry: "Retail & E-Commerce",
      problem: "A premium fashion brand was losing high-ticket sales due to a monolithic Shopify store that took over 4 seconds to load on mobile devices.",
      solution: "We migrated their entire storefront to a lightning-fast headless architecture, decoupled from Shopify, enabling instantaneous page transitions and a deeply customized, app-like mobile experience.",
      features: "Sub-second page loads, seamless CMS integration, predictive AI product recommendations, advanced inventory syncing.",
      tech: "Next.js, Shopify Plus (Storefront API), Sanity CMS, Redis, Vercel.",
      results: "Increased mobile conversion rate by 41% and drove an additional $5M in annual revenue directly attributed to performance gains."
    },
    {
      title: "HealthSync Telemedicine",
      industry: "Healthcare",
      problem: "A growing healthcare provider needed a secure, HIPAA-compliant way to connect 100,000+ patients with specialists remotely during a period of rapid expansion.",
      solution: "We developed a robust cross-platform mobile application featuring high-definition WebRTC video consulting, secure end-to-end encrypted messaging, and seamless electronic health record (EHR) integration.",
      features: "WebRTC video/audio calls, encrypted chat, automated appointment scheduling, wearable health data syncing.",
      tech: "React Native, WebRTC, Express.js, MongoDB, Docker, AWS Shield.",
      results: "Scaled successfully to support 10,000+ daily active users with zero downtime and achieved a 99% patient satisfaction score."
    },
    {
      title: "OmniChain Ledger Bridge",
      industry: "Web3 / Fintech",
      problem: "A decentralized finance (DeFi) protocol required a highly secure, non-custodial bridge to transfer assets between Ethereum and Solana without relying on centralized exchanges.",
      solution: "We engineered a decentralized cross-chain bridge utilizing advanced cryptography and robust smart contracts, heavily audited to ensure immunity against flash loan and reentrancy attacks.",
      features: "Cross-chain asset wrapping, decentralized relayer network, real-time transaction monitoring, institutional-grade security.",
      tech: "Solidity, Rust, TypeScript, Ethers.js, The Graph.",
      results: "Secured over $150M in Total Value Locked (TVL) within 6 months with zero security breaches or lost funds."
    },
    {
      title: "Lumina B2B CRM",
      industry: "Real Estate / SaaS",
      problem: "Large real estate agencies were losing leads because their existing generic CRM software could not adapt to their unique, fast-paced sales pipelines.",
      solution: "We built a custom, incredibly intuitive CRM tailored specifically for high-volume real estate transactions, featuring automated lead routing and AI-driven client insights based on browsing behavior.",
      features: "Automated intelligent lead assignment, Kanban-style deal tracking, integrated VOIP calling, automated email sequences.",
      tech: "Vue.js, Laravel, MySQL, Twilio API, Google Cloud Platform.",
      results: "Increased agent close rates by 28% and reduced the average time to first contact from 45 minutes to under 2 minutes."
    },
    {
      title: "Aura Smart Home Dashboard",
      industry: "IoT / Consumer Tech",
      problem: "An international smart home manufacturer needed a unified cloud dashboard capable of managing and receiving telemetry from over 2 million deployed IoT devices with minimal latency.",
      solution: "We architected a massively scalable, event-driven microservices backend capable of ingesting millions of data points per minute, paired with a sleek, real-time frontend dashboard for administrators.",
      features: "Real-time device state syncing, over-the-air (OTA) firmware update management, anomaly detection, geo-spatial device mapping.",
      tech: "Go (Golang), React, Kubernetes, Apache Kafka, TimescaleDB.",
      results: "Handled a 300% surge in device activations smoothly and reduced data ingestion latency to a consistent 45ms globally."
    },
    {
      title: "SupplyTrack Logistics ERP",
      industry: "Logistics & Supply Chain",
      problem: "A global shipping company relied on fragmented legacy systems to track cargo, resulting in frequent lost shipments and inaccurate ETA predictions.",
      solution: "We completely modernized their infrastructure by building a unified ERP system with predictive machine learning algorithms that calculate dynamic ETAs based on real-time weather and port traffic data.",
      features: "Live GPS fleet tracking, automated customs documentation generation, predictive delay alerts, vendor management portals.",
      tech: "Angular, Spring Boot (Java), PostgreSQL, AWS SageMaker, Google Maps API.",
      results: "Reduced operational overhead by 30% and improved delivery ETA accuracy from 65% to 94%."
    },
    {
      title: "Edvance Learning Management System",
      industry: "Education",
      problem: "A national university network needed a modern, highly interactive LMS to replace their aging Blackboard system and support 50,000+ concurrent students in a hybrid learning environment.",
      solution: "We designed and built a highly engaging, accessible learning platform featuring live interactive whiteboards, automated grading via NLP, and personalized learning paths for students.",
      features: "Live video classrooms, interactive assignments, AI plagiarism detection, comprehensive analytics for educators.",
      tech: "Next.js, Node.js, GraphQL, PostgreSQL, WebSockets.",
      results: "Achieved a 99.9% uptime during peak exam seasons and increased student engagement metrics by over 40%."
    },
    {
      title: "GovFlow Automation Portal",
      industry: "Government & Public Sector",
      problem: "A municipal government office was overwhelmed by manual citizen permit applications, causing processing backlogs of up to 6 months.",
      solution: "We developed a secure, accessible web portal with intelligent OCR (Optical Character Recognition) to automate the ingestion and initial validation of citizen documents.",
      features: "WCAG 2.1 AA accessible design, automated OCR document verification, secure payment gateway, multi-tier approval workflows.",
      tech: "React, Python (FastAPI), Tesseract OCR, AWS GovCloud, Stripe.",
      results: "Eliminated the 6-month backlog entirely within 60 days of launch, reducing the average permit processing time to just 3 days."
    }
  ];

  return (
    <main className="min-h-screen py-32 bg-background">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center justify-center px-3 py-1 mb-4 text-sm font-medium text-primary bg-primary/10 rounded-full">Our Work</div>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Engineering Portfolio
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            A curated selection of our most impactful deployments. We've helped enterprises scale and startups launch with robust, future-proof architectures.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group cursor-pointer rounded-3xl bg-card border border-border overflow-hidden hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-lg flex flex-col"
            >
              <div className="p-8 flex-grow">
                <div className="text-sm font-bold text-primary mb-2 uppercase tracking-wider">{project.industry}</div>
                <h3 className="text-2xl font-bold text-foreground mb-4">{project.title}</h3>
                
                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="text-xs font-bold text-foreground uppercase tracking-wider mb-1">The Challenge</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{project.problem}</p>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-primary uppercase tracking-wider mb-1">The Solution</h4>
                    <p className="text-sm text-foreground/90 leading-relaxed">{project.solution}</p>
                  </div>
                </div>
              </div>
              
              <div className="p-8 bg-muted/50 border-t border-border mt-auto">
                <h3 className="text-lg font-bold mb-3 text-foreground">Business Impact</h3>
                <p className="text-sm text-primary/90 leading-relaxed font-medium mb-6">
                  "{project.results}"
                </p>
                
                <div className="grid grid-cols-1 gap-4">
                  <div>
                    <h4 className="text-xs text-muted-foreground font-semibold uppercase tracking-wider mb-1">Tech Stack</h4>
                    <p className="text-xs text-foreground/80 font-mono text-primary/80">{project.tech}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
