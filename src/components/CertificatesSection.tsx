import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/enhanced-button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Shield, Award, Leaf, Globe, Download, ExternalLink } from "lucide-react";

const certificates = [
  {
    icon: Shield,
    title: "Food Safety Certified",
    description: "HACCP and ISO 22000 certified facilities ensuring the highest food safety standards",
    badge: "ISO 22000",
    pdfUrl: "/certificates/iso-22000-certificate.pdf",
    pdfTitle: "ISO 22000 Food Safety Management Certificate"
  },
  {
    icon: Award,
    title: "Quality Assurance",
    description: "Rigorous quality control processes with third-party testing and verification",
    badge: "Lab Tested",
    pdfUrl: "/certificates/quality-assurance-report.pdf",
    pdfTitle: "Quality Assurance Test Reports"
  },
  {
    icon: Leaf,
    title: "Organic Certification",
    description: "Many of our products are certified organic, free from pesticides and chemicals",
    badge: "Organic",
    pdfUrl: "/certificates/organic-certification.pdf",
    pdfTitle: "Organic Products Certification"
  },
  {
    icon: Globe,
    title: "Export Licensed",
    description: "Fully licensed for international export with proper documentation and traceability",
    badge: "Export Ready",
    pdfUrl: "/certificates/export-license.pdf",
    pdfTitle: "International Export License"
  }
];

const CertificateViewer = ({ certificate }: { certificate: typeof certificates[0] }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm" className="gap-2 mt-3">
          <ExternalLink className="w-4 h-4" />
          View Certificate
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[900px] max-h-[90vh]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <certificate.icon className="w-5 h-5 text-primary" />
            {certificate.pdfTitle}
          </DialogTitle>
          <DialogDescription>
            Official certification document - {certificate.badge}
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-4">
          {/* PDF Embed */}
          <div className="border rounded-lg overflow-hidden" style={{ height: '500px' }}>
            <iframe
              src={certificate.pdfUrl}
              width="100%"
              height="100%"
              title={certificate.pdfTitle}
              className="border-0"
            />
          </div>
          
          {/* Download Option */}
          <div className="flex items-center justify-between p-4 bg-secondary/20 rounded-lg">
            <div>
              <p className="font-medium text-sm">Download Certificate</p>
              <p className="text-xs text-muted-foreground">
                Save this certificate for your records
              </p>
            </div>
            <Button asChild>
              <a
                href={certificate.pdfUrl}
                download
                className="gap-2"
              >
                <Download className="w-4 h-4" />
                Download PDF
              </a>
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

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
                <CardDescription className="text-center text-sm leading-relaxed mb-3">
                  {cert.description}
                </CardDescription>
                <div className="flex justify-center">
                  <CertificateViewer certificate={cert} />
                </div>
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