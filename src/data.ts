import { ProductCategory, ProductItem, RecipeItem, FAQItem } from './types';

export const PRODUCT_CATEGORIES: ProductCategory[] = [
  {
    id: 'cat-1',
    name: 'Cookware Sets',
    slug: 'cookware-sets',
    description: 'Complete multi-ply stainless steel sets designed for professional and healthy home cooking.',
    imageUrl: 'https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?auto=format&fit=crop&w=800&q=80',
    itemCount: 3,
  },
  {
    id: 'cat-2',
    name: 'Sauce Pans',
    slug: 'sauce-pans',
    description: 'Perfect heat distribution for sauces, boiling, and delicate reduction work.',
    imageUrl: 'https://images.unsplash.com/photo-1599940824399-b87987ceb72a?auto=format&fit=crop&w=800&q=80',
    itemCount: 2,
  },
  {
    id: 'cat-3',
    name: 'Dutch Ovens & Stock Pots',
    slug: 'dutch-ovens',
    description: 'Heavy-duty pots with vapor seal lids for slow roasts, soups, and nourishing stews.',
    imageUrl: 'https://images.unsplash.com/photo-1531234799389-d879353b91d2?auto=format&fit=crop&w=800&q=80',
    itemCount: 3,
  },
  {
    id: 'cat-4',
    name: 'Sauté Pans & Skillets',
    slug: 'skillets',
    description: 'Ergonomic pans shaped for low-oil searing, frying, and perfect even browning.',
    imageUrl: 'https://images.unsplash.com/photo-1506368249639-73a05d6f6488?auto=format&fit=crop&w=800&q=80',
    itemCount: 2,
  },
  {
    id: 'cat-5',
    name: 'Specialty Cookware & Electricals',
    slug: 'specialties',
    description: 'Unique tools including multi-purpose paella pans and slow cookers with precision control.',
    imageUrl: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80',
    itemCount: 2,
  },
  {
    id: 'cat-6',
    name: 'Water Filter System',
    slug: 'water-filters',
    description: 'Under-counter and counter-top healthy filtration systems preserving essential natural minerals.',
    imageUrl: 'https://images.unsplash.com/photo-1548839140-29a749e1cf4d?auto=format&fit=crop&w=800&q=80',
    itemCount: 2,
  },
  {
    id: 'cat-7',
    name: 'Accessories & Replacement Parts',
    slug: 'accessories',
    description: 'Genuine Classica timers, replacement handles, and cartidges supporting lifetime warranty.',
    imageUrl: 'https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?auto=format&fit=crop&w=800&q=80',
    itemCount: 2,
  }
];

