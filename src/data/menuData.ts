import { MenuItem, StoreLocation, CategoryId } from '../types';

// Vite-compatible asset imports (resolved and hashed during build for production)
import officialLogo from '../assets/official_logo.png';

// High-fidelity food and hero images
import heroShawarmaSpread from '../assets/images/hero_shawarma_spread_1793131192553.jpg';
import chickenShawarmaWrap from '../assets/images/food_chicken_shawarma_wrap_1793131194348.jpg';
import shawarmaExtra from '../assets/images/food_shawarma_extra_1793133127177.jpg';
import shawarmaTimeCheese from '../assets/images/food_shawarma_time_cheese_1793133140484.jpg';
import broodjeFriet from '../assets/images/food_broodje_friet_1793133099298.jpg';
import kipBurger from '../assets/images/food_kip_burger_1793133114009.jpg';
import beefArabiPlatter from '../assets/images/food_beef_arabi_platter_1793131194572.jpg';
import batataHarraFries from '../assets/images/food_batata_harra_fries_1793131194337.jpg';
import kapsalonTime from '../assets/images/food_kapsalon_time_1793132403805.jpg';
import broastedCrispyChicken from '../assets/images/food_broasted_crispy_chicken_1793132469932.jpg';
import syrianMezzaHummus from '../assets/images/food_syrian_mezza_hummus_1793132466863.jpg';
import crispyChickenWrap from '../assets/images/crispy_chicken_wrap_1793317811621.jpg';
import spicyZingerWrap from '../assets/images/spicy_zinger_wrap_1793317811968.jpg';
import classicBeefBurger from '../assets/images/classic_beef_burger_1793317812410.jpg';

// Dedicated accurate drink images
import drinkLiptonIceTea from '../assets/images/drink_lipton_ice_tea_1793133417816.jpg';
import drinkRedBullCan from '../assets/images/drink_red_bull_can_1793133431803.jpg';
import drinkCocaColaCan from '../assets/images/drink_coca_cola_can_1793133432716.jpg';
import drinkAyranYogurt from '../assets/images/drink_ayran_yogurt_1793133433277.jpg';
import drinkSpaWaterBottle from '../assets/images/drink_spa_water_bottle_1793133433417.jpg';
import drinkCapriSunPouch from '../assets/images/drink_capri_sun_pouch_1793133450043.jpg';
import drinkFantaOrangeCan from '../assets/images/drink_fanta_orange_can_1793133463717.jpg';
import drink7upLemonCan from '../assets/images/drink_7up_lemon_can_1793133463595.jpg';

// Dedicated accurate Bijgerechten (Side dishes) images - 10 distinct photos
import sideKipnuggets from '../assets/images/side_kipnuggets_1793134894315.jpg';
import sideSambosaKaas from '../assets/images/side_sambosa_kaas_1793134906371.jpg';
import sideSambosaVlees from '../assets/images/side_sambosa_vlees_1793134918214.jpg';
import sideMutabal from '../assets/images/side_mutabal_1793134930956.jpg';
import sideHummus from '../assets/images/side_hummus_1793134943167.jpg';
import sideKibbeh from '../assets/images/side_kibbeh_1793134955615.jpg';
import sideKomkommerYoghurt from '../assets/images/side_komkommer_yoghurt_1793134968400.jpg';
import sideMuhammara from '../assets/images/side_muhammara_1793134980557.jpg';
import sideWijnbladeren from '../assets/images/side_wijnbladeren_1793134993454.jpg';
import sideFritSchotel from '../assets/images/side_frit_schotel_1793135005895.jpg';

export const OFFICIAL_LOGO = officialLogo;

// High-fidelity accurate food and drink images
export const HERO_IMAGE = heroShawarmaSpread;
export const CHICKEN_WRAP_IMAGE = chickenShawarmaWrap;
export const SHAWARMA_EXTRA_IMAGE = shawarmaExtra;
export const SHAWARMA_TIME_CHEESE_IMAGE = shawarmaTimeCheese;
export const BROODJE_FRIET_IMAGE = broodjeFriet;
export const KIP_BURGER_IMAGE = kipBurger;
export const ARABI_PLATTER_IMAGE = heroShawarmaSpread;
export const BEEF_ARABI_IMAGE = beefArabiPlatter;
export const BATATA_FRIES_IMAGE = batataHarraFries;
export const KAPSALON_IMAGE = kapsalonTime;
export const BROASTED_IMAGE = broastedCrispyChicken;
export const MEZZA_IMAGE = syrianMezzaHummus;
export const CRISPY_CHICKEN_WRAP_IMAGE = crispyChickenWrap;
export const SPICY_ZINGER_WRAP_IMAGE = spicyZingerWrap;
export const CLASSIC_BEEF_BURGER_IMAGE = classicBeefBurger;

