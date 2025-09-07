import { useState } from "react";
import { Button } from "@/components/ui/enhanced-button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { HelpCircle, Search, Package, Truck, Shield, Star } from "lucide-react";

const faqData = [
  {
    category: "Product Information",
    icon: Package,
    questions: [
      {
        question: "Are your spices organic?",
        answer: "Many of our products are certified organic. Look for the 'Organic' badge on product listings. All our spices are free from harmful pesticides and chemicals, sourced directly from trusted farmers in India."
      },
      {
        question: "How fresh are the spices?",
        answer: "All our spices are freshly ground and packaged within 30 days of processing. We maintain strict freshness standards and provide expiry dates on all packaging."
      },
      {
        question: "What is the shelf life of your products?",
        answer: "Whole spices: 2-3 years, Ground spices: 1-2 years, Spice blends: 1-1.5 years. Store in a cool, dry place away from direct sunlight for maximum freshness."
      }
    ]
  },
  {
    category: "Shipping & Delivery",
    icon: Truck,
    questions: [
      {
        question: "Do you ship internationally?",
        answer: "Yes, we ship to most countries worldwide. Shipping costs and delivery times vary by location. All international shipments include proper documentation for customs clearance."
      },
      {
        question: "How long does delivery take?",
        answer: "UK delivery: 1-3 business days, Europe: 3-7 business days, Rest of world: 7-14 business days. Express shipping options are available for urgent orders."
      },
      {
        question: "What if my package arrives damaged?",
        answer: "We package all products carefully, but if damage occurs during shipping, please contact us immediately with photos. We'll replace damaged items at no cost."
      }
    ]
  },
  {
    category: "Quality & Certificates",
    icon: Shield,
    questions: [
      {
        question: "What certifications do you have?",
        answer: "We maintain ISO 22000 food safety certification, HACCP compliance, organic certifications for applicable products, and export licenses. All certificates are regularly audited."
      },
      {
        question: "How do you ensure quality?",
        answer: "Every batch undergoes rigorous quality testing including purity tests, moisture content analysis, and microbiological testing by certified third-party laboratories."
      },
      {
        question: "Can I see test reports?",
        answer: "Yes, we provide detailed test reports and certificates of analysis upon request. These documents verify the purity, quality, and safety of our products."
      }
    ]
  },
  {
    category: "Orders & Returns",
    icon: Star,
    questions: [
      {
        question: "Can I return products if not satisfied?",
        answer: "Yes, we offer a 30-day satisfaction guarantee. If you're not happy with your purchase, contact us for a full refund or replacement."
      },
      {
        question: "Do you offer bulk discounts?",
        answer: "Yes, we provide significant discounts for bulk orders. Contact our sales team for custom pricing on orders over £500."
      },
      {
        question: "How can I track my order?",
        answer: "Once shipped, you'll receive a tracking number via email. You can track your package through our shipping partner's website or contact us for updates."
      }
    ]
  }
];

export const HelpCenter = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredFAQs, setFilteredFAQs] = useState(faqData);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (!query) {
      setFilteredFAQs(faqData);
      return;
    }

    const filtered = faqData.map(category => ({
      ...category,
      questions: category.questions.filter(
        item =>
          item.question.toLowerCase().includes(query.toLowerCase()) ||
          item.answer.toLowerCase().includes(query.toLowerCase())
      )
    })).filter(category => category.questions.length > 0);

    setFilteredFAQs(filtered);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="gap-2">
          <HelpCircle className="w-4 h-4" />
          Help Center
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[800px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-primary">Help Center</DialogTitle>
          <DialogDescription>
            Find answers to frequently asked questions about our premium spices and services.
          </DialogDescription>
        </DialogHeader>

        {/* Search */}
        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
          <Input
            placeholder="Search for help topics..."
            value={searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
            className="pl-10"
          />
        </div>

        {/* FAQ Categories */}
        <div className="space-y-6">
          {filteredFAQs.map((category, categoryIndex) => (
            <Card key={categoryIndex}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <category.icon className="w-5 h-5 text-primary" />
                  {category.category}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="space-y-2">
                  {category.questions.map((item, questionIndex) => (
                    <AccordionItem key={questionIndex} value={`${categoryIndex}-${questionIndex}`}>
                      <AccordionTrigger className="text-left hover:text-primary">
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground leading-relaxed">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredFAQs.length === 0 && (
          <div className="text-center py-8">
            <p className="text-muted-foreground">
              No results found for "{searchQuery}". Try different keywords or contact our support team.
            </p>
          </div>
        )}

        <div className="mt-6 p-4 bg-secondary/20 rounded-lg">
          <p className="text-sm text-muted-foreground text-center">
            Can't find what you're looking for? 
            <span className="text-primary font-medium"> Contact our support team for personalized assistance.</span>
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};