export const PRODUCTS: ProductItem[] = [
  {
    id: 'p-1',
    name: 'Classica 15-Piece Royal Set',
    categorySlug: 'cookware-sets',
    shortDesc: 'Our flagship 5-ply stainless steel nesting collection for complete kitchen performance.',
    description: 'The Classica Royal Set premium nesting design includes essential multi-ply pots, pans, and custom vapor-seal lids with integrated Temp-Control indicators. Crafted in the USA, this complete set allows you to cook multiple dishes seamlessly using minimal oil and natural moisture.',
    imageUrl: 'https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?auto=format&fit=crop&w=800&q=80',
    isBestSeller: true,
    features: [
      '5-ply surgical-grade stainless steel layers',
      'Integrate Temp-Control valve lid system',
      'Energy-efficient rapid heat base',
      'Low-oil dynamic cooking support',
      'Stay-cool ergonomic safety handles'
    ],
    suitableFor: ['Induction', 'Gas', 'Electric', 'Ceramic', 'Oven Safe up to 400°F'],
    benefits: [
      'Preserves vitamins and moisture using vapor technology',
      'Requires less fat or butter, promoting heart health',
      'Extremely durable backing with Lifetime Limited Warranty',
      'PFOA/PTFE free cooking workspace for family safety'
    ],
    specifications: {
      'Manufactured In': 'USA / West Bend, Wisconsin',
      'Material': 'T-304 Surgical Stainless Steel',
      'Construction': '5-Ply Full Body Clad',
      'Lid Style': 'Self-Basting Vapor Seal with Thermostat indicator'
    }
  },
  {
    id: 'p-2',
    name: 'Classica 7-Piece Core Chef Set',
    categorySlug: 'cookware-sets',
    shortDesc: 'A compact selection of essential pots and pans for efficient healthy cooking.',
    description: 'The ideal starter or downsizing kit representing full-spectrum 5-ply performance. Built to last generations, this collection concentrates Classica’s highest-grade materials into the 3 most essential cooking vessels.',
    imageUrl: 'https://images.unsplash.com/photo-1599940824399-b87987ceb72a?auto=format&fit=crop&w=800&q=80',
    features: [
      '5-ply core heat structure',
      'Vapor control seals for vitamin-locking lids',
      'Drip-free pouring rims',
      'Easy-to-clean polished interior'
    ],
    suitableFor: ['Induction', 'Gas', 'Electric', 'Ceramic'],
    benefits: [
      'Space-saving stackable design',
      'Reaches optimal temperature up to 30% faster than traditional steel',
      'No metallic taste transfer, fully pure flavor'
    ],
    specifications: {
      'Manufactured In': 'USA',
      'Material': 'Grade 304 Stainless Steel',
      'Warranty': 'Limited Lifetime Warranty'
    }
  },
  {
    id: 'p-3',
    name: '3 Qt. Sauce Pan with Cover',
    categorySlug: 'sauce-pans',
    shortDesc: 'Accurate simmering and heat management for gourmet sauces and small grains.',
    description: 'Designed as a cornerstone vessel for reductions and side-dishes. The multi-layer structure ensures that heat rises up the sides of the pan at the exact same speed as the bottom, eliminating hot spots and burning.',
    imageUrl: 'https://images.unsplash.com/photo-1599940824399-b87987ceb72a?auto=format&fit=crop&w=800&q=80',
    features: [
      'Vapor control release dial',
      'Uniform heat walls up side bounds',
      'Internal volume markings (Quarts and Liters)'
    ],
    suitableFor: ['Induction', 'Gas', 'Electric', 'Ceramic'],
    benefits: [
      'Eliminates scorching without requiring regular stirring',
      'Ideal for starch and grain cooking using 50% less water'
    ],
    specifications: {
      'Capacity': '3 Quarts (2.8 Liters)',
      'Internal Finish': 'Satin-finish high wear stainless',
      'Handle': 'Heat-resistant phenolic pheno-core material'
    }
  },
  {
    id: 'p-4',
    name: '1.5 Qt. Daily Sauce Pan',
    categorySlug: 'sauce-pans',
    shortDesc: 'The perfect size for quick gravies, hard-boiled eggs, or morning oatmeal.',
    description: 'A agile, compact saucepan optimized for swift everyday cooking. Features the secure, airtight lock-lid that allows vegetables to cook in their own natural moisture.',
    imageUrl: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=800&q=80',
    features: [
      'Fast-boil 5-ply base',
      'Perfect tight seal lid with Temp dial',
      'Comfort-grip thumb-rest handle'
    ],
    suitableFor: ['Induction', 'Gas', 'Electric', 'Ceramic'],
    benefits: [
      'Heats small quantities in seconds',
      'Retains up to 92% of original water-soluble nutrients'
    ],
    specifications: {
      'Capacity': '1.5 Quarts',
      'Diameter': '6.5 inches'
    }
  },
  {
    id: 'p-5',
    name: '9 Qt. Multi-Purpose Paella Pan',
    categorySlug: 'specialties',
    shortDesc: 'Large family-size pan for healthy paellas, sears, and gathering food.',
    description: 'A beautiful masterpiece pan that acts as both a professional high-volume kitchen cooker and an elegant table server. Excellent depth allows for roasting whole birds or preparing multi-layered stews with minimal liquids.',
    imageUrl: 'https://images.unsplash.com/photo-1534939561126-855b8675edd7?auto=format&fit=crop&w=800&q=80',
    isBestSeller: true,
    features: [
      'Dual heavy loop handles',
      'Generous 9 Qt capacity frame',
      'Double dome cover option with custom pressure gauge'
    ],
    suitableFor: ['Gas', 'Electric', 'Oven Safe', 'Induction'],
    benefits: [
      'Saves cook time for bulk holiday operations',
      'Low-oil crisping support for premium rice and grain dishes'
    ],
    specifications: {
      'Capacity': '9 Quarts (8.5 Liters)',
      'Dimensions': '13.5" Diameter x 3.6" Depth'
    }
  },
  {
    id: 'p-6',
    name: '5 Qt. Covered Wok',
    categorySlug: 'specialties',
    shortDesc: 'Traditional dynamic stirring shape fused with advanced Western multi-ply engineering.',
    description: 'A highly functional flat-bottom stir-fry wok that works beautifully on induction, gas, and electric ovens. The high walls and custom curved interior design are perfect for swift turning using minimal oil.',
    imageUrl: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
    features: [
      'Flat bottom for induction cooktop stability',
      'Vapor valve lid locks steam to tenderize contents',
      'Smooth easy-slide flared rim'
    ],
    suitableFor: ['Induction', 'Gas', 'Electric', 'Oven'],
    benefits: [
      'Allows high-heat stir fry without heavy smoking/burning of oil',
      'Saves up to 60% of oil used in traditional carbon steel woks'
    ],
    specifications: {
      'Capacity': '5 Quarts',
      'Material': 'Multi-Clad Stain Steel T-304'
    }
  },
  {
    id: 'p-7',
    name: '8 Qt. Stock Pot with Steamer Basket',
    categorySlug: 'dutch-ovens',
    shortDesc: 'The ultimate pot for big broths, pasta bakes, and steaming organic produce.',
    description: 'Substantial, balanced stockpot featuring custom multi-fit steamer inserts. Keeps vegetables elevated above hot water, using direct vapor condensation rather than boiling to maintain healthy natural colors and crisp textures.',
    imageUrl: 'https://images.unsplash.com/photo-1531234799389-d879353b91d2?auto=format&fit=crop&w=800&q=80',
    features: [
      'Premium heavy-gauge stainless steel build',
      'Steamer insert and high dome lid',
      'Laser-welded leak-proof handles'
    ],
    suitableFor: ['Induction', 'Gas', 'Electric', 'Ceramic'],
    benefits: [
      'Streamlined steaming locks in maximum mineral count',
      'Perfect for thick potato mashes, seafood stews, and broad broths'
    ],
    specifications: {
      'Pot Capacity': '8 Quarts',
      'Finish': 'Polished Mirror Finish Exterior'
    }
  },
  {
    id: 'p-8',
    name: 'Classica Club WaterSystem',
    categorySlug: 'water-filters',
    shortDesc: 'Sleek under-counter purification delivering pristine mineral-rich drinking water.',
    description: 'This is not a simple filter; it is an USA-designed premium mechanical filtration system in a polished solid stainless steel housing. It effectively filters chlorine, heavy metals, microplastics, and VOCs while allowing healthy natural minerals (calcium, magnesium) to pass through intact. Runs completely without electricity and requires no bulky wastewater storage tank.',
    imageUrl: 'https://images.unsplash.com/photo-1548839140-29a749e1cf4d?auto=format&fit=crop&w=800&q=80',
    isBestSeller: true,
    features: [
      'Heavy-duty surgical stainless steel external chamber',
      'Sub-micron solid carbon block multi-stage core',
      'Direct-flow sink connection faucet included',
      'Zero waste-water generation'
    ],
    suitableFor: ['Residential kitchen installation', 'Office pantries', 'Direct source hookups'],
    benefits: [
      'Eliminates bottled water waste, saving families thousands of dollars',
      'Eco-sustainable design requiring NO power outline or drain lines',
      'Keeps essential healthy electrolytes and mineral carbonates intact',
      'Incredible durability with lifetime-tested housing'
    ],
    specifications: {
      'Filter Lifespan': 'Approximately 1,000 Gallons or 1 Year',
      'Flow Rate': '0.75 - 1.0 Gallon per Minute',
      'Housing': 'T-304 Stainless Steel (Food-Grade)',
      'Country of Origin': 'USA'
    }
  },
  {
    id: 'p-9',
    name: 'Classica Replacement Cartridge',
    categorySlug: 'water-filters',
    shortDesc: 'A genuine replacement core designed to keep your Club WaterSystem pure.',
    description: 'Original replace cartridge with dense active-carbon matrices, micro-pore shielding layer, and lead reduction binding resins. Easy-twist install system allows simple replacement once per year without complex tools.',
    imageUrl: 'https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?auto=format&fit=crop&w=800&q=80',
    features: [
      'Sub-micron carbon block filtration technology',
      'Tested to NSF standards 42 and 53',
      'Chlorine taste and odor reduction efficiency > 98%'
    ],
    suitableFor: ['Classica Club WaterSystem exclusively'],
    benefits: [
      'Guarantees your water remains free from PFAS, microplastics, and trace chemicals',
      'Ensures peak flow pressure remains optimal throughout the year'
    ],
    specifications: {
      'Material': 'Extruded high-density block charcoal carbon',
      'Certification': 'NSF/ANSI Standard compliance'
    }
  }
];

