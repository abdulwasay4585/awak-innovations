"use client";

import { motion } from "framer-motion";

export default function TermsPage() {
  return (
    <main className="min-h-screen py-32 bg-background">
      <div className="container mx-auto px-4 max-w-3xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="prose prose-slate max-w-none"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8">Terms of Service</h1>
          <div className="text-muted-foreground space-y-6">
            <p><strong>Effective Date:</strong> January 1, 2026</p>
            
            <p>Welcome to Awak Innovations. By accessing or using our website and engineering services, you agree to be bound by these Terms of Service.</p>

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">1. Services Provided</h2>
            <p>Awak Innovations provides custom software engineering, cloud architecture, AI integration, and technical consulting services. Specific deliverables, timelines, and costs will be outlined in individual Statements of Work (SOW) or Master Services Agreements (MSA).</p>

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">2. Intellectual Property</h2>
            <p>Upon full payment for our services, all custom code, designs, and intellectual property created specifically for your project will be transferred to you, unless otherwise specified in your agreement. We retain the right to use open-source libraries and our proprietary boilerplate code across multiple projects.</p>

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">3. Limitation of Liability</h2>
            <p>Awak Innovations shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your use of our services.</p>

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">4. Contact Us</h2>
            <p>If you have any questions about these Terms, please contact us at:</p>
            <p className="text-primary font-medium mt-2">legal@awakinnovations.com</p>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
