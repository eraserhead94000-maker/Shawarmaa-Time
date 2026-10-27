import React, { useState } from 'react';
import { X, Store, Bike, CheckCircle2, AlertCircle, ArrowLeft, ShieldCheck, Clock } from 'lucide-react';
import { CartItem, CustomerInfo, Language } from '../types';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  orderType: 'pickup' | 'delivery';
  setOrderType: (type: 'pickup' | 'delivery') => void;
  onSubmitOrder: (customer: CustomerInfo) => Promise<void>;
  language: Language;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  cart,
  orderType,
  setOrderType,
  onSubmitOrder,
  language,
}) => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [streetAddress, setStreetAddress] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [city, setCity] = useState('Venlo');
  const [notes, setNotes] = useState('');

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const isNl = language === 'nl';
  const subtotal = cart.reduce((sum, item) => sum + item.unitPrice * item.quantity, 0);
  const deliveryFee = orderType === 'delivery' ? 2.50 : 0.00;
  const grandTotal = subtotal + deliveryFee;

  const validateForm = () => {
    const errs: { [key: string]: string } = {};

    if (!fullName.trim()) {
      errs.fullName = isNl ? 'Vul alstublieft uw volledige naam in.' : 'Please enter your full name.';
    }

    if (!phone.trim()) {
      errs.phone = isNl ? 'Vul uw telefoonnummer in voor orderverificatie.' : 'Please enter your phone number.';
    } else if (phone.trim().replace(/\D/g, '').length < 8) {
      errs.phone = isNl ? 'Vul een geldig telefoonnummer in (minimaal 8 cijfers).' : 'Please enter a valid phone number.';
    }

    if (!email.trim()) {
      errs.email = isNl ? 'Vul uw e-mailadres in voor de bestelbevestiging.' : 'Please enter your email address.';
    } else if (!email.includes('@') || !email.includes('.')) {
      errs.email = isNl ? 'Vul een geldig e-mailadres in.' : 'Please enter a valid email address.';
    }

    if (orderType === 'delivery') {
      if (!streetAddress.trim()) {
        errs.streetAddress = isNl ? 'Straatnaam en huisnummer zijn verplicht bij bezorging.' : 'Street and house number required for delivery.';
      }
      if (!postalCode.trim()) {
        errs.postalCode = isNl ? 'Vul uw postcode in (bijv. 5911 EV).' : 'Please enter your postal code.';
      }
      if (!city.trim()) {
        errs.city = isNl ? 'Vul uw woonplaats in.' : 'Please enter your city.';
      }
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    try {
      const customer: CustomerInfo = {
        fullName: fullName.trim(),
        phone: phone.trim(),
        email: email.trim(),
        orderType,
        streetAddress: orderType === 'delivery' ? streetAddress.trim() : undefined,
        postalCode: orderType === 'delivery' ? postalCode.trim() : undefined,
        city: orderType === 'delivery' ? city.trim() : undefined,
        notes: notes.trim() || undefined,
      };

      await onSubmitOrder(customer);
    } catch (err) {
      console.error(err);
      setErrors({ form: isNl ? 'Er is een fout opgetreden bij het verzenden. Probeer opnieuw.' : 'An error occurred while submitting. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-900/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl bg-[#FFFDF7] rounded-3xl shadow-2xl border-2 border-amber-200/90 overflow-hidden flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 sm:p-6 border-b border-amber-200 bg-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="w-9 h-9 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-700 flex items-center justify-center transition-colors cursor-pointer"
              title={isNl ? 'Terug' : 'Back'}
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div>
              <h2 className="text-xl sm:text-2xl font-black text-stone-900 tracking-tight">
                {isNl ? 'Afrekenen & Gegevens' : 'Checkout & Details'}
              </h2>
              <p className="text-xs text-stone-500 font-medium">
                {isNl ? 'Directe orderbevestiging bij Shawarma Time Venlo' : 'Direct order confirmation at Shawarma Time Venlo'}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-700 flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Form Body */}
        <form onSubmit={handleSubmit} className="overflow-y-auto p-5 sm:p-7 space-y-6 flex-1">
          {/* Order Type Toggle */}
          <div className="space-y-2">
            <label className="block text-xs font-black uppercase tracking-wider text-stone-900">
              {isNl ? '1. Hoe wilt u uw bestelling ontvangen?' : '1. How would you like to receive your order?'}
            </label>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setOrderType('pickup')}
                className={`p-3.5 rounded-2xl border-2 flex items-center justify-center gap-2.5 font-extrabold text-sm transition-all cursor-pointer ${
                  orderType === 'pickup'
                    ? 'border-stone-900 bg-stone-900 text-white shadow-md'
                    : 'border-stone-200 hover:border-amber-300 bg-white text-stone-800'
                }`}
              >
                <Store className="w-4 h-4" />
                <span>{isNl ? 'Afhalen (Puteanusstr. 24)' : 'Pickup (Puteanusstr. 24)'}</span>
              </button>

              <button
                type="button"
                onClick={() => setOrderType('delivery')}
                className={`p-3.5 rounded-2xl border-2 flex items-center justify-center gap-2.5 font-extrabold text-sm transition-all cursor-pointer ${
                  orderType === 'delivery'
                    ? 'border-[#E53935] bg-[#E53935] text-white shadow-md'
                    : 'border-stone-200 hover:border-amber-300 bg-white text-stone-800'
                }`}
              >
                <Bike className="w-4 h-4" />
                <span>{isNl ? 'Bezorgen (+€2,50)' : 'Delivery (+€2.50)'}</span>
              </button>
            </div>
          </div>

          {/* Customer Details */}
          <div className="space-y-3">
            <label className="block text-xs font-black uppercase tracking-wider text-stone-900">
              {isNl ? '2. Uw Contactgegevens' : '2. Your Contact Details'}
            </label>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1">
                  {isNl ? 'Volledige Naam *' : 'Full Name *'}
                </label>
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="bijv. Jan Jansen"
                  className={`w-full px-3.5 py-2.5 rounded-xl border bg-white text-sm focus:outline-[#E53935] ${
                    errors.fullName ? 'border-red-500 ring-1 ring-red-500' : 'border-stone-300'
                  }`}
                />
                {errors.fullName && <p className="text-[11px] text-red-600 mt-1 font-semibold">{errors.fullName}</p>}
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1">
                  {isNl ? 'Telefoonnummer *' : 'Phone Number *'}
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="bijv. 06 12345678"
                  className={`w-full px-3.5 py-2.5 rounded-xl border bg-white text-sm focus:outline-[#E53935] ${
                    errors.phone ? 'border-red-500 ring-1 ring-red-500' : 'border-stone-300'
                  }`}
                />
                {errors.phone && <p className="text-[11px] text-red-600 mt-1 font-semibold">{errors.phone}</p>}
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-stone-700 mb-1">
                {isNl ? 'E-mailadres *' : 'Email Address *'}
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="bijv. jan@example.com"
                className={`w-full px-3.5 py-2.5 rounded-xl border bg-white text-sm focus:outline-[#E53935] ${
                  errors.email ? 'border-red-500 ring-1 ring-red-500' : 'border-stone-300'
                }`}
              />
              {errors.email && <p className="text-[11px] text-red-600 mt-1 font-semibold">{errors.email}</p>}
            </div>
          </div>

          {/* Delivery Address Fields (If Delivery Selected) */}
          {orderType === 'delivery' && (
            <div className="space-y-3 p-4 rounded-2xl bg-amber-50/80 border border-amber-200 animate-in fade-in">
              <label className="block text-xs font-black uppercase tracking-wider text-amber-950">
                {isNl ? 'Bezorgadres in Venlo & Omgeving' : 'Delivery Address'}
              </label>

              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1">
                  {isNl ? 'Straatnaam en Huisnummer *' : 'Street & House Number *'}
                </label>
                <input
                  type="text"
                  value={streetAddress}
                  onChange={(e) => setStreetAddress(e.target.value)}
                  placeholder="bijv. Kaldenkerkerweg 12"
                  className={`w-full px-3.5 py-2.5 rounded-xl border bg-white text-sm focus:outline-[#E53935] ${
                    errors.streetAddress ? 'border-red-500 ring-1 ring-red-500' : 'border-stone-300'
                  }`}
                />
                {errors.streetAddress && <p className="text-[11px] text-red-600 mt-1 font-semibold">{errors.streetAddress}</p>}
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    {isNl ? 'Postcode *' : 'Postal Code *'}
                  </label>
                  <input
                    type="text"
                    value={postalCode}
                    onChange={(e) => setPostalCode(e.target.value)}
                    placeholder="bijv. 5911 EV"
                    className={`w-full px-3.5 py-2.5 rounded-xl border bg-white text-sm focus:outline-[#E53935] ${
                      errors.postalCode ? 'border-red-500 ring-1 ring-red-500' : 'border-stone-300'
                    }`}
                  />
                  {errors.postalCode && <p className="text-[11px] text-red-600 mt-1 font-semibold">{errors.postalCode}</p>}
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    {isNl ? 'Plaats *' : 'City *'}
                  </label>
                  <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="Venlo"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 bg-white text-sm focus:outline-[#E53935]"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Notes / Special Instructions */}
          <div>
            <label className="block text-xs font-bold text-stone-700 mb-1">
              {isNl ? 'Opmerkingen voor de keuken / bezorger (optioneel)' : 'Order notes / dietary instructions (optional)'}
            </label>
            <textarea
              rows={2}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder={isNl ? 'Bijv. graag extra knoflooksaus apart, bel aan bij aankomst...' : 'E.g. extra garlic sauce on the side, ring doorbell...'}
              className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 bg-white text-sm focus:outline-[#E53935] resize-none"
            />
          </div>

          {/* Complete Order Summary */}
          <div className="p-4 rounded-2xl bg-white border border-stone-200 shadow-xs space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-stone-900 border-b border-stone-100 pb-2">
              {isNl ? 'Besteloverzicht' : 'Order Summary'} ({cart.length} {isNl ? 'items' : 'items'})
            </h4>

            <div className="space-y-2 max-h-40 overflow-y-auto pr-1">
              {cart.map((item) => (
                <div key={item.id} className="flex justify-between items-center text-xs">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-stone-900">{item.quantity}x</span>
                    <span className="text-stone-700">
                      {isNl ? item.name : item.nameEn || item.name}
                      {item.variantNameNl && (
                        <span className="text-stone-400 ml-1">
                          ({isNl ? item.variantNameNl : item.variantNameEn || item.variantNameNl})
                        </span>
                      )}
                    </span>
                  </div>
                  <span className="font-bold text-stone-900 tabular-nums">
                    € {(item.unitPrice * item.quantity).toFixed(2).replace('.', ',')}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-2 border-t border-stone-100 space-y-1 text-xs">
              <div className="flex justify-between text-stone-600">
                <span>{isNl ? 'Subtotaal' : 'Subtotal'}</span>
                <span className="tabular-nums font-semibold">€ {subtotal.toFixed(2).replace('.', ',')}</span>
              </div>
              <div className="flex justify-between text-stone-600">
                <span>{orderType === 'delivery' ? (isNl ? 'Bezorgkosten' : 'Delivery fee') : (isNl ? 'Afhalen' : 'Pickup')}</span>
                <span className="tabular-nums font-semibold">
                  {orderType === 'delivery' ? `€ ${deliveryFee.toFixed(2).replace('.', ',')}` : (isNl ? 'Gratis' : 'Free')}
                </span>
              </div>
              <div className="flex justify-between text-sm font-black text-stone-900 pt-1">
                <span>{isNl ? 'Totaal te betalen' : 'Grand Total'}</span>
                <span className="text-[#E53935] text-base tabular-nums">
                  € {grandTotal.toFixed(2).replace('.', ',')}
                </span>
              </div>
            </div>
          </div>

          {errors.form && (
            <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-xs text-red-700 flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{errors.form}</span>
            </div>
          )}

          {/* Final Submit Button */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={isSubmitting || cart.length === 0}
              className="btn-press w-full py-4 rounded-full bg-[#E53935] hover:bg-[#D32F2F] text-white font-black text-base tracking-wide shadow-xl shadow-rose-600/30 flex items-center justify-center gap-2 cursor-pointer transition-all disabled:opacity-50"
            >
              {isSubmitting ? (
                <span>{isNl ? 'Bezig met registreren...' : 'Placing order...'}</span>
              ) : (
                <>
                  <CheckCircle2 className="w-5 h-5" />
                  <span>{isNl ? 'Bestelling plaatsen' : 'Place Order'}</span>
                  <span className="text-rose-200 text-xs font-normal">
                    (€ {grandTotal.toFixed(2).replace('.', ',')})
                  </span>
                </>
              )}
            </button>
            <p className="text-[11px] text-stone-500 text-center mt-2 flex items-center justify-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>{isNl ? 'Betaal gemakkelijk contant of per pin bij ontvangst' : 'Pay easily with cash or PIN card upon receipt'}</span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};