export const RECIPES: RecipeItem[] = [
  {
    id: 'rec-1',
    name: 'Herb-Crusted Salmon with Vapor Vegetables',
    category: 'Fish & Seafood',
    imageUrl: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=800&q=80',
    description: 'Perfect succulent salmon and crisp broccoli cooked entirely on a low-medium stove with zero oil, locking in healthy omega-3 fatty acids.',
    prepTime: '10 mins',
    cookTime: '12 mins',
    difficulty: 'Easy',
    servings: '2',
    ingredients: [
      '2 Fresh salmon fillets (skin-on, 6oz each)',
      '1 Bunch of fresh organic broccoli florets',
      '1 Organic bell pepper, sliced in wedges',
      '1 tbsp chopped rosemary and dill',
      '1 Whole lemon (zested and sliced)',
      'Sea salt and freshly ground pink peppercorn'
    ],
    instructions: [
      'Preheat your Classica Skillet on medium heat until water droplets dance on the dry stainless steel surface.',
      'Place the salmon fillets skin-side down. Cover with the self-basting lock-lid. Ensure the Temp-control valve dial is initially open.',
      'When the steam whistles or the lid indicators click, close the vapor valve. Lower the heat to low.',
      'Add the broccoli and bell peppers directly around the fish. Re-cover tightly.',
      'Cook for an additional 7-8 minutes. The salmon will naturally release from the pan with a golden crust. Lift and serve with fresh lemon squeeze.'
    ]
  },
  {
    id: 'rec-2',
    name: 'Surgical Steel Roasted Herb Chicken',
    category: 'Poultry',
    imageUrl: 'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=800&q=80',
    description: 'Whole chicken pieces cooked inside the Dutch Oven using steam condensation and natural fats. Skin gets golden, meat falls off the bone.',
    prepTime: '15 mins',
    cookTime: '45 mins',
    difficulty: 'Medium',
    servings: '4',
    ingredients: [
      '4 bone-in whole chicken thighs',
      '6 fingerling gold potatoes, cut in halves',
      '3 carrots, peeled and sliced thick',
      '4 garlic cloves, smashed',
      '2 sprigs of rosemary',
      '1 tsp thyme and paprika mixture'
    ],
    instructions: [
      'Rub chicken thighs with thyme, paprika, sea salt, and black pepper. Do not add any liquid oil to the pot.',
      'Place thighs skin-side down in a cold Classica Dutch Oven, then turn the heat to medium.',
      'After 5 minutes of fat-rendering, add potatoes, carrots, and garlic. Throw rosemary on top.',
      'Seal the lid. When the lid valve clicks indicating correct high pressure, turn the dial to closed.',
      'Reduce burner to low. Let cook slowly for 35 minutes. Potatoes will steam to perfection in chicken rendering.'
    ]
  },
  {
    id: 'rec-3',
    name: 'Zero-Oil Garlic Sautéed Garden Medley',
    category: 'Vegetarian Meals',
    imageUrl: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80',
    description: 'Crispy zucchini, sweet carrots, and asparagus cooked with zero cooking oils. Savor the pure natural vitamins and sweet sugar caramelization.',
    prepTime: '8 mins',
    cookTime: '5 mins',
    difficulty: 'Easy',
    servings: '3',
    ingredients: [
      '2 Medium zucchinis, cut into matchsticks',
      '1 bundle of fresh asparagus tips',
      '1 Red onion, thin rings',
      '2 garlic cloves, finely minced',
      'Fresh cracked sea salt',
      '1 tbsp toasted sesame seeds'
    ],
    instructions: [
      'Heat your Classica Sauté pan on medium heat. Check heat with droplet test.',
      'Toss onion and garlic in first. Sauté dry for 1 minute until fragrant. They will not stick if heat is adjusted right.',
      'Add zucchini and asparagus. Do not add water. Close the lid and keep vapor valve open.',
      'As soon as steam emits, shut the valve and turn burner to low. Cook for 3 minutes.',
      'Uncover. The vegetables will look incredibly vibrant green. Sprinkle with sea salt and toasted sesame seeds.'
    ]
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'How does the Classica low-oil vapor cooking technology work?',
    answer: 'Classica cookware is engineered with 5 layers of thermal conductives sandwiched within premium surgical steel. The lids fit tightly into a specially machined liquid-groove rim, forming a moist steam barrier ("vapor lock") when heated. This seal prevents steam from escaping, allowing food to cook in its own mineral-rich moisture, eliminating the need for heavy fat, grease, or boiling water.',
    category: 'Cookware'
  },
  {
    id: 'faq-2',
    question: 'Can I use Classica cookware on my modern induction stove?',
    answer: 'Yes, absolutely. The outermost layer of Classica cookware is made of high-grade magnetic induction stainless steel. It is 100% compatible with induction stoves, gas, traditional electric burners, and ceramic cooktops, and is oven safe up to 400°F.',
    category: 'Cookware'
  },
  {
    id: 'faq-3',
    question: 'What is the role of the local branch versus the corporate HQ?',
    answer: 'As your local branch, we serve as your direct neighborly resource. We provide tailored product demonstrations, explain cooking techniques, process locally-approved payment plans, manage inquiries, supply replacement parts, and handle local customer care. We make buying from Classica a reliable, human experience.',
    category: 'Distributorship'
  },
  {
    id: 'faq-4',
    question: 'Are the water filter housings plastic or metal?',
    answer: 'The exterior housing of the Classica Club WaterSystem is constructed entirely of thick, mirror-polished T-304 surgical-grade stainless steel. Unlike plastic housings, it will not crack, leach phthalates into your water, or yellow over time. It is a premium under-sink fixture that lasts a lifetime.',
    category: 'Water Filter'
  },
  {
    id: 'faq-5',
    question: 'How do I claim my Lifetime Limited Warranty or find replacement parts?',
    answer: 'You do not need to deal with automated corporate voice menus. Simply contact our local branch manager via the WhatsApp, phone, or email listed on our portal. We keep replacement gaskets, handles, and water filter cartridges in stock at our local branch and will prepare them for you instantly.',
    category: 'Customer Support'
  },
  {
    id: 'faq-6',
    question: 'What is the Classica business opportunity?',
    answer: 'We train health-conscious individuals to host cooking demonstrations, share healthy nutrition tips, and distribute premium cookware and clean water solutions. Through our branch guidance program, you can build a flexible stream of income representing a world-class health brand.',
    category: 'Opportunity'
  }
];
