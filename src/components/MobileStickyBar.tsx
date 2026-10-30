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
    <div className="md:hidden fixed bottom-[calc(0.75rem+env(safe-area-inset-bottom,0px))] left-2.5 right-2.5 min-[380px]:left-3 min-[380px]:right-3 z-30 pointer-events-auto">
      <div className="bg-stone-950/95 backdrop-blur-md text-white p-1.5 min-[360px]:p-2 rounded-full shadow-2xl border-2 border-amber-300 flex items-center justify-between gap-1.5 min-[360px]:gap-2">
        {totalItems > 0 ? (
          <>
            {/* Basket summary button */}
            <button
              onClick={onOpenBasket}
              className="flex items-center gap-2 min-[360px]:gap-2.5 pl-2.5 min-[360px]:pl-3 cursor-pointer text-left min-h-[44px]"
            >
              <div className="relative">
                <ShoppingBag className="w-5 h-5 text-amber-300" />
                <span className="absolute -top-1.5 -right-2 bg-[#E53935] text-white text-[10px] font-black w-4.5 h-4.5 rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              </div>
              <div className="leading-tight">
                <span className="text-[10px] text-stone-400 block font-bold">
                  {isNl ? 'Subtotaal' : 'Subtotal'}
                </span>
                <span className="text-xs min-[360px]:text-sm font-black text-white tabular-nums">
                  € {subtotal.toFixed(2).replace('.', ',')}
                </span>
              </div>
            </button>

            {/* Open basket drawer */}
            <button
              onClick={onOpenBasket}
              className="btn-press flex items-center gap-1.5 min-h-[44px] px-4 min-[360px]:px-5 py-2.5 rounded-full bg-[#E53935] hover:bg-[#D32F2F] text-white text-xs font-black shadow-md cursor-pointer transition-transform active:scale-95"
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
              className="flex items-center gap-1.5 pl-2.5 pr-2 py-1 text-stone-300 hover:text-white min-h-[44px]"
              title="Bel restaurant"
            >
              <div className="w-8 h-8 rounded-full bg-stone-800 flex items-center justify-center text-emerald-400 shrink-0 border border-stone-700">
                <Phone className="w-4 h-4" />
              </div>
              <div className="text-left leading-tight hidden min-[380px]:block">
                <span className="text-[10px] text-stone-400 block font-bold">{isNl ? 'Bellen' : 'Call'}</span>
                <span className="text-xs font-black text-white">077 785 4192</span>
              </div>
            </a>

            {/* Explore Menu & Order Button */}
            <button
              onClick={onExploreMenu}
              className="btn-press flex items-center justify-center gap-1.5 min-h-[44px] px-4 min-[360px]:px-5 py-2.5 rounded-full bg-[#E53935] hover:bg-[#D32F2F] text-white text-xs font-black shadow-md shadow-rose-600/30 whitespace-nowrap cursor-pointer active:scale-95 flex-1 min-[380px]:flex-none"
            >
              <Utensils className="w-3.5 h-3.5" />
              <span className="hidden min-[360px]:inline">{isNl ? 'STEL BESTELLING SAMEN' : 'ORDER ONLINE'}</span>
              <span className="min-[360px]:hidden">{isNl ? 'BESTEL ONLINE' : 'ORDER'}</span>
            </button>
          </>
        )}
      </div>
    </div>
  );
};
