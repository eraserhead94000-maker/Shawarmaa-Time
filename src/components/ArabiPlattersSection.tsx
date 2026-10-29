import React from 'react';
import { ArrowRight, Flame, Sparkles, CheckCircle2 } from 'lucide-react';
import { ARABI_PLATTER_IMAGE } from '../data/menuData';
import { MenuItem, Language } from '../types';

interface ArabiPlattersSectionProps {
  onSelectArabi: (item: MenuItem) => void;
  arabiItems: MenuItem[];
  language: Language;
}

export const ArabiPlattersSection: React.FC<ArabiPlattersSectionProps> = ({
  onSelectArabi,
  arabiItems,
  language,
}) => {
  const isNl = language === 'nl';

  const arabiItem = arabiItems.find((m) => m.id === 'menu-arabische-shawarma') || arabiItems[0];

  return (
    <section id="arabi-platters" className="py-8 sm:py-16 bg-stone-900 text-white relative overflow-hidden scroll-mt-16 sm:scroll-mt-20">
      {/* Ambient background glows */}
      <div className="absolute top-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-[#E53935]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 sm:w-96 h-64 sm:h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-gradient-to-br from-stone-800 to-stone-900/90 rounded-3xl sm:rounded-[2.5rem] border-2 border-amber-500/30 p-4 sm:p-8 lg:p-12 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-4 sm:space-y-6">
              <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-[#E53935] text-white text-[11px] sm:text-xs font-black uppercase tracking-wider">
                <Flame className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-amber-300 text-amber-300" />
                <span>{isNl ? 'Huisgemaakt & Authentiek' : 'Homemade & Authentic'}</span>
              </div>

              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
                {isNl ? (
                  <>
                    ARABISCHE SCHOTELS & <br />
                    <span className="text-amber-400">DE ECHTE KAPSALON TIME</span>
                  </>
                ) : (
                  <>
                    ARABIC PLATTERS & <br />
                    <span className="text-amber-400">THE ORIGINAL KAPSALON TIME</span>
                  </>
                )}
              </h2>

              <p className="text-stone-300 text-sm sm:text-lg leading-relaxed max-w-xl">
                {isNl
                  ? 'Onze signatuur: mals gekruide kip shawarma in krokant getoast Syrisch brood, in handzame stukjes gesneden en geserveerd op een bed van goudbruine friet met huisgemaakte knoflooksaus en frisse augurk.'
                  : 'Our signature: tender spiced chicken shawarma toasted in Syrian flatbread, sliced into bite-sized rolls, served over golden fries with homemade garlic sauce and pickled pickles.'}
              </p>

              {/* Real menu features */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 pt-1 sm:pt-2">
                {[
                  isNl ? 'Arabische Shawarma Menu (€ 13,00)' : 'Arabic Shawarma Menu (€ 13.00)',
                  isNl ? 'Arab. Shawarma Dubbel Menu (€ 17,00)' : 'Arabic Shawarma Double Menu (€ 17.00)',
                  isNl ? 'Kapsalon Time met gesmolten kaas (€ 13,00)' : 'Kapsalon Time with melted gouda (€ 13.00)',
                  isNl ? 'Geserveerd met friet & diverse sausjes' : 'Served with crispy fries & assorted sauces',
                ].map((text, i) => (
                  <div key={i} className="flex items-center gap-2 sm:gap-2.5 text-xs sm:text-sm font-bold text-stone-200">
                    <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400 shrink-0" />
                    <span>{text}</span>
                  </div>
                ))}
              </div>

              {/* Price & Action */}
              <div className="pt-3 sm:pt-4 flex flex-wrap items-center gap-4 sm:gap-5">
                <div>
                  <span className="text-[10px] sm:text-xs text-stone-400 font-bold block uppercase">
                    {isNl ? 'Arabische Schotel' : 'Arabic Platter'}
                  </span>
                  <span className="text-2xl sm:text-4xl font-black text-amber-400 tabular-nums">
                    € 13,00
                  </span>
                </div>

                {arabiItem && (
                  <button
                    onClick={() => onSelectArabi(arabiItem)}
                    className="btn-press flex items-center gap-2 sm:gap-3 px-5 sm:px-8 py-3 sm:py-4 rounded-full bg-[#E53935] hover:bg-[#D32F2F] text-white font-black text-xs sm:text-base shadow-lg shadow-rose-600/40 cursor-pointer active:scale-95"
                  >
                    <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-amber-300" />
                    <span>{isNl ? 'BEKIJK ARABISCH MENU' : 'VIEW ARABIC MENU'}</span>
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  </button>
                )}
              </div>

            </div>

            {/* Right Image Container - Sliced Arabi Platter */}
            <div className="lg:col-span-5 relative">
              <div className="rounded-2xl sm:rounded-3xl overflow-hidden border-2 sm:border-4 border-amber-400/40 shadow-2xl relative group">
                <img
                  src={ARABI_PLATTER_IMAGE}
                  alt="Arabische Shawarma Schotel met friet en sausjes"
                  referrerPolicy="no-referrer"
                  className="w-full h-48 sm:h-[340px] lg:h-[400px] object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent pointer-events-none" />

                {/* Tilted Sticker */}
                <div className="absolute top-4 right-4 bg-amber-400 text-stone-950 font-black text-xs px-3.5 py-1.5 rounded-full shadow-lg rotate-3 uppercase tracking-wider">
                  🔥 {isNl ? 'Nr. 1 Besteld' : '#1 Best Seller'}
                </div>

                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="text-xs uppercase font-extrabold text-amber-300 tracking-wider">
                    {isNl ? 'Compleet Menu' : 'Complete Menu Platter'}
                  </p>
                  <p className="text-lg font-black">Arabische Shawarma Menu • € 13,00</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
