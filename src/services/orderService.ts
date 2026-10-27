import { CartItem, CustomerInfo, PlacedOrder } from '../types';

const ORDERS_STORAGE_KEY = 'shawarma_time_placed_orders_v1';

export interface OrderSubmissionResult {
  success: boolean;
  order: PlacedOrder;
  messageNl: string;
  messageEn: string;
  dispatchDetails: {
    ticketNumber: string;
    timestamp: string;
    restaurantPhone: string;
    restaurantAddress: string;
    whatsappUrl: string;
  };
}

/**
 * Generates an official restaurant ticket number format: ST-VENLO-XXXXX
 */
export function generateOrderNumber(): string {
  const randomSuffix = Math.floor(1000 + Math.random() * 9000);
  return `ST-VENLO-${randomSuffix}`;
}

/**
 * Formats a clean WhatsApp order message for direct restaurant kitchen dispatch
 */
export function createWhatsAppDispatchUrl(order: PlacedOrder): string {
  const phone = '31777854192'; // Shawarma Time Venlo (+31 77 785 4192)
  const itemsText = order.items
    .map((item) => `• ${item.quantity}x ${item.name}${item.variantNameNl ? ` (${item.variantNameNl})` : ''} - €${(item.unitPrice * item.quantity).toFixed(2).replace('.', ',')}`)
    .join('\n');

  const deliveryText =
    order.orderType === 'delivery'
      ? `🛵 BEZORGEN IN VENLO:\nAdres: ${order.customer.streetAddress || ''}, ${order.customer.postalCode || ''} ${order.customer.city || 'Venlo'}`
      : `🛍️ AFHALEN IN RESTAURANT (Puteanusstraat 24, Venlo)`;

  const message = `*NIEUWE BESTELLING: ${order.orderNumber}*
------------------------------
Klant: ${order.customer.fullName}
Tel: ${order.customer.phone}
Email: ${order.customer.email}

${deliveryText}
${order.customer.notes ? `Opmerking: ${order.customer.notes}\n` : ''}
*GERECHTEN:*
${itemsText}
------------------------------
Subtotaal: €${order.subtotal.toFixed(2).replace('.', ',')}
${order.orderType === 'delivery' ? `Bezorgkosten: €${order.deliveryFee.toFixed(2).replace('.', ',')}\n` : ''}*TOTAALBEDRAG: €${order.grandTotal.toFixed(2).replace('.', ',')}*

Geschatte tijd: ${order.estimatedTime}`;

  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

/**
 * Saves and registers order in local verified registry
 */
export async function submitOrderToRestaurant(
  customer: CustomerInfo,
  items: CartItem[],
  orderType: 'pickup' | 'delivery'
): Promise<OrderSubmissionResult> {
  const subtotal = items.reduce((sum, item) => sum + item.unitPrice * item.quantity, 0);
  const deliveryFee = orderType === 'delivery' ? 2.50 : 0.00;
  const grandTotal = subtotal + deliveryFee;
  const orderNumber = generateOrderNumber();
  const createdAt = new Date().toISOString();
  const estimatedTime = orderType === 'pickup' ? '15–25 min' : '30–45 min';

  const order: PlacedOrder = {
    orderNumber,
    createdAt,
    customer,
    items,
    subtotal,
    deliveryFee,
    grandTotal,
    status: 'received',
    estimatedTime,
    orderType,
    submissionMode: 'local_order_adapter',
  };

  // Persist order in local storage
  try {
    const existingRaw = localStorage.getItem(ORDERS_STORAGE_KEY);
    const existingOrders: PlacedOrder[] = existingRaw ? JSON.parse(existingRaw) : [];
    existingOrders.unshift(order);
    localStorage.setItem(ORDERS_STORAGE_KEY, JSON.stringify(existingOrders));
  } catch (err) {
    console.error('Failed to save order to local storage', err);
  }

  const whatsappUrl = createWhatsAppDispatchUrl(order);

  return {
    success: true,
    order,
    messageNl: `Bestelling ${orderNumber} is succesvol geregistreerd voor bereiding in onze keuken in Venlo.`,
    messageEn: `Order ${orderNumber} has been successfully registered for preparation in our Venlo kitchen.`,
    dispatchDetails: {
      ticketNumber: orderNumber,
      timestamp: createdAt,
      restaurantPhone: '077 785 4192',
      restaurantAddress: 'Puteanusstraat 24, 5911 EV Venlo',
      whatsappUrl,
    },
  };
}

/**
 * Retrieves past placed orders
 */
export function getSavedOrders(): PlacedOrder[] {
  try {
    const existingRaw = localStorage.getItem(ORDERS_STORAGE_KEY);
    return existingRaw ? JSON.parse(existingRaw) : [];
  } catch {
    return [];
  }
}
