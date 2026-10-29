/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PromoStrip } from './components/PromoStrip';
import { MenuSection } from './components/MenuSection';
import { ArabiPlattersSection } from './components/ArabiPlattersSection';
import { DealsSection } from './components/DealsSection';
import { StorySection } from './components/StorySection';
import { LocationsSection } from './components/LocationsSection';
import { Footer } from './components/Footer';
import { ProductDetailModal } from './components/ProductDetailModal';
import { CartDrawer } from './components/CartDrawer';
import { CheckoutModal } from './components/CheckoutModal';
import { OrderConfirmationModal } from './components/OrderConfirmationModal';
import { MobileStickyBar } from './components/MobileStickyBar';
import { MENU_ITEMS, OFFICIAL_STORE } from './data/menuData';
import { MenuItem, ProductVariant, CartItem, CustomerInfo, PlacedOrder, StoreLocation, Language } from './types';
import { submitOrderToRestaurant } from './services/orderService';

const CART_STORAGE_KEY = 'shawarma_time_active_cart_v2';

export default function App() {
  // Language state (Dutch default as requested)
  const [language, setLanguage] = useState<Language>('nl');

  // Selected store and order type for service indication
  const [orderType, setOrderType] = useState<'pickup' | 'delivery'>('pickup');
  const [selectedStore] = useState<StoreLocation>(OFFICIAL_STORE);

  // Shopping Basket state with local persistence across categories and language changes
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem(CART_STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Persist cart
  useEffect(() => {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
    } catch (err) {
      console.error('Could not save cart to local storage', err);
    }
  }, [cart]);

  // Modal & Drawer visibility
  const [isBasketOpen, setIsBasketOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [selectedItemForDetail, setSelectedItemForDetail] = useState<MenuItem | null>(null);

  // Placed order confirmation
  const [placedOrder, setPlacedOrder] = useState<PlacedOrder | null>(null);
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);

  // Quick Add for items without variants
  const handleQuickAddToCart = (item: MenuItem) => {
    const lineId = `${item.id}-default`;
    setCart((prev) => {
      const existing = prev.find((c) => c.id === lineId);
      if (existing) {
        return prev.map((c) =>
          c.id === lineId ? { ...c, quantity: c.quantity + 1 } : c
        );
      }
      const newItem: CartItem = {
        id: lineId,
        menuItemId: item.id,
        name: item.name,
        nameEn: item.nameEn,
        unitPrice: item.price,
        quantity: 1,
        image: item.image,
        category: item.category,
      };
      return [...prev, newItem];
    });
  };

  // Add item with specific variant/size from detail modal
  const handleAddWithVariant = (
    item: MenuItem,
    variant: ProductVariant | null,
    quantity: number,
    notes?: string
  ) => {
    const variantId = variant ? variant.id : 'default';
    const lineId = `${item.id}-${variantId}${notes ? `-${notes.slice(0, 10)}` : ''}`;
    const unitPrice = variant ? variant.price : item.price;

    setCart((prev) => {
      const existing = prev.find((c) => c.id === lineId);
      if (existing) {
        return prev.map((c) =>
          c.id === lineId ? { ...c, quantity: c.quantity + quantity } : c
        );
      }
      const newItem: CartItem = {
        id: lineId,
        menuItemId: item.id,
        name: item.name,
        nameEn: item.nameEn,
        variantId: variant?.id,
        variantNameNl: variant?.nameNl,
        variantNameEn: variant?.nameEn,
        unitPrice,
        quantity,
        image: item.image,
        category: item.category,
        notes,
      };
      return [...prev, newItem];
    });
  };

  const handleUpdateQuantity = (cartItemId: string, newQty: number) => {
    if (newQty <= 0) {
      handleRemoveItem(cartItemId);
    } else {
      setCart((prev) =>
        prev.map((item) =>
          item.id === cartItemId ? { ...item, quantity: newQty } : item
        )
      );
    }
  };

  const handleRemoveItem = (cartItemId: string) => {
    setCart((prev) => prev.filter((item) => item.id !== cartItemId));
  };

  const handleOpenDetail = (item: MenuItem) => {
    setSelectedItemForDetail(item);
    setIsDetailModalOpen(true);
  };

  const handleProceedToCheckout = () => {
    setIsBasketOpen(false);
    setIsCheckoutOpen(true);
  };

  const handleSubmitOrder = async (customer: CustomerInfo) => {
    const result = await submitOrderToRestaurant(customer, cart, orderType);
    if (result.success) {
      setPlacedOrder(result.order);
      setCart([]);
      setIsCheckoutOpen(false);
      setIsConfirmationOpen(true);
    }
  };

  const scrollToMenu = () => {
    const menuElement = document.getElementById('menu');
    menuElement?.scrollIntoView({ behavior: 'smooth' });
  };

  const totalBasketCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div id="top" className="min-h-screen bg-[#FFFDF7] flex flex-col font-sans selection:bg-[#E53935] selection:text-white">
      {/* 1. Header Navigation with Authentic Official Logo, Visible NL | EN Switcher & Basket */}
      <Navbar
        language={language}
        onToggleLanguage={setLanguage}
        basketCount={totalBasketCount}
        onOpenBasket={() => setIsBasketOpen(true)}
        onOrderClick={scrollToMenu}
      />

      {/* 2. Promo / Store Strip with Pickup vs Delivery toggle */}
      <PromoStrip
        orderType={orderType}
        setOrderType={setOrderType}
        selectedStore={selectedStore}
        language={language}
        onApplyDeal={() => {
          const deal = MENU_ITEMS.find((m) => m.id === 'deal-gerecht-drankje');
          if (deal) handleOpenDetail(deal);
        }}
      />

      <main className="flex-1 pb-24 md:pb-0">
        {/* 3. Hero Section */}
        <Hero
          language={language}
          onOrderClick={scrollToMenu}
          onExploreMenu={scrollToMenu}
        />

        {/* 4. Full Verified Official Menu with 5 Exact Categories, Distinct Side Dish Images & Working Add to Basket */}
        <MenuSection
          items={MENU_ITEMS}
          language={language}
          onSelectItem={handleOpenDetail}
          onQuickAddToCart={handleQuickAddToCart}
        />

        {/* 5. Arabische Schotels Spotlight */}
        <ArabiPlattersSection
          onSelectArabi={handleOpenDetail}
          arabiItems={MENU_ITEMS.filter((m) => m.category === 'maaltijden')}
          language={language}
        />

        {/* 6. Combi Deals Section */}
        <DealsSection
          onSelectDeal={handleOpenDetail}
          dealItems={MENU_ITEMS}
          language={language}
        />

        {/* 7. Craftsmanship Story Section */}
        <StorySection language={language} />

        {/* 8. Locations & Hours Section for Venlo */}
        <LocationsSection
          onStartOrder={scrollToMenu}
          language={language}
        />
      </main>

      {/* 9. Clean Footer with Authentic Logo */}
      <Footer language={language} />

      {/* 10. Floating Mobile Sticky Bar for Fast Basket Access and Menu Navigation */}
      <MobileStickyBar
        language={language}
        cart={cart}
        onOpenBasket={() => setIsBasketOpen(true)}
        onExploreMenu={scrollToMenu}
      />

      {/* 11. Product Selection Modal (Accurate variants, Live Price, Add to Basket) */}
      <ProductDetailModal
        item={selectedItemForDetail}
        isOpen={isDetailModalOpen}
        onClose={() => setIsDetailModalOpen(false)}
        onAddToCart={handleAddWithVariant}
        language={language}
      />

      {/* 12. Persistent Shopping Basket Drawer */}
      <CartDrawer
        isOpen={isBasketOpen}
        onClose={() => setIsBasketOpen(false)}
        cart={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        orderType={orderType}
        setOrderType={setOrderType}
        onProceedToCheckout={handleProceedToCheckout}
        language={language}
      />

      {/* 13. On-Site Checkout Modal (Validation, Customer Fields, Bestelling plaatsen) */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        cart={cart}
        orderType={orderType}
        setOrderType={setOrderType}
        onSubmitOrder={handleSubmitOrder}
        language={language}
      />

      {/* 14. Order Confirmation Modal with Real Ticket Number, WhatsApp Kitchen Dispatch & Tracking */}
      <OrderConfirmationModal
        order={placedOrder}
        isOpen={isConfirmationOpen}
        onClose={() => setIsConfirmationOpen(false)}
        language={language}
      />
    </div>
  );
}
