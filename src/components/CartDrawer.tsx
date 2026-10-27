import React from 'react';
import { X, Plus, Minus, Trash2, ShoppingBag, ArrowRight, Store, Bike, Sparkles } from 'lucide-react';
import { CartItem, Language } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onUpdateQuantity: (cartItemId: string, newQty: number) => void;
  onRemoveItem: (cartItemId: string) => void;
  orderType: 'pickup' | 'delivery';
  setOrderType: (type: 'pickup' | 'delivery') => void;
  onProceedToCheckout: () => void;
  language: Language;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cart,
  onUpdateQuantity,
  onRemoveItem,
  orderType,
  setOrderType,
  onProceedToCheckout,
  language,
}) => {
  if (!isOpen) return null;

  const isNl = language === 'nl';
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = cart.reduce((sum, item) => sum + item.unitPrice * item.quantity, 0);
  const deliveryFee = orderType === 'delivery' ? 2.50 : 0.00;
  const grandTotal = subtotal + deliveryFee;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-stone-900/60 backdrop-blur-xs flex justify-end animate-in fade-in duration-200">
      <div
        className="w-full max-w-md bg-[#FFFDF7] h-full shadow-2xl flex flex-col justify-between border-l-2 border-amber-200 animate-in slide-in-from-right duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drawer Header */}
        <div className="p-5 border-b border-amber-200 bg-white flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-full bg-rose-50 flex items-center justify-center text-[#E53935] border border-rose-200">
              <ShoppingBag className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-black text-stone-900 tracking-tight">
                {isNl ? 'Jouw Winkelmand' : 'Your Basket'}
              </h3>
              <p className="text-xs text-stone-500 font-semibold">
                {totalItems} {totalItems === 1 ? (isNl ? 'gerecht geselecteerd' : 'item selected') : (isNl ? 'gerechten geselecteerd' : 'items selected')}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            aria-label={isNl ? 'Sluiten' : 'Close'}
            className="w-9 h-9 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-700 flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Pickup vs Delivery Selector */}
        <div className="p-4 bg-amber-50 border-b border-amber-200">
          <div className="flex items-center gap-1.5 p-1 bg-white rounded-2xl border border-amber-200">
            <button
              onClick={() => setOrderType('pickup')}
              className={`flex-1 py-2 px-3 rounded-xl text-xs font-black flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                orderType === 'pickup'
                  ? 'bg-stone-900 text-white shadow-xs'
                  : 'text-stone-700 hover:bg-stone-100'
              }`}
            >
              <Store className="w-3.5 h-3.5" />
              <span>{isNl ? 'Afhalen (Gratis)' : 'Pickup (Free)'}</span>
            </button>
            <button
              onClick={() => setOrderType('delivery')}
              className={`flex-1 py-2 px-3 rounded-xl text-xs font-black flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                orderType === 'delivery'
                  ? 'bg-[#E53935] text-white shadow-xs'
                  : 'text-stone-700 hover:bg-stone-100'
              }`}
            >
              <Bike className="w-3.5 h-3.5" />
              <span>{isNl ? 'Bezorgen (+€2,50)' : 'Delivery (+€2.50)'}</span>
            </button>
          </div>
          <p className="text-[11px] text-stone-600 mt-2 text-center font-medium">
            {orderType === 'pickup'
              ? (isNl ? '📍 Afhalen bij restaurant: Puteanusstraat 24, Venlo (15–20 min)' : '📍 Pickup at restaurant: Puteanusstraat 24, Venlo (15–20 min)')
              : (isNl ? '🛵 Snelle bezorging in Venlo en directe omgeving (30–45 min)' : '🛵 Fast local delivery in Venlo area (30–45 min)')}
          </p>
        </div>

        {/* Basket Item List */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-4">
              <div className="w-20 h-20 rounded-full bg-amber-100/80 flex items-center justify-center text-3xl">
                🌯
              </div>
              <div className="space-y-1">
                <h4 className="text-lg font-black text-stone-900">
                  {isNl ? 'Jouw winkelmand is nog leeg' : 'Your basket is empty'}
                </h4>
                <p className="text-xs text-stone-500 max-w-xs leading-relaxed">
                  {isNl
                    ? 'Kies je favoriete Syrische broodjes, Arabische schotels, mezza of koude dranken van de kaart.'
                    : 'Choose your favorite Syrian wraps, Arabic platters, fresh mezza, or ice-cold drinks from the menu.'}
                </p>
              </div>
              <button
                onClick={onClose}
                className="px-6 py-2.5 rounded-full bg-[#E53935] hover:bg-[#D32F2F] text-white text-xs font-black shadow-md cursor-pointer transition-transform active:scale-95"
              >
                {isNl ? 'Bekijk Menukaart' : 'Browse Menu'}
              </button>
            </div>
          ) : (
            cart.map((item) => {
              const displayName = isNl ? item.name : item.nameEn || item.name;
              const displayVariant = isNl ? item.variantNameNl : item.variantNameEn || item.variantNameNl;

              return (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl p-3 border border-stone-200/90 shadow-xs flex items-center gap-3 relative group"
                >
                  <img
                    src={item.image}
                    alt={displayName}
                    className="w-16 h-16 rounded-xl object-cover bg-stone-100 shrink-0 border border-stone-200"
                  />

                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-1">
                      <h4 className="font-extrabold text-stone-900 text-sm truncate leading-snug">
                        {displayName}
                      </h4>
                      <button
                        onClick={() => onRemoveItem(item.id)}
                        className="text-stone-400 hover:text-[#E53935] transition-colors p-1"
                        title={isNl ? 'Verwijder item' : 'Remove item'}
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    {displayVariant && (
                      <p className="text-[11px] font-bold text-amber-800">
                        {displayVariant}
                      </p>
                    )}

                    <div className="flex items-center justify-between mt-2">
                      <span className="text-sm font-black text-stone-900 tabular-nums">
                        € {(item.unitPrice * item.quantity).toFixed(2).replace('.', ',')}
                      </span>

                      {/* Quantity Controls */}
                      <div className="flex items-center gap-2 bg-stone-100 rounded-full px-2 py-0.5 border border-stone-200">
                        <button
                          onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                          className="w-6 h-6 rounded-full bg-white text-stone-700 flex items-center justify-center hover:bg-stone-200 transition-colors shadow-2xs cursor-pointer"
                          aria-label="Verminder aantal"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-xs font-black text-stone-900 w-4 text-center tabular-nums">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                          className="w-6 h-6 rounded-full bg-white text-stone-700 flex items-center justify-center hover:bg-stone-200 transition-colors shadow-2xs cursor-pointer"
                          aria-label="Vermeerder aantal"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Drawer Footer with Subtotal & Proceed to Checkout */}
        {cart.length > 0 && (
          <div className="p-5 bg-white border-t border-amber-200 space-y-3 shadow-lg">
            <div className="space-y-1.5 text-xs text-stone-600 font-semibold">
              <div className="flex justify-between">
                <span>{isNl ? 'Subtotaal gerechten' : 'Items subtotal'}</span>
                <span className="font-bold text-stone-900 tabular-nums">
                  € {subtotal.toFixed(2).replace('.', ',')}
                </span>
              </div>
              <div className="flex justify-between">
                <span>
                  {orderType === 'delivery'
                    ? (isNl ? 'Bezorgkosten Venlo' : 'Delivery fee')
                    : (isNl ? 'Afhaalservice' : 'Pickup service')}
                </span>
                <span className="font-bold text-stone-900 tabular-nums">
                  {orderType === 'delivery' ? `€ ${deliveryFee.toFixed(2).replace('.', ',')}` : (isNl ? 'Gratis' : 'Free')}
                </span>
              </div>
              <div className="pt-2 border-t border-stone-200 flex justify-between text-base font-black text-stone-900">
                <span>{isNl ? 'Totaalbedrag' : 'Total'}</span>
                <span className="text-xl text-[#E53935] tabular-nums">
                  € {grandTotal.toFixed(2).replace('.', ',')}
                </span>
              </div>
            </div>

            <button
              onClick={onProceedToCheckout}
              className="btn-press w-full py-4 rounded-full bg-[#E53935] hover:bg-[#D32F2F] text-white font-black text-sm tracking-wide shadow-lg shadow-rose-600/30 flex items-center justify-center gap-2 cursor-pointer transition-transform active:scale-95"
            >
              <span>{isNl ? 'NAAR AFREKENEN' : 'PROCEED TO CHECKOUT'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
