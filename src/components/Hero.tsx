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
    <section className="relative overflow-hidden pt-6 pb-14 md:py-16 bg-gradient-to-b from-[#FFFBEF] via-[#FFFDF7] to-[#FFFDF7]">
      {/* Decorative background glows */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-amber-200/25 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute -top-20 -right-20 w-80 h-80 bg-rose-200/30 rounded-full blur-2xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            
            {/* Tilted Sticker Badge with Real Restaurant Location */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100 border border-amber-300 shadow-xs -rotate-1 hover:rotate-0 transition-transform">
              <span className="w-2.5 h-2.5 rounded-full bg-[#E53935] animate-ping" />
              <span className="text-xs sm:text-sm font-extrabold uppercase tracking-wide text-amber-950 flex items-center gap-1.5">
                <Flame className="w-4 h-4 text-[#E53935]" />
                <span>{isNl ? 'Vers van het spit in Venlo' : 'Fresh from the rotisserie in Venlo'}</span>
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-stone-900 tracking-tight leading-[1.05]">
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
              <p className="text-lg sm:text-xl text-stone-600 font-medium max-w-xl pt-2 leading-relaxed">
                {isNl
                  ? 'Dagelijks vers gekruide kip shawarma, krokante broodjes, royale Arabische schotels en de befaamde Kapsalon Time met huisgemaakte knoflooksaus. Bestel nu direct online!'
                  : 'Freshly seasoned chicken shawarma daily, crispy wraps, generous Arabic platters, and our signature Kapsalon Time with housemade garlic sauce. Order online now!'}
              </p>
            </div>

            {/* On-site Order CTAs with rounded Domino's energy */}
            <div className="flex flex-wrap items-center gap-4 pt-2 w-full sm:w-auto">
              <button
                onClick={onOrderClick}
                className="btn-press flex-1 sm:flex-none flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#E53935] hover:bg-[#D32F2F] text-white text-base sm:text-lg font-black tracking-wide shadow-lg shadow-rose-600/30 transition-all hover:scale-102 cursor-pointer text-center"
              >
                <span>{isNl ? 'BESTEL ONLINE' : 'ORDER ONLINE'}</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <button
                onClick={onExploreMenu}
                className="btn-press flex-1 sm:flex-none flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-white hover:bg-stone-50 text-stone-900 border-2 border-stone-800 text-base font-extrabold shadow-sm transition-all hover:scale-102 cursor-pointer"
              >
                <Sparkles className="w-5 h-5 text-amber-500" />
                <span>{isNl ? 'BEKIJK MENUKAART' : 'EXPLORE MENU'}</span>
              </button>
            </div>

            {/* Trust Strips */}
            <div className="grid grid-cols-3 gap-3 sm:gap-6 pt-4 w-full border-t border-amber-200/80">
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5 text-stone-900 font-black text-base sm:text-lg">
                  <MapPin className="w-4 h-4 text-[#E53935]" />
                  <span>VENLO</span>
                </div>
                <span className="text-xs font-semibold text-stone-500">Puteanusstraat 24</span>
              </div>

              <div className="flex flex-col">
                <div className="flex items-center gap-1.5 text-stone-900 font-black text-base sm:text-lg">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>100% HALAL</span>
                </div>
                <span className="text-xs font-semibold text-stone-500">
                  {isNl ? 'Kip, Rund & Mezza' : 'Chicken, Beef & Mezza'}
                </span>
              </div>

              <div className="flex flex-col">
                <div className="flex items-center gap-1.5 text-stone-900 font-black text-base sm:text-lg">
                  <Clock className="w-4 h-4 text-amber-600" />
                  <span>15–25 MIN</span>
                </div>
                <span className="text-xs font-semibold text-stone-500">
                  {isNl ? 'Afhalen & Bezorgen' : 'Pickup & Delivery'}
                </span>
              </div>
            </div>

          </div>

          {/* Right Column: Photography with Authentic Logo Badge */}
          <div className="lg:col-span-5 relative">
            
            {/* Main Rounded Image Container */}
            <div className="relative mx-auto rounded-[2.5rem] overflow-hidden shadow-2xl shadow-amber-900/15 border-4 border-white bg-white group">
              <img
                src={HERO_IMAGE}
                alt="Arabische Shawarma Schotel met friet en knoflooksaus"
                referrerPolicy="no-referrer"
                className="w-full h-[360px] sm:h-[440px] object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/60 via-transparent to-transparent pointer-events-none" />

              {/* In-image caption */}
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <div className="inline-block px-3 py-1 rounded-full bg-[#E53935] text-[11px] font-black uppercase tracking-wider mb-1">
                  {isNl ? 'Favoriet van de kaart' : 'House Favorite'}
                </div>
                <h3 className="text-xl sm:text-2xl font-black drop-shadow-md">
                  Arabische Shawarma Menu
                </h3>
                <p className="text-xs text-stone-200 font-medium">
                  {isNl
                    ? 'Syrische shawarma gesneden in stukjes, geserveerd met friet en diverse sausjes.'
                    : 'Syrian shawarma cut into bite-sized pieces, served with golden fries and dipping sauces.'}
                </p>
              </div>
            </div>

            {/* Official Logo Floating Badge - Top Left */}
            <div className="absolute -top-5 -left-4 sm:-left-6 bg-white p-2 rounded-2xl shadow-2xl border-2 border-amber-300 -rotate-3 hover:rotate-0 transition-transform">
              <img
                src={OFFICIAL_LOGO}
                alt="Shawarma Time Official Logo"
                className="w-24 sm:w-28 h-auto object-contain rounded-xl"
              />
            </div>

            {/* Quality Badge - Bottom Right */}
            <div className="absolute -bottom-5 -right-3 sm:-right-5 bg-stone-900 text-white px-5 py-3 rounded-2xl shadow-2xl font-black text-xs sm:text-sm rotate-2 border-2 border-amber-300 flex items-center gap-2 pointer-events-none">
              <div className="w-8 h-8 rounded-full bg-[#E53935] flex items-center justify-center font-black text-white text-xs">
                ★ 4.8
              </div>
              <div>
                <p className="text-xs text-amber-300 uppercase tracking-wider font-extrabold">AUTHENTIEK SYRISCH</p>
                <p className="text-sm font-black text-white">Shawarma Time Venlo</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