// Dedicated accurate drink images
export const DRINK_LIPTON_PEACH_IMAGE = drinkLiptonIceTea;
export const DRINK_RED_BULL_IMAGE = drinkRedBullCan;
export const DRINK_COCA_COLA_IMAGE = drinkCocaColaCan;
export const DRINK_AYRAN_IMAGE = drinkAyranYogurt;
export const DRINK_SPA_IMAGE = drinkSpaWaterBottle;
export const DRINK_CAPRI_SUN_IMAGE = drinkCapriSunPouch;
export const DRINK_FANTA_IMAGE = drinkFantaOrangeCan;
export const DRINK_7UP_IMAGE = drink7upLemonCan;

// Dedicated accurate Bijgerechten (Side dishes) images - 10 distinct photos
export const SIDE_KIPNUGGETS_IMAGE = sideKipnuggets;
export const SIDE_SAMBOSA_KAAS_IMAGE = sideSambosaKaas;
export const SIDE_SAMBOSA_VLEES_IMAGE = sideSambosaVlees;
export const SIDE_MUTABAL_IMAGE = sideMutabal;
export const SIDE_HUMMUS_IMAGE = sideHummus;
export const SIDE_KIBBEH_IMAGE = sideKibbeh;
export const SIDE_KOMKOMMER_YOGHURT_IMAGE = sideKomkommerYoghurt;
export const SIDE_MUHAMMARA_IMAGE = sideMuhammara;
export const SIDE_WIJNLADEREN_IMAGE = sideWijnbladeren;
export const SIDE_FRIT_SCHOTEL_IMAGE = sideFritSchotel;

export interface CategoryInfo {
  id: CategoryId;
  nameNl: string;
  nameEn: string;
  icon: string;
  descriptionNl: string;
  descriptionEn: string;
}

// Exactly the five official categories in required Dutch order
export const CATEGORIES: CategoryInfo[] = [
  {
    id: 'deals',
    nameNl: 'Combi Deals',
    nameEn: 'Combi Deals',
    icon: '🏷️',
    descriptionNl: 'Kies jouw gerecht + drankje naar keuze voor een scherpe prijs! (Keuze wordt telefonisch of bij bereiding bevestigd volgens de actuele actievoorwaarden).',
    descriptionEn: 'Choose your meal + drink of choice for a sharp deal! (Selection confirmed with the restaurant upon ordering).',
  },
  {
    id: 'broodjes',
    nameNl: 'Broodjes',
    nameEn: 'Sandwiches & Wraps',
    icon: '🌯',
    descriptionNl: 'Al onze broodjes worden dagelijks vers en met zorg huisgemaakt. Van de ingrediënten tot onze heerlijke sauzen: we bereiden alles zo vers mogelijk voor de beste smaak en kwaliteit.',
    descriptionEn: 'All our sandwiches are freshly made daily with care. From the ingredients to our homemade sauces, we prepare everything fresh for the finest quality.',
  },
  {
    id: 'maaltijden',
    nameNl: 'Maaltijden Menu',
    nameEn: 'Platters & Meal Menus',
    icon: '🍱',
    descriptionNl: 'Vers bereid, huisgemaakt en boordevol smaak. Elke dag opnieuw!',
    descriptionEn: 'Freshly prepared, homemade, and packed with authentic flavor. Every single day!',
  },
  {
    id: 'bijgerechten',
    nameNl: 'Bijgerechten',
    nameEn: 'Side Dishes & Mezza',
    icon: '🧄',
    descriptionNl: 'Onze bijgerechten worden dagelijks vers en met zorg huisgemaakt. Heerlijke aanvulling op je maaltijd.',
    descriptionEn: 'Our side dishes are made fresh daily with care. A delicious accompaniment to your meal.',
  },
  {
    id: 'dranken',
    nameNl: 'Dranken',
    nameEn: 'Drinks & Beverages',
    icon: '🥤',
    descriptionNl: 'Koude en verfrissende frisdranken, traditionele yoghurtdrank en mineraalwater.',
    descriptionEn: 'Ice-cold soft drinks, traditional yogurt drink, and natural mineral water.',
  },
];

export const CATEGORY_DESCRIPTIONS: Record<CategoryId, string> = {
  deals: CATEGORIES[0].descriptionNl,
  broodjes: CATEGORIES[1].descriptionNl,
  maaltijden: CATEGORIES[2].descriptionNl,
  bijgerechten: CATEGORIES[3].descriptionNl,
  dranken: CATEGORIES[4].descriptionNl,
};

