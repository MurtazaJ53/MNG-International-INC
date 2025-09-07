import { SocialLinks } from "@/components/SocialLinks";
import { ContactSupport } from "@/components/ContactSupport";
import { HelpCenter } from "@/components/HelpCenter";
import { Separator } from "@/components/ui/separator";
import { MapPin, Mail, Phone, Clock } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-background to-secondary/30 border-t border-border">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-foreground">Premium Spices</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Authentic Indian spices and masalas sourced directly from the finest regions. 
              Bringing traditional flavors to your modern kitchen.
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="w-4 h-4 text-primary" />
              <span>London, United Kingdom</span>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm">
                <Mail className="w-4 h-4 text-primary" />
                <a href="mailto:info@premiumspices.com" className="text-muted-foreground hover:text-primary transition-colors">
                  info@premiumspices.com
                </a>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Phone className="w-4 h-4 text-primary" />
                <a href="tel:+441234567890" className="text-muted-foreground hover:text-primary transition-colors">
                  +44 123 456 7890
                </a>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Clock className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">Mon-Fri: 9 AM - 6 PM GMT</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Quick Links</h3>
            <div className="space-y-2">
              <button 
                onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-sm text-muted-foreground hover:text-primary transition-colors text-left"
              >
                Our Products
              </button>
              <button 
                onClick={() => document.getElementById('certificates')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-sm text-muted-foreground hover:text-primary transition-colors text-left"
              >
                Certifications
              </button>
              <div className="flex flex-col space-y-2">
                <ContactSupport />
                <HelpCenter />
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <SocialLinks variant="footer" />
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024 Premium Spices. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="/terms" className="text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </a>
            <a href="/shipping" className="text-muted-foreground hover:text-primary transition-colors">
              Shipping Info
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};