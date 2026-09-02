import React, { useState, useEffect, useMemo } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Categories from './components/Categories';
import FeaturedCarousel from './components/FeaturedCarousel';
import CatalogToolbar from './components/CatalogToolbar';
import ProductGrid from './components/ProductGrid';
import CraftPillars from './components/CraftPillars';
import AboutSection from './components/AboutSection';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import QuickViewModal from './components/QuickViewModal';
import CartDrawer from './components/CartDrawer';
import WhatsAppFloat from './components/WhatsAppFloat';
import Toast from './components/Toast';

import { DRESS_CATALOG } from './data/products';

export default function App() {
  // Cart State (Persisted in localStorage)
  const [cartItems, setCartItems] = useState(() => {
    try {
      const saved = localStorage.getItem('zinzu_cart_react');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // UI State
  const [currentFilter, setCurrentFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('default');
  const [quickViewDress, setQuickViewDress] = useState(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [toastMsg, setToastMsg] = useState(null);

  // Save cart to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('zinzu_cart_react', JSON.stringify(cartItems));
    } catch (e) {
      console.error(e);
    }
  }, [cartItems]);

  const showToast = (msg) => {
    setToastMsg(msg);
    setTimeout(() => setToastMsg(null), 3000);
  };

  const handleAddToCart = (dress, size = '') => {
    let defaultSize = 'M';
    if (dress.sizeRange) {
      const first = dress.sizeRange.split('–')[0].trim();
      if (first) defaultSize = first;
    }
    const itemSize = size || defaultSize;
    const cartKey = `${dress.id}_${itemSize}`;

    setCartItems((prev) => {
      const idx = prev.findIndex((item) => item.cartKey === cartKey);
      if (idx > -1) {
        const updated = [...prev];
        updated[idx].qty += 1;
        return updated;
      } else {
        return [
          ...prev,
          {
            cartKey,
            id: dress.id,
            name: dress.name,
            price: dress.price,
            image: dress.image,
            size: itemSize,
            qty: 1
          }
        ];
      }
    });

    showToast(`Added "${dress.name}" (${itemSize}) to your bag! ✨`);
  };

  const handleUpdateQuantity = (cartKey, change) => {
    setCartItems((prev) => {
      return prev
        .map((item) => {
          if (item.cartKey === cartKey) {
            const newQty = item.qty + change;
            return newQty > 0 ? { ...item, qty: newQty } : null;
          }
          return item;
        })
        .filter(Boolean);
    });
  };

  const handleRemoveItem = (cartKey) => {
    setCartItems((prev) => prev.filter((item) => item.cartKey !== cartKey));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  // Filtered & Sorted Products
  const filteredProducts = useMemo(() => {
    return DRESS_CATALOG.filter((dress) => {
      const matchesFilter =
        currentFilter === 'all' || dress.category === currentFilter;
      const matchesSearch =
        searchQuery === '' ||
        dress.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        dress.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        dress.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesFilter && matchesSearch;
    }).sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      if (sortBy === 'name') return a.name.localeCompare(b.name);
      return 0;
    });
  }, [currentFilter, searchQuery, sortBy]);

  const featuredProducts = useMemo(() => {
    return DRESS_CATALOG.filter((dress) => dress.isFeatured);
  }, []);

  const totalCartCount = cartItems.reduce((acc, i) => acc + i.qty, 0);

  return (
    <div className="app-container">
      <Header
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onSelectCategory={setCurrentFilter}
      />

      <main>
        <Hero />
        <Marquee />
        <Categories onSelectCategory={setCurrentFilter} />

        <section id="products" className="products-section section">
          <div className="container">
            <div className="section-header text-center">
              <span className="section-tag">Curated Boutique Catalog</span>
              <h2 className="section-title">Handcrafted Dresses & Co-ord Sets</h2>
              <p className="section-subtitle">
                Explore our complete collection of traditional ethnic wear & modern casual co-ord sets
              </p>
            </div>

            <FeaturedCarousel
              featuredProducts={featuredProducts}
              onQuickView={setQuickViewDress}
              onAddToCart={handleAddToCart}
            />

            <CatalogToolbar
              currentFilter={currentFilter}
              onFilterChange={setCurrentFilter}
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
              sortBy={sortBy}
              onSortChange={setSortBy}
            />

            <ProductGrid
              products={filteredProducts}
              onQuickView={setQuickViewDress}
              onAddToCart={handleAddToCart}
              onResetFilters={() => {
                setCurrentFilter('all');
                setSearchQuery('');
                setSortBy('default');
              }}
            />
          </div>
        </section>

        <CraftPillars />
        <AboutSection />
        <Testimonials />
        <Gallery />
        <ContactSection />
      </main>

      <Footer onSelectCategory={setCurrentFilter} />

      <QuickViewModal
        dress={quickViewDress}
        onClose={() => setQuickViewDress(null)}
        onAddToCart={handleAddToCart}
      />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      <WhatsAppFloat />
      <Toast message={toastMsg} />
    </div>
  );
}
