import React, { useState, useEffect, useRef } from 'react';
import { X, Phone, ShoppingBag, ChevronRight, Sparkles, Flame, ShieldCheck } from 'lucide-react';
import { OFFICIAL_LOGO, OFFICIAL_STORE, CATEGORIES, MENU_ITEMS } from '../data/menuData';
import { Language, CategoryId } from '../types';

interface NavbarProps {
  language: Language;
  onToggleLanguage: (lang: Language) => void;
  basketCount: number;
  onOpenBasket: () => void;
  onOrderClick: () => void;
  onSelectCategory?: (category: CategoryId) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  language,
  onToggleLanguage,
  basketCount,
  onOpenBasket,
  onOrderClick,
  onSelectCategory,
}) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [cartBounced, setCartBounced] = useState(false);
  const prevCountRef = useRef(basketCount);
  const drawerRef = useRef<HTMLDivElement>(null);

  const isNl = language === 'nl';

  // Animate basket button briefly when items are added
  useEffect(() => {
    if (basketCount > prevCountRef.current) {
      setCartBounced(true);
      const timer = setTimeout(() => setCartBounced(false), 700);
      return () => clearTimeout(timer);
    }
    prevCountRef.current = basketCount;
  }, [basketCount]);

  // Handle ESC key and lock body scrolling when drawer is open
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setDrawerOpen(false);
      }
    };

    if (drawerOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [drawerOpen]);

  // Navigate to category
  const handleCategoryClick = (catId: CategoryId) => {
    setDrawerOpen(false);
    if (onSelectCategory) {
      onSelectCategory(catId);
    } else {
      const menuEl = document.getElementById('menu');
      menuEl?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Navigate to section
  const handleSectionClick = (sectionId: string) => {
    setDrawerOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className="sticky top-0 z-40 bg-[#FFFDF7]/95 backdrop-blur-md border-b border-amber-200/80 shadow-xs transition-all">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-14 sm:h-16 lg:h-20 flex items-center justify-between gap-2 sm:gap-4">
          
          {/* Zone 1: Mobile Hamburger (Top-Left) & Authentic Official Logo */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* 1. Mobile Three-line Hamburger Menu Button in Top-Left Corner */}
            <button
              type="button"
              onClick={() => setDrawerOpen(true)}
              className="lg:hidden flex items-center justify-center w-10 h-10 min-w-10 min-h-10 rounded-2xl bg-amber-50 hover:bg-amber-100 text-stone-900 border border-amber-200/90 shadow-2xs transition-all duration-200 active:scale-95 cursor-pointer"
              aria-label={isNl ? 'Navigatiemenu openen' : 'Open navigation menu'}
              aria-expanded={drawerOpen}
              aria-controls="mobile-nav-drawer"
            >
              <div className="w-4.5 h-3.5 flex flex-col justify-between" aria-hidden="true">
                <span className="w-full h-0.5 bg-stone-900 rounded-full transition-transform duration-200"></span>
                <span className="w-full h-0.5 bg-stone-900 rounded-full transition-opacity duration-200"></span>
                <span className="w-full h-0.5 bg-stone-900 rounded-full transition-transform duration-200"></span>
              </div>
            </button>

            {/* Authentic Logo container */}
            <a
              href="#top"
              className="group flex items-center gap-1.5 sm:gap-3 text-stone-900 whitespace-nowrap shrink-0 rounded-2xl focus-visible:outline-[#E53935]"
              title="Shawarma Time Venlo"
            >
              <div className="h-9 w-11 min-[360px]:w-13 sm:h-12 sm:w-16 lg:h-14 lg:w-22 rounded-xl sm:rounded-2xl bg-white border-2 border-amber-200/90 shadow-xs flex items-center justify-center p-0.5 sm:p-1 group-hover:scale-105 transition-transform duration-300 overflow-hidden shrink-0">
                <img
                  src={OFFICIAL_LOGO}
                  alt="Shawarma Time - Authentic Official Logo"
                  className="h-full w-full object-contain"
                />
              </div>

              <div className="flex flex-col min-w-0">
                <span className="text-sm min-[360px]:text-base sm:text-xl lg:text-2xl font-black tracking-tight text-stone-900 leading-none">
                  SHAWARMA <span className="text-[#E53935]">TIME</span>
                </span>
                <span className="hidden min-[380px]:block text-[9px] sm:text-[11px] font-bold text-amber-700 tracking-wide uppercase mt-0.5 truncate">
                  Venlo • Puteanusstraat 24
                </span>
              </div>
            </a>
          </div>

          {/* Zone 2: Desktop Navigation Links (Preserved on Desktop, Hidden on Mobile) */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-bold text-stone-700">
            <a
              href="#menu"
              className="hover:text-[#E53935] transition-colors whitespace-nowrap shrink-0 py-1 border-b-2 border-transparent hover:border-[#E53935]"
            >
              {isNl ? 'Menukaart' : 'Menu'}
            </a>
            <a
              href="#arabi-platters"
              className="hover:text-[#E53935] transition-colors whitespace-nowrap shrink-0 py-1 border-b-2 border-transparent hover:border-[#E53935]"
            >
              {isNl ? "Arabische Menu's" : 'Arabic Platters'}
            </a>
            <a
              href="#deals"
              className="hover:text-[#E53935] transition-colors whitespace-nowrap shrink-0 py-1 border-b-2 border-transparent hover:border-[#E53935]"
            >
              {isNl ? 'Combi Deals' : 'Combi Deals'}
            </a>
            <a
              href="#story"
              className="hover:text-[#E53935] transition-colors whitespace-nowrap shrink-0 py-1 border-b-2 border-transparent hover:border-[#E53935]"
            >
              {isNl ? 'Ons Verhaal' : 'Our Story'}
            </a>
            <a
              href="#locations"
              className="hover:text-[#E53935] transition-colors whitespace-nowrap shrink-0 py-1 border-b-2 border-transparent hover:border-[#E53935]"
            >
              {isNl ? 'Openingstijden & Locatie' : 'Hours & Location'}
            </a>
          </nav>

          {/* Zone 3: Language Switcher, Quick Call, Cart & Order CTA */}
          <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
            
            {/* Visible NL | EN Language Switcher */}
            <div className="flex items-center p-0.5 sm:p-1 rounded-full bg-stone-100 border border-stone-200 text-[11px] sm:text-xs font-black shadow-inner">
              <button
                type="button"
                onClick={() => onToggleLanguage('nl')}
                className={`px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full transition-all duration-200 cursor-pointer ${
                  isNl
                    ? 'bg-[#E53935] text-white shadow-xs'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
                title="Nederlands"
              >
                NL
              </button>
              <span className="text-stone-300 text-[9px] sm:text-[10px] px-0.5">|</span>
              <button
                type="button"
                onClick={() => onToggleLanguage('en')}
                className={`px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full transition-all duration-200 cursor-pointer ${
                  !isNl
                    ? 'bg-[#E53935] text-white shadow-xs'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
                title="English"
              >
                EN
              </button>
            </div>

            {/* Quick Call Button (Desktop) */}
            <a
              href={`tel:${OFFICIAL_STORE.phone.replace(/\s+/g, '')}`}
              className="hidden xl:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-amber-50 hover:bg-amber-100 text-stone-900 font-extrabold text-xs border border-amber-300 transition-colors duration-200"
              title="Bel restaurant"
            >
              <Phone className="w-3.5 h-3.5 text-[#E53935]" />
              <span>077 785 4192</span>
            </a>

            {/* Easily accessible shopping cart in top-right corner */}
            <button
              type="button"
              onClick={onOpenBasket}
              className={`relative flex items-center justify-center w-10 h-10 min-w-10 min-h-10 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-900 transition-all duration-200 active:scale-95 border border-stone-200 shadow-xs cursor-pointer ${
                cartBounced ? 'scale-110 ring-4 ring-rose-500/30 bg-rose-50' : ''
              }`}
              aria-label={isNl ? 'Winkelmand bekijken' : 'View Basket'}
            >
              <ShoppingBag className="w-4.5 h-4.5 sm:w-5 sm:h-5 text-stone-800" />
              {basketCount > 0 && (
                <span
                  className={`absolute -top-1 -right-1 flex items-center justify-center min-w-5 h-5 px-1 rounded-full bg-[#E53935] text-white text-[10px] sm:text-xs font-black shadow-md transition-transform duration-200 ${
                    cartBounced ? 'scale-125' : ''
                  }`}
                >
                  {basketCount}
                </span>
              )}
            </button>

            {/* Primary Action Button - On-Site Ordering (Desktop/Tablet) */}
            <button
              type="button"
              onClick={onOrderClick}
              className="hidden sm:inline-flex items-center gap-1.5 px-4 lg:px-5 py-2 sm:py-2.5 rounded-full bg-[#E53935] hover:bg-[#D32F2F] text-white font-extrabold text-xs sm:text-sm tracking-wide shadow-md shadow-rose-600/25 transition-all duration-200 hover:scale-102 active:scale-95 whitespace-nowrap shrink-0 cursor-pointer"
            >
              <span>{isNl ? 'BESTEL ONLINE' : 'ORDER ONLINE'}</span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Sliding Navigation Drawer from Left */}
      <div
        id="mobile-nav-drawer"
        className={`fixed inset-0 z-50 lg:hidden ${
          drawerOpen ? 'pointer-events-auto' : 'pointer-events-none'
        }`}
        role="dialog"
        aria-modal="true"
        aria-label={isNl ? 'Navigatiemenu' : 'Navigation Menu'}
      >
        {/* Subtle Dark Overlay Backdrop */}
        <div
          className={`fixed inset-0 bg-stone-950/60 backdrop-blur-xs transition-opacity duration-300 ease-out ${
            drawerOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setDrawerOpen(false)}
          aria-hidden="true"
        />

        {/* Polished Sliding Drawer Panel */}
        <div
          ref={drawerRef}
          className={`relative w-[85%] max-w-[340px] sm:max-w-sm h-full bg-[#FFFDF7] shadow-2xl flex flex-col border-r border-amber-200 transform-gpu transition-transform duration-300 ease-out z-10 ${
            drawerOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          {/* Drawer Header with Logo & Close Button */}
          <div className="flex items-center justify-between p-4 border-b border-amber-200/80 bg-white">
            <div className="flex items-center gap-2.5">
              <div className="h-10 w-12 rounded-xl bg-white border border-amber-200 shadow-2xs flex items-center justify-center p-0.5 overflow-hidden">
                <img
                  src={OFFICIAL_LOGO}
                  alt="Shawarma Time Logo"
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-base font-black tracking-tight text-stone-900 leading-none">
                  SHAWARMA <span className="text-[#E53935]">TIME</span>
                </span>
                <span className="text-[10px] font-bold text-amber-700 tracking-wide uppercase mt-0.5">
                  Venlo • Puteanusstraat 24
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setDrawerOpen(false)}
              className="flex items-center justify-center w-9 h-9 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-700 hover:text-stone-950 transition-colors active:scale-95 cursor-pointer"
              aria-label={isNl ? 'Menu sluiten' : 'Close menu'}
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Drawer Scrollable Content */}
          <div className="flex-1 overflow-y-auto px-4 py-4 space-y-6">
            
            {/* Quick Basket Banner in Drawer */}
            <div className="p-3.5 rounded-2xl bg-rose-50 border border-rose-200 text-stone-900 flex items-center justify-between shadow-2xs">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-xl bg-[#E53935] text-white">
                  <ShoppingBag className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-black text-stone-900">
                    {isNl ? 'Uw Winkelmand' : 'Your Basket'}
                  </div>
                  <div className="text-[11px] text-stone-500 font-medium">
                    {basketCount === 0
                      ? isNl ? 'Nog leeg' : 'Empty'
                      : isNl ? `${basketCount} ${basketCount === 1 ? 'gerecht' : 'gerechten'}` : `${basketCount} items`}
                  </div>
                </div>
              </div>
              <button
                type="button"
                onClick={() => {
                  setDrawerOpen(false);
                  onOpenBasket();
                }}
                className="px-3 py-1.5 rounded-full bg-[#E53935] hover:bg-[#D32F2F] text-white text-xs font-extrabold transition-all active:scale-95 cursor-pointer shadow-xs"
              >
                {isNl ? 'Bekijken' : 'View'}
              </button>
            </div>

            {/* Section 1: All 5 Verified Menu Categories */}
            <div className="space-y-2">
              <div className="flex items-center justify-between px-1">
                <span className="text-[11px] font-black uppercase tracking-wider text-stone-500">
                  {isNl ? 'Menukaart Categorieën' : 'Menu Categories'}
                </span>
                <span className="text-[10px] font-bold text-amber-700 bg-amber-100 px-2 py-0.5 rounded-full">
                  5 {isNl ? 'Delen' : 'Parts'}
                </span>
              </div>

              <div className="space-y-1.5">
                {CATEGORIES.map((cat, idx) => {
                  const itemCount = MENU_ITEMS.filter((i) => i.category === cat.id).length;
                  const catName = isNl ? cat.nameNl : cat.nameEn;

                  return (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() => handleCategoryClick(cat.id)}
                      className="group flex items-center justify-between w-full px-3.5 py-3 rounded-2xl bg-amber-50/70 hover:bg-amber-100 text-stone-900 border border-amber-200/70 transition-all duration-200 active:scale-98 text-left cursor-pointer"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-xl p-1.5 rounded-xl bg-white shadow-2xs group-hover:scale-110 transition-transform duration-200">
                          {cat.icon}
                        </span>
                        <div>
                          <div className="text-xs font-black text-stone-900 group-hover:text-[#E53935] transition-colors">
                            {idx + 1}. {catName}
                          </div>
                          <div className="text-[10px] text-stone-500 font-medium">
                            {isNl ? `${itemCount} gerechten` : `${itemCount} items`}
                          </div>
                        </div>
                      </div>
                      <ChevronRight className="w-4 h-4 text-stone-400 group-hover:text-[#E53935] group-hover:translate-x-0.5 transition-all" />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Section 2: Website Quick Links */}
            <div className="space-y-2 pt-2 border-t border-amber-200/60">
              <div className="px-1">
                <span className="text-[11px] font-black uppercase tracking-wider text-stone-500">
                  {isNl ? 'Navigatie' : 'Navigation'}
                </span>
              </div>

              <div className="space-y-1">
                <button
                  type="button"
                  onClick={() => handleSectionClick('menu')}
                  className="flex items-center justify-between w-full min-h-[44px] px-3 rounded-xl font-extrabold text-xs text-stone-800 hover:bg-amber-100/70 hover:text-[#E53935] transition-colors text-left cursor-pointer"
                >
                  <span className="flex items-center gap-2">
                    <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                    <span>{isNl ? 'Volledige Menukaart' : 'Full Menu'}</span>
                  </span>
                  <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
                </button>

                <button
                  type="button"
                  onClick={() => handleSectionClick('arabi-platters')}
                  className="flex items-center justify-between w-full min-h-[44px] px-3 rounded-xl font-extrabold text-xs text-stone-800 hover:bg-amber-100/70 hover:text-[#E53935] transition-colors text-left cursor-pointer"
                >
                  <span className="flex items-center gap-2">
                    <Flame className="w-3.5 h-3.5 text-[#E53935]" />
                    <span>{isNl ? "Arabische Schotels & Kapsalon" : 'Arabic Platters & Kapsalon'}</span>
                  </span>
                  <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
                </button>

                <button
                  type="button"
                  onClick={() => handleSectionClick('deals')}
                  className="flex items-center justify-between w-full min-h-[44px] px-3 rounded-xl font-extrabold text-xs text-stone-800 hover:bg-amber-100/70 hover:text-[#E53935] transition-colors text-left cursor-pointer"
                >
                  <span className="flex items-center gap-2">
                    <span className="text-xs">🏷️</span>
                    <span>{isNl ? 'Combi Deals & Acties' : 'Combi Deals & Offers'}</span>
                  </span>
                  <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
                </button>

                <button
                  type="button"
                  onClick={() => handleSectionClick('story')}
                  className="flex items-center justify-between w-full min-h-[44px] px-3 rounded-xl font-extrabold text-xs text-stone-800 hover:bg-amber-100/70 hover:text-[#E53935] transition-colors text-left cursor-pointer"
                >
                  <span className="flex items-center gap-2">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    <span>{isNl ? 'Ons Verhaal & Kwaliteit' : 'Our Story & Quality'}</span>
                  </span>
                  <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
                </button>

                <button
                  type="button"
                  onClick={() => handleSectionClick('locations')}
                  className="flex items-center justify-between w-full min-h-[44px] px-3 rounded-xl font-extrabold text-xs text-stone-800 hover:bg-amber-100/70 hover:text-[#E53935] transition-colors text-left cursor-pointer"
                >
                  <span className="flex items-center gap-2">
                    <span className="text-xs">📍</span>
                    <span>{isNl ? 'Openingstijden & Locatie Venlo' : 'Hours & Location Venlo'}</span>
                  </span>
                  <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
                </button>
              </div>
            </div>

          </div>

          {/* Drawer Footer with Language & Direct Call */}
          <div className="p-4 border-t border-amber-200/80 bg-stone-50 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-black text-stone-600 uppercase tracking-wider">
                {isNl ? 'Taal / Language' : 'Language'}
              </span>
              <div className="flex items-center p-0.5 rounded-full bg-stone-200 border border-stone-300 text-xs font-black">
                <button
                  type="button"
                  onClick={() => onToggleLanguage('nl')}
                  className={`px-3 py-1 rounded-full transition-all duration-200 cursor-pointer ${
                    isNl ? 'bg-[#E53935] text-white shadow-xs' : 'text-stone-700'
                  }`}
                >
                  NL
                </button>
                <button
                  type="button"
                  onClick={() => onToggleLanguage('en')}
                  className={`px-3 py-1 rounded-full transition-all duration-200 cursor-pointer ${
                    !isNl ? 'bg-[#E53935] text-white shadow-xs' : 'text-stone-700'
                  }`}
                >
                  EN
                </button>
              </div>
            </div>

            <a
              href={`tel:${OFFICIAL_STORE.phone.replace(/\s+/g, '')}`}
              className="flex items-center justify-center gap-2 min-h-[44px] py-2.5 rounded-2xl bg-white hover:bg-stone-100 text-stone-900 font-extrabold text-xs border border-stone-200 shadow-2xs transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#E53935]" />
              <span>{isNl ? 'Bel Restaurant (077 785 4192)' : 'Call Restaurant (077 785 4192)'}</span>
            </a>

            <div className="text-center text-[10px] text-stone-400 font-bold uppercase tracking-wide">
              100% Halal • Dagelijks Vers Bereid
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
