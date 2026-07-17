"use client";

import Link from "next/link";
import Image from "next/image";
import { Globe, Mail, ExternalLink } from "lucide-react";
import { useState } from "react";
import { subscribeNewsletter } from "@/lib/api";

export function Footer() {
  const [email, setEmail] = useState("");
  const [newsletterStatus, setNewsletterStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [newsletterMsg, setNewsletterMsg] = useState("");

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setNewsletterStatus("submitting");
    try {
      const result = await subscribeNewsletter(email);
      setNewsletterMsg(result.message);
      setNewsletterStatus("success");
      setEmail("");
    } catch (err: unknown) {
      const errorMessage = err instanceof Error ? err.message : "Subscription failed.";
      setNewsletterMsg(errorMessage);
      setNewsletterStatus("error");
    }
  };

  return (
    <footer className="border-t border-border bg-background pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1 flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="relative h-12 w-40 overflow-hidden">
                <Image
                  src="/logo.png"
                  alt="AWAK Innovations Logo"
                  fill
                  sizes="160px"
                  className="object-contain object-left"
                />
              </div>
            </Link>
            <div className="text-muted-foreground text-sm leading-relaxed space-y-4">
              <p>
                AWAK Innovations is a forward-thinking digital agency specializing in cutting-edge web development, creative design, and intelligent data-driven solutions. Built at the intersection of technology and innovation, we help startups, businesses, and enterprises transform their digital presence with custom-built websites, scalable AI models, and impactful data science strategies.
              </p>
              <p>
                With a core focus on simplicity, efficiency, and user-first experiences, our team of developers, designers, and AI engineers deliver tailored solutions that push boundaries and exceed expectations. Whether you're launching a new idea or optimizing existing platforms, AWAK Innovations brings the tools, talent, and technology to turn vision into reality.
              </p>
            </div>
            <div className="flex items-center gap-4 mt-2">
              <Link href="https://linkedin.com/company/awakinnovations" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="LinkedIn">
                <ExternalLink className="h-5 w-5" />
              </Link>
              <Link href="https://twitter.com/awakinnovations" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Twitter/X">
                <ExternalLink className="h-5 w-5" />
              </Link>
              <Link href="mailto:hello@awakinnovations.com" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Email">
                <Mail className="h-5 w-5" />
              </Link>
              <Link href="/" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Website">
                <Globe className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-8">
            <div>
              <h4 className="font-semibold mb-4 text-foreground">Company</h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
                <li><Link href="/portfolio" className="hover:text-primary transition-colors">Portfolio</Link></li>
                <li><Link href="/process" className="hover:text-primary transition-colors">Process</Link></li>
                <li><Link href="/pricing" className="hover:text-primary transition-colors">Pricing</Link></li>
                <li><Link href="/faq" className="hover:text-primary transition-colors">FAQ</Link></li>
                <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-foreground">Legal</h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li><Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link></li>
              </ul>
            </div>
          </div>

          {/* Services */}
          <div className="flex flex-col gap-4">
            <h4 className="font-semibold text-foreground">Services</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link href="/services" className="hover:text-primary transition-colors">AI Development</Link></li>
              <li><Link href="/services" className="hover:text-primary transition-colors">Web Development</Link></li>
              <li><Link href="/services" className="hover:text-primary transition-colors">Mobile Apps</Link></li>
              <li><Link href="/services" className="hover:text-primary transition-colors">Cloud & DevOps</Link></li>
              <li><Link href="/services" className="hover:text-primary transition-colors">UI/UX Design</Link></li>
              <li><Link href="/services" className="hover:text-primary transition-colors">Data & Analytics</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-span-2 md:col-span-1 flex flex-col gap-4">
            <h4 className="font-semibold text-foreground">Newsletter</h4>
            <p className="text-muted-foreground text-sm">Subscribe for the latest insights on AI, engineering, and digital transformation.</p>
            <form className="flex flex-col sm:flex-row gap-2 mt-2" onSubmit={handleNewsletterSubmit}>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full rounded-md sm:rounded-l-md sm:rounded-r-none border border-border bg-background px-4 py-2 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              />
              <button
                type="submit"
                disabled={newsletterStatus === "submitting"}
                className="rounded-md sm:rounded-l-none sm:rounded-r-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary/90 disabled:opacity-60 transition-colors whitespace-nowrap"
              >
                {newsletterStatus === "submitting" ? "..." : "Subscribe"}
              </button>
            </form>
            {newsletterMsg && (
              <p className={`text-xs mt-1 ${newsletterStatus === "success" ? "text-green-600" : "text-red-500"}`}>
                {newsletterMsg}
              </p>
            )}
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between border-t border-border pt-8 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} AWAK Innovations. All rights reserved.
          </p>
          <div className="mt-4 flex gap-4 sm:mt-0">
            <Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
