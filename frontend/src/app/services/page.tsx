"use client";

import { motion } from "framer-motion";
import { 
  Bot, Code2, Globe, Smartphone, 
  Cloud, Database, Layout, LineChart,
  ArrowRight
} from "lucide-react";
import Link from "next/link";

export default function ServicesPage() {
  const services = [
    {
      title: "AI Development & Integration",
      problem: "Off-the-shelf software fails to leverage your proprietary data, leaving you lagging behind competitors who use AI to automate and predict.",
      solution: "We build custom AI models, integrate Generative AI (LLMs), and develop Retrieval-Augmented Generation (RAG) pipelines tailored to your business logic.",
      features: "AI Chatbots, Custom LLM Training, Computer Vision, Natural Language Processing.",
      benefits: "Drastically reduce operational costs, automate customer support, and unlock predictive insights from your data.",
      tech: "Python, OpenAI API, LangChain, Pinecone, TensorFlow, PyTorch.",
      icon: <Bot className="w-8 h-8 text-primary" />
    },
    {
      title: "Custom Enterprise Software",
      problem: "Legacy systems and fragmented spreadsheets are creating data silos and severely bottlenecking your operational efficiency.",
      solution: "We engineer bespoke ERP, CRM, and internal portal solutions that unify your workflows into a single, scalable, and highly secure platform.",
      features: "Custom ERP/CRM, Inventory Management, Booking Systems, Learning Management Systems (LMS).",
      benefits: "Eliminate manual data entry, streamline operations, and scale your business without technological constraints.",
      tech: "React, Next.js, Node.js, PostgreSQL, Docker, AWS.",
      icon: <Code2 className="w-8 h-8 text-primary" />
    },
    {
      title: "Full Stack Web Development",
      problem: "Your current web application is slow, hard to scale, and suffers from poor user experience, leading to high bounce rates and lost revenue.",
      solution: "We develop lightning-fast, highly responsive, and SEO-optimized web applications using modern Javascript frameworks and serverless architectures.",
      features: "Progressive Web Apps (PWA), Headless E-commerce, SaaS Platforms, Admin Dashboards.",
      benefits: "Maximize conversion rates, ensure 99.99% uptime, and provide an unparalleled user experience.",
      tech: "Next.js, React, TypeScript, Tailwind CSS, Prisma.",
      icon: <Globe className="w-8 h-8 text-primary" />
    },
    {
      title: "Mobile App Development",
      problem: "You need to reach users on their mobile devices, but building and maintaining separate native apps for iOS and Android is too costly and slow.",
      solution: "We build high-performance, native-feeling cross-platform mobile applications that give you maximum market reach with a single codebase.",
      features: "Cross-Platform Apps, Native Integrations, Push Notifications, Offline Support.",
      benefits: "Cut development time in half, unify your user experience across platforms, and rapidly launch to both the App Store and Google Play.",
      tech: "React Native, Expo, Swift, Kotlin, Firebase.",
      icon: <Smartphone className="w-8 h-8 text-primary" />
    },
    {
      title: "Cloud Solutions & DevOps",
      problem: "Your infrastructure is fragile, deployments are stressful, and scaling up during high-traffic events causes costly downtime.",
      solution: "We architect resilient, auto-scaling cloud environments and implement robust CI/CD pipelines to ensure rapid, zero-downtime deployments.",
      features: "Cloud Migration, Infrastructure as Code, CI/CD Automation, Containerization.",
      benefits: "Slash infrastructure costs, eliminate deployment anxiety, and guarantee high availability for your users globally.",
      tech: "AWS, Google Cloud, Docker, Kubernetes, Terraform, GitHub Actions.",
      icon: <Cloud className="w-8 h-8 text-primary" />
    },
    {
      title: "API & Database Engineering",
      problem: "Your microservices can't communicate efficiently, and your database queries are becoming a major performance bottleneck as data grows.",
      solution: "We design and implement robust REST and GraphQL APIs, alongside highly optimized SQL and NoSQL database architectures.",
      features: "REST/GraphQL APIs, Microservices, Database Optimization, Data Warehousing.",
      benefits: "Enable seamless third-party integrations, accelerate data retrieval by 10x, and ensure data integrity.",
      tech: "Node.js, Express, GraphQL, PostgreSQL, MongoDB, Redis.",
      icon: <Database className="w-8 h-8 text-primary" />
    },
    {
      title: "UI/UX & Product Design",
      problem: "Your software is functional but looks outdated and is confusing to navigate, resulting in high user churn and increased support tickets.",
      solution: "We craft premium, intuitive, and conversion-optimized interfaces grounded in deep user research and modern design principles.",
      features: "Wireframing, High-Fidelity Prototyping, Design Systems, Usability Testing.",
      benefits: "Skyrocket user retention, reduce onboarding time, and establish a world-class brand aesthetic.",
      tech: "Figma, Adobe Creative Cloud, Framer.",
      icon: <Layout className="w-8 h-8 text-primary" />
    },
    {
      title: "Data Analytics & BI",
      problem: "You are generating massive amounts of data but lack the tools to extract actionable insights and track key business metrics in real-time.",
      solution: "We build comprehensive data pipelines and dynamic business intelligence dashboards that turn raw data into strategic assets.",
      features: "Real-time Dashboards, Data Visualization, Predictive Modeling, ETL Pipelines.",
      benefits: "Make confident, data-driven decisions instantly and uncover hidden revenue opportunities within your existing operations.",
      tech: "Python, Apache Spark, Snowflake, Tableau, PowerBI.",
      icon: <LineChart className="w-8 h-8 text-primary" />
    }
  ];

  return (
    <main className="min-h-screen py-32 bg-background">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center justify-center px-3 py-1 mb-4 text-sm font-medium text-primary bg-primary/10 rounded-full">Our Capabilities</div>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Services & Expertise
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            We provide end-to-end software engineering services. From the initial architecture to final deployment, we build solutions that scale with your ambitions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 md:p-10 rounded-3xl bg-card border border-border shadow-sm hover:border-primary/50 transition-all duration-300 flex flex-col"
            >
              <div className="flex items-start gap-6 mb-6">
                <div className="p-4 rounded-2xl bg-primary/10 text-primary shrink-0">
                  {service.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">{service.title}</h3>
                </div>
              </div>
              
              <div className="space-y-4 mb-8 flex-grow">
                <div>
                  <h4 className="text-xs font-bold text-foreground uppercase tracking-wider mb-1">The Problem</h4>
                  <p className="text-sm text-muted-foreground">{service.problem}</p>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-primary uppercase tracking-wider mb-1">Our Solution</h4>
                  <p className="text-sm text-foreground/90">{service.solution}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-6 border-t border-border">
                <div>
                  <h4 className="text-xs text-muted-foreground font-semibold uppercase tracking-wider mb-2">Key Features</h4>
                  <p className="text-sm text-foreground/80 leading-relaxed">{service.features}</p>
                </div>
                <div>
                  <h4 className="text-xs text-muted-foreground font-semibold uppercase tracking-wider mb-2">Tech Stack</h4>
                  <p className="text-sm text-foreground/80 font-mono">{service.tech}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <Link href="/contact" className="inline-flex items-center gap-2 text-xl font-medium text-primary hover:text-primary/80 transition-colors">
            Discuss your technical requirements <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
