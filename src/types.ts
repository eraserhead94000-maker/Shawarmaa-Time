export type CategoryId = 'deals' | 'broodjes' | 'maaltijden' | 'bijgerechten' | 'dranken';

export type Language = 'nl' | 'en';

export interface ProductVariant {
  id: string;
  nameNl: string;
  nameEn: string;
  price: number; // in Euros €
  descriptionNl?: string;
  descriptionEn?: string;
  volumeOrSize?: string;
}

export interface MenuItem {
  id: string;
  name: string;
  nameEn?: string;
  category: CategoryId;
  description: string;
  descriptionEn?: string;
  price: number; // base price in Euros €
  image: string;
  badge?: string;
  badgeEn?: string;
  badgeColor?: 'red' | 'orange' | 'green' | 'amber';
  isPopular?: boolean;
  isSpicy?: boolean;
  allergens?: string;
  variants?: ProductVariant[]; // Only verified variants from official menu
}

export interface StoreLocation {
  id: string;
  name: string;
  address: string;
  city: string;
  postalCode: string;
  hours: string;
  hoursEn: string;
  waitTime: string;
  waitTimeEn: string;
  phone: string;
  isOpen: boolean;
  orderUrl?: string;
  uberEatsUrl?: string;
}

export interface CartItem {
  id: string; // unique line ID combining item and selected variant
  menuItemId: string;
  name: string;
  nameEn?: string;
  variantId?: string;
  variantNameNl?: string;
  variantNameEn?: string;
  unitPrice: number;
  quantity: number;
  image: string;
  category: CategoryId;
  notes?: string;
}

export interface CustomerInfo {
  fullName: string;
  phone: string;
  email: string;
  orderType: 'pickup' | 'delivery';
  streetAddress?: string;
  postalCode?: string;
  city?: string;
  notes?: string;
}

export interface PlacedOrder {
  orderNumber: string;
  createdAt: string;
  customer: CustomerInfo;
  items: CartItem[];
  subtotal: number;
  deliveryFee: number;
  grandTotal: number;
  status: 'received' | 'preparing' | 'ready' | 'completed';
  estimatedTime: string;
  orderType: 'pickup' | 'delivery';
  submissionMode: 'direct_kitchen' | 'local_order_adapter';
}
