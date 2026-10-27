import React from 'react';
import { X, CheckCircle2, Clock, MapPin, Phone, MessageSquare, Printer, Store, Bike, Sparkles } from 'lucide-react';
import { PlacedOrder, Language } from '../types';
import { OFFICIAL_STORE } from '../data/menuData';

interface OrderConfirmationModalProps {
  order: PlacedOrder | null;
  isOpen: boolean;
  onClose: () => void;
  language: Language;
}

export const OrderConfirmationModal: React.FC<OrderConfirmationModalProps> = ({
  order,
  isOpen,
  onClose,
  language,
}) => {
  if (!isOpen || !order) return null;

  const isNl = language === 'nl';

  const handlePrint = () => {
    window.print();
  };

  const whatsappUrl = `https://wa.me/31777854192?text=${encodeURIComponent(
    `*BESTELLING BEVESTIGING: ${order.orderNumber}*\n` +
    `Klant: ${order.customer.fullName} (${order.customer.phone})\n` +
    `${order.orderType === 'delivery' ? `Bezorgen op: ${order.customer.streetAddress}, ${order.customer.postalCode} ${order.customer.city}` : 'Afhalen bij restaurant (Puteanusstraat 24)'}\n` +
    `Items:\n${order.items.map((i) => `- ${i.quantity}x ${i.name} (€${(i.unitPrice * i.quantity).toFixed(2)})`).join('\n')}\n` +
    `Totaal: €${order.grandTotal.toFixed(2)}`
  )}`;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-900/75 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-xl bg-[#FFFDF7] rounded-3xl shadow-2xl border-2 border-emerald-300 overflow-hidden flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Badge */}
        <div className="p-6 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-white text-emerald-700 flex items-center justify-center shrink-0 shadow-md">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <div>
              <div className="inline-block px-2.5 py-0.5 rounded-full bg-white/20 text-[10px] font-black uppercase tracking-wider mb-1">
                {isNl ? 'Bestelling Geregistreerd' : 'Order Registered'}
              </div>
              <h2 className="text-xl sm:text-2xl font-black tracking-tight leading-tight">
                {isNl ? 'Bedankt voor uw bestelling!' : 'Thank you for your order!'}
              </h2>
            </div>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto p-5 sm:p-7 space-y-5 flex-1">
          {/* Order Ticket & Estimated Time */}
          <div className="grid grid-cols-2 gap-3 p-4 rounded-2xl bg-white border border-stone-200 shadow-xs">
            <div>
              <span className="text-[10px] uppercase font-bold text-stone-500 block">
                {isNl ? 'Ordernummer' : 'Order Number'}
              </span>
              <span className="text-base sm:text-lg font-black text-stone-900">
                {order.orderNumber}
              </span>
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold text-stone-500 block">
                {isNl ? 'Geschatte Tijd' : 'Estimated Time'}
              </span>
              <span className="text-base sm:text-lg font-black text-emerald-600 flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                <span>{order.estimatedTime}</span>
              </span>
            </div>
          </div>

          {/* Live Kitchen Status Progress Bar */}
          <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 space-y-2.5">
            <div className="flex items-center justify-between text-xs font-black text-stone-800">
              <span className="flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-[#E53935]" />
                <span>{isNl ? 'Status: Wordt vers bereid' : 'Status: Preparing fresh'}</span>
              </span>
              <span className="text-[#E53935]">15–25 min</span>
            </div>

            <div className="grid grid-cols-3 gap-1.5">
              <div className="h-2 rounded-full bg-emerald-500" title="Ontvangen" />
              <div className="h-2 rounded-full bg-amber-500 animate-pulse" title="In bereiding" />
              <div className="h-2 rounded-full bg-stone-200" title="Klaar" />
            </div>

            <div className="flex justify-between text-[10px] text-stone-600 font-bold">
              <span>1. {isNl ? 'Ontvangen' : 'Received'}</span>
              <span>2. {isNl ? 'In Bereiding' : 'Preparing'}</span>
              <span>3. {order.orderType === 'delivery' ? (isNl ? 'Onderweg' : 'En route') : (isNl ? 'Afhalen' : 'Ready')}</span>
            </div>
          </div>

          {/* Delivery or Collection Details */}
          <div className="p-4 rounded-2xl bg-white border border-stone-200 space-y-2 text-xs">
            <h4 className="font-black text-stone-900 uppercase tracking-wider text-[11px] flex items-center gap-1.5">
              {order.orderType === 'delivery' ? (
                <>
                  <Bike className="w-4 h-4 text-[#E53935]" />
                  <span>{isNl ? 'Bezorggegevens' : 'Delivery Details'}</span>
                </>
              ) : (
                <>
                  <Store className="w-4 h-4 text-emerald-600" />
                  <span>{isNl ? 'Afhaallocatie' : 'Pickup Location'}</span>
                </>
              )}
            </h4>

            {order.orderType === 'delivery' ? (
              <div className="text-stone-700 space-y-0.5">
                <p className="font-bold text-stone-900">{order.customer.fullName} ({order.customer.phone})</p>
                <p>{order.customer.streetAddress}</p>
                <p>{order.customer.postalCode} {order.customer.city}</p>
                {order.customer.notes && <p className="italic text-stone-500 mt-1">"{order.customer.notes}"</p>}
              </div>
            ) : (
              <div className="text-stone-700 space-y-0.5">
                <p className="font-bold text-stone-900">Shawarma Time Venlo</p>
                <p>Puteanusstraat 24, 5911 EV Venlo</p>
                <p className="text-stone-500">{isNl ? 'Meld uw naam bij de balie:' : 'State your name at the counter:'} <strong className="text-stone-800">{order.customer.fullName}</strong></p>
              </div>
            )}
          </div>

          {/* Ordered Items Summary */}
          <div className="p-4 rounded-2xl bg-white border border-stone-200 space-y-2 text-xs">
            <h4 className="font-black text-stone-900 uppercase tracking-wider text-[11px] border-b border-stone-100 pb-1.5">
              {isNl ? 'Bestelde Gerechten' : 'Ordered Items'}
            </h4>

            <div className="space-y-1.5 max-h-36 overflow-y-auto pr-1">
              {order.items.map((item) => (
                <div key={item.id} className="flex justify-between items-center">
                  <div>
                    <span className="font-bold text-stone-900">{item.quantity}x </span>
                    <span className="text-stone-700">{isNl ? item.name : item.nameEn || item.name}</span>
                    {item.variantNameNl && (
                      <span className="text-[10px] text-amber-800 ml-1">
                        ({isNl ? item.variantNameNl : item.variantNameEn || item.variantNameNl})
                      </span>
                    )}
                  </div>
                  <span className="font-bold text-stone-900 tabular-nums">
                    € {(item.unitPrice * item.quantity).toFixed(2).replace('.', ',')}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-2 border-t border-stone-100 flex justify-between text-sm font-black text-stone-900">
              <span>{isNl ? 'Totaalbedrag' : 'Total'}</span>
              <span className="text-[#E53935] text-base tabular-nums">
                € {order.grandTotal.toFixed(2).replace('.', ',')}
              </span>
            </div>
          </div>

          {/* Direct Kitchen Dispatch & Telephone Verification */}
          <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 space-y-3">
            <div>
              <h4 className="text-xs font-black text-emerald-950 uppercase tracking-wider flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-emerald-700" />
                <span>{isNl ? 'Directe Keukenverbinding' : 'Direct Kitchen Connection'}</span>
              </h4>
              <p className="text-[11px] text-emerald-900 mt-1 leading-relaxed">
                {isNl
                  ? 'Onze koks zijn direct geïnformeerd. U kunt de bestelling tevens direct openen in WhatsApp of bellen naar het restaurant voor live afstemming.'
                  : 'Our kitchen is notified. You can also open the ticket directly in WhatsApp or call the restaurant for live updates.'}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs flex items-center justify-center gap-1.5 shadow-xs transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>{isNl ? 'WhatsApp naar Keuken' : 'WhatsApp to Kitchen'}</span>
              </a>

              <a
                href={`tel:${OFFICIAL_STORE.phone.replace(/\s+/g, '')}`}
                className="py-2.5 px-3 rounded-xl bg-white hover:bg-stone-100 text-stone-900 font-extrabold text-xs flex items-center justify-center gap-1.5 border border-stone-300 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-600" />
                <span>077 785 4192</span>
              </a>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-5 bg-white border-t border-amber-200 flex flex-col sm:flex-row items-center gap-2.5">
          <button
            onClick={handlePrint}
            className="w-full sm:w-auto py-3 px-5 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-bold flex items-center justify-center gap-1.5 border border-stone-200 cursor-pointer"
          >
            <Printer className="w-3.5 h-3.5 text-stone-600" />
            <span>{isNl ? 'Print / Bewaar Bon' : 'Print / Save Receipt'}</span>
          </button>

          <button
            onClick={onClose}
            className="w-full sm:flex-1 py-3 px-5 rounded-full bg-[#E53935] hover:bg-[#D32F2F] text-white text-xs font-black shadow-md cursor-pointer transition-transform active:scale-95"
          >
            {isNl ? 'Sluiten & Nieuwe Bestelling' : 'Close & New Order'}
          </button>
        </div>
      </div>
    </div>
  );
};
