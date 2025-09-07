import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Award, Leaf, Globe } from "lucide-react";

const certificates = [
  {
    icon: Shield,
    title: "Food Safety Certified",
    description: "HACCP and ISO 22000 certified facilities ensuring the highest food safety standards",
    badge: "ISO 22000"
  },
  {
    icon: Award,
    title: "Quality Assurance",
    description: "Rigorous quality control processes with third-party testing and verification",
    badge: "Lab Tested"
  },
  {
    icon: Leaf,
    title: "Organic Certification",
    description: "Many of our products are certified organic, free from pesticides and chemicals",
    badge: "Organic"
  },
  {
    icon: Globe,
    title: "Export Licensed",
    description: "Fully licensed for international export with proper documentation and traceability",
    badge: "Export Ready"
  }
];

export const CertificatesSection = () => {
  return (
    <section id="certificates" className="py-20 bg-gradient-to-b from-background to-secondary/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our <span className="text-primary">Certifications</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We maintain the highest standards of quality, safety, and authenticity in all our products. 
            Our certifications ensure you receive only the best spices for your culinary needs.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certificates.map((cert, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-border hover:border-primary/30">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                  <cert.icon className="w-8 h-8 text-primary" />
                </div>
                <Badge variant="secondary" className="mx-auto mb-2">
                  {cert.badge}
                </Badge>
                <CardTitle className="text-lg group-hover:text-primary transition-colors">
                  {cert.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-sm leading-relaxed">
                  {cert.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            All certifications are regularly audited and updated to maintain compliance with international standards.
          </p>
        </div>
      </div>
    </section>
  );
};