"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, MessageSquare, CheckCircle, AlertCircle } from "lucide-react";
import { useState } from "react";
import { submitContactForm } from "@/lib/api";

type FormStatus = "idle" | "submitting" | "success" | "error";

export default function ContactPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<FormStatus>("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    try {
      const result = await submitContactForm({ firstName, lastName, email, company, message });
      setStatusMessage(result.message);
      setStatus("success");
      // Reset form
      setFirstName("");
      setLastName("");
      setEmail("");
      setCompany("");
      setMessage("");
    } catch (err: unknown) {
      const errorMessage = err instanceof Error ? err.message : "Something went wrong. Please try again.";
      setStatusMessage(errorMessage);
      setStatus("error");
    }
  };

  return (
    <main className="min-h-screen py-32 bg-background relative overflow-hidden">
      {/* Subtle Background */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 max-w-6xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Left Column: Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="inline-flex items-center justify-center px-3 py-1 mb-6 text-sm font-medium text-primary bg-primary/10 rounded-full">Get In Touch</div>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Let&apos;s engineer your <span className="text-primary">future.</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              Discuss your project directly with our senior architects. No pushy sales reps, just technical experts ready to map out your solution.
            </p>

            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Mail className="text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground text-lg mb-1">Email Us</h4>
                  <a href="mailto:hello@awakinnovations.com" className="text-muted-foreground hover:text-primary transition-colors">hello@awakinnovations.com</a>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <MessageSquare className="text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground text-lg mb-1">Response Time</h4>
                  <p className="text-muted-foreground">We respond to all inquiries within 1 business day.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground text-lg mb-1">Global Remote</h4>
                  <p className="text-muted-foreground">Our engineering teams operate globally to serve clients across all time zones.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-card border border-border p-8 md:p-10 rounded-3xl shadow-sm"
          >
            <h3 className="text-2xl font-bold text-foreground mb-6">Send a Message</h3>
            
            {/* Status Banner */}
            {status === "success" && (
              <div className="mb-6 flex items-start gap-3 p-4 rounded-2xl bg-green-50 border border-green-200 text-green-800">
                <CheckCircle className="w-5 h-5 mt-0.5 shrink-0 text-green-600" />
                <p className="text-sm font-medium">{statusMessage}</p>
              </div>
            )}
            {status === "error" && (
              <div className="mb-6 flex items-start gap-3 p-4 rounded-2xl bg-red-50 border border-red-200 text-red-800">
                <AlertCircle className="w-5 h-5 mt-0.5 shrink-0 text-red-600" />
                <p className="text-sm font-medium">{statusMessage}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">First Name <span className="text-red-500">*</span></label>
                  <Input
                    required
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="bg-background border-border text-foreground h-12 px-4"
                    placeholder="John"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Last Name <span className="text-red-500">*</span></label>
                  <Input
                    required
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="bg-background border-border text-foreground h-12 px-4"
                    placeholder="Doe"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Work Email <span className="text-red-500">*</span></label>
                <Input
                  required
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-background border-border text-foreground h-12 px-4"
                  placeholder="john@company.com"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Company Name</label>
                <Input
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  className="bg-background border-border text-foreground h-12 px-4"
                  placeholder="Acme Corp"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">How can we help? <span className="text-red-500">*</span></label>
                <Textarea
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="bg-background border-border text-foreground min-h-[120px] p-4 resize-none"
                  placeholder="Tell us about your project goals, timeline, and technical requirements..."
                />
              </div>

              <Button
                type="submit"
                disabled={status === "submitting"}
                className="w-full h-14 text-base font-bold shadow-md"
              >
                {status === "submitting" ? "Sending..." : "Submit Request"}
              </Button>
            </form>
          </motion.div>

        </div>
      </div>
    </main>
  );
}
