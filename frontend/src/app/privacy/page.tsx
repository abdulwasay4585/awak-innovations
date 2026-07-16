"use client";

import { motion } from "framer-motion";

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen py-32 bg-background">
      <div className="container mx-auto px-4 max-w-3xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="prose prose-slate max-w-none"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8">Privacy Policy</h1>
          <div className="text-muted-foreground space-y-6">
            <p><strong>Effective Date:</strong> January 1, 2026</p>
            
            <p>Awak Innovations ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how your personal information is collected, used, and disclosed by Awak Innovations.</p>

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">1. Information We Collect</h2>
            <p>We collect information you provide directly to us when you request a consultation, subscribe to our newsletter, or communicate with us. This may include:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Name and contact information (email address, phone number)</li>
              <li>Company details and project requirements</li>
              <li>Communications and correspondence</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">2. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide, maintain, and improve our engineering services</li>
              <li>Communicate with you regarding your projects and inquiries</li>
              <li>Send you technical updates, security alerts, and administrative messages</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">3. Data Security</h2>
            <p>We implement enterprise-grade security measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure.</p>

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">4. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us at:</p>
            <p className="text-primary font-medium mt-2">legal@awakinnovations.com</p>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
