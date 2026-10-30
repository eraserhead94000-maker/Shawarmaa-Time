import React from 'react';
import { Flame, ShieldCheck, Heart, Award, MapPin } from 'lucide-react';
import { KAPSALON_IMAGE } from '../data/menuData';
import { Language } from '../types';

interface StorySectionProps {
  language: Language;
}

export const StorySection: React.FC<StorySectionProps> = ({ language }) => {
  const isNl = language === 'nl';

  return (
    <section id="story" className="py-10 sm:py-20 bg-[#FFFDF7] relative overflow-hidden scroll-mt-16 sm:scroll-mt-20">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        
        {/* Title & Kicker */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-16 space-y-2 sm:space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-1 rounded-full bg-amber-100 text-amber-950 text-[11px] sm:text-xs font-black uppercase tracking-wider">
            <Award className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#E53935]" /> Shawarma Time Venlo
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-stone-900 tracking-tight leading-tight">
            {isNl ? (
              <>
                AUTHENTIEKE SYRISCHE RECEPTEN. <br />
                <span className="text-[#E53935]">DAGELIJKS VERS IN VENLO.</span>
              </>
            ) : (
              <>
                AUTHENTIC SYRIAN RECIPES. <br />
                <span className="text-[#E53935]">FRESH DAILY IN VENLO.</span>
              </>
            )}
          </h2>
          <p className="text-stone-600 font-medium text-xs sm:text-base lg:text-lg leading-relaxed">
            {isNl
              ? 'Bij Shawarma Time aan de Puteanusstraat in Venlo proef je het verschil. Wij werken uitsluitend met 100% halal kwaliteitsvlees, traditioneel getoast Syrisch platbrood en onze befaamde huisgemaakte knoflooksaus.'
              : 'At Shawarma Time on Puteanusstraat in Venlo, taste the difference. We craft every meal with 100% halal meat, freshly toasted Syrian flatbread, and our famous signature garlic sauce.'}
          </p>
        </div>

        {/* 3 Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8 mb-8 sm:mb-16">
          
          {/* Pillar 1 */}
          <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 border-2 border-amber-200 shadow-md relative group hover:-translate-y-1 transition-all duration-300">
            <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center text-2xl sm:text-3xl font-black mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
              🫓
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-stone-900 mb-1.5 sm:mb-2">
              {isNl ? 'Syrisch Brood' : 'Syrian Flatbread'}
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-medium">
              {isNl
                ? 'Geen standaard pitabrood, maar traditioneel dun Syrisch platbrood dat na het rollen krokant wordt getoast zodat alle sappen en smaken verzegeld worden.'
                : 'Not thick pita pockets, but authentic thin Syrian bread toasted crispy after rolling to seal in all juices and spices.'}
            </p>
            <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-amber-100 flex items-center gap-1.5 text-xs font-black text-[#E53935]">
              <Flame className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span>{isNl ? 'Krokant getoast per bestelling' : 'Toasted crispy per order'}</span>
            </div>
          </div>

          {/* Pillar 2 */}
          <div className="bg-white rounded-3xl p-8 border-2 border-amber-200 shadow-md relative group hover:-translate-y-1 transition-all duration-300">
            <div className="w-16 h-16 rounded-2xl bg-rose-100 text-[#E53935] flex items-center justify-center text-3xl font-black mb-6 group-hover:scale-110 transition-transform">
              🍗
            </div>
            <h3 className="text-2xl font-black text-stone-900 mb-2">
              {isNl ? '100% Halal Kip & Spit' : '100% Halal Spit Rotisserie'}
            </h3>
            <p className="text-sm text-stone-600 leading-relaxed font-medium">
              {isNl
                ? 'Gemarineerd met onze geheime mix van specerijen, langzaam gegaard aan het verticale spit en sappig gesneden voor broodjes, Arabische schotels en Kapsalon.'
                : 'Marinated with authentic Mediterranean spices, slowly roasted on the vertical rotisserie and thinly sliced to order.'}
            </p>
            <div className="mt-4 pt-4 border-t border-amber-100 flex items-center gap-1.5 text-xs font-black text-[#E53935]">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>{isNl ? 'Gecertificeerd Halal' : 'Certified 100% Halal'}</span>
            </div>
          </div>

          {/* Pillar 3 */}
          <div className="bg-white rounded-3xl p-8 border-2 border-amber-200 shadow-md relative group hover:-translate-y-1 transition-all duration-300">
            <div className="w-16 h-16 rounded-2xl bg-amber-100 text-stone-900 flex items-center justify-center text-3xl font-black mb-6 group-hover:scale-110 transition-transform">
              🧄
            </div>
            <h3 className="text-2xl font-black text-stone-900 mb-2">
              {isNl ? 'Huisgemaakte Sauzen' : 'Housemade Sauces'}
            </h3>
            <p className="text-sm text-stone-600 leading-relaxed font-medium">
              {isNl
                ? 'Onze romige knoflooksaus (toum), cocktailsaus, tahina en sambal worden dagelijks vers bereid in onze eigen restaurantkeuken in Venlo.'
                : 'Our creamy garlic toum sauce, cocktail sauce, sesame tahini, and chili sauce are made fresh daily in our Venlo kitchen.'}
            </p>
            <div className="mt-4 pt-4 border-t border-amber-100 flex items-center gap-1.5 text-xs font-black text-[#E53935]">
              <Heart className="w-4 h-4 text-[#E53935]" />
              <span>{isNl ? 'Vers bereid in Venlo' : 'Prepared fresh in Venlo'}</span>
            </div>
          </div>

        </div>

        {/* Visual Highlight Card */}
        <div className="bg-amber-100 rounded-3xl sm:rounded-[2.5rem] p-4 sm:p-8 lg:p-12 border-2 border-amber-300 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
            
            <div className="lg:col-span-5 relative flex justify-center">
              <div className="rounded-2xl sm:rounded-3xl overflow-hidden border-2 sm:border-4 border-white shadow-xl max-w-sm w-full">
                <img
                  src={KAPSALON_IMAGE}
                  alt="Kapsalon Time Venlo"
                  referrerPolicy="no-referrer"
                  className="w-full h-52 sm:h-72 object-cover"
                />
              </div>
              <div className="absolute bottom-2 left-2 sm:-bottom-4 sm:left-4 bg-[#E53935] text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl sm:rounded-2xl font-black text-[11px] sm:text-xs shadow-lg border-2 border-white">
                Kapsalon Time • € 13,00
              </div>
            </div>

            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-1.5 text-amber-800 text-xs font-extrabold uppercase tracking-wider">
                <MapPin className="w-4 h-4 text-[#E53935]" /> Puteanusstraat 24, Venlo
              </div>
              <h3 className="text-2xl sm:text-4xl font-black text-stone-900 leading-tight">
                {isNl
                  ? '"KROKANT BROOD, MALSE KIP SHAWARMA EN DE BESTE KNOFLOOKSAUS VAN VENLO."'
                  : '"CRISPY FLATBREAD, TENDER SPICED CHICKEN, AND THE BEST GARLIC SAUCE IN VENLO."'}
              </h3>
              <p className="text-stone-700 font-medium text-sm sm:text-base leading-relaxed">
                {isNl
                  ? 'Of je nu snel een broodje shawarma komt afhalen, geniet van een rijkgevulde Kapsalon Time met gesmolten kaas, of kiest voor onze complete Arabische maaltijden met friet en sausjes: wij bereiden het met zorg en passie.'
                  : 'Whether you stop by for a quick hot shawarma wrap, enjoy a loaded Kapsalon Time with golden melted cheese, or order an authentic Arabic Platter with crispy fries: every order is made with passion.'}
              </p>
              <div className="pt-2 flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#E53935] flex items-center justify-center font-black text-white text-xs">
                  ST
                </div>
                <div className="text-xs font-bold text-stone-700">
                  Shawarma Time Venlo • {isNl ? 'Bestel direct online op onze website' : 'Order directly online on our website'}
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
