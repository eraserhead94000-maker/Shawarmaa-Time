import React from 'react';
import { ArrowRight, Sparkles, Clock, Flame, ShieldCheck, MapPin } from 'lucide-react';
import { HERO_IMAGE, OFFICIAL_LOGO } from '../data/menuData';
import { Language } from '../types';

interface HeroProps {
  language: Language;
  onOrderClick: () => void;
  onExploreMenu: () => void;
}

export const Hero: React.FC<HeroProps> = ({ language, onOrderClick, onExploreMenu }) => {
  const isNl = language === 'nl';

  return (
    <section className="relative overflow-hidden pt-4 pb-8 sm:pt-6 sm:pb-12 md:py-16 bg-gradient-to-b from-[#FFFBEF] via-[#FFFDF7] to-[#FFFDF7]">
      {/* Decorative background glows */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[320px] sm:w-[600px] lg:w-[900px] h-[300px] sm:h-[500px] bg-amber-200/25 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute -top-20 -right-20 w-48 sm:w-80 h-48 sm:h-80 bg-rose-200/30 rounded-full blur-2xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-8 items-center">
          
          {/* Left Column */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-4 sm:space-y-6">
            
            {/* Tilted Sticker Badge with Real Restaurant Location */}
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-amber-100 border border-amber-300 shadow-xs -rotate-1 hover:rotate-0 transition-transform">
              <span className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-[#E53935] animate-ping" />
              <span className="text-[11px] sm:text-xs lg:text-sm font-extrabold uppercase tracking-wide text-amber-950 flex items-center gap-1.5">
                <Flame className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#E53935]" />
                <span>{isNl ? 'Vers van het spit in Venlo' : 'Fresh from the rotisserie in Venlo'}</span>
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-1.5 sm:space-y-2">
              <h1 className="text-2xl min-[360px]:text-3xl min-[410px]:text-4xl sm:text-5xl lg:text-7xl font-black text-stone-900 tracking-tight leading-[1.1] sm:leading-[1.05]">
                {isNl ? (
                  <>
                    SYRISCH BROOD. <br />
                    <span className="text-[#E53935] underline decoration-amber-400 decoration-wavy decoration-4">
                      KIP SHAWARMA.
                    </span> <br />
                    ECHT SMAAKVOL.
                  </>
                ) : (
                  <>
                    SYRIAN BREAD. <br />
                    <span className="text-[#E53935] underline decoration-amber-400 decoration-wavy decoration-4">
                      CHICKEN SHAWARMA.
                    </span> <br />
                    BURSTING WITH TASTE.
                  </>
                )}
              </h1>
              <p className="text-xs min-[360px]:text-sm sm:text-lg lg:text-xl text-stone-600 font-medium max-w-xl pt-1 sm:pt-2 leading-relaxed">
                {isNl
                  ? 'Dagelijks vers gekruide kip shawarma, krokante broodjes, royale Arabische schotels en de befaamde Kapsalon Time met huisgemaakte knoflooksaus. Bestel nu direct online!'
                  : 'Freshly seasoned chicken shawarma daily, crispy wraps, generous Arabic platters, and our signature Kapsalon Time with housemade garlic sauce. Order online now!'}
              </p>
            </div>

            {/* On-site Order CTAs with rounded Domino's energy */}
            <div className="flex flex-col min-[360px]:flex-row items-stretch min-[360px]:items-center gap-2.5 sm:gap-4 pt-1 w-full sm:w-auto">
              <button
                onClick={onOrderClick}
                className="btn-press flex-1 sm:flex-none flex items-center justify-center gap-2 min-h-[48px] px-5 sm:px-8 py-3 sm:py-4 rounded-full bg-[#E53935] hover:bg-[#D32F2F] text-white text-xs min-[360px]:text-sm sm:text-base lg:text-lg font-black tracking-wide shadow-lg shadow-rose-600/30 transition-all hover:scale-102 cursor-pointer text-center"
              >
                <span>{isNl ? 'BESTEL ONLINE' : 'ORDER ONLINE'}</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>

              <button
                onClick={onExploreMenu}
                className="btn-press flex-1 sm:flex-none flex items-center justify-center gap-1.5 sm:gap-2 min-h-[48px] px-4 sm:px-7 py-3 sm:py-4 rounded-full bg-white hover:bg-stone-50 text-stone-900 border-2 border-stone-800 text-xs min-[360px]:text-sm sm:text-base font-extrabold shadow-sm transition-all hover:scale-102 cursor-pointer"
              >
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-amber-500" />
                <span>{isNl ? 'BEKIJK MENUKAART' : 'EXPLORE MENU'}</span>
              </button>
            </div>

            {/* Trust Strips */}
            <div className="grid grid-cols-3 gap-1.5 sm:gap-6 pt-3 sm:pt-4 w-full border-t border-amber-200/80">
              <div className="flex flex-col">
                <div className="flex items-center gap-1 sm:gap-1.5 text-stone-900 font-black text-xs sm:text-base lg:text-lg">
                  <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#E53935] shrink-0" />
                  <span className="truncate">VENLO</span>
                </div>
                <span className="text-[10px] sm:text-xs font-semibold text-stone-500 truncate">Puteanusstr. 24</span>
              </div>

              <div className="flex flex-col">
                <div className="flex items-center gap-1 sm:gap-1.5 text-stone-900 font-black text-xs sm:text-base lg:text-lg">
                  <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-600 shrink-0" />
                  <span className="truncate">100% HALAL</span>
                </div>
                <span className="text-[10px] sm:text-xs font-semibold text-stone-500 truncate">
                  {isNl ? 'Kip & Mezza' : 'Chicken & Mezza'}
                </span>
              </div>

              <div className="flex flex-col">
                <div className="flex items-center gap-1 sm:gap-1.5 text-stone-900 font-black text-xs sm:text-base lg:text-lg">
                  <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-600 shrink-0" />
                  <span className="truncate">15–25 MIN</span>
                </div>
                <span className="text-[10px] sm:text-xs font-semibold text-stone-500 truncate">
                  {isNl ? 'Afhalen / Bezorgen' : 'Pickup / Delivery'}
                </span>
              </div>
            </div>

          </div>

          {/* Right Column: Photography with Authentic Logo Badge */}
          <div className="lg:col-span-5 relative mt-2 sm:mt-0">
            
            {/* Main Rounded Image Container */}
            <div className="relative mx-auto rounded-3xl sm:rounded-[2.5rem] overflow-hidden shadow-xl sm:shadow-2xl shadow-amber-900/15 border-2 sm:border-4 border-white bg-white group">
              <img
                src={HERO_IMAGE}
                alt="Arabische Shawarma Schotel met friet en knoflooksaus"
                referrerPolicy="no-referrer"
                className="w-full h-52 sm:h-72 lg:h-[440px] object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-stone-950/20 to-transparent pointer-events-none" />

              {/* In-image caption */}
              <div className="absolute bottom-2.5 left-2.5 right-2.5 sm:bottom-5 sm:left-5 sm:right-5 text-white">
                <div className="inline-block px-2 sm:px-3 py-0.5 sm:py-1 rounded-full bg-[#E53935] text-[9px] sm:text-[11px] font-black uppercase tracking-wider mb-1">
                  {isNl ? 'Favoriet van de kaart' : 'House Favorite'}
                </div>
                <h3 className="text-base sm:text-2xl font-black drop-shadow-md">
                  Arabische Shawarma Menu
                </h3>
                <p className="hidden sm:block text-xs text-stone-200 font-medium">
                  {isNl
                    ? 'Syrische shawarma gesneden in stukjes, geserveerd met friet en diverse sausjes.'
                    : 'Syrian shawarma cut into bite-sized pieces, served with golden fries and dipping sauces.'}
                </p>
              </div>
            </div>

            {/* Official Logo Floating Badge - Top Left */}
            <div className="absolute -top-2 sm:-top-5 left-1 sm:-left-6 bg-white p-1 sm:p-2 rounded-xl sm:rounded-2xl shadow-lg sm:shadow-2xl border-2 border-amber-300 -rotate-3 hover:rotate-0 transition-transform">
              <img
                src={OFFICIAL_LOGO}
                alt="Shawarma Time Official Logo"
                className="w-14 min-[360px]:w-16 sm:w-24 lg:w-28 h-auto object-contain rounded-lg sm:rounded-xl"
              />
            </div>

            {/* Quality Badge - Bottom Right */}
            <div className="absolute -bottom-2 sm:-bottom-5 right-1 sm:-right-5 bg-stone-900 text-white px-2.5 sm:px-5 py-1 sm:py-3 rounded-xl sm:rounded-2xl shadow-lg sm:shadow-2xl font-black text-[10px] sm:text-xs lg:text-sm rotate-2 border-2 border-amber-300 flex items-center gap-1.5 sm:gap-2 pointer-events-none">
              <div className="w-5 h-5 sm:w-8 sm:h-8 rounded-full bg-[#E53935] flex items-center justify-center font-black text-white text-[9px] sm:text-xs shrink-0">
                ★ 4.8
              </div>
              <div>
                <p className="text-[9px] sm:text-xs text-amber-300 uppercase tracking-wider font-extrabold">AUTHENTIEK SYRISCH</p>
                <p className="text-[11px] sm:text-sm font-black text-white">Shawarma Time Venlo</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
