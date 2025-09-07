import { Product } from "@/components/ProductCard";
import turmericImage from "@/assets/turmeric.jpg";
import garamMasalaImage from "@/assets/garam-masala.jpg";
import onionSpicesImage from "@/assets/onion-spices.jpg";

export const products: Product[] = [
  {
    id: "1",
    name: "Premium Turmeric Powder",
    description: "Pure, golden turmeric powder with high curcumin content. Perfect for curries, golden milk, and health supplements. Known for its anti-inflammatory properties.",
    image: turmericImage,
    category: "Single Spice",
    weight: "500g",
    price: "£12.99",
    amazonUrl: "https://amazon.co.uk/turmeric-powder",
    benefits: [
      "High in curcumin with anti-inflammatory properties",
      "Rich in antioxidants",
      "Supports immune system health",
      "Natural pain relief properties"
    ],
    origin: "Kerala, India"
  },
  {
    id: "2",
    name: "Authentic Garam Masala",
    description: "Traditional blend of aromatic spices including cardamom, cinnamon, cloves, and bay leaves. Hand-ground for maximum flavor and freshness.",
    image: garamMasalaImage,
    category: "Spice Blend",
    weight: "250g",
    price: "£8.99",
    amazonUrl: "https://amazon.co.uk/garam-masala",
    benefits: [
      "Aids digestion",
      "Boosts metabolism",
      "Rich in antioxidants",
      "Authentic traditional recipe"
    ],
    origin: "Punjab, India"
  },
  {
    id: "3",
    name: "Dried Onion Flakes & Powder",
    description: "Premium dried onion flakes and powder combo pack. Perfect for instant flavor addition to soups, curries, and marinades without the tears.",
    image: onionSpicesImage,
    category: "Dried Vegetables",
    weight: "400g (200g each)",
    price: "£6.99",
    amazonUrl: "https://amazon.co.uk/onion-flakes-powder",
    benefits: [
      "Long shelf life",
      "Convenient cooking ingredient",
      "Rich in flavonoids",
      "No preparation needed"
    ],
    origin: "Maharashtra, India"
  },
  {
    id: "4",
    name: "Cumin Seeds (Jeera)",
    description: "Whole cumin seeds with distinctive earthy flavor. Essential for Indian, Middle Eastern, and Mexican cuisines. Perfect for tempering and grinding fresh.",
    image: turmericImage, // Placeholder - would need cumin image
    category: "Single Spice",
    weight: "300g",
    price: "£7.49",
    amazonUrl: "https://amazon.co.uk/cumin-seeds",
    benefits: [
      "Aids digestion",
      "Rich in iron",
      "Boosts immunity",
      "Helps regulate blood sugar"
    ],
    origin: "Gujarat, India"
  },
  {
    id: "5",
    name: "Cardamom Pods (Elaichi)",
    description: "Green cardamom pods with intense aromatic flavor. Perfect for teas, desserts, and rice dishes. Known as the 'Queen of Spices'.",
    image: garamMasalaImage, // Placeholder - would need cardamom image
    category: "Single Spice",
    weight: "100g",
    price: "£15.99",
    amazonUrl: "https://amazon.co.uk/cardamom-pods",
    benefits: [
      "Freshens breath naturally",
      "Aids digestion",
      "Rich in antioxidants",
      "Supports heart health"
    ],
    origin: "Idukki, India"
  },
  {
    id: "6",
    name: "Chana Masala Spice Mix",
    description: "Specially crafted spice blend for authentic chickpea curry. Contains coriander, cumin, garam masala, and dried mango powder for tangy flavor.",
    image: onionSpicesImage, // Placeholder - would need chana masala image
    category: "Spice Blend",
    weight: "200g",
    price: "£5.99",
    amazonUrl: "https://amazon.co.uk/chana-masala-mix",
    benefits: [
      "Perfect for protein-rich meals",
      "Authentic restaurant taste",
      "Easy to use blend",
      "Vegetarian friendly"
    ],
    origin: "Delhi, India"
  }
];