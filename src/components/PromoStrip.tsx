import React from 'react';
import { Tag, MapPin, Bike, Store, ShoppingBag } from 'lucide-react';
import { StoreLocation, Language } from '../types';

interface PromoStripProps {
  orderType: 'pickup' | 'delivery';
  setOrderType: (type: 'pickup' | 'delivery') => void;
  selectedStore: StoreLocation;
  onApplyDeal: () => void;
  language: Language;
}

export const PromoStrip: React.FC<PromoStripProps> = ({
  orderType,
  setOrderType,
  selectedStore,
  onApplyDeal,
  language,
}) => {
  const isNl = language === 'nl';

  return (
    <section className="bg-amber-500 text-stone-950 py-3 border-y border-amber-600 shadow-inner">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Pickup vs Delivery Pill Switcher */}
          <div className="flex items-center gap-2 bg-stone-950/10 p-1 rounded-full border border-stone-950/15 w-full md:w-auto justify-center">
            <button
              onClick={() => setOrderType('pickup')}
              className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-black transition-all cursor-pointer ${
                orderType === 'pickup'
                  ? 'bg-stone-900 text-white shadow-md'
                  : 'text-stone-900 hover:bg-stone-950/10'
              }`}
            >
              <Store className="w-3.5 h-3.5" />
              <span>{isNl ? 'AFHALEN (15 MIN)' : 'PICKUP (15 MIN)'}</span>
            </button>

            <button
              onClick={() => setOrderType('delivery')}
              className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-black transition-all cursor-pointer ${
                orderType === 'delivery'
                  ? 'bg-stone-900 text-white shadow-md'
                  : 'text-stone-900 hover:bg-stone-950/10'
              }`}
            >
              <Bike className="w-3.5 h-3.5" />
              <span>{isNl ? 'BEZORGEN VENLO (30–45 MIN)' : 'DELIVERY VENLO (30–45 MIN)'}</span>
            </button>
          </div>

          {/* Location Badge */}
          <div className="flex items-center gap-2 text-xs font-bold text-stone-900">
            <MapPin className="w-4 h-4 text-[#E53935]" />
            <span>Puteanusstraat 24, 5911 EV Venlo</span>
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-700" />
            <span className="text-stone-800">{isNl ? 'Keuken Geopend' : 'Kitchen Open'}</span>
          </div>

          {/* Official Combi Deal Chip - Adds directly on-site */}
          <div className="flex items-center gap-2">
            <button
              onClick={onApplyDeal}
              className="btn-press flex items-center gap-2 px-4 py-1.5 rounded-full bg-white hover:bg-stone-100 text-stone-900 text-xs font-black border border-stone-900/20 shadow-xs cursor-pointer"
            >
              <Tag className="w-3.5 h-3.5 text-[#E53935]" />
              <span>{isNl ? 'COMBI DEAL: Gerecht + Drankje' : 'COMBI DEAL: Dish + Drink'}</span>
              <span className="bg-[#E53935] text-white px-2 py-0.5 rounded-full text-[10px]">
                € 10,65
              </span>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};
