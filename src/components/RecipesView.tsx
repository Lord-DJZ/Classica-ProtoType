import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Clock, ChefHat, Check, X } from 'lucide-react';
import { RecipeItem } from '../types';
import { RECIPES } from '../data';

export default function RecipesView() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeRecipe, setActiveRecipe] = useState<RecipeItem | null>(null);

  const categories = [
    'All',
    'Appetizers & Salads',
    'Poultry',
    'Meats',
    'Fish & Seafood',
    'Vegetarian Meals',
    'Soups & Stews',
    'Desserts'
  ];

  // Additional mock items representing other categories
  const extendedRecipes = useMemo(() => {
    const baseRecipes = [...RECIPES];
    
    const extraItems: RecipeItem[] = [
      {
        id: 'rec-ex-1',
        name: 'Classica Slow-Cooked Beef Bourguignon',
        category: 'Meats',
        imageUrl: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
        description: 'Tender braised beef chunks infused with organic herbs and root vegetables, simmered natively via vapor seals.',
        prepTime: '20 mins',
        cookTime: '120 mins',
        difficulty: 'Advanced',
        servings: '6',
        ingredients: [
          '2 lbs organic grass-fed beef chuck, cut in cubes',
          '3 carrots, cut in chunky rounds',
          '10 pearl onions, peeled',
          '2 cloves of fresh garlic, minced',
          '1 cup beef bone broth',
          'Fresh bouquet garni (parsley, thyme, bay leaf)'
        ],
        instructions: [
          'Sear the beef cubes in a preheated hot Classica Dutch Oven under medium heat until they release cleanly.',
          'Throw in variables (carrots, pearl onions, aromatic herbs) and pour broth.',
          'Seal tightly. When the lid click triggers, keep the steam vent completely closed.',
          'Turn burners down to low and cook with residual vapor for 2 hours until the fibers are spoon-tender.'
        ]
      },
      {
        id: 'rec-ex-2',
        name: 'Vapor-Baked Citrus Berry Cobbler',
        category: 'Desserts',
        imageUrl: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=800&q=80',
        description: 'A delicate fresh berry crumble baked completely oven-free on your stovetop using Classica thermal domes.',
        prepTime: '10 mins',
        cookTime: '15 mins',
        difficulty: 'Medium',
        servings: '4',
        ingredients: [
          '2 cups organic mixed forest berries (organic strawberries, wild blackberries, blueberries)',
          '1 tbsp fresh organic raw honey',
          '1 cup gluten-free oat flour',
          '2 tbsp pure raw cold-pressed grass-fed butter',
          '1/2 tsp vanilla bean extract',
          'Lemon zest'
        ],
        instructions: [
          'Preheat a Classica 3 Qt Saucepan on medium-low.',
          'Spread honey and lemon-zested berries on bottom bounds. Do not add water.',
          'Mix oat flour, vanilla and butter into crumbles, layer the mixture directly atop berries.',
          'Cover. Shut the vapor seal indicator completely. Cook on low heat for 15 minutes. The condensation bakes the oats like a damp-oven!'
        ]
      },
      {
        id: 'rec-ex-3',
        name: 'Double-Decker Garden Vegetable Soup',
        category: 'Soups & Stews',
        imageUrl: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=800&q=80',
        description: 'A delicious rich organic tomato and squash soup cooked on the bottom, steaming broccoli on the top basket.',
        prepTime: '15 mins',
        cookTime: '30 mins',
        difficulty: 'Easy',
        servings: '4',
        ingredients: [
          '4 ripe Roma tomatoes, chopped',
          '1 yellow summer squash, sliced',
          '1 white onion, diced',
          '3 cups organic split vegetable stock',
          '1 organic broccoli crown (for the top steamer insert basket)',
          'Sea salt & fresh mountain basil'
        ],
        instructions: [
          'Sauté chopped tomatoes, onions, yellow squash inside the Classica Stockpot with 1 tbsp stock.',
          'Pour remaining stock, add basil and fit the high steamer basket containing broccoli florets directly over the pot mouth.',
          'Secure the vapor-dome lid on top of the stack. Cook on low medium burner.',
          'When steam clicks, close valve and simmer for 25 minutes. Liquid cooking below will steam-crust broccoli above simultaneously!'
        ]
      }
    ];

    return [...baseRecipes, ...extraItems];
  }, []);

  const filteredRecipes = useMemo(() => {
    if (selectedCategory === 'All') return extendedRecipes;
    return extendedRecipes.filter((r) => r.category === selectedCategory);
  }, [selectedCategory, extendedRecipes]);

  return (
    <div className="bg-[#faf9f6] min-h-screen">
      {/* SECTION 1: HEADER INSPIRATIONAL */}
      <section className="bg-[#faf9f6] text-[#0a192f] py-20 border-b border-[#0a192f]/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4 font-sans">
          <span className="text-xs uppercase tracking-widest text-[#c5a059] font-bold">Vitamins-First Recipes</span>
          <h1 className="font-serif font-light text-3xl sm:text-4xl md:text-5xl text-[#0a192f] tracking-tight">The Waterless Recipe Studio</h1>
          <p className="text-[#0a192f]/70 max-w-xl mx-auto text-sm font-light">
            Learn healthy cooking concepts using original vitamins, natural sugars, and zero heavy fats.
          </p>
        </div>
      </section>

      {/* SECTION 2: CATEGORY FILTER TABS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex gap-2 overflow-x-auto pb-4 scrollbar-thin border-b border-[#0a192f]/5">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setSelectedCategory(c)}
              className={`px-5 py-2.5 rounded-full text-[10px] font-sans font-bold uppercase tracking-widest transition-all whitespace-nowrap shrink-0 border cursor-pointer ${
                selectedCategory === c
                  ? 'bg-[#0a192f] text-white border-[#0a192f]'
                  : 'bg-white text-[#0a192f]/70 border-[#0a192f]/10 hover:border-[#c5a059] hover:text-[#0a192f]'
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* RECIPES SHOWCASE MATRIX */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left font-sans">
          {filteredRecipes.length > 0 ? (
            filteredRecipes.map((r) => (
              <div
                key={r.id}
                className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-[#0a192f]/5 group flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-video overflow-hidden bg-[#faf9f6]">
                    <img
                      src={r.imageUrl}
                      alt={r.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-4 left-4 px-3 py-1 text-[9px] font-sans font-bold tracking-widest uppercase bg-[#0a192f] text-white rounded-full">
                      {r.category}
                    </div>
                  </div>
                  <div className="p-6 space-y-3">
                    <div className="flex gap-4 text-[10px] font-mono uppercase tracking-wider text-[#0a192f]/50">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-[#c5a059] shrink-0" />
                        {r.prepTime} Prep
                      </span>
                      <span className="flex items-center gap-1">
                        <ChefHat className="w-3.5 h-3.5 text-[#c5a059] shrink-0" />
                        {r.difficulty}
                      </span>
                    </div>

                    <h3 className="font-serif font-normal text-lg text-[#0a192f] leading-tight tracking-tight group-hover:text-[#c5a059] transition-colors">
                      {r.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#0a192f]/70 leading-relaxed font-light">
                      {r.description}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 mt-auto">
                  <button
                    onClick={() => setActiveRecipe(r)}
                    className="w-full text-center py-2.5 bg-[#0a192f] hover:bg-opacity-90 rounded-full text-[10px] font-sans font-bold uppercase tracking-widest text-[#faf9f6] transition-all cursor-pointer"
                  >
                    Review Cooking Guidelines
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full py-20 text-center space-y-4 bg-white rounded-3xl border border-[#0a192f]/10">
              <span className="text-4xl text-zinc-300">🥕</span>
              <h3 className="font-serif text-lg text-[#0a192f] font-normal">No specific recipes found</h3>
              <p className="text-[#0a192f]/60 text-xs sm:text-sm font-sans max-w-sm mx-auto leading-relaxed font-light">
                We are actively culinary testing more regional recipes. Select the "All", "Poultry", or "Vegetarian Meals" tab.
              </p>
              <button
                onClick={() => setSelectedCategory('All')}
                className="px-6 py-2.5 bg-[#0a192f] text-white hover:bg-opacity-90 font-sans font-bold tracking-widest text-[10px] uppercase rounded-full cursor-pointer"
              >
                Reset back to All
              </button>
            </div>
          )}
        </div>
      </section>

      {/* DETAILED RECIPE OVERLAY MODULE */}
      <AnimatePresence>
        {activeRecipe && (
          <div className="fixed inset-0 z-50 overflow-y-auto" role="dialog" aria-modal="true">
            <div className="fixed inset-0 bg-[#0a192f]/40 backdrop-blur-md" onClick={() => setActiveRecipe(null)}></div>

            <div className="flex min-h-full items-center justify-center p-4 sm:p-6 lg:p-8 relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.98, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98, y: 10 }}
                className="w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-[#0a192f]/5 overflow-hidden relative z-10 flex flex-col md:flex-row text-left"
              >
                {/* Close Button overlay */}
                <button
                  onClick={() => setActiveRecipe(null)}
                  className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-white/90 text-[#0a192f] shadow hover:text-[#c5a059] transition-colors border border-[#0a192f]/5 cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Left image cover */}
                <div className="md:w-5/12 bg-[#faf9f6] p-6 md:p-8 flex flex-col justify-between border-r border-[#0a192f]/5">
                  <div className="space-y-6">
                    <div className="relative rounded-2xl overflow-hidden aspect-video bg-white border border-[#0a192f]/5 shadow-sm">
                      <img
                        src={activeRecipe.imageUrl}
                        alt={activeRecipe.name}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>

                    <div className="space-y-2">
                      <span className="text-[10px] font-mono tracking-widest text-[#c5a059] uppercase font-bold">
                        {activeRecipe.category}
                      </span>
                      <h3 className="font-serif text-xl font-normal text-[#0a192f] leading-snug">
                        {activeRecipe.name}
                      </h3>
                      <p className="text-[#0a192f]/70 text-[12.5px] leading-relaxed font-light">
                        {activeRecipe.description}
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 pt-4 border-t border-[#0a192f]/10 grid grid-cols-2 gap-4 text-xs">
                    <div>
                      <span className="block text-[#0a192f]/40 font-mono text-[9px] uppercase font-bold tracking-wider mb-0.5">Preparation</span>
                      <span className="font-bold text-[#0a192f]">{activeRecipe.prepTime}</span>
                    </div>
                    <div>
                      <span className="block text-[#0a192f]/40 font-mono text-[9px] uppercase font-bold tracking-wider mb-0.5">Cooking Time</span>
                      <span className="font-bold text-[#0a192f]">{activeRecipe.cookTime}</span>
                    </div>
                  </div>
                </div>

                {/* Right detailed list instructions */}
                <div className="md:w-7/12 p-6 md:p-8 space-y-6 max-h-[500px] md:max-h-none overflow-y-auto">
                  {/* Ingredients */}
                  <div className="space-y-3">
                    <h4 className="text-[10px] uppercase font-sans tracking-widest text-[#0a192f]/40 font-bold border-b border-[#0a192f]/5 pb-1.5">
                      Required Ingredients
                    </h4>
                    <div className="grid grid-cols-1 gap-2">
                      {activeRecipe.ingredients.map((ing, i) => (
                        <div key={i} className="flex gap-2 items-center text-xs text-[#0a192f]/80 font-light">
                          <Check className="w-4 h-4 text-[#4f772d] shrink-0" />
                          <span>{ing}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Classica cooking instruction set */}
                  <div className="space-y-4">
                    <h4 className="text-[10px] uppercase font-sans tracking-widest text-[#0a192f]/40 font-bold border-b border-[#0a192f]/5 pb-1.5 flex items-center gap-1.5">
                      <ChefHat className="w-4 h-4 text-[#c5a059]" /> Classica Cooking Method
                    </h4>
                    <ol className="space-y-4 text-xs sm:text-sm text-[#0a192f]/70 leading-relaxed font-light pl-4 list-decimal">
                      {activeRecipe.instructions.map((inst, i) => (
                        <li key={i} className="pl-1">
                          <span className="text-[#0a192f]/80 font-normal">{inst}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
