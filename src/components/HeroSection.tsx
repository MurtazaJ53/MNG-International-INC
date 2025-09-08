import { Button } from "@/components/ui/enhanced-button";
import { ArrowDown } from "lucide-react";
import heroImage from "@/assets/hero-spices.jpg";

export const HeroSection = () => {
  const scrollToProducts = () => {
    const productsSection = document.getElementById('products');
    productsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
          Premium
          <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Spices
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
          Discover authentic, high-quality spices and masalas sourced directly from India. 
          From golden turmeric to aromatic garam masala, elevate your cooking with our premium collection.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            variant="hero" 
            size="xl"
            onClick={scrollToProducts}
            className="text-lg px-8 py-4"
          >
            Explore Our Spices
          </Button>
          
          <Button 
            variant="outline" 
            size="xl"
            onClick={() => document.getElementById('certificates')?.scrollIntoView({ behavior: 'smooth' })}
            className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-foreground"
          >
            View Certifications
          </Button>
        </div>
        
        <div className="mt-12">
          <Button
            variant="ghost"
            size="icon"
            onClick={scrollToProducts}
            className="text-white hover:bg-white/20 animate-bounce"
          >
            <ArrowDown className="w-6 h-6" />
          </Button>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};