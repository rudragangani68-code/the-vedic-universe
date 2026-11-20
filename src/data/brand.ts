import heroVedicProductsImg from '../assets/images/Hero.png';
import acharyaNitanshuImg from '../assets/images/Acharyaimage.png';
import { BrandPrinciple, NavItem } from '../types';

export const BRAND_TAGLINE =
  'Inspired by Ancient Scriptures, Perfected for Modern Life.';

export const NAV_ITEMS: NavItem[] = [
  { label: 'HOME', href: '#home' },
  { label: 'PHILOSOPHY', href: '#brand-intro' },
  { label: 'OUR PRODUCTS', href: '#products' },
  { label: 'AYURVEDA', href: '#ayurveda' },
  { label: 'WHY US', href: '#values' },
  { label: 'ABOUT THE FOUNDER', href: '#about' },
  { label: 'CONTACT', href: '#contact' },
];

export const BRAND_PRINCIPLES: BrandPrinciple[] = [
  {
    title: 'Rooted in Tradition',
    description:
      'Our formulations draw directly from foundational Indian Ayurvedic knowledge and centuries of empirical botanical understanding, honoring timeless methods of preparation.',
    subtext: 'Authentic classical lineage'
  },
  {
    title: 'Thoughtfully Crafted',
    description:
      'We curate simple, unadulterated single and traditional triple-herb botanicals milled to fine grade without superfluous binders, synthetic aromas, or artificial additions.',
    subtext: 'Purity in every grain'
  },
  {
    title: 'Simple Everyday Wellness',
    description:
      'Wellness should neither be cumbersome nor intimidating. We present unpretentious powdered herbs that easily integrate into your morning warm cup or evening ritual.',
    subtext: 'Effortless daily harmony'
  },
  {
    title: 'Made for Modern Living',
    description:
      'Thoughtfully packaged, transparently documented, and calibrated for contemporary lifestyles, helping bridge ancient contemplative wisdom into the cadence of modern urban life.',
    subtext: 'Harmonious balance'
  }
];

export const BRAND_STORY_DATA = {
  heading: 'Aacharya Nitanshu Angira',
  subheading: 'The Founder Behind The Vedic Universe',
  image: acharyaNitanshuImg,
  imageAlt:
    'Aacharya Nitanshu Angira, founder of The Vedic Universe, seated in saffron robes in a warm scholarly setting',

  paragraphs: [
    'The Vedic Universe was born from a desire to bring India’s traditional knowledge closer to everyday life. At the heart of this vision is Aacharya Nitanshu Angira, whose studies in Jyotisha and Sanskrit deepened his engagement with India’s wider knowledge traditions.',

    'He saw a growing distance between people and the traditional knowledge that once formed a natural part of everyday life. Ayurveda, herbs and botanicals are often known by name, yet the knowledge surrounding their traditional use, preparation and purpose can become increasingly unfamiliar.',

    'The intention behind The Vedic Universe is therefore simple: to preserve the connection with this knowledge while presenting traditional botanicals in a thoughtful and accessible way. The focus is on respecting what has been passed down rather than adding unnecessary complexity to it.',

    'The Vedic Universe represents the beginning of a larger vision — one in which India’s traditional knowledge can continue to be understood, respected and experienced by a new generation.'
  ]
};

export const AYURVEDA_SECTION_DATA = {
  heading: 'The Wisdom of Ayurveda',

  intro:
    'Ayurveda offers a traditional way of understanding life, wellbeing, daily habits and the relationship between the individual and the world around them. For The Vedic Universe, it provides the knowledge context through which India’s botanical traditions can be understood and appreciated.',

  pillars: [
    {
      title: 'Tridoshic Balance',
      sanskrit: 'Vata • Pitta • Kapha',
      description:
        'Ayurvedic thought describes Vata, Pitta and Kapha as three fundamental principles used to understand different patterns within the body and mind. Balance and individual constitution are central to this traditional framework.'
    },
    {
      title: 'Dinacharya',
      sanskrit: 'Daily Rhythm & Routine',
      description:
        'Dinacharya refers to the traditional understanding of daily routines and habits. It reflects the Ayurvedic emphasis on living with awareness of regular rhythms, nourishment, rest and everyday discipline.'
    },
    {
      title: 'Ahara & Rasayana',
      sanskrit: 'Food, Botanicals & Nourishment',
      description:
        'Ayurveda places importance on ahara, or nourishment, and also describes traditional approaches involving botanicals and rasayana. These ideas form part of the broader knowledge tradition surrounding food, herbs and wellbeing.'
    }
  ]
};

export const CONTACT_INFO = {
  email: 'universethevedic@gmail.com',
  phone: '94108 44414',
  address:
    'Khasra No. 341, Chipyana Buzurg, Opp. Kutte Wala Mandir, Greater Noida, Gautambuddha Nagar, Uttar Pradesh – 201009',
  instagramHandle: '@aayurveda_tvu',
  instagramUrl: 'https://www.instagram.com/aayurveda_tvu/?hl=en',
};

export const HERO_ASSETS = {
  image: heroVedicProductsImg,
  alt:
    'The Vedic Universe Ashwagandha Powder, Moringa Powder, and Triphala Powder arranged in a premium Ayurvedic botanical setting'
};