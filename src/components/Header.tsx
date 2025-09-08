import { useState, useEffect } from "react";
import { Button } from "@/components/ui/enhanced-button";
import { SocialLinks } from "@/components/SocialLinks";
import { ContactSupport } from "@/components/ContactSupport";
import { HelpCenter } from "@/components/HelpCenter";
import { Menu, X } from "lucide-react";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/95 backdrop-blur-md border-b border-border shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <h1 className="text-2xl font-bold">
              <span className="text-primary">MNG International Inc</span>
              {/* <span className={isScrolled ? "text-foreground" : "text-white"}>International Inc</span> */}
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('products')}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isScrolled ? 'text-foreground' : 'text-white'
              }`}
            >
              Products
            </button>
            <button 
              onClick={() => scrollToSection('certificates')}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isScrolled ? 'text-foreground' : 'text-white'
              }`}
            >
              Certifications
            </button>
            <div className={`${isScrolled ? '' : 'text-white'}`}>
              <SocialLinks />
            </div>
          </nav>

          {/* Desktop Action Buttons */}
          <div className="hidden md:flex items-center space-x-2">
            <HelpCenter />
            <ContactSupport />
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className={`md:hidden ${isScrolled ? 'text-foreground' : 'text-white'}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-md">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button 
                onClick={() => scrollToSection('products')}
                className="block px-3 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                Products
              </button>
              <button 
                onClick={() => scrollToSection('certificates')}
                className="block px-3 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                Certifications
              </button>
              
              <div className="flex flex-col space-y-2 px-3 py-2">
                <HelpCenter />
                <ContactSupport />
              </div>
              
              <div className="px-3 py-2">
                <SocialLinks />
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};