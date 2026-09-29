export interface Product {
  id: string;
  slug: string;
  name: string;
  sanskritName?: string;
  tagline: string;
  netQuantity: string;
  price: number;
  currency: string;
  image: string;
  aspectRatio: string;
  imageAlt: string;
  shortDescription: string;
  introduction: string;
  keyIngredients: {
    commonName: string;
    botanicalName: string;
    partUsed: string;
    note?: string;
  }[];
  traditionalContext: string;
  suggestedUsage: string;
  storageInfo: string;
  additionalNotes?: string;
}

export interface BrandPrinciple {
  title: string;
  description: string;
  subtext?: string;
}

export interface NavItem {
  label: string;
  href: string;
}
