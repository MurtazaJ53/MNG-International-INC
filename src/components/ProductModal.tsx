import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/enhanced-button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, MapPin, Star } from "lucide-react";
import { Product } from "./ProductCard";

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ProductModal = ({ product, isOpen, onClose }: ProductModalProps) => {
  if (!product) return null;

  const handleAmazonClick = () => {
    window.open(product.amazonUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-primary mb-4">
            {product.name}
          </DialogTitle>
        </DialogHeader>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="relative rounded-lg overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 object-cover"
              />
              <Badge className="absolute top-3 right-3 bg-primary text-primary-foreground">
                {product.category}
              </Badge>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1 text-spice-cumin">
                <MapPin className="w-4 h-4" />
                <span className="text-sm font-medium">{product.origin}</span>
              </div>
              <div className="text-lg font-bold text-primary">{product.price}</div>
            </div>
          </div>
          
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-foreground mb-2">Description</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {product.description}
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-foreground mb-2">Weight</h4>
              <p className="text-spice-cumin font-medium">{product.weight}</p>
            </div>
            
            {product.benefits.length > 0 && (
              <div>
                <h4 className="font-semibold text-foreground mb-2">Health Benefits</h4>
                <ul className="space-y-1">
                  {product.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Star className="w-3 h-3 text-primary mt-1 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            <Button
              variant="amazon"
              size="lg"
              onClick={handleAmazonClick}
              className="w-full mt-6"
            >
              <ExternalLink className="w-5 h-5 mr-2" />
              Buy on Amazon
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};