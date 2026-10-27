import React from 'react';
import { Sparkles, Check, Info, ArrowRight } from 'lucide-react';
import { MenuItem, Language } from '../types';

interface DealsSectionProps {
  onSelectDeal: (item: MenuItem) => void;
  dealItems: MenuItem[];
  language: Language;
}

export const DealsSection: React.FC<DealsSectionProps> = ({
  onSelectDeal,
  dealItems,
  language,
}) => {
  const isNl = language === 'nl';

  const combiDeal = dealItems.find((d) => d.id === 'deal-gerecht-drankje') || {
    id: 'deal-gerecht-drankje',
    name: 'Gerecht + drankje naar keuze',
    nameEn: 'Dish + drink of choice combo',
    category: 'deals' as const,
    description: 'Kies jouw gerecht + drankje naar keuze voor een scherpe prijs!',
    descriptionEn: 'Choose your dish + drink of choice for a special value price!',
    price: 10.65,
    image: '/src/assets/images/hero_shawarma_spread_1793131192553.jpg',
  };

  const arabiItem = dealItems.find((d) => d.id === 'menu-arabische-shawarma') || {
    id: 'menu-arabische-shawarma',
    name: 'Arabische Shawarma Menu',
    nameEn: 'Arabic Shawarma Menu',
    category: 'maaltijden' as const,
    description: 'Syrische shawarma gesneden in stukjes, geserveerd met friet en diverse sausjes.',
    descriptionEn: 'Syrian shawarma served with fries and assorted sauces.',
    price: 13.00,
    image: '/src/assets/images/hero_shawarma_spread_1793131192553.jpg',
  };

  const broastedMenu = dealItems.find((d) => d.id === 'menu-broasted-kip') || {
    id: 'menu-broasted-kip',
    name: 'Broasted Kip Menu',
    nameEn: 'Broasted Chicken Menu',
    category: 'maaltijden' as const,
    description: 'Krokante broasted kip, geserveerd met friet en diverse sausjes.',
    descriptionEn: 'Crispy fried broasted chicken with fries and sauces.',
    price: 14.00,
    image: '/src/assets/images/food_broasted_crispy_chicken_1793132469932.jpg',
  };

  return (
    <section id="deals" className="py-16 bg-[#FFFBEF] border-y border-amber-200/80 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-200 text-amber-900 text-xs font-black uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5 text-[#E53935]" />
            <span>{isNl ? 'Officiële Acties & Schotels' : 'Official Deals & Platters'}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-stone-900 tracking-tight">
            {isNl ? 'SPECIAL OFFER & MAALTIJDEN' : 'SPECIAL OFFERS & MEAL DEALS'}
          </h2>
          <p className="text-stone-600 font-medium text-base sm:text-lg mt-2">
            {isNl
              ? 'Verifieerbare topaanbiedingen rechtstreeks van de officiële menukaart van Shawarma Time Venlo.'
              : 'Verified offers directly from Shawarma Time Venlo official menu.'}
          </p>
        </div>

        {/* 3 Rounded Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          
          {/* Deal 1: Verified Special Offer */}
          <div className="bg-white rounded-3xl p-6 sm:p-7 border-2 border-amber-200 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-0 right-0 bg-[#E53935] text-white font-black text-[11px] px-4 py-1 rounded-bl-2xl uppercase tracking-wider">
              SPECIAL OFFER
            </div>

            <div className="space-y-4">
              <span className="text-4xl">🌯🥤</span>
              <div>
                <h3 className="text-2xl font-black text-stone-900">
                  {isNl ? combiDeal.name : combiDeal.nameEn || combiDeal.name}
                </h3>
                <p className="text-sm text-stone-600 mt-1 leading-relaxed">
                  {isNl ? combiDeal.description : combiDeal.descriptionEn || combiDeal.description}
                </p>
              </div>

              <div className="space-y-1.5 bg-amber-50 p-3.5 rounded-2xl text-xs font-bold text-stone-700 border border-amber-200/60">
                <div className="flex items-start gap-1.5 text-amber-950">
                  <Info className="w-4 h-4 text-[#E53935] shrink-0 mt-0.5" />
                  <span>
                    {isNl
                      ? 'Kies gerecht + drankje naar keuze. Uw gewenste selectie wordt telefonisch of bij bereiding in onze keuken bevestigd.'
                      : 'Choose your dish + drink. Your selection is confirmed with our kitchen upon order preparation.'}
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-amber-100 flex items-center justify-between mt-6">
              <div>
                <span className="text-xs text-stone-400 font-bold block">
                  {isNl ? 'Vaste actieprijs' : 'Fixed deal price'}
                </span>
                <span className="text-3xl font-black text-stone-900 tabular-nums">€ 10,65</span>
              </div>
              <button
                onClick={() => onSelectDeal(combiDeal as MenuItem)}
                className="btn-press px-5 py-2.5 rounded-full bg-[#E53935] hover:bg-[#D32F2F] text-white font-black text-xs shadow-md cursor-pointer active:scale-95 flex items-center gap-1.5"
              >
                <span>{isNl ? 'BEKIJK DEAL' : 'VIEW DEAL'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Deal 2: Arabische Shawarma Menu */}
          <div className="bg-[#E53935] text-white rounded-3xl p-6 sm:p-7 border-4 border-amber-300 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between relative overflow-hidden group -translate-y-1">
            <div className="absolute top-0 right-0 bg-amber-300 text-stone-950 font-black text-[11px] px-4 py-1 rounded-bl-2xl uppercase tracking-wider">
              {isNl ? 'TOP FAVORIET' : 'TOP FAVORITE'}
            </div>

            <div className="space-y-4">
              <span className="text-4xl">🍱🍟</span>
              <div>
                <h3 className="text-2xl font-black text-white">
                  {isNl ? arabiItem.name : arabiItem.nameEn || arabiItem.name}
                </h3>
                <p className="text-sm text-rose-100 mt-1 leading-relaxed">
                  {isNl ? arabiItem.description : arabiItem.descriptionEn || arabiItem.description}
                </p>
              </div>

              <div className="space-y-1.5 bg-black/20 p-3 rounded-2xl text-xs font-bold text-amber-200">
                <div className="flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-amber-300" />
                  <span>{isNl ? 'Enkel (€ 13,00) of Dubbel (€ 17,00)' : 'Single (€ 13.00) or Double (€ 17.00)'}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-amber-300" />
                  <span>{isNl ? 'Geserveerd met friet & diverse sausjes' : 'Served with fries & assorted sauces'}</span>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-rose-400/40 flex items-center justify-between mt-6">
              <div>
                <span className="text-xs text-rose-200 font-bold block">
                  {isNl ? 'Vanaf' : 'From'}
                </span>
                <span className="text-3xl font-black text-white tabular-nums">€ 13,00</span>
              </div>
              <button
                onClick={() => onSelectDeal(arabiItem as MenuItem)}
                className="btn-press px-5 py-2.5 rounded-full bg-amber-300 hover:bg-amber-400 text-stone-950 font-black text-xs shadow-md cursor-pointer active:scale-95 flex items-center gap-1.5"
              >
                <span>{isNl ? 'KIES FORMAAT' : 'CHOOSE SIZE'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Deal 3: Broasted Kip Menu */}
          <div className="bg-white rounded-3xl p-6 sm:p-7 border-2 border-amber-200 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-0 right-0 bg-emerald-600 text-white font-black text-[11px] px-4 py-1 rounded-bl-2xl uppercase tracking-wider">
              {isNl ? 'KROKANTE KIP' : 'CRISPY CHICKEN'}
            </div>

            <div className="space-y-4">
              <span className="text-4xl">🍗🍟</span>
              <div>
                <h3 className="text-2xl font-black text-stone-900">
                  {isNl ? broastedMenu.name : broastedMenu.nameEn || broastedMenu.name}
                </h3>
                <p className="text-sm text-stone-600 mt-1 leading-relaxed">
                  {isNl ? broastedMenu.description : broastedMenu.descriptionEn || broastedMenu.description}
                </p>
              </div>

              <div className="space-y-1.5 bg-amber-50 p-3 rounded-2xl text-xs font-bold text-stone-700">
                <div className="flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span>{isNl ? 'Halve kip (€ 14,00) of Hele kip (€ 24,00)' : 'Half chicken (€ 14.00) or Full (€ 24.00)'}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span>{isNl ? 'Geserveerd met friet en sausjes' : 'Served with crispy fries and sauces'}</span>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-amber-100 flex items-center justify-between mt-6">
              <div>
                <span className="text-xs text-stone-400 font-bold block">
                  {isNl ? 'Vanaf' : 'From'}
                </span>
                <span className="text-3xl font-black text-stone-900 tabular-nums">€ 14,00</span>
              </div>
              <button
                onClick={() => onSelectDeal(broastedMenu as MenuItem)}
                className="btn-press px-5 py-2.5 rounded-full bg-[#E53935] hover:bg-[#D32F2F] text-white font-black text-xs shadow-md cursor-pointer active:scale-95 flex items-center gap-1.5"
              >
                <span>{isNl ? 'KIES FORMAAT' : 'CHOOSE SIZE'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
