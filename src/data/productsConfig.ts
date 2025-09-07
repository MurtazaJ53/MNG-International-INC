// Easy Product Management Configuration
// To add/edit products, simply modify this file. No code changes needed!

import { Product } from "@/components/ProductCard";
import turmericImage from "@/assets/turmeric.jpg";
import garamMasalaImage from "@/assets/garam-masala.jpg";
import onionSpicesImage from "@/assets/onion-spices.jpg";

/**
 * PRODUCT MANAGEMENT GUIDE
 * 
 * To add a new product:
 * 1. Add product image to src/assets/ folder
 * 2. Import the image at the top of this file
 * 3. Add a new product object to the products array below
 * 
 * To edit a product:
 * 1. Find the product in the array below
 * 2. Modify any field (name, description, price, etc.)
 * 
 * To remove a product:
 * 1. Delete the product object from the array
 * 
 * IMPORTANT: Always test the site after making changes!
 */

export const productsConfig: Product[] = [
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
    image: turmericImage, // CHANGE THIS: Add proper cumin image
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
    image: garamMasalaImage, // CHANGE THIS: Add proper cardamom image
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
    image: onionSpicesImage, // CHANGE THIS: Add proper chana masala image
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

  // ADD NEW PRODUCTS HERE:
  /*
  {
    id: "7", // Increment the ID
    name: "Your Product Name",
    description: "Product description...",
    image: yourImageImport, // Import the image at the top first
    category: "Single Spice" | "Spice Blend" | "Dried Vegetables", // Choose category
    weight: "Weight with unit",
    price: "£X.XX",
    amazonUrl: "https://amazon.co.uk/your-product",
    benefits: [
      "Benefit 1",
      "Benefit 2",
      "Benefit 3"
    ],
    origin: "Region, India"
  }
  */
];

// Export products for use in the application
export const products = productsConfig;