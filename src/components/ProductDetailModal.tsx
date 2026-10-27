import React, { useState, useEffect } from 'react';
import { X, Plus, Minus, Check, Info, Sparkles, ShoppingBag } from 'lucide-react';
import { MenuItem, ProductVariant, Language } from '../types';

interface ProductDetailModalProps {
  item: MenuItem | null;
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (item: MenuItem, variant: ProductVariant | null, quantity: number, notes?: string) => void;
  language: Language;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  item,
  isOpen,
  onClose,
  onAddToCart,
  language,
}) => {
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [notes, setNotes] = useState('');
  const [isAddedFeedback, setIsAddedFeedback] = useState(false);

  // Initialize or reset selected variant and quantity when item changes
  useEffect(() => {
    if (item?.variants && item.variants.length > 0) {
      setSelectedVariant(item.variants[0]);
    } else {
      setSelectedVariant(null);
    }
    setQuantity(1);
    setNotes('');
    setIsAddedFeedback(false);
  }, [item]);

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen || !item) return null;

  const isNl = language === 'nl';
  const itemName = isNl ? item.name : item.nameEn || item.name;
  const itemDesc = isNl ? item.description : item.descriptionEn || item.description;
  const unitPrice = selectedVariant ? selectedVariant.price : item.price;
  const totalPrice = unitPrice * quantity;
  const isSpecialOffer = item.id === 'deal-gerecht-drankje';

  const handleAdd = () => {
    onAddToCart(item, selectedVariant, quantity, notes.trim() || undefined);
    setIsAddedFeedback(true);
    setTimeout(() => {
      setIsAddedFeedback(false);
      onClose();
    }, 600);
  };

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-stone-900/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg bg-[#FFFDF7] rounded-3xl shadow-2xl border-2 border-amber-200/90 overflow-hidden flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label={isNl ? 'Sluiten' : 'Close'}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/90 hover:bg-white text-stone-700 hover:text-stone-900 flex items-center justify-center shadow-md transition-all active:scale-95 cursor-pointer border border-stone-200"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header & Image */}
        <div className="relative h-56 sm:h-64 w-full shrink-0 overflow-hidden bg-stone-100">
          <img
            src={item.image}
            alt={itemName}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-stone-950/20 to-transparent" />

          {/* Badges */}
          <div className="absolute top-4 left-4 flex flex-wrap gap-2">
            {item.badge && (
              <span
                className={`px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider shadow-md ${
                  item.badgeColor === 'red'
                    ? 'bg-[#E53935] text-white'
                    : item.badgeColor === 'orange'
                    ? 'bg-orange-500 text-white'
                    : item.badgeColor === 'green'
                    ? 'bg-emerald-600 text-white'
                    : 'bg-amber-400 text-stone-950'
                }`}
              >
                {isNl ? item.badge : item.badgeEn || item.badge}
              </span>
            )}
            {item.variants && item.variants.length > 0 && (
              <span className="px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-stone-900/80 text-white shadow-md backdrop-blur-xs">
                {isNl ? `${item.variants.length} Opties` : `${item.variants.length} Options`}
              </span>
            )}
          </div>

          {/* Price Tag in Image Header */}
          <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between text-white">
            <div>
              <h2 className="text-2xl sm:text-3xl font-black tracking-tight drop-shadow-md">
                {itemName}
              </h2>
            </div>
            <div className="bg-[#E53935] px-3.5 py-1.5 rounded-2xl shadow-lg border border-rose-400 text-right shrink-0">
              <span className="text-xl sm:text-2xl font-black tabular-nums text-white">
                € {unitPrice.toFixed(2).replace('.', ',')}
              </span>
            </div>
          </div>
        </div>

        {/* Scrollable Body */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-5">
          {/* Description */}
          <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
            {itemDesc}
          </p>

          {/* Special Offer clarification */}
          {isSpecialOffer && (
            <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-amber-950 text-xs sm:text-sm space-y-1">
              <div className="flex items-center gap-1.5 font-bold text-amber-900">
                <Sparkles className="w-4 h-4 text-[#E53935]" />
                <span>{isNl ? 'Speciale Combi Deal — € 10,65' : 'Special Combi Deal — € 10.65'}</span>
              </div>
              <p className="text-stone-700 leading-relaxed text-xs">
                {isNl
                  ? 'Kies jouw gewenste gerecht en drankje bij opmerkingen of telefonisch bij de bereiding in onze keuken in Venlo.'
                  : 'Specify your dish and beverage preference in the instructions below or during order preparation.'}
              </p>
            </div>
          )}

          {/* Allergens */}
          {item.allergens && (
            <div className="flex items-center gap-2 text-xs font-semibold text-stone-500 bg-stone-100 px-3 py-2 rounded-xl">
              <Info className="w-4 h-4 text-amber-600 shrink-0" />
              <span>
                {isNl ? `Allergenen: ${item.allergens}` : `Allergens: ${item.allergens}`}
              </span>
            </div>
          )}

          {/* Variants Selector (Size, Portion, Filling, Flavor) */}
          {item.variants && item.variants.length > 0 && (
            <div className="space-y-2.5 pt-1">
              <label className="block text-xs font-black uppercase tracking-wider text-stone-900">
                {isNl ? 'Selecteer uw keuze / formaat:' : 'Select your option / size:'}
              </label>

              <div className="grid grid-cols-1 gap-2">
                {item.variants.map((v) => {
                  const isSelected = selectedVariant?.id === v.id;
                  const vName = isNl ? v.nameNl : v.nameEn;
                  const vDesc = isNl ? v.descriptionNl : v.descriptionEn;

                  return (
                    <button
                      key={v.id}
                      type="button"
                      onClick={() => setSelectedVariant(v)}
                      className={`w-full text-left p-3 rounded-2xl border-2 transition-all flex items-center justify-between gap-3 cursor-pointer ${
                        isSelected
                          ? 'border-[#E53935] bg-rose-50/70 shadow-xs'
                          : 'border-stone-200 hover:border-amber-300 bg-white'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 transition-colors ${
                            isSelected
                              ? 'border-[#E53935] bg-[#E53935] text-white'
                              : 'border-stone-300 bg-white'
                          }`}
                        >
                          {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                        </div>
                        <div>
                          <div className="font-extrabold text-stone-900 text-sm">
                            {vName}
                          </div>
                          {vDesc && (
                            <div className="text-[11px] text-stone-500">{vDesc}</div>
                          )}
                        </div>
                      </div>

                      <div className="text-right shrink-0">
                        <span className="font-black text-stone-900 text-sm tabular-nums">
                          € {v.price.toFixed(2).replace('.', ',')}
                        </span>
                        {v.volumeOrSize && (
                          <span className="block text-[10px] font-bold text-amber-700">
                            {v.volumeOrSize}
                          </span>
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Quantity and Notes */}
          <div className="space-y-3 pt-2 border-t border-stone-200">
            <div className="flex items-center justify-between">
              <span className="text-xs font-black uppercase tracking-wider text-stone-900">
                {isNl ? 'Aantal stuks:' : 'Quantity:'}
              </span>
              <div className="flex items-center gap-3 bg-stone-100 rounded-full px-3 py-1 border border-stone-200">
                <button
                  type="button"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="w-7 h-7 rounded-full bg-white text-stone-800 flex items-center justify-center shadow-xs hover:bg-stone-200 transition-colors cursor-pointer"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="text-base font-black text-stone-900 tabular-nums w-5 text-center">
                  {quantity}
                </span>
                <button
                  type="button"
                  onClick={() => setQuantity((q) => q + 1)}
                  className="w-7 h-7 rounded-full bg-white text-stone-800 flex items-center justify-center shadow-xs hover:bg-stone-200 transition-colors cursor-pointer"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-stone-600 mb-1">
                {isNl ? 'Speciale instructie / sausvoorkeur:' : 'Special instructions / sauce preference:'}
              </label>
              <input
                type="text"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder={isNl ? 'Bijv. extra knoflooksaus, zonder ui...' : 'E.g. extra garlic sauce, no onions...'}
                className="w-full px-3.5 py-2 rounded-xl border border-stone-300 bg-white text-xs focus:outline-[#E53935]"
              />
            </div>
          </div>
        </div>

        {/* Modal Footer: Add To Basket Button */}
        <div className="p-4 sm:p-5 bg-white border-t border-amber-200 flex items-center justify-between gap-4">
          <div className="flex flex-col">
            <span className="text-[10px] uppercase font-bold text-stone-400">
              {isNl ? 'Totaal voor item' : 'Item total'}
            </span>
            <span className="text-xl sm:text-2xl font-black text-stone-900 tabular-nums">
              € {totalPrice.toFixed(2).replace('.', ',')}
            </span>
          </div>

          <button
            type="button"
            onClick={handleAdd}
            className={`btn-press flex-1 py-3.5 px-6 rounded-full font-black text-sm tracking-wide shadow-lg flex items-center justify-center gap-2 cursor-pointer transition-all active:scale-95 ${
              isAddedFeedback
                ? 'bg-emerald-600 text-white shadow-emerald-600/30'
                : 'bg-[#E53935] hover:bg-[#D32F2F] text-white shadow-rose-600/30'
            }`}
          >
            {isAddedFeedback ? (
              <>
                <Check className="w-5 h-5" />
                <span>{isNl ? 'TOEGEVOEGD AAN WINKELMAND!' : 'ADDED TO BASKET!'}</span>
              </>
            ) : (
              <>
                <ShoppingBag className="w-4 h-4" />
                <span>{isNl ? 'VOEG TOE AAN WINKELMAND' : 'ADD TO BASKET'}</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
