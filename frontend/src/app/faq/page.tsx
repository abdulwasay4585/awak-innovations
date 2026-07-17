"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function FAQPage() {
  const faqs = [
    {
      question: "What is your standard development process?",
      answer: "Our process is highly iterative and transparent. We begin with a deep-dive Discovery phase to understand your business goals, followed by Architecture & UI/UX Design, Agile Development sprints, rigorous QA Testing, and finally, Deployment and Maintenance. You will have full visibility into our progress at every stage."
    },
    {
      question: "Do you work with startups or just enterprise companies?",
      answer: "We work with both. For startups, we focus on speed-to-market, building scalable MVPs that attract investors. For enterprise clients, we focus on modernizing legacy systems, security, and integrating complex APIs without disrupting existing operations."
    },
    {
      question: "How do you handle intellectual property (IP) and security?",
      answer: "Your IP is 100% yours. We sign comprehensive Non-Disclosure Agreements (NDAs) before any discussions begin. All code is written in secure, private repositories that are transferred to your ownership upon project completion. Our development practices adhere to strict security compliances (e.g., SOC2, GDPR, HIPAA where applicable)."
    },
    {
      question: "What technologies do you specialize in?",
      answer: "We are language-agnostic but specialize in modern, highly scalable stacks. For web, we primarily use React, Next.js, and Node.js. For mobile, we use React Native and native languages. For AI, we utilize Python, TensorFlow, PyTorch, and various LLMs (OpenAI, Anthropic). Our cloud architecture relies heavily on AWS and Google Cloud Platform."
    },
    {
      question: "How long does a typical project take?",
      answer: "Project timelines vary drastically based on complexity. A straightforward MVP or corporate web application might take 6 to 10 weeks. A complex, enterprise-grade AI platform or custom ERP system can take 4 to 8 months. We provide detailed timeline estimates during the Discovery phase."
    },
    {
      question: "How do you charge for your services?",
      answer: "We offer flexible engagement models. For well-defined projects, we provide a fixed-price contract based on detailed scoping. For dynamic or long-term projects, we offer Dedicated Team models (monthly retainers) or Time & Materials (hourly consulting) allowing you to scale resources up or down as needed."
    },
    {
      question: "Can you integrate AI into my existing software?",
      answer: "Absolutely. One of our core specialties is taking legacy systems and supercharging them with AI capabilities—whether that means adding an intelligent chatbot, building predictive analytics dashboards, or implementing workflow automation via LLMs."
    },
    {
      question: "Do you provide maintenance and support after launch?",
      answer: "Yes. Launching the software is just the beginning. We offer comprehensive Service Level Agreements (SLAs) that cover bug fixes, security patching, server monitoring, and feature enhancements to ensure your product scales smoothly as your user base grows."
    },
    {
      question: "How do you ensure the quality of your code?",
      answer: "We employ a rigorous Quality Assurance pipeline. Every pull request requires peer review. We implement extensive automated testing (Unit, Integration, and End-to-End tests) and conduct manual QA on various devices. We don't deploy to production until the code passes our strict quality gates."
    },
    {
      question: "How do we communicate during the project?",
      answer: "We believe in over-communication. You will be assigned a dedicated Project Manager. We use Slack for day-to-day real-time communication, Jira/Linear for transparent task tracking, and conduct weekly video syncs to review progress and demonstrate completed features."
    }
  ];

  return (
    <main className="min-h-screen py-32 bg-background relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-1/4 -left-1/4 w-[800px] h-[800px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-8 max-w-3xl relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-muted-foreground">
            Clear, honest answers about how we work, what we charge, and what you can expect when partnering with AWAK Innovations.
          </p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-card border border-border rounded-3xl p-6 md:p-10 shadow-sm"
        >
          <Accordion className="w-full">
            {faqs.map((faq, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`} className="border-border">
                <AccordionTrigger className="text-left text-foreground hover:text-primary hover:no-underline text-lg font-semibold py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6 text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        {/* Contact fallback */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-6">Didn't find the answer you're looking for?</p>
          <Button asChild variant="outline" className="border-border bg-background hover:bg-muted shadow-sm">
            <Link href="/contact">Contact Our Team</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
