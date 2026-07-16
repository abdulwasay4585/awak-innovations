"use client";

import Link from "next/link";
import { Globe, Mail, MessageCircle, Briefcase } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-background pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4 lg:gap-12">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-2xl font-bold tracking-tight text-white">Awak Innovations</span>
            </Link>
            <p className="text-muted-foreground">
              A forward-thinking digital agency specializing in cutting-edge web development, creative design, and intelligent data-driven solutions.
            </p>
            <div className="flex items-center gap-4 mt-2">
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Globe className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Mail className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <MessageCircle className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Briefcase className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <nav className="flex flex-col gap-2">
              <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">About Us</Link>
              <Link href="/portfolio" className="text-muted-foreground hover:text-primary transition-colors">Portfolio</Link>
              <Link href="/careers" className="text-muted-foreground hover:text-primary transition-colors">Careers</Link>
              <Link href="/blog" className="text-muted-foreground hover:text-primary transition-colors">Blog</Link>
              <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link>
            </nav>
          </div>

          {/* Services */}
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-semibold text-white">Services</h3>
            <nav className="flex flex-col gap-2">
              <Link href="/services/web-development" className="text-muted-foreground hover:text-primary transition-colors">Web Development</Link>
              <Link href="/services/ai-automation" className="text-muted-foreground hover:text-primary transition-colors">AI & Automation</Link>
              <Link href="/services/mobile-development" className="text-muted-foreground hover:text-primary transition-colors">Mobile Apps</Link>
              <Link href="/services/ui-ux-design" className="text-muted-foreground hover:text-primary transition-colors">UI/UX Design</Link>
              <Link href="/services/data-analytics" className="text-muted-foreground hover:text-primary transition-colors">Data Analytics</Link>
            </nav>
          </div>

          {/* Newsletter */}
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-semibold text-white">Newsletter</h3>
            <p className="text-muted-foreground">Subscribe to our newsletter for the latest updates and insights.</p>
            <form className="flex mt-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-l-md border border-white/10 bg-white/5 px-4 py-2 text-sm text-white focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              />
              <button
                type="submit"
                className="rounded-r-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Awak Innovations. All rights reserved.
          </p>
          <div className="mt-4 flex gap-4 sm:mt-0">
            <Link href="/privacy-policy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
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
