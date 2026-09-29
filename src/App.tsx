/** 
 * @license 
 * SPDX-License-Identifier: Apache-2.0 
 */ 
 
import React, { useState, useEffect } from 'react'; 
import { Header } from './components/Header'; 
import { Hero } from './components/Hero'; 
import { BrandIntro } from './components/BrandIntro'; 
import { ProductGrid } from './components/ProductGrid'; 
import { ProductDetailModal } from './components/ProductDetailModal'; 
import { AyurvedaSection } from './components/AyurvedaSection'; 
import { BrandValues } from './components/BrandValues'; 
import { BrandStory } from './components/BrandStory'; 
import { CTASection } from './components/CTASection'; 
import { Footer } from './components/Footer'; 
import { SearchModal } from './components/SearchModal'; 
import { EnquiryModal } from './components/EnquiryModal'; 
import { MobileMenuDrawer } from './components/MobileMenuDrawer'; 
import { ImageGuidanceModal } from './components/ImageGuidanceModal'; 
import { PRODUCTS } from './data/products'; 
import { Product } from './types'; 
import { SEO } from './components/SEO';
 
export default function App() { 
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null); 
  const [enquiryProduct, setEnquiryProduct] = useState<Product | null>(null); 
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false); 
  const [isSearchOpen, setIsSearchOpen] = useState(false); 
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); 
  const [isImageGuideOpen, setIsImageGuideOpen] = useState(false); 
  const [activeSection, setActiveSection] = useState('home'); 
 

  // Track active scroll section for subtle nav highlight 
  useEffect(() => { 
    const handleScroll = () => { 
      const sections = [ 
        'home', 
        'brand-intro', 
        'products', 
        'ayurveda', 
        'values', 
        'about', 
        'contact', 
      ]; 

      const scrollPosition = window.scrollY + 200; 
 
      for (const sectionId of sections) { 
        const element = document.getElementById(sectionId); 

        if (element) { 
          const top = element.offsetTop; 
          const height = element.offsetHeight; 

          if (
            scrollPosition >= top &&
            scrollPosition < top + height
          ) { 
            setActiveSection(sectionId); 
            break; 
          } 
        } 
      } 
    }; 
 
    window.addEventListener('scroll', handleScroll, { passive: true }); 

    return () => window.removeEventListener('scroll', handleScroll); 
  }, []); 
 

  const handleExploreClick = () => { 
    const productsEl = document.getElementById('products'); 

    if (productsEl) { 
      productsEl.scrollIntoView({ behavior: 'smooth' }); 
    } 
  }; 
 

  const handleViewProduct = (product: Product) => { 
    setSelectedProduct(product); 
  }; 
 

  const handleOpenEnquiryForProduct = (product: Product) => { 
    setSelectedProduct(null); 
    setEnquiryProduct(product); 
    setIsEnquiryOpen(true); 
  }; 
 

  const handleOpenGeneralContact = () => { 
    setEnquiryProduct(null); 
    setIsEnquiryOpen(true); 
  }; 
 

  return ( 
    <div className="min-h-screen flex flex-col bg-[#DDB477] text-[#560C05] font-sans antialiased"> 

      {/* SEO Structured Data */}
      <SEO />

      {/* Primary Header with subtle sub-navigation */} 
      <Header 
        onOpenMenu={() => setIsMobileMenuOpen(true)} 
        onOpenSearch={() => setIsSearchOpen(true)} 
        onOpenContact={handleOpenGeneralContact} 
        activeSection={activeSection} 
      /> 
 

      {/* Main Brand Content Layout */} 
      <main className="flex-1"> 

        {/* 1. Hero Section */} 
        <Hero onExploreClick={handleExploreClick} /> 
 

        {/* 2. Brand Introduction */} 
        <BrandIntro /> 
 

        {/* 3. Our Products Showcase (3-Column Desktop Grid) */} 
        <ProductGrid 
          products={PRODUCTS} 
          onViewProduct={handleViewProduct} 
        /> 
 

        {/* 4. The Wisdom of Ayurveda Editorial */} 
        <AyurvedaSection /> 
 

        {/* 5. Why The Vedic Universe (Guiding Principles) */} 
        <BrandValues /> 
 

        {/* 6. Brand Story ("The Vedic Universe") */} 
        <BrandStory /> 
 

        {/* 7. Call to Action Section */} 
        <CTASection onOpenContact={handleOpenGeneralContact} /> 

      </main> 
 

      {/* Minimal Sophisticated Footer */} 
      <Footer onOpenContact={handleOpenGeneralContact} /> 
 

      {/* Dedicated Product Detail View / Modal */} 
      <ProductDetailModal 
        product={selectedProduct} 
        onClose={() => setSelectedProduct(null)} 
        onEnquire={handleOpenEnquiryForProduct} 
      /> 
 

      {/* Search Overlay */} 
      <SearchModal 
        isOpen={isSearchOpen} 
        onClose={() => setIsSearchOpen(false)} 
        products={PRODUCTS} 
        onSelectProduct={handleViewProduct} 
      /> 
 

      {/* Product & General Enquiry Modal */} 
      <EnquiryModal 
        isOpen={isEnquiryOpen} 
        onClose={() => setIsEnquiryOpen(false)} 
        selectedProduct={enquiryProduct} 
      /> 
 

      {/* Mobile Drawer Navigation */} 
      <MobileMenuDrawer 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)} 
        onOpenContact={handleOpenGeneralContact} 
      /> 
 

      {/* Brand Owner Packaging Photo Replacement Guidance Modal */} 
      <ImageGuidanceModal 
        isOpen={isImageGuideOpen} 
        onClose={() => setIsImageGuideOpen(false)} 
      /> 

    </div> 
  ); 
}