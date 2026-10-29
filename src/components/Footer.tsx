import React from 'react';
import { ShieldCheck, MapPin, Phone, ArrowRight, Utensils } from 'lucide-react';
import { OFFICIAL_LOGO, OFFICIAL_STORE } from '../data/menuData';
import { Language } from '../types';

interface FooterProps {
  language: Language;
}

export const Footer: React.FC<FooterProps> = ({ language }) => {
  const isNl = language === 'nl';

  return (
    <footer className="bg-stone-950 text-stone-300 pt-10 sm:pt-16 pb-8 sm:pb-12 border-t-4 border-[#E53935]">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-10 pb-8 sm:pb-12 border-b border-stone-800">
          
          {/* Brand Col with Authentic Official Logo */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-14 w-20 rounded-2xl bg-white p-1 flex items-center justify-center border border-amber-200 overflow-hidden">
                <img
                  src={OFFICIAL_LOGO}
                  alt="Shawarma Time Official Logo"
                  className="h-full w-full object-contain"
                />
              </div>
              <div>
                <span className="text-xl font-black text-white tracking-tight">
                  SHAWARMA <span className="text-[#E53935]">TIME</span>
                </span>
                <span className="text-xs text-amber-400 font-bold block">Venlo, Nederland</span>
              </div>
            </div>

            <p className="text-xs text-stone-400 leading-relaxed">
              {isNl
                ? 'Authentiek Syrisch restaurant in Venlo. Gekruide kip shawarma van het spit, knapperig Syrisch brood, royale Arabische maaltijden en verse mezza.'
                : 'Authentic Syrian restaurant in Venlo. Fresh rotisserie spiced chicken shawarma, crispy Syrian flatbread, loaded Arabic platters, and homemade mezza.'}
            </p>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-900 border border-stone-800 text-[11px] font-bold text-amber-300">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>{isNl ? '100% Halal Gecertificeerd' : '100% Halal Certified'}</span>
            </div>
          </div>

          {/* Quick Menu Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-black uppercase tracking-wider text-white">
              {isNl ? 'Menukaart' : 'Menu Categories'}
            </h4>
            <ul className="space-y-2 text-xs font-semibold">
              <li>
                <a href="#menu" className="hover:text-amber-400 transition-colors">
                  1. Combi Deals (€ 10,65)
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-amber-400 transition-colors">
                  2. {isNl ? 'Broodjes Shawarma & Crispy' : 'Sandwiches & Wraps'}
                </a>
              </li>
              <li>
                <a href="#arabi-platters" className="hover:text-amber-400 transition-colors">
                  3. {isNl ? "Arabische Schotels & Kapsalon Time" : 'Arabic Platters & Kapsalon Time'}
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-amber-400 transition-colors">
                  4. {isNl ? 'Bijgerechten (Sambosa, Hummus, Kibbeh)' : 'Side Dishes & Mezza'}
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-amber-400 transition-colors">
                  5. {isNl ? 'Koude Frisdranken & Ayran' : 'Drinks & Beverages'}
                </a>
              </li>
            </ul>
          </div>

          {/* Kitchen Operating Hours */}
          <div className="space-y-3">
            <h4 className="text-sm font-black uppercase tracking-wider text-white">
              {isNl ? 'Openingstijden Venlo' : 'Opening Hours Venlo'}
            </h4>
            <ul className="space-y-1.5 text-xs text-stone-400 font-medium">
              <li className="flex justify-between">
                <span>{isNl ? 'Maandag – Donderdag' : 'Monday – Thursday'}</span>
                <span className="text-white font-bold">14:00 – 22:00</span>
              </li>
              <li className="flex justify-between">
                <span>{isNl ? 'Vrijdag' : 'Friday'}</span>
                <span className="text-white font-bold">16:00 – 22:00</span>
              </li>
              <li className="flex justify-between">
                <span>{isNl ? 'Zaterdag & Zondag' : 'Saturday & Sunday'}</span>
                <span className="text-white font-bold">14:00 – 23:00</span>
              </li>
            </ul>
          </div>

          {/* Contact & On-Site Ordering */}
          <div className="space-y-3">
            <h4 className="text-sm font-black uppercase tracking-wider text-white">
              {isNl ? 'Contact & Afhalen' : 'Contact & Orders'}
            </h4>
            <div className="space-y-2 text-xs text-stone-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#E53935] shrink-0 mt-0.5" />
                <span>Puteanusstraat 24, 5911 EV Venlo</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href={`tel:${OFFICIAL_STORE.phone.replace(/\s+/g, '')}`} className="hover:text-white font-bold">
                  {OFFICIAL_STORE.phone}
                </a>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="#menu"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#E53935] hover:bg-[#D32F2F] text-white text-xs font-black shadow-md transition-colors"
              >
                <Utensils className="w-3.5 h-3.5" />
                <span>{isNl ? 'Bestel Direct Online' : 'Order Directly Online'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500 font-medium">
          <p>© {new Date().getFullYear()} Shawarma Time Venlo (shawarma-time.nl). {isNl ? 'Alle rechten voorbehouden.' : 'All rights reserved.'}</p>
          <div className="flex items-center gap-6">
            <a href="#menu" className="hover:text-white transition-colors">{isNl ? 'Menukaart' : 'Menu'}</a>
            <a href="#locations" className="hover:text-white transition-colors">{isNl ? 'Openingstijden' : 'Hours'}</a>
            <a href={`tel:${OFFICIAL_STORE.phone.replace(/\s+/g, '')}`} className="hover:text-white transition-colors">{OFFICIAL_STORE.phone}</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
