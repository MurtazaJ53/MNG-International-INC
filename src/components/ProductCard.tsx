import { Button } from "@/components/ui/enhanced-button";
import { Badge } from "@/components/ui/badge";

export interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  category: string;
  weight: string;
  price: string;
  amazonUrl: string;
  benefits: string[];
  origin: string;
}

interface ProductCardProps {
  product: Product;
  onClick: () => void;
}

export const ProductCard = ({ product, onClick }: ProductCardProps) => {
  return (
    <div 
      className="group cursor-pointer bg-card rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-border hover:border-primary/30"
      onClick={onClick}
    >
      <div className="relative mb-4 overflow-hidden rounded-lg">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <Badge className="absolute top-2 right-2 bg-primary text-primary-foreground">
          {product.category}
        </Badge>
      </div>
      
      <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
        {product.name}
      </h3>
      
      <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
        {product.description}
      </p>
      
      <div className="flex items-center justify-between mb-4">
        <span className="text-spice-cumin font-medium">{product.weight}</span>
        <span className="text-lg font-bold text-primary">{product.price}</span>
      </div>
      
      <Button 
        variant="outline" 
        className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
        onClick={(e) => {
          e.stopPropagation();
          onClick();
        }}
      >
        View Details
      </Button>
    </div>
  );
};