// Verified complete menu with deduplicated, consolidated variants
export const MENU_ITEMS: MenuItem[] = [
  // ==========================================
  // 1. COMBI DEALS
  // ==========================================
  {
    id: 'deal-gerecht-drankje',
    name: 'Gerecht + drankje naar keuze',
    nameEn: 'Dish + drink of choice combo',
    category: 'deals',
    description: 'Kies jouw gerecht + drankje naar keuze voor een scherpe prijs!',
    descriptionEn: 'Choose your dish + drink of choice for a special value price!',
    price: 10.65,
    image: HERO_IMAGE,
    badge: 'SPECIAL OFFER',
    badgeEn: 'SPECIAL OFFER',
    badgeColor: 'red',
    isPopular: true,
  },

  // ==========================================
  // 2. BROODJES — SANDWICHES
  // ==========================================
  {
    id: 'broodje-shawarma',
    name: 'Shawarma',
    nameEn: 'Chicken Shawarma Wrap',
    category: 'broodjes',
    description: 'Syrisch brood met gekruide kip shawarma, knoflooksaus en augurk.',
    descriptionEn: 'Syrian flatbread with spiced chicken shawarma, garlic sauce, and pickles.',
    price: 8.00,
    image: CHICKEN_WRAP_IMAGE,
    badge: 'POPULAIR',
    badgeEn: 'POPULAR',
    badgeColor: 'red',
    isPopular: true,
    allergens: 'A,C,G',
    variants: [
      {
        id: 'shawarma-normaal',
        nameNl: 'Standaard Portie',
        nameEn: 'Standard Portion',
        price: 8.00,
        descriptionNl: 'Kip shawarma, knoflooksaus en augurk in Syrisch brood.',
        descriptionEn: 'Chicken shawarma, garlic sauce, and pickles in Syrian bread.',
      },
      {
        id: 'shawarma-extra',
        nameNl: 'Shawarma Extra (Extra Kip)',
        nameEn: 'Shawarma Extra (Extra Chicken)',
        price: 10.50,
        descriptionNl: 'Syrisch brood met gekruide kip shawarma, knoflooksaus en augurk. Extra kip shawarma.',
        descriptionEn: 'Syrian flatbread with extra portion of spiced chicken shawarma.',
      },
    ],
  },
  {
    id: 'broodje-shawarma-time',
    name: 'Shawarma Time',
    nameEn: 'Shawarma Time Special',
    category: 'broodjes',
    description: 'Syrisch brood met gekruide kip shawarma, knoflooksaus, kaas, champignons en augurk.',
    descriptionEn: 'Syrian bread with chicken shawarma, garlic sauce, melted cheese, mushrooms, and pickles.',
    price: 11.50,
    image: SHAWARMA_TIME_CHEESE_IMAGE,
    badge: 'SIGNATURE DISH',
    badgeEn: 'SIGNATURE DISH',
    badgeColor: 'amber',
    isPopular: true,
    allergens: 'A,C,G',
  },
  {
    id: 'broodje-crispy-kip',
    name: 'Crispy Kip',
    nameEn: 'Crispy Chicken Wrap',
    category: 'broodjes',
    description: 'Syrisch brood met kipfilet, mayonaise, coleslaw en augurk.',
    descriptionEn: 'Syrian bread with crispy chicken breast, mayonnaise, coleslaw, and pickles.',
    price: 9.50,
    image: CRISPY_CHICKEN_WRAP_IMAGE,
    badge: 'KROKANT',
    badgeEn: 'CRISPY',
    badgeColor: 'amber',
    allergens: 'A,C,G',
  },
  {
    id: 'broodje-zinger',
    name: 'Zinger',
    nameEn: 'Spicy Zinger Chicken Wrap',
    category: 'broodjes',
    description: 'Syrisch brood met pikante kipfilet, mayonaise, kaas, coleslaw, augurk en cocktailsaus.',
    descriptionEn: 'Syrian bread with spicy chicken breast, mayonnaise, cheese, coleslaw, pickles, and cocktail sauce.',
    price: 10.50,
    image: SPICY_ZINGER_WRAP_IMAGE,
    badge: 'PIKANT',
    badgeEn: 'SPICY',
    badgeColor: 'red',
    isSpicy: true,
    allergens: 'A,C,G',
  },
  {
    id: 'broodje-fajita',
    name: 'Fajita',
    nameEn: 'Fajita Wrap',
    category: 'broodjes',
    description: 'Syrisch brood met kipfilet, groenten en mais.',
    descriptionEn: 'Syrian bread with chicken breast, sautéed vegetables, and sweet corn.',
    price: 10.50,
    image: CHICKEN_WRAP_IMAGE,
    allergens: 'A,G',
  },
  {
    id: 'broodje-friet',
    name: 'Broodje friet',
    nameEn: 'French Fries Sandwich',
    category: 'broodjes',
    description: 'Syrisch brood met friet, knoflooksaus en augurk.',
    descriptionEn: 'Syrian flatbread filled with golden fries, garlic sauce, and pickles.',
    price: 6.50,
    image: BROODJE_FRIET_IMAGE,
    allergens: 'A,C',
  },
  {
    id: 'broodje-falafel',
    name: 'Falafel',
    nameEn: 'Falafel Wrap',
    category: 'broodjes',
    description: 'Syrisch brood met falafel, groenten, augurk en tahinasaus.',
    descriptionEn: 'Syrian flatbread with herb falafel, vegetables, pickles, and sesame tahini sauce.',
    price: 7.00,
    image: MEZZA_IMAGE,
    badge: 'VEGETARISCH',
    badgeEn: 'VEGETARIAN',
    badgeColor: 'green',
    allergens: 'A,K',
  },
  {
    id: 'broodje-kip-burger',
    name: 'Kip burger',
    nameEn: 'Chicken Burger',
    category: 'broodjes',
    description: 'Kipburger met sla, tomaat, augurk, kaas en burgersaus.',
    descriptionEn: 'Crispy chicken patty with lettuce, tomato, pickles, cheese, and burger sauce.',
    price: 8.50,
    image: KIP_BURGER_IMAGE,
    allergens: 'A,C,G',
  },
  {
    id: 'broodje-classic-burger',
    name: 'Classic burger',
    nameEn: 'Classic Beef Burger',
    category: 'broodjes',
    description: 'Rundvleesburger met sla, tomaat, augurk, kaas en burgersaus.',
    descriptionEn: 'Beef burger with lettuce, tomato, pickles, cheese, and burger sauce.',
    price: 8.50,
    image: CLASSIC_BEEF_BURGER_IMAGE,
    allergens: 'A,C,G',
  },

  // ==========================================
  // 3. MAALTIJDEN MENU — MEALS
  // ==========================================
  {
    id: 'menu-arabische-shawarma',
    name: 'Arabische Shawarma Menu',
    nameEn: 'Arabic Shawarma Platter Menu',
    category: 'maaltijden',
    description: 'Syrische shawarma gesneden in stukjes, geserveerd met friet en diverse sausjes.',
    descriptionEn: 'Syrian shawarma wrap cut into bite-sized pieces, served with fries and assorted sauces.',
    price: 13.00,
    image: ARABI_PLATTER_IMAGE,
    badge: 'MEEST BESTELD',
    badgeEn: 'TOP CHOICE',
    badgeColor: 'red',
    isPopular: true,
    allergens: 'A,C,G',
    variants: [
      {
        id: 'arabi-single',
        nameNl: 'Arabische Shawarma Menu (Enkel)',
        nameEn: 'Arabic Shawarma Menu (Single)',
        price: 13.00,
        descriptionNl: 'Syrische shawarma, geserveerd met friet en diverse sausjes.',
        descriptionEn: 'Syrian shawarma, served with french fries and assorted sauces.',
      },
      {
        id: 'arabi-double',
        nameNl: 'Arab. Shawarma Dubbel Menu',
        nameEn: 'Arabic Shawarma Double Menu',
        price: 17.00,
        descriptionNl: 'Dubbele Syrische shawarma, geserveerd met friet en diverse sausjes.',
        descriptionEn: 'Double portion Syrian shawarma, served with french fries and assorted sauces.',
      },
    ],
  },
  {
    id: 'menu-kapsalon-time',
    name: 'Kapsalon Time',
    nameEn: 'Kapsalon Time',
    category: 'maaltijden',
    description: 'Syrische shawarma, friet, kaas, groenten, sla, diverse sausjes en knoflooksaus.',
    descriptionEn: 'Syrian chicken shawarma over crispy fries, melted gouda cheese, salad, garlic sauce, and toppings.',
    price: 13.00,
    image: KAPSALON_IMAGE,
    badge: 'VENLO FAVORIET',
    badgeEn: 'VENLO FAVORITE',
    badgeColor: 'red',
    isPopular: true,
    allergens: 'A,C,G',
  },
  {
    id: 'menu-shawarma-250g',
    name: 'Shawarma (250g)',
    nameEn: 'Shawarma Plate (250g)',
    category: 'maaltijden',
    description: '250g gekruide kip shawarma met augurk en knoflooksaus.',
    descriptionEn: '250g seasoned chicken shawarma with pickles and garlic sauce.',
    price: 16.50,
    image: CHICKEN_WRAP_IMAGE,
    badge: '250 GRAM',
    badgeEn: '250 GRAM',
    badgeColor: 'amber',
    allergens: 'C,G',
  },
  {
    id: 'menu-broasted-kip',
    name: 'Broasted Kip Menu',
    nameEn: 'Broasted Chicken Menu',
    category: 'maaltijden',
    description: 'Krokante broasted kip, geserveerd met friet en diverse sausjes.',
    descriptionEn: 'Crispy golden fried broasted chicken served with fries and assorted sauces.',
    price: 14.00,
    image: BROASTED_IMAGE,
    badge: 'KROKANT',
    badgeEn: 'CRISPY',
    badgeColor: 'amber',
    allergens: 'A,C,M',
    variants: [
      {
        id: 'broasted-halve',
        nameNl: 'Halve Broasted Kip Menu',
        nameEn: 'Half Broasted Chicken Menu',
        price: 14.00,
        descriptionNl: 'Krokante halve broasted kip, geserveerd met friet en diverse sausjes.',
        descriptionEn: 'Half crispy broasted chicken, served with fries and sauces.',
      },
      {
        id: 'broasted-hele',
        nameNl: 'Broasted Kip Menu (Hele Kip)',
        nameEn: 'Broasted Chicken Menu (Full Chicken)',
        price: 24.00,
        descriptionNl: 'Hele krokante broasted kip, geserveerd met friet en diverse sausjes.',
        descriptionEn: 'Full crispy broasted chicken, served with fries and sauces.',
      },
    ],
  },
  {
    id: 'menu-gegrilde-kip',
    name: 'Gegrilde Kip Menu',
    nameEn: 'Grilled Chicken Menu',
    category: 'maaltijden',
    description: 'Gegrilde kip met rijst OF friet, geserveerd met diverse sausjes.',
    descriptionEn: 'Tender seasoned grilled chicken with choice of rice OR fries, served with sauces.',
    price: 13.50,
    image: BROASTED_IMAGE,
    allergens: 'A,C',
    variants: [
      {
        id: 'gegrilde-halve',
        nameNl: 'Halve Gegrilde Kip Menu',
        nameEn: 'Half Grilled Chicken Menu',
        price: 13.50,
        descriptionNl: 'Halve gegrilde kip met rijst OF friet, geserveerd met diverse sausjes.',
        descriptionEn: 'Half grilled chicken with rice or fries and sauces.',
      },
      {
        id: 'gegrilde-hele',
        nameNl: 'Gegrilde Kip Menu (Hele Kip)',
        nameEn: 'Full Grilled Chicken Menu',
        price: 20.00,
        descriptionNl: 'Hele gegrilde kip met rijst OF friet, geserveerd met diverse sausjes.',
        descriptionEn: 'Full grilled chicken with rice or fries and sauces.',
      },
    ],
  },
  {
    id: 'menu-crispy-kip',
    name: 'Crispy Kip Maaltijd Menu',
    nameEn: 'Crispy Chicken Meal Menu',
    category: 'maaltijden',
    description: 'Kipfilet geserveerd met friet en diverse sausjes.',
    descriptionEn: 'Crispy chicken breast fillets served with fries and assorted sauces.',
    price: 15.00,
    image: BROASTED_IMAGE,
    allergens: 'A,C,G',
  },
  {
    id: 'menu-zinger-kip',
    name: 'Zinger Kip Maaltijd Menu',
    nameEn: 'Spicy Zinger Chicken Meal Menu',
    category: 'maaltijden',
    description: 'Pittige kipfilet geserveerd met friet en diverse sausjes.',
    descriptionEn: 'Spicy chicken breast fillets served with fries and assorted dipping sauces.',
    price: 16.00,
    image: BROASTED_IMAGE,
    badge: 'PITTIG',
    badgeEn: 'SPICY',
    badgeColor: 'red',
    isSpicy: true,
    allergens: 'C,G,M',
  },

  // ==========================================
  // 4. BIJGERECHTEN — SIDE DISHES
  // ==========================================
  {
    id: 'bijgerecht-kipnuggets',
    name: 'Kipnuggets (8 st)',
    nameEn: 'Chicken Nuggets (8 pcs)',
    category: 'bijgerechten',
    description: '8 stuks krokant gebakken malse kipnuggets met dipsaus.',
    descriptionEn: '8 pieces of golden crispy tender chicken nuggets with dipping sauce.',
    price: 6.50,
    image: SIDE_KIPNUGGETS_IMAGE,
    badge: '8 STUKS',
    badgeEn: '8 PCS',
    badgeColor: 'amber',
    allergens: 'A',
  },
  {
    id: 'bijgerecht-sambosa-kaas',
    name: 'Sambosa Kaas (4 st)',
    nameEn: 'Cheese Sambosa (4 pcs)',
    category: 'bijgerechten',
    description: '4 stuks knapperige gouden deegflapjes gevuld met zachte, romige kaas en verse kruiden.',
    descriptionEn: '4 pieces of crispy golden pastry pockets filled with melted soft cheese and herbs.',
    price: 5.00,
    image: SIDE_SAMBOSA_KAAS_IMAGE,
    badge: '4 STUKS',
    badgeEn: '4 PCS',
    badgeColor: 'green',
    allergens: 'A,G',
  },
  {
    id: 'bijgerecht-mutabal',
    name: 'Mutabal',
    nameEn: 'Mutabal Eggplant Dip',
    category: 'bijgerechten',
    description: 'Traditionele gerookte auberginedip met tahina, knoflook, citroen en extra vierge olijfolie.',
    descriptionEn: 'Traditional smoky roasted eggplant dip with sesame tahini, garlic, lemon, and olive oil.',
    price: 5.00,
    image: SIDE_MUTABAL_IMAGE,
    badge: 'VEGAN',
    badgeEn: 'VEGAN',
    badgeColor: 'green',
    allergens: 'K',
  },
  {
    id: 'bijgerecht-hummus',
    name: 'Hummus',
    nameEn: 'Hummus',
    category: 'bijgerechten',
    description: 'Huisgemaakte zijdezachte kikkererwtenpuree met tahina, citroen en olijfolie.',
    descriptionEn: 'Silky smooth homemade chickpea puree with tahini, lemon, and extra virgin olive oil.',
    price: 5.00,
    image: SIDE_HUMMUS_IMAGE,
    badge: 'HUISGEMAAKT',
    badgeEn: 'HOMEMADE',
    badgeColor: 'green',
    allergens: 'K',
  },
  {
    id: 'bijgerecht-kibbeh',
    name: 'Kibbeh (2 st)',
    nameEn: 'Kibbeh (2 pcs)',
    category: 'bijgerechten',
    description: '2 stuks traditionele Syrische bulgurschelpjes gevuld met gekruid rundergehakt en pijnboompitten.',
    descriptionEn: '2 pieces of traditional Syrian bulgur shells stuffed with spiced minced beef and pine nuts.',
    price: 6.00,
    image: SIDE_KIBBEH_IMAGE,
    badge: '2 STUKS',
    badgeEn: '2 PCS',
    badgeColor: 'amber',
    allergens: 'A',
  },
  {
    id: 'bijgerecht-komkommer-yoghurt',
    name: 'Komkommer met yoghurt',
    nameEn: 'Cucumber & Yogurt Dip',
    category: 'bijgerechten',
    description: 'Verfrissende romige yoghurt met verse knapperige komkommer, knoflook en gedroogde munt.',
    descriptionEn: 'Cooling creamy yogurt dip with crisp diced cucumber, garlic, and fragrant dried mint.',
    price: 5.00,
    image: SIDE_KOMKOMMER_YOGHURT_IMAGE,
    badge: 'VERS',
    badgeEn: 'FRESH',
    badgeColor: 'green',
    allergens: 'G',
  },
  {
    id: 'bijgerecht-muhammara',
    name: 'Muhammara',
    nameEn: 'Muhammara Red Pepper Dip',
    category: 'bijgerechten',
    description: 'Pikante Syrische dip van geroosterde rode paprika, gemalen walnoten en granaatappelmelasse.',
    descriptionEn: 'Zesty Syrian dip of roasted red peppers, ground walnuts, and sweet-tart pomegranate molasses.',
    price: 5.00,
    image: SIDE_MUHAMMARA_IMAGE,
    badge: 'PIKANT',
    badgeEn: 'SPICY',
    badgeColor: 'red',
    isSpicy: true,
    allergens: 'H',
  },
  {
    id: 'bijgerecht-sambosa-vlees',
    name: 'Sambosa Vlees (4 st)',
    nameEn: 'Meat Sambosa (4 pcs)',
    category: 'bijgerechten',
    description: '4 stuks knapperige deegflapjes gevuld met gekruid rundergehakt, uitjes en specerijen.',
    descriptionEn: '4 pieces of crispy pastry pockets filled with seasoned ground beef, onions, and Syrian spices.',
    price: 7.00,
    image: SIDE_SAMBOSA_VLEES_IMAGE,
    badge: '4 STUKS',
    badgeEn: '4 PCS',
    badgeColor: 'amber',
    allergens: 'A',
  },
  {
    id: 'bijgerecht-wijnbladeren',
    name: 'Wijnbladeren (6 st)',
    nameEn: 'Stuffed Vine Leaves (6 pcs)',
    category: 'bijgerechten',
    description: '6 stuks met gekruide rijst en mediterrane kruiden gevulde wijnbladeren.',
    descriptionEn: '6 pieces of tender grape vine leaves rolled with aromatic herbed rice and lemon.',
    price: 5.00,
    image: SIDE_WIJNLADEREN_IMAGE,
    badge: '6 STUKS',
    badgeEn: '6 PCS',
    badgeColor: 'green',
  },
  {
    id: 'bijgerecht-frit-schotel',
    name: 'Frit Schotel',
    nameEn: 'French Fries Platter',
    category: 'bijgerechten',
    description: 'Gulle portie goudbruine, krokante friet geserveerd met huisgemaakte saus.',
    descriptionEn: 'Generous portion of golden crispy french fries served with house sauce.',
    price: 5.00,
    image: SIDE_FRIT_SCHOTEL_IMAGE,
    badge: 'KROKANT',
    badgeEn: 'CRISPY',
    badgeColor: 'amber',
  },

  // ==========================================
  // 5. DRANKEN — DRINKS
  // ==========================================
  {
    id: 'drank-coca-cola',
    name: 'Coca-Cola 330 ml',
    nameEn: 'Coca-Cola 330 ml',
    category: 'dranken',
    description: 'Frisdrank met plantenextracten in blikje van 330 ml.',
    descriptionEn: 'Refreshing soft drink in a 330 ml can.',
    price: 2.65,
    image: DRINK_COCA_COLA_IMAGE,
    badge: '330 ML',
    badgeEn: '330 ML',
    badgeColor: 'red',
    variants: [
      {
        id: 'coca-cola-original',
        nameNl: 'Coca-Cola Original Taste 330 ml',
        nameEn: 'Coca-Cola Original Taste 330 ml',
        price: 2.65,
        descriptionNl: 'Frisdrank met plantenextracten.',
        descriptionEn: 'Soft drink with plant extracts.',
        volumeOrSize: '330 ml',
      },
      {
        id: 'coca-cola-zero',
        nameNl: 'Coca-Cola Zero Sugar 330 ml',
        nameEn: 'Coca-Cola Zero Sugar 330 ml',
        price: 2.65,
        descriptionNl: 'Frisdrank met plantenextracten, suikervrij.',
        descriptionEn: 'Soft drink with plant extracts, zero sugar.',
        volumeOrSize: '330 ml',
      },
    ],
  },
  {
    id: 'drank-lipton-ice-tea',
    name: 'Lipton Ice Tea 330 ml',
    nameEn: 'Lipton Ice Tea 330 ml',
    category: 'dranken',
    description: 'Verfrissende ijsthee geserveerd in een blikje van 330 ml.',
    descriptionEn: 'Refreshing iced tea in a 330 ml can.',
    price: 2.65,
    image: DRINK_LIPTON_PEACH_IMAGE,
    badge: '330 ML',
    badgeEn: '330 ML',
    badgeColor: 'amber',
    variants: [
      {
        id: 'lipton-peach',
        nameNl: 'Lipton ice tea peach 330 ml',
        nameEn: 'Lipton Ice Tea Peach 330 ml',
        price: 2.65,
        descriptionNl: 'Verfrissende Lipton Ice Tea Peach met een heerlijke perziksmaak.',
        descriptionEn: 'Refreshing Lipton Ice Tea Peach with delicious peach flavor.',
        volumeOrSize: '330 ml',
      },
      {
        id: 'lipton-green',
        nameNl: 'Lipton Green Ice Tea 330 ml',
        nameEn: 'Lipton Green Ice Tea 330 ml',
        price: 2.65,
        descriptionNl: 'Verfrissende drank met groene thee-extract.',
        descriptionEn: 'Refreshing beverage with green tea extract.',
        volumeOrSize: '330 ml',
      },
      {
        id: 'lipton-sparkling',
        nameNl: 'Lipton Ice Tea Sparkling 330 ml',
        nameEn: 'Lipton Ice Tea Sparkling 330 ml',
        price: 2.65,
        descriptionNl: 'Verfrissende koolzuurhoudende drank met thee-extract.',
        descriptionEn: 'Sparkling refreshing iced tea with tea extract.',
        volumeOrSize: '330 ml',
      },
    ],
  },
  {
    id: 'drank-fanta-orange',
    name: 'Fanta Orange 330 ml',
    nameEn: 'Fanta Orange 330 ml',
    category: 'dranken',
    description: 'Frisdrank met sinaasappelsap, met suiker en zoetstoffen.',
    descriptionEn: 'Soft drink with orange juice, in 330 ml can.',
    price: 2.65,
    image: DRINK_FANTA_IMAGE,
    badge: '330 ML',
    badgeEn: '330 ML',
    badgeColor: 'orange',
  },
  {
    id: 'drank-7up',
    name: '7UP Refreshing Lemon & Lime Taste Frisdrank 0,33 L',
    nameEn: '7UP Lemon & Lime 0.33 L',
    category: 'dranken',
    description: 'Frisdrank met natuurlijk citroen- en limoenaroma, suiker en zoetstof.',
    descriptionEn: 'Soft drink with natural lemon and lime flavor in 330 ml can.',
    price: 2.65,
    image: DRINK_7UP_IMAGE,
    badge: '0,33 L',
    badgeEn: '0.33 L',
    badgeColor: 'green',
  },
  {
    id: 'drank-red-bull',
    name: 'Red Bull 250 ml',
    nameEn: 'Red Bull 250 ml',
    category: 'dranken',
    description: 'Energy Drink - hoog cafeïnegehalte.',
    descriptionEn: 'Energy Drink - high caffeine content.',
    price: 3.15,
    image: DRINK_RED_BULL_IMAGE,
    badge: '250 ML',
    badgeEn: '250 ML',
    badgeColor: 'red',
    variants: [
      {
        id: 'red-bull-energy',
        nameNl: 'Red Bull Energy Drink 250 ml',
        nameEn: 'Red Bull Energy Drink 250 ml',
        price: 3.15,
        descriptionNl: 'Klassieke Red Bull energy drink.',
        descriptionEn: 'Classic Red Bull energy drink.',
        volumeOrSize: '250 ml',
      },
      {
        id: 'red-bull-zero',
        nameNl: 'Red Bull Zero 250 ml',
        nameEn: 'Red Bull Zero 250 ml',
        price: 3.15,
        descriptionNl: 'Red Bull energy drink suikervrij.',
        descriptionEn: 'Red Bull energy drink zero sugar.',
        volumeOrSize: '250 ml',
      },
    ],
  },
  {
    id: 'drank-ayran',
    name: 'Ayran 250 ml',
    nameEn: 'Ayran 250 ml',
    category: 'dranken',
    description: 'Traditionele gezouten yoghurtdrank. Verfrissend bij shawarma.',
    descriptionEn: 'Traditional salted yogurt beverage. Refreshing with shawarma.',
    price: 2.65,
    image: DRINK_AYRAN_IMAGE,
    badge: '250 ML',
    badgeEn: '250 ML',
    badgeColor: 'green',
  },
  {
    id: 'drank-spa-water',
    name: 'Spa Mineraalwater',
    nameEn: 'Spa Mineral Water',
    category: 'dranken',
    description: 'Natuurlijk mineraalwater uit de Belgische Ardennen.',
    descriptionEn: 'Pure natural mineral water from Spa.',
    price: 2.65,
    image: DRINK_SPA_IMAGE,
    badge: '500 ML',
    badgeEn: '500 ML',
    badgeColor: 'green',
    variants: [
      {
        id: 'spa-reine',
        nameNl: 'Spa Reine Mineraalwater Koolzuurvrij (500 ml)',
        nameEn: 'Spa Reine Still Mineral Water (500 ml)',
        price: 2.65,
        descriptionNl: 'Natuurlijk mineraalwater zonder koolzuur. 500 ml.',
        descriptionEn: 'Natural still mineral water. 500 ml.',
        volumeOrSize: '500 ml',
      },
      {
        id: 'spa-intens',
        nameNl: 'SPA Intens Bruisend Natuurlijk Mineraalwater 50 cl',
        nameEn: 'SPA Intens Sparkling Mineral Water 50 cl',
        price: 2.65,
        descriptionNl: 'Natuurlijk mineraalwater met toegevoegd koolzuurgas. 50 cl.',
        descriptionEn: 'Natural sparkling mineral water with added carbonation. 50 cl.',
        volumeOrSize: '50 cl',
      },
    ],
  },
  {
    id: 'drank-capri-sun',
    name: 'Capri-Sun',
    nameEn: 'Capri-Sun',
    category: 'dranken',
    description: 'Frisdrank met sinaasappelsap, met suiker en zoetstoffen.',
    descriptionEn: 'Fruit juice drink pouch with orange juice.',
    price: 1.50,
    image: DRINK_CAPRI_SUN_IMAGE,
    badge: '€ 1,50',
    badgeEn: '€ 1.50',
    badgeColor: 'orange',
  },
];

// Official restaurant location verified from shawarma-time.nl
export const OFFICIAL_STORE: StoreLocation = {
  id: 'shawarma-time-venlo',
  name: 'Shawarma Time Venlo',
  address: 'Puteanusstraat 24',
  city: 'Venlo',
  postalCode: '5911 EV',
  hours: 'Ma–Do: 14:00–22:00 | Vr: 16:00–22:00 | Za–Zo: 14:00–23:00',
  hoursEn: 'Mon–Thu: 14:00–22:00 | Fri: 16:00–22:00 | Sat–Sun: 14:00–23:00',
  waitTime: '15–25 min',
  waitTimeEn: '15–25 min',
  phone: '077 785 4192',
  isOpen: true,
};

export const STORE_LOCATIONS: StoreLocation[] = [OFFICIAL_STORE];
