import React, { useState } from 'react';
import { Menu as MenuIcon, X, Phone, ShoppingBag } from 'lucide-react';
import { OFFICIAL_LOGO, OFFICIAL_STORE } from '../data/menuData';
import { Language } from '../types';

interface NavbarProps {
  language: Language;
  onToggleLanguage: (lang: Language) => void;
  basketCount: number;
  onOpenBasket: () => void;
  onOrderClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  language,
  onToggleLanguage,
  basketCount,
  onOpenBasket,
  onOrderClick,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isNl = language === 'nl';

  return (
    <header className="sticky top-0 z-40 bg-[#FFFDF7]/95 backdrop-blur-md border-b border-amber-200/80 shadow-xs transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        
        {/* Zone 1: Authentic Official Shawarma Time Logo */}
        <a
          href="#top"
          className="group flex items-center gap-3 text-stone-900 whitespace-nowrap shrink-0 rounded-2xl focus-visible:outline-[#E53935]"
          title="Shawarma Time Venlo"
        >
          {/* Authentic Logo container with rounded styling */}
          <div className="h-14 w-20 sm:w-22 rounded-2xl bg-white border-2 border-amber-200/90 shadow-sm flex items-center justify-center p-1 group-hover:scale-105 transition-transform overflow-hidden">
            <img
              src={OFFICIAL_LOGO}
              alt="Shawarma Time - Authentic Official Logo"
              className="h-full w-full object-contain"
            />
          </div>

          <div className="flex flex-col">
            <span className="text-xl sm:text-2xl font-black tracking-tight text-stone-900 leading-none">
              SHAWARMA <span className="text-[#E53935]">TIME</span>
            </span>
            <span className="text-[11px] font-bold text-amber-700 tracking-wide uppercase mt-0.5">
              Venlo • Puteanusstraat 24
            </span>
          </div>
        </a>

        {/* Zone 2: Navigation Links */}
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

        {/* Zone 3: Language Switcher, Basket Icon & On-site Order Button */}
        <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
          
          {/* Visible NL | EN Language Switcher */}
          <div className="flex items-center p-1 rounded-full bg-stone-100 border border-stone-200 text-xs font-black shadow-inner">
            <button
              onClick={() => onToggleLanguage('nl')}
              className={`px-2.5 py-1 rounded-full transition-all cursor-pointer ${
                isNl
                  ? 'bg-[#E53935] text-white shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
              title="Nederlands"
            >
              NL
            </button>
            <span className="text-stone-300 text-[10px] px-0.5">|</span>
            <button
              onClick={() => onToggleLanguage('en')}
              className={`px-2.5 py-1 rounded-full transition-all cursor-pointer ${
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
            className="hidden xl:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-amber-50 hover:bg-amber-100 text-stone-900 font-extrabold text-xs border border-amber-300 transition-colors"
            title="Bel restaurant"
          >
            <Phone className="w-3.5 h-3.5 text-[#E53935]" />
            <span>077 785 4192</span>
          </a>

          {/* Dedicated Working Basket Drawer Trigger */}
          <button
            onClick={onOpenBasket}
            className="relative flex items-center justify-center w-11 h-11 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-900 transition-all active:scale-95 border border-stone-200 shadow-xs cursor-pointer"
            aria-label={isNl ? 'Winkelmand bekijken' : 'View Basket'}
          >
            <ShoppingBag className="w-5 h-5 text-stone-800" />
            {basketCount > 0 && (
              <span className="absolute -top-1 -right-1 flex items-center justify-center min-w-5 h-5 px-1 rounded-full bg-[#E53935] text-white text-xs font-black shadow-md animate-bounce">
                {basketCount}
              </span>
            )}
          </button>

          {/* Primary Action Button - On-Site Ordering */}
          <button
            onClick={onOrderClick}
            className="hidden sm:inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-[#E53935] hover:bg-[#D32F2F] text-white font-extrabold text-xs sm:text-sm tracking-wide shadow-md shadow-rose-600/25 transition-all hover:scale-102 active:scale-95 whitespace-nowrap shrink-0 cursor-pointer"
          >
            <span>{isNl ? 'BESTEL ONLINE' : 'ORDER ONLINE'}</span>
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden flex items-center justify-center w-10 h-10 rounded-full bg-stone-100 text-stone-800 hover:bg-stone-200 cursor-pointer"
            aria-label="Navigatiemenu openen"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FFFDF7] border-b border-amber-200 px-6 py-4 space-y-3 animate-in slide-in-from-top-2">
          <div className="flex items-center justify-between pb-2 border-b border-amber-100">
            <span className="text-xs font-extrabold text-stone-500 uppercase tracking-wider">
              {isNl ? 'Taalkeuze' : 'Language'}
            </span>
            <div className="flex items-center p-1 rounded-full bg-stone-100 border border-stone-200 text-xs font-black">
              <button
                onClick={() => onToggleLanguage('nl')}
                className={`px-3 py-1 rounded-full ${isNl ? 'bg-[#E53935] text-white' : 'text-stone-600'}`}
              >
                Nederlands (NL)
              </button>
              <button
                onClick={() => onToggleLanguage('en')}
                className={`px-3 py-1 rounded-full ${!isNl ? 'bg-[#E53935] text-white' : 'text-stone-600'}`}
              >
                English (EN)
              </button>
            </div>
          </div>

          <a
            href="#menu"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-base font-bold text-stone-800 hover:text-[#E53935]"
          >
            {isNl ? 'Menukaart' : 'Menu'}
          </a>
          <a
            href="#arabi-platters"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-base font-bold text-stone-800 hover:text-[#E53935]"
          >
            {isNl ? "Arabische Menu's" : 'Arabic Platters'}
          </a>
          <a
            href="#deals"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-base font-bold text-stone-800 hover:text-[#E53935]"
          >
            {isNl ? 'Combi Deals' : 'Combi Deals'}
          </a>
          <a
            href="#story"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-base font-bold text-stone-800 hover:text-[#E53935]"
          >
            {isNl ? 'Ons Verhaal' : 'Our Story'}
          </a>
          <a
            href="#locations"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-base font-bold text-stone-800 hover:text-[#E53935]"
          >
            {isNl ? 'Openingstijden & Locatie Venlo' : 'Hours & Location Venlo'}
          </a>

          <div className="pt-3 border-t border-stone-200 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBasket();
              }}
              className="flex items-center justify-center gap-2 py-3 rounded-full bg-[#E53935] text-white font-black text-sm shadow-md cursor-pointer"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>{isNl ? `WINKELMAND BEKIJKEN (${basketCount})` : `VIEW BASKET (${basketCount})`}</span>
            </button>
            <a
              href={`tel:${OFFICIAL_STORE.phone.replace(/\s+/g, '')}`}
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 py-2.5 rounded-full bg-stone-100 text-stone-800 font-bold text-xs border border-stone-200"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-600" />
              <span>{isNl ? 'Bel Restaurant (077 785 4192)' : 'Call Restaurant (077 785 4192)'}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
