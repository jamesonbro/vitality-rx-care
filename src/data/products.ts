// VitalityRx Product Database
// Includes ED medications with detailed information, pricing, and features

export interface Product {
  id: number;
  name: string;
  description: string;
  brand: string;
  dosageOptions: string[];
  quantity: string;
  price: number;
  discountedPrice: number;
  savings: string;
  couponAvailable: boolean;
  subscriptionPrice: number;
  imageUrl: string;
  howItWorks: string;
  rating: number;
  reviews: number;
  category: 'ed' | 'libido' | 'other';
  activeIngredient: string;
  onsetTime: string;
  duration: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Sildenafil (Generic Viagra)",
    description: "A PDE5 inhibitor that helps achieve and maintain an erection by increasing blood flow. Works in 11–60 minutes, lasts 3–5 hours. Ideal for on-demand use. Side effects: Headache, flushing, nasal congestion.",
    brand: "Generic",
    dosageOptions: ["25mg", "50mg", "100mg"],
    quantity: "30 tablets",
    price: 2.00,
    discountedPrice: 11.86,
    savings: "Up to 80% off retail",
    couponAvailable: true,
    subscriptionPrice: 18.00,
    imageUrl: "/api/placeholder/300/200",
    howItWorks: "Blocks PDE5 enzyme to prolong nitric oxide effects.",
    rating: 4.5,
    reviews: 1200,
    category: 'ed',
    activeIngredient: 'Sildenafil Citrate',
    onsetTime: '30-60 minutes',
    duration: '3-5 hours'
  },
  {
    id: 2,
    name: "Tadalafil (Generic Cialis)",
    description: "Longer-lasting PDE5 inhibitor for ED and prostate enlargement. Starts in 14–45 minutes, lasts up to 36 hours. Can be taken daily or as needed. Side effects: Muscle pain, indigestion.",
    brand: "Generic",
    dosageOptions: ["2.5mg", "5mg", "10mg", "20mg"],
    quantity: "30 tablets",
    price: 2.00,
    discountedPrice: 18.00,
    savings: "Save nearly 70%",
    couponAvailable: true,
    subscriptionPrice: 25.00,
    imageUrl: "/api/placeholder/300/200",
    howItWorks: "Extends erection window; food doesn't affect it.",
    rating: 4.7,
    reviews: 950,
    category: 'ed',
    activeIngredient: 'Tadalafil',
    onsetTime: '15-45 minutes',
    duration: 'Up to 36 hours'
  },
  {
    id: 3,
    name: "Avanafil (Stendra)",
    description: "Fast-acting ED treatment that works in 15 minutes or less. Not affected by food. Effective for 4–6 hours. Newer option with fewer interactions. Side effects: Abnormal vision, back pain.",
    brand: "Brand",
    dosageOptions: ["50mg", "100mg", "200mg"],
    quantity: "6 tablets",
    price: 162.40,
    discountedPrice: 150.00,
    savings: "Up to 10% off",
    couponAvailable: true,
    subscriptionPrice: 50.00,
    imageUrl: "/api/placeholder/300/200",
    howItWorks: "Rapid onset PDE5 inhibition for spontaneous use.",
    rating: 4.2,
    reviews: 300,
    category: 'ed',
    activeIngredient: 'Avanafil',
    onsetTime: '15-30 minutes',
    duration: '4-6 hours'
  },
  {
    id: 4,
    name: "Vardenafil (Generic Levitra/Staxyn)",
    description: "Dissolvable tablet for quick absorption. Works in 14 minutes, lasts 4–5 hours. Avoid with meals. Side effects: Nasal congestion, flushing.",
    brand: "Generic",
    dosageOptions: ["5mg", "10mg", "20mg"],
    quantity: "30 tablets",
    price: 8.60,
    discountedPrice: 20.00,
    savings: "Save 60%",
    couponAvailable: true,
    subscriptionPrice: 30.00,
    imageUrl: "/api/placeholder/300/200",
    howItWorks: "Enhances blood flow; orodispersible for convenience.",
    rating: 4.3,
    reviews: 500,
    category: 'ed',
    activeIngredient: 'Vardenafil HCl',
    onsetTime: '25-60 minutes',
    duration: '4-5 hours'
  }
];

export const featuredProducts = products.slice(0, 3);

export const getProductById = (id: number): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category === category);
};