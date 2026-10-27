import React, { useState, useMemo } from 'react';
import { Flame, Search, Info, Sparkles, Plus, Check, SlidersHorizontal, Layers } from 'lucide-react';
import { MenuItem, CategoryId, Language } from '../types';
import { CATEGORIES } from '../data/menuData';

interface MenuSectionProps {
  items: MenuItem[];
  language: Language;
  onSelectItem: (item: MenuItem) => void;
  onQuickAddToCart: (item: MenuItem) => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({
  items,
  language,
  onSelectItem,
  onQuickAddToCart,
}) => {
  // Default to the first category: 'deals' (Combi Deals)
  const [selectedCategory, setSelectedCategory] = useState<CategoryId>('deals');
  const [searchQuery, setSearchQuery] = useState('');
  const [addedFeedbackIds, setAddedFeedbackIds] = useState<{ [key: string]: boolean }>({});

  const isNl = language === 'nl';

  // Current active category info
  const activeCategoryInfo = useMemo(() => {
    return CATEGORIES.find((c) => c.id === selectedCategory) || CATEGORIES[0];
  }, [selectedCategory]);

  // Filter items strictly by selected category (and search query if entered)
  const filteredItems = useMemo(() => {
    return items.filter((item) => {
      // Must match selected category
      const matchesCategory = item.category === selectedCategory;

      if (!searchQuery.trim()) return matchesCategory;

      const query = searchQuery.toLowerCase();
      const matchesSearch =
        item.name.toLowerCase().includes(query) ||
        (item.nameEn && item.nameEn.toLowerCase().includes(query)) ||
        item.description.toLowerCase().includes(query) ||
        (item.descriptionEn && item.descriptionEn.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [items, selectedCategory, searchQuery]);

  const handleButtonClick = (item: MenuItem, e: React.MouseEvent) => {
    e.stopPropagation();
    if (item.variants && item.variants.length > 0) {
      // Product requires size/flavor selection first
      onSelectItem(item);
    } else {
      // Direct add to basket with instant visual feedback
      onQuickAddToCart(item);
      setAddedFeedbackIds((prev) => ({ ...prev, [item.id]: true }));
      setTimeout(() => {
        setAddedFeedbackIds((prev) => ({ ...prev, [item.id]: false }));
      }, 1200);
    }
  };

  return (
    <section id="menu" className="py-14 sm:py-20 bg-[#FFFDF7] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-100 text-[#E53935] text-xs font-black uppercase tracking-wider mb-2.5">
              <Flame className="w-3.5 h-3.5 fill-[#E53935]" />
              <span>{isNl ? 'Online Bestellen' : 'Order Online'}</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-stone-900 tracking-tight">
              {isNl ? 'DE MENUKAART VAN SHAWARMA TIME' : 'SHAWARMA TIME OFFICIAL MENU'}
            </h2>
            <p className="text-stone-600 font-medium text-base sm:text-lg mt-1.5 max-w-2xl">
              {isNl
                ? 'Stel direct uw bestelling samen voor afhalen of bezorging in Venlo met onze officiële menukaart.'
                : 'Build your order directly on-site for pickup or local delivery in Venlo.'}
            </p>
          </div>

          {/* Quick Search */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-400" />
            <input
              type="text"
              placeholder={isNl ? 'Zoek gerecht, drankje, sambosa...' : 'Search dish, drink, mezza...'}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-full border border-stone-300 bg-white text-sm focus:outline-[#E53935] shadow-xs"
            />
          </div>
        </div>

        {/* Category Tabs: Strictly 5 categories in exact order */}
        <div className="sticky top-20 z-30 py-3 bg-[#FFFDF7]/95 backdrop-blur-md mb-6 border-b border-amber-200/60">
          <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto no-scrollbar scroll-smooth py-1">
            {CATEGORIES.map((cat, idx) => {
              const isActive = selectedCategory === cat.id;
              const catName = isNl ? cat.nameNl : cat.nameEn;
              const itemCount = items.filter((i) => i.category === cat.id).length;

              return (
                <button
                  key={cat.id}
                  onClick={() => {
                    setSelectedCategory(cat.id);
                    setSearchQuery('');
                  }}
                  className={`shrink-0 flex items-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-black transition-all cursor-pointer select-none active:scale-95 ${
                    isActive
                      ? 'bg-[#E53935] text-white shadow-lg shadow-rose-600/30 ring-2 ring-rose-500/30'
                      : 'bg-white hover:bg-stone-100 text-stone-800 border border-stone-200 shadow-xs'
                  }`}
                  aria-pressed={isActive}
                >
                  <span className="text-base sm:text-lg">{cat.icon}</span>
                  <span className="whitespace-nowrap">
                    {idx + 1}. {catName}
                  </span>
                  <span
                    className={`ml-1 text-[11px] px-2 py-0.5 rounded-full font-bold ${
                      isActive ? 'bg-white/25 text-white' : 'bg-stone-100 text-stone-600'
                    }`}
                  >
                    {itemCount}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Category Description Banner */}
        <div className="mb-8 p-4 sm:p-5 rounded-3xl bg-amber-50/90 border-2 border-amber-200 text-stone-800 flex items-start sm:items-center gap-3.5 shadow-xs">
          <div className="p-2.5 rounded-2xl bg-amber-100 text-amber-800 shrink-0">
            <Sparkles className="w-5 h-5 text-[#E53935]" />
          </div>
          <div className="flex-1">
            <h3 className="font-black text-stone-900 text-base sm:text-lg flex items-center gap-2">
              <span>{activeCategoryInfo.icon}</span>
              <span>{isNl ? activeCategoryInfo.nameNl : activeCategoryInfo.nameEn}</span>
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mt-0.5">
              "{isNl ? activeCategoryInfo.descriptionNl : activeCategoryInfo.descriptionEn}"
            </p>
          </div>
        </div>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <div className="text-center py-16 bg-stone-50 rounded-3xl border-2 border-dashed border-stone-200 p-8">
            <span className="text-4xl">🔍</span>
            <h4 className="text-xl font-bold text-stone-800 mt-2">
              {isNl ? 'Geen gerechten gevonden' : 'No items found'}
            </h4>
            <p className="text-sm text-stone-500 mt-1">
              {isNl
                ? 'Probeer een andere zoekterm binnen deze categorie.'
                : 'Try another search keyword in this category.'}
            </p>
            <button
              onClick={() => setSearchQuery('')}
              className="mt-4 px-5 py-2 rounded-full bg-[#E53935] text-white font-bold text-xs cursor-pointer"
            >
              {isNl ? 'Wis Zoekopdracht' : 'Clear Search'}
            </button>
          </div>
        )}

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item) => {
            const isSpecialOffer = item.id === 'deal-gerecht-drankje';
            const itemName = isNl ? item.name : item.nameEn || item.name;
            const itemDesc = isNl ? item.description : item.descriptionEn || item.description;
            const hasVariants = item.variants && item.variants.length > 0;
            const isJustAdded = addedFeedbackIds[item.id];

            return (
              <div
                key={item.id}
                onClick={() => onSelectItem(item)}
                className={`group relative bg-white rounded-3xl overflow-hidden border-2 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between cursor-pointer ${
                  isSpecialOffer
                    ? 'border-[#E53935] ring-4 ring-rose-500/10 shadow-xl'
                    : 'border-amber-100 shadow-md hover:shadow-xl hover:border-amber-300'
                }`}
              >
                {/* Image Section */}
                <div className="relative h-52 sm:h-56 w-full overflow-hidden bg-stone-100">
                  <img
                    src={item.image}
                    alt={itemName}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900/50 via-transparent to-transparent pointer-events-none" />

                  {/* Badges */}
                  <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                    {item.badge && (
                      <span
                        className={`px-3 py-1 rounded-full text-[11px] font-black uppercase tracking-wider shadow-md ${
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

                    {hasVariants && (
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-stone-900/85 text-white shadow-md backdrop-blur-xs flex items-center gap-1">
                        <Layers className="w-3 h-3 text-amber-300" />
                        <span>{isNl ? `${item.variants!.length} Opties` : `${item.variants!.length} Options`}</span>
                      </span>
                    )}
                  </div>

                  {/* Allergen Code */}
                  {item.allergens && (
                    <div className="absolute bottom-3 left-3 px-2.5 py-0.5 rounded-full bg-stone-900/80 backdrop-blur-xs text-white text-[10px] font-bold flex items-center gap-1">
                      <Info className="w-3 h-3 text-amber-300" />
                      <span>{isNl ? `Allergenen: ${item.allergens}` : `Allergens: ${item.allergens}`}</span>
                    </div>
                  )}
                </div>

                {/* Content Section */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-1.5">
                    <h3 className="text-xl font-black text-stone-900 tracking-tight group-hover:text-[#E53935] transition-colors leading-snug">
                      {itemName}
                    </h3>

                    <p className="text-sm text-stone-600 leading-relaxed min-h-[42px] line-clamp-2">
                      {itemDesc}
                    </p>

                    {/* Variant hint if grouped */}
                    {hasVariants && (
                      <div className="pt-1 flex flex-wrap gap-1.5">
                        {item.variants!.map((v) => (
                          <span
                            key={v.id}
                            className="text-[11px] font-bold px-2 py-0.5 rounded-lg bg-stone-100 text-stone-700 border border-stone-200"
                          >
                            {isNl ? v.nameNl.split('(')[0].trim() : (v.nameEn || v.nameNl).split('(')[0].trim()}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Special Offer Notice */}
                    {isSpecialOffer && (
                      <p className="text-[11px] text-amber-900 bg-amber-50 p-2.5 rounded-xl font-semibold border border-amber-200">
                        * {isNl
                          ? 'Speciale actieprijs. Gerecht + drankje naar keuze voor €10,65.'
                          : 'Special deal price. Main dish + drink of choice combo for €10.65.'}
                      </p>
                    )}
                  </div>

                  {/* Price and Action Buttons */}
                  <div className="pt-3 border-t border-amber-100 flex items-center justify-between gap-3">
                    <div className="flex flex-col">
                      {hasVariants && (
                        <span className="text-[10px] uppercase font-bold text-stone-400">
                          {isNl ? 'Vanaf' : 'From'}
                        </span>
                      )}
                      <span className="text-2xl font-black text-stone-900 tabular-nums">
                        € {item.price.toFixed(2).replace('.', ',')}
                      </span>
                    </div>

                    <button
                      type="button"
                      onClick={(e) => handleButtonClick(item, e)}
                      className={`btn-press flex items-center gap-1.5 px-4 sm:px-5 py-2.5 rounded-full font-black text-xs transition-all cursor-pointer shadow-md active:scale-95 ${
                        isJustAdded
                          ? 'bg-emerald-600 text-white shadow-emerald-600/30'
                          : hasVariants
                          ? 'bg-stone-900 hover:bg-stone-800 text-white shadow-stone-900/20'
                          : 'bg-[#E53935] hover:bg-[#D32F2F] text-white shadow-rose-600/20'
                      }`}
                    >
                      {isJustAdded ? (
                        <>
                          <Check className="w-4 h-4 stroke-[3]" />
                          <span>{isNl ? 'TOEGEVOEGD' : 'ADDED'}</span>
                        </>
                      ) : hasVariants ? (
                        <>
                          <SlidersHorizontal className="w-3.5 h-3.5" />
                          <span>{isNl ? 'KIES OPTIE' : 'CHOOSE OPTION'}</span>
                        </>
                      ) : (
                        <>
                          <Plus className="w-4 h-4 stroke-[3]" />
                          <span>{isNl ? 'VOEG TOE' : 'ADD TO BASKET'}</span>
                        </>
                      )}
                    </button>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
