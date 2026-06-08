export type ViewType =
  | 'home'
  | 'about'
  | 'products'
  | 'water-filter'
  | 'recipes'
  | 'opportunity'
  | 'support'
  | 'contact'
  | 'inquire';

export interface ProductCategory {
  id: string;
  name: string;
  slug: string;
  description: string;
  imageUrl: string;
  itemCount: number;
}

export interface ProductItem {
  id: string;
  name: string;
  categorySlug: string;
  shortDesc: string;
  description: string;
  imageUrl: string;
  features: string[];
  specifications: Record<string, string>;
  suitableFor: string[];
  benefits: string[];
  isBestSeller?: boolean;
}

export interface RecipeItem {
  id: string;
  name: string;
  category: string;
  imageUrl: string;
  description: string;
  prepTime: string;
  cookTime: string;
  difficulty: 'Easy' | 'Medium' | 'Advanced';
  servings: string;
  ingredients: string[];
  instructions: string[];
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface InquiryFormData {
  fullName: string;
  phone: string;
  whatsApp: string;
  email: string;
  city: string;
  interestedProduct: string;
  inquiryType:
    | 'Buy Product'
    | 'Product Demonstration'
    | 'Water Filter Inquiry'
    | 'Replacement Parts'
    | 'Business Opportunity'
    | 'After-Sales Support';
  message: string;
  preferredContact: 'Phone' | 'WhatsApp' | 'Email';
}
