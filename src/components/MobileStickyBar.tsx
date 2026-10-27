import React from 'react';
import { ShoppingBag, ArrowRight, Utensils, Phone } from 'lucide-react';
import { CartItem, Language } from '../types';
import { OFFICIAL_STORE } from '../data/menuData';

interface MobileStickyBarProps {
  language: Language;
  cart: CartItem[];
  onOpenBasket: () => void;
  onExploreMenu: () => void;
}

export const MobileStickyBar: React.FC<MobileStickyBarProps> = ({
  language,
  cart,
  onOpenBasket,
  onExploreMenu,
}) => {
  const isNl = language === 'nl';
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = cart.reduce((sum, item) => sum + item.unitPrice * item.quantity, 0);

  return (
    <div className="md:hidden fixed bottom-3 left-3 right-3 z-30 pointer-events-auto">
      <div className="bg-stone-950/95 backdrop-blur-md text-white p-2.5 rounded-full shadow-2xl border-2 border-amber-300 flex items-center justify-between gap-2">
        {totalItems > 0 ? (
          <>
            {/* Basket summary button */}
            <button
              onClick={onOpenBasket}
              className="flex items-center gap-2.5 pl-3 cursor-pointer text-left"
            >
              <div className="relative">
                <ShoppingBag className="w-5 h-5 text-amber-300" />
                <span className="absolute -top-1.5 -right-2 bg-[#E53935] text-white text-[10px] font-black w-4 h-4 rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              </div>
              <div className="leading-tight">
                <span className="text-[10px] text-stone-400 block font-bold">
                  {isNl ? 'Subtotaal' : 'Subtotal'}
                </span>
                <span className="text-sm font-black text-white tabular-nums">
                  € {subtotal.toFixed(2).replace('.', ',')}
                </span>
              </div>
            </button>

            {/* Open basket drawer */}
            <button
              onClick={onOpenBasket}
              className="btn-press flex items-center gap-1.5 px-5 py-2 rounded-full bg-[#E53935] hover:bg-[#D32F2F] text-white text-xs font-black shadow-md cursor-pointer transition-transform active:scale-95"
            >
              <span>{isNl ? 'WINKELMAND' : 'VIEW BASKET'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </>
        ) : (
          <>
            {/* Call Restaurant Quick Button */}
            <a
              href={`tel:${OFFICIAL_STORE.phone.replace(/\s+/g, '')}`}
              className="flex items-center gap-1.5 pl-3 pr-2 py-1 text-stone-300 hover:text-white"
              title="Bel restaurant"
            >
              <div className="w-8 h-8 rounded-full bg-stone-800 flex items-center justify-center text-emerald-400 shrink-0 border border-stone-700">
                <Phone className="w-4 h-4" />
              </div>
              <div className="text-left leading-tight hidden xs:block">
                <span className="text-[10px] text-stone-400 block font-bold">{isNl ? 'Bellen' : 'Call'}</span>
                <span className="text-xs font-black text-white">077 785 4192</span>
              </div>
            </a>

            {/* Explore Menu & Order Button */}
            <button
              onClick={onExploreMenu}
              className="btn-press flex items-center gap-1.5 px-5 py-2 rounded-full bg-[#E53935] hover:bg-[#D32F2F] text-white text-xs font-black shadow-md shadow-rose-600/30 whitespace-nowrap cursor-pointer active:scale-95"
            >
              <Utensils className="w-3.5 h-3.5" />
              <span>{isNl ? 'STEL BESTELLING SAMEN' : 'ORDER ONLINE'}</span>
            </button>
          </>
        )}
      </div>
    </div>
  );
};
