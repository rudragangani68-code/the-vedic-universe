import ashwagandhaImage from '../assets/images/Ashwagandha for website.png';
import moringaImage from '../assets/images/Moringa for website.png';
import triphalaImage from '../assets/images/Triphala for website.png';
import { Product } from '../types';

/**
 * =========================================================================
 * THE VEDIC UNIVERSE — CENTRAL PRODUCT DATA REPOSITORY
 * =========================================================================
 * Product information is based on the currently supplied product packaging
 * and product information materials.
 * =========================================================================
 */

export const PRODUCTS: Product[] = [
  {
    id: 'ashwagandha-powder',
    slug: 'ashwagandha-powder',
    name: 'The Vedic Universe Ashwagandha Powder',
    sanskritName: 'Ashwagandha',
    tagline: 'Natural Support for a Balanced You',
    netQuantity: '200 g',
    price: 199,
    currency: '₹',
    image: ashwagandhaImage,
    aspectRatio: '1:1',
    imageAlt:
      'The Vedic Universe Ashwagandha Powder 200g packaging with Ashwagandha roots and powder',
    shortDescription:
      '100% pure Ashwagandha root powder presented for simple everyday wellness.',
    introduction:
      'The Vedic Universe Ashwagandha Powder is presented as a pure Ashwagandha root powder for everyday wellness. The product material describes it as a natural support for a balanced you.',
    keyIngredients: [
      {
        commonName: 'Ashwagandha Root Powder',
        botanicalName: '',
        partUsed: 'Root',
        note: '100% pure Ashwagandha root powder.'
      }
    ],
    traditionalContext:
      'The supplied product material presents Ashwagandha in the context of traditional Ayurvedic wellness and highlights its use for stress and anxiety support, energy and stamina, immunity, sleep quality, and holistic rejuvenation.',
    suggestedUsage:
      'Take 1 teaspoon (5–7 g) daily. The supplied product material shows mixing the powder with warm or cold milk, water, or taking it with honey.',
    storageInfo: '',
    additionalNotes:
      'The product material states: No preservatives, No artificial colours, No additives.'
  },

  {
    id: 'moringa-powder',
    slug: 'moringa-powder',
    name: 'The Vedic Universe Moringa Powder',
    sanskritName: 'Moringa Powder',
    tagline: 'Nature’s Nutrient-Rich Leaf',
    netQuantity: '200 g',
    price: 199,
    currency: '₹',
    image: moringaImage,
    aspectRatio: '1:1',
    imageAlt:
      'The Vedic Universe Moringa Powder 200g packaging with Moringa leaves and powder',
    shortDescription:
      'Moringa leaf powder presented as a simple plant-based addition to everyday nutrition.',
    introduction:
      'The Vedic Universe Moringa Powder is presented as a plant-based Moringa leaf powder for everyday nutrition. The product material highlights naturally occurring nutrients including Vitamin A, Vitamin C, Vitamin B1, B2 and B6, potassium, calcium, iron and magnesium.',
    keyIngredients: [
      {
        commonName: 'Moringa Leaf Powder',
        botanicalName: '',
        partUsed: 'Leaf',
        note: 'Pure plant-based Moringa powder.'
      }
    ],
    traditionalContext:
      'The supplied product material presents Moringa as a botanical rooted in Ayurveda and positioned for daily nutrition.',
    suggestedUsage:
      'Take 1 teaspoon (2–3 g) daily. The supplied product material shows mixing it with water, milk or a smoothie, adding it to soup or juice, or mixing it into cooked vegetables.',
    storageInfo: '',
    additionalNotes:
      'The product material highlights Vitamin A, Vitamin C, Vitamin B1, B2 and B6, potassium, calcium, iron and magnesium.'
  },

  {
    id: 'triphala-powder',
    slug: 'triphala-powder',
    name: 'The Vedic Universe Triphala Powder',
    sanskritName: 'Amla • Harad • Baheda',
    tagline: 'Ancient Ayurvedic Wisdom for Everyday Wellness',
    netQuantity: '100 g',
    price: 149,
    currency: '₹',
    image: triphalaImage,
    aspectRatio: '1:1',
    imageAlt:
      'The Vedic Universe Triphala Powder 100g packaging with Amla, Harad, Baheda and Triphala powder',
    shortDescription:
      'A traditional three-fruit Ayurvedic powder made from Amla, Harad and Baheda.',
    introduction:
      'The Vedic Universe Triphala Powder combines three ingredients shown in the supplied product material: Amla, Harad and Baheda. The product is presented as an Ayurvedic wellness preparation for everyday use.',
    keyIngredients: [
      {
        commonName: 'Amla Powder',
        botanicalName: '',
        partUsed: 'Fruit',
        note: 'Part of the Triphala three-fruit combination.'
      },
      {
        commonName: 'Harad Powder',
        botanicalName: '',
        partUsed: 'Fruit',
        note: 'Part of the Triphala three-fruit combination.'
      },
      {
        commonName: 'Baheda Powder',
        botanicalName: '',
        partUsed: 'Fruit',
        note: 'Part of the Triphala three-fruit combination.'
      }
    ],
    traditionalContext:
      'The supplied product material presents Triphala as an ancient Ayurvedic wellness preparation and lists traditional benefits including support for stress and anxiety, energy and stamina, immunity, sleep quality, and holistic rejuvenation.',
    suggestedUsage:
      'Take 1 teaspoon (3–5 g). The supplied product material shows mixing it with warm or cool milk, water, or honey. It also presents morning and evening use as options.',
    storageInfo: '',
    additionalNotes:
      'The supplied product material identifies the preparation as a combination of Amla, Harad and Baheda.'
  }
];