import React from 'react';
import { MapPin, Clock, Phone, Navigation, ArrowRight } from 'lucide-react';
import { OFFICIAL_STORE, OFFICIAL_LOGO } from '../data/menuData';
import { Language } from '../types';

interface LocationsSectionProps {
  onStartOrder: () => void;
  language: Language;
}

export const LocationsSection: React.FC<LocationsSectionProps> = ({ onStartOrder, language }) => {
  const isNl = language === 'nl';

  return (
    <section id="locations" className="py-8 sm:py-16 bg-[#FFFDF7] scroll-mt-16 sm:scroll-mt-20">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-100 text-[#E53935] text-xs font-black uppercase tracking-wider mb-2">
            <MapPin className="w-3.5 h-3.5" />
            <span>{isNl ? 'Bezoek Ons in Venlo' : 'Visit Us in Venlo'}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-stone-900 tracking-tight">
            {isNl ? 'LOCATIE & OPENINGSTIJDEN' : 'LOCATION & OPENING HOURS'}
          </h2>
          <p className="text-stone-600 font-medium text-xs sm:text-base lg:text-lg mt-1 sm:mt-2">
            {isNl
              ? 'Kom gezellig langs voor afhalen of bestel direct online voor bezorging in Venlo en omstreken.'
              : 'Visit us for pickup or order directly online for fast delivery across Venlo.'}
          </p>
        </div>

        {/* Location Details Card */}
        <div className="max-w-3xl mx-auto bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-10 border-2 border-amber-200 shadow-xl relative overflow-hidden">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Left Col: Logo & Info */}
            <div className="md:col-span-4 flex flex-col items-center text-center p-4 bg-amber-50/60 rounded-2xl border border-amber-200">
              <div className="w-28 h-20 bg-white rounded-2xl p-1 border border-amber-200 shadow-xs flex items-center justify-center mb-3">
                <img
                  src={OFFICIAL_LOGO}
                  alt="Shawarma Time Venlo"
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-xl font-black text-stone-900">{OFFICIAL_STORE.name}</h3>
              <p className="text-xs font-bold text-amber-800 mt-0.5">
                {isNl ? 'Syrische Keuken • 100% Halal' : 'Syrian Cuisine • 100% Halal'}
              </p>
              
              <div className="mt-4 flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-extrabold">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>{isNl ? 'Geopend' : 'Open Today'}</span>
              </div>
            </div>

            {/* Right Col: Details */}
            <div className="md:col-span-8 space-y-4">
              
              {/* Address */}
              <div className="flex items-start gap-3 p-3 rounded-2xl hover:bg-stone-50 transition-colors">
                <MapPin className="w-5 h-5 text-[#E53935] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-black text-stone-900">
                    {isNl ? 'Adres' : 'Address'}
                  </h4>
                  <p className="text-sm text-stone-600 font-medium">
                    {OFFICIAL_STORE.address}, {OFFICIAL_STORE.postalCode} {OFFICIAL_STORE.city}
                  </p>
                  <p className="text-xs text-stone-400">
                    {isNl ? 'Centrum Venlo, Nederland' : 'City Center Venlo, Netherlands'}
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-3 p-3 rounded-2xl hover:bg-stone-50 transition-colors">
                <Clock className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-black text-stone-900">
                    {isNl ? 'Openingstijden' : 'Opening Hours'}
                  </h4>
                  <ul className="text-xs text-stone-600 font-medium space-y-1 mt-1">
                    <li className="flex justify-between gap-4">
                      <span>{isNl ? 'Maandag – Donderdag:' : 'Monday – Thursday:'}</span>
                      <span className="font-bold text-stone-900">14:00 – 22:00</span>
                    </li>
                    <li className="flex justify-between gap-4">
                      <span>{isNl ? 'Vrijdag:' : 'Friday:'}</span>
                      <span className="font-bold text-stone-900">16:00 – 22:00</span>
                    </li>
                    <li className="flex justify-between gap-4">
                      <span>{isNl ? 'Zaterdag & Zondag:' : 'Saturday & Sunday:'}</span>
                      <span className="font-bold text-stone-900">14:00 – 23:00</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Phone & Ordering */}
              <div className="flex items-start gap-3 p-3 rounded-2xl hover:bg-stone-50 transition-colors">
                <Phone className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-black text-stone-900">
                    {isNl ? 'Telefoon & Afhalen' : 'Phone & Pickup'}
                  </h4>
                  <a
                    href={`tel:${OFFICIAL_STORE.phone.replace(/\s+/g, '')}`}
                    className="text-sm font-bold text-[#E53935] hover:underline"
                  >
                    {OFFICIAL_STORE.phone}
                  </a>
                  <p className="text-xs text-stone-500 mt-0.5">
                    {isNl
                      ? 'Direct telefonisch bereikbaar voor bestellingen en vragen.'
                      : 'Direct telephone line available for orders and inquiries.'}
                  </p>
                </div>
              </div>

            </div>

          </div>

          {/* Action Row - On-Site Ordering & Maps */}
          <div className="mt-8 pt-6 border-t border-amber-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <button
              onClick={onStartOrder}
              className="btn-press w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#E53935] hover:bg-[#D32F2F] text-white font-black text-sm flex items-center justify-center gap-2 shadow-lg shadow-rose-600/30 cursor-pointer text-center"
            >
              <span>{isNl ? 'BESTEL DIRECT ONLINE' : 'ORDER DIRECTLY ONLINE'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-3 w-full sm:w-auto justify-center">
              <a
                href="https://maps.google.com/?q=Puteanusstraat+24+5911+EV+Venlo"
                target="_blank"
                rel="noreferrer"
                className="btn-press px-5 py-3 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-800 font-extrabold text-xs flex items-center gap-1.5 transition-colors"
              >
                <Navigation className="w-3.5 h-3.5 text-stone-600" />
                <span>Google Maps Route</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
