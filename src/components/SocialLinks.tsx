import { Button } from "@/components/ui/enhanced-button";
import { Instagram, Facebook, Linkedin } from "lucide-react";

const SocialIcon = ({ icon: Icon, label, href }: { icon: any, label: string, href: string }) => (
  <Button
    variant="ghost"
    size="icon"
    asChild
    className="hover:bg-primary/10 hover:text-primary transition-colors"
  >
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Follow us on ${label}`}
      className="flex items-center justify-center"
    >
      <Icon className="w-5 h-5" />
    </a>
  </Button>
);

const GoogleIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
  </svg>
);

export const SocialLinks = ({ variant = "header" }: { variant?: "header" | "footer" }) => {
  const socialLinks = [
    {
      icon: Instagram,
      label: "Instagram",
      href: "https://instagram.com/premiumspices" // Replace with actual links
    },
    {
      icon: Facebook,
      label: "Facebook", 
      href: "https://facebook.com/premiumspices"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/company/premiumspices"
    },
    {
      icon: GoogleIcon,
      label: "Google Business",
      href: "https://g.page/premiumspices"
    }
  ];

  if (variant === "footer") {
    return (
      <div className="flex flex-col items-center space-y-4">
        <h3 className="text-lg font-semibold text-foreground">Follow Us</h3>
        <div className="flex space-x-2">
          {socialLinks.map((social) => (
            <SocialIcon key={social.label} {...social} />
          ))}
        </div>
        <p className="text-sm text-muted-foreground text-center">
          Stay updated with our latest products and cooking tips
        </p>
      </div>
    );
  }

  return (
    <div className="flex space-x-1">
      {socialLinks.map((social) => (
        <SocialIcon key={social.label} {...social} />
      ))}
    </div>
  );
};