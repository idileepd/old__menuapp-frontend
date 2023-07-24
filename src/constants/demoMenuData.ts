import { Addon, AddonGroup, Item, Menu, Tag } from '@/types/menuTypes';

export const tags: { [key: string]: Tag } = {
  bestseller: {
    _id: 'bestseller',
    color: '#DC9D09',
    name: 'Bestseller',
  },
  musttry: {
    _id: 'musttry',
    color: '#EB447C',
    name: 'Must Try',
  },
  gluitenfree: {
    _id: 'gluitenfree',
    color: '#DC9D09',
    name: 'Gluten Free',
  },
  veg: {
    _id: 'veg',
    color: '#249640',
    name: 'Veg',
  },
  egg: {
    _id: 'egg',
    color: '#DC9D09',
    name: 'Egg',
  },
  nonveg: {
    _id: 'nonveg',
    color: '#A65B43',
    name: 'Non Veg',
  },
};

export const addons: { [key: string]: Addon } = {
  italian_cheese_small: {
    _id: 'italian_cheese_small',
    name: 'Italian Cheese Garlic Bread',
    price: 199,
    foodType: 'Egg',
    hiddenName: 'italian_cheese_small',
    enable: true,
  },
  garlic_bread: {
    _id: 'garlic_bread',
    enable: true,
    foodType: 'Veg',
    name: 'Sundried Tomatoes & Olives Cheese Garlic Bread',
    price: 249,
    hiddenName: 'none',
  },
  itlabGB: {
    _id: 'garlicfasfas_bread',
    enable: true,
    foodType: 'Non Veg',
    name: 'Italian  Pepperoni Cheese Garlic Bread',
    price: 249,
    hiddenName: 'none',
  },
  bacona: {
    _id: 'garlicsasgd_bread',
    enable: true,
    foodType: 'Non Veg',
    name: 'Italian Cheese Garlic Bread With Roasted Chicken',
    price: 249,
    hiddenName: 'none',
  },
  rostChick: {
    _id: 'garlic_afasfbread',
    enable: true,
    foodType: 'Non Veg',
    name: 'Italian Chicken Pepperoni Cheese Garlic Bread',
    price: 249,
    hiddenName: 'none',
  },
  paneer: {
    _id: 'garlic_bsasread',
    enable: false,
    foodType: 'Non Veg',
    name: 'Peri Peri Paneer Cheese Garlic Bread',
    price: 249,
    hiddenName: 'none',
  },

  tanChiken: {
    _id: 'tand',
    enable: true,
    foodType: 'Non Veg',
    name: 'Tandoori Chicken',
    price: 79,
    hiddenName: 'none',
  },

  chikentikka: {
    _id: 'tand',
    enable: true,
    foodType: 'Non Veg',
    name: 'Chicken Tikka',
    price: 79,
    hiddenName: 'none',
  },

  chikenpep: {
    _id: 'tand',
    enable: true,
    foodType: 'Non Veg',
    name: 'Chicken Pepperoni',
    price: 89,
    hiddenName: 'none',
  },

  gttikka: {
    _id: 'tadadnd',
    enable: true,
    foodType: 'Non Veg',
    name: 'Goat Tikka',
    price: 49,
    hiddenName: 'none',
  },

  chikenkabab: {
    _id: 'tadadnd',
    enable: true,
    foodType: 'Non Veg',
    name: 'Chicken Kabab',
    price: 89,
    hiddenName: 'none',
  },

  mozzriasCh: {
    _id: 'tadadnd',
    enable: false,
    foodType: 'Non Veg',
    name: 'Mozzarella Cheese',
    price: 49,
    hiddenName: 'none',
  },

  onion: {
    _id: 'tadadnd',
    enable: true,
    foodType: 'Non Veg',
    name: 'Onion',
    price: 29,
    hiddenName: 'none',
  },

  garlic: {
    _id: 'glc',
    enable: true,
    foodType: 'Non Veg',
    name: 'Garlic',
    price: 29,
    hiddenName: 'none',
  },

  blackOlves: {
    _id: 'glc',
    enable: true,
    foodType: 'Non Veg',
    name: 'Black Olives',
    price: 39,
    hiddenName: 'none',
  },
  redpaprik: {
    _id: 'glc',
    enable: true,
    foodType: 'Non Veg',
    name: 'Red Papirka',
    price: 39,
    hiddenName: 'none',
  },

  jalapens: {
    _id: 'glc',
    enable: true,
    foodType: 'Veg',
    name: 'Jalapeno',
    price: 39,
    hiddenName: 'none',
  },

  coke250: {
    _id: 'glc',
    enable: true,
    foodType: 'Veg',
    name: 'Coke [250ml]',
    price: 57,
    hiddenName: 'none',
  },
  thumpsup: {
    _id: 'glc',
    enable: true,
    foodType: 'Veg',
    name: 'Thums Up [250ml]',
    price: 57,
    hiddenName: 'none',
  },
  mixedfruitjuice: {
    _id: 'glc',
    enable: true,
    foodType: 'Veg',
    name: 'Mixed Fruit Juice',
    price: 89,
    hiddenName: 'none',
  },
  pepsi250: {
    _id: 'glc',
    enable: true,
    foodType: 'Veg',
    name: 'Pepsi [250ml]',
    price: 57,
    hiddenName: 'none',
  },
  mangopineapp: {
    _id: 'glc',
    enable: true,
    foodType: 'Veg',
    name: 'Mango Pineapple Smoothie89',
    price: 89,
    hiddenName: 'none',
  },

  italian_cheese_medium: {
    _id: 'italian_cheese_medium',
    name: 'Italian Cheese Garlic Bread',
    price: 250,
    foodType: 'Egg',
    hiddenName: 'italian_cheese_medium',
    enable: true,
  },
  italian_cheese_big: {
    _id: 'italian_cheese_big',
    name: 'Italian Cheese Garlic Bread',
    price: 300,
    foodType: 'Egg',
    hiddenName: 'italian_cheese_big',
    enable: true,
  },
};

export const addonGroups: { [key: string]: AddonGroup } = {
  house_special_garlic_breads_small: {
    _id: 'house_special_garlic_breads_small',
    addonIds: [
      'italian_cheese_small',
      'garlic_bread',
      'itlabGB',
      'bacona',
      'rostChick',
      'paneer',
    ],
    max: 4,
    min: 0,
    name: 'House Special Garlic Breads!',
    hiddenName: 'small',
    enable: true,
  },
  house_special_garlic_breads_medium: {
    _id: 'house_special_garlic_breads1_medium',
    addonIds: [
      'italian_cheese_medium',
      'garlic_bread',
      'itlabGB',
      'bacona',
      'rostChick',
      'paneer',
    ],
    max: 4,
    min: 0,
    name: 'House Special Garlic Breads!',
    hiddenName: 'medium',
    enable: true,
  },
  house_special_garlic_breads1_big: {
    _id: 'house_special_garlic_breads1_big',
    addonIds: [
      'italian_cheese_big',
      'garlic_bread',
      'itlabGB',
      'bacona',
      'rostChick',
      'paneer',
    ],
    max: 4,
    min: 0,
    name: 'House Special Garlic Breads!',
    hiddenName: 'large',
    enable: true,
  },
  extra_nonveg_toppins: {
    _id: 'extra_nonveg_toppins',
    addonIds: [
      'tanChiken',
      'chikentikka',
      'chikenpep',
      'gttikka',
      'chikenkabab',
    ],
    max: 3,
    min: 0,
    name: 'Extra Non Veg Toppings',
    enable: true,
  },
  extra_veg_toppins: {
    _id: 'extra_veg_toppins',
    addonIds: [
      'mozzriasCh',
      'onion',
      'garlic',
      'blackOlves',
      'redpaprik',
      'jalapens',
    ],
    max: 3,
    min: 0,
    name: 'Extra Veg Toppings',
    enable: true,
  },
  beverages: {
    _id: 'beverages',
    addonIds: [
      'coke250',
      'thumpsup',
      'mixedfruitjuice',
      'pepsi250',
      'mangopineapp',
    ],
    max: 3,
    min: 0,
    name: 'Beverages',
    enable: true,
  },
};

export const items: { [key: string]: Item } = {
  'deluxepizza-1': {
    _id: 'deluxepizza-1',
    name: 'Deluxe Veggie Pizza',
    price: 279,
    description:
      'Our signature pizza crust loaded with Classic Mozzarella Cheese + Cheddar Cheese + Onion + Green Bell Pepper',
    imageDetails: {
      defaultImage:
        'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/cb957477f49a35d91c93e35d5167095a',
    },
    tags: [
      { tagId: 'veg', visibleOnCard: true },
      { tagId: 'bestseller', visibleOnCard: true },
      { tagId: 'musttry', visibleOnCard: true },
    ],
    addonGroupIds: ['extra_nonveg_toppins', 'extra_veg_toppins', 'beverages'],
    variantGroups: [
      {
        enable: true,
        _id: 'var1',
        variants: [
          {
            default: true,
            _id: 'var1',
            additionalPrice: 0,
            name: '8 Inch (Regular)',
            addonGroupIds: ['house_special_garlic_breads_small'],
            enable: true,
          },
          {
            _id: 'var2',
            additionalPrice: 20,
            name: '10 Inch (Medium)',
            addonGroupIds: ['house_special_garlic_breads1_medium'],
            enable: false,
            default: false,
          },
          {
            _id: 'var3',
            additionalPrice: 30,
            name: '12 Inch (Large)',
            addonGroupIds: ['house_special_garlic_breads1_big'],
            enable: true,
            default: false,
          },
        ],
      },
    ],
    type: 'FOOD_ITEM_DETAILS',
    details: {
      foodType: 'Veg',
      foodPreparationMinutes: 50,
      foodCaloriesCount: 300,
      foodServingSize: 2,
    },
  },
  'queejmargieta-pizza': {
    _id: 'queejmargieta-pizza',
    name: 'Queen Margherita Pizza',
    description:
      'Our signature pizza crust loaded with Classic Mozzarella Cheese + Cheddar Cheese + Tomato',
    price: 159,
    addonGroupIds: ['extra_nonveg_toppins', 'extra_veg_toppins', 'beverages'],
    tags: [
      { tagId: 'egg', visibleOnCard: true },
      { tagId: 'bestseller', visibleOnCard: true },
      { tagId: 'musttry', visibleOnCard: true },
    ],
    variantGroups: [
      {
        enable: true,
        _id: 'var1',
        variants: [
          {
            default: true,
            _id: 'var1',
            additionalPrice: 0,
            name: '8 Inch (Regular)',
            addonGroupIds: ['house_special_garlic_breads_small'],
            enable: true,
          },
          {
            _id: 'var2',
            additionalPrice: 20,
            name: '10 Inch (Medium)',
            addonGroupIds: ['house_special_garlic_breads1_medium'],
            enable: false,
            default: false,
          },
          {
            _id: 'var3',
            additionalPrice: 30,
            name: '12 Inch (Large)',
            addonGroupIds: ['house_special_garlic_breads1_big'],
            enable: true,
            default: false,
          },
        ],
      },
    ],
    type: 'FOOD_ITEM_DETAILS',
    details: {
      foodCaloriesCount: 500,
      foodPreparationMinutes: 50,
      foodServingSize: 2,
      foodType: 'Veg',
    },
  },
  'mexicanwavep-1': {
    _id: 'mexicanwave',
    name: 'Mexican Wave Pizza',
    description:
      'Our signature pizza crust loaded with Classic Mozzarella Cheese + Cheddar Cheese + Onion + Capsicum + Tomato + Jalapeno',
    price: 289,
    type: 'FOOD_ITEM_DETAILS',
    details: {
      foodCaloriesCount: 500,
      foodPreparationMinutes: 50,
      foodServingSize: 2,
      foodType: 'Veg',
    },
    tags: [
      { tagId: 'veg', visibleOnCard: true },
      { tagId: 'bestseller', visibleOnCard: true },
    ],
    addonGroupIds: ['extra_veg_toppins', 'beverages', 'extra_nonveg_toppins'],
    variantGroups: [
      {
        enable: true,
        _id: 'var1',
        variants: [
          {
            default: true,
            _id: 'var1',
            additionalPrice: 0,
            name: '8 Inch (Regular)',
            enable: true,
          },
          {
            _id: 'var2',
            additionalPrice: 20,
            name: '10 Inch (Medium)',
            enable: false,
            default: false,
          },
          {
            _id: 'var3',
            additionalPrice: 30,
            name: '12 Inch (Large)',
            enable: true,
            default: false,
          },
        ],
      },
    ],
  },
  'form-house': {
    _id: 'farm-house',
    name: 'Farmhouse Pizza',
    description:
      'Our signature pizza crust loaded with Classic Mozzarella Cheese + Cheddar Cheese + Olives + Red Paprika + Green Pepper + Red Pepper + Yellow Pepper',
    price: 339,
    type: 'FOOD_ITEM_DETAILS',
    details: {
      foodCaloriesCount: 200,
      foodPreparationMinutes: 30,
      foodServingSize: 2,
      foodType: 'Veg',
    },
    tags: [
      { tagId: 'veg', visibleOnCard: true },
      { tagId: 'bestseller', visibleOnCard: true },
    ],
    addonGroupIds: ['extra_veg_toppins', 'extra_nonveg_toppins'],
    variantGroups: [
      {
        enable: true,
        _id: 'var1',
        variants: [
          {
            default: true,
            _id: 'var1',
            additionalPrice: 0,
            name: '8 Inch (Regular)',
            addonGroupIds: ['house_special_garlic_breads_small'],
            enable: true,
          },
          {
            _id: 'var2',
            additionalPrice: 20,
            name: '10 Inch (Medium)',
            addonGroupIds: ['house_special_garlic_breads1_medium'],
            enable: false,
            default: false,
          },
          {
            _id: 'var3',
            additionalPrice: 30,
            name: '12 Inch (Large)',
            addonGroupIds: ['house_special_garlic_breads1_big'],
            enable: true,
            default: false,
          },
        ],
      },
    ],
  },
  'chicken-kingdom-pizza': {
    _id: 'chicken-kingdom-pizza',
    name: 'Chicken Kingdom Pizza',
    description:
      'Our signature pizza crust loaded with Classic Mozzarella Cheese + Cheddar Cheese + Chicken Tikka + Peri Peri Chicken + Tandoori Chicken',
    price: 369,
    type: 'FOOD_ITEM_DETAILS',
    details: {
      foodCaloriesCount: 600,
      foodPreparationMinutes: 40,
      foodServingSize: 2,
      foodType: 'Non Veg',
    },
    addonGroupIds: ['extra_veg_toppins', 'extra_nonveg_toppins'],
    tags: [
      { tagId: 'nonveg', visibleOnCard: true },
      { tagId: 'musttry', visibleOnCard: true },
    ],
    variantGroups: [
      {
        enable: true,
        _id: 'var1',
        variants: [
          {
            default: true,
            _id: 'var1',
            additionalPrice: 0,
            name: '8 Inch (Regular)',
            addonGroupIds: ['house_special_garlic_breads_small'],
            enable: true,
          },
          {
            _id: 'var2',
            additionalPrice: 20,
            name: '10 Inch (Medium)',
            addonGroupIds: ['house_special_garlic_breads1_medium'],
            enable: false,
            default: false,
          },
          {
            _id: 'var3',
            additionalPrice: 30,
            name: '12 Inch (Large)',
            addonGroupIds: ['house_special_garlic_breads1_big'],
            enable: true,
            default: false,
          },
        ],
      },
    ],
  },

  fivepepperpizza: {
    _id: 'fivepepperpizza',
    name: 'Five Pepper Pizza',
    description:
      'Our signature pizza crust loaded with Classic Mozzarella Cheese + Cheddar Cheese + Jalapeno + Red Paprika + Red Pepper + Yellow Pepper + Green Pepper',
    price: 339,
    type: 'FOOD_ITEM_DETAILS',
    details: {
      foodCaloriesCount: 600,
      foodPreparationMinutes: 40,
      foodServingSize: 2,
      foodType: 'Veg',
    },
    tags: [
      { tagId: 'nonveg', visibleOnCard: true },
      { tagId: 'musttry', visibleOnCard: true },
    ],
    addonGroupIds: ['extra_veg_toppins', 'extra_nonveg_toppins'],
    variantGroups: [
      {
        enable: true,
        _id: 'var1',
        variants: [
          {
            default: true,
            _id: 'var1',
            additionalPrice: 0,
            name: '8 Inch (Regular)',
            addonGroupIds: ['house_special_garlic_breads_small'],
            enable: true,
          },
          {
            _id: 'var2',
            additionalPrice: 20,
            name: '10 Inch (Medium)',
            addonGroupIds: ['house_special_garlic_breads1_medium'],
            enable: false,
            default: false,
          },
          {
            _id: 'var3',
            additionalPrice: 30,
            name: '12 Inch (Large)',
            addonGroupIds: ['house_special_garlic_breads1_big'],
            enable: true,
            default: false,
          },
        ],
      },
    ],
  },

  dulexemultigrain: {
    _id: 'dulexemultigrain',
    name: 'Deluxe Veggie Pizza [Multigrain]',
    description:
      'Delicious veggie pizza topped with classic mozzarella cheese, cheddar cheese, onion and green bell peppers',
    price: 299,
    type: 'FOOD_ITEM_DETAILS',
    details: {
      foodCaloriesCount: 300,
      foodPreparationMinutes: 40,
      foodServingSize: 2,
      foodType: 'Veg',
    },
    tags: [
      { tagId: 'veg', visibleOnCard: true },
      { tagId: 'musttry', visibleOnCard: true },
    ],
    addonGroupIds: ['extra_veg_toppins', 'extra_nonveg_toppins'],
    variantGroups: [
      {
        enable: true,
        _id: 'var1',
        variants: [
          {
            default: true,
            _id: 'var1',
            additionalPrice: 0,
            name: '8 Inch (Regular)',
            enable: true,
          },
          {
            _id: 'var2',
            additionalPrice: 20,
            name: '10 Inch (Medium)',
            enable: false,
            default: false,
          },
          {
            _id: 'var3',
            additionalPrice: 30,
            name: '12 Inch (Large)',
            enable: true,
            default: false,
          },
        ],
      },
    ],
  },

  farm_house_multigrain: {
    _id: 'farm_house_multigrain',
    name: 'Farmhouse Pizza [Multigrain]',
    description:
      'Yummy pizza, with multigrain base, classic mozzarella cheese, cheddar cheese, olives, red paprika, green peppers, red pepper and yellow peppers.',
    price: 299,
    type: 'FOOD_ITEM_DETAILS',
    details: {
      foodCaloriesCount: 300,
      foodPreparationMinutes: 40,
      foodServingSize: 2,
      foodType: 'Veg',
    },
    tags: [{ tagId: 'veg', visibleOnCard: true }],
    addonGroupIds: ['extra_veg_toppins', 'extra_nonveg_toppins'],
    variantGroups: [
      {
        enable: true,
        _id: 'var1',
        variants: [
          {
            default: true,
            _id: 'var1',
            additionalPrice: 0,
            name: '8 Inch (Regular)',
            enable: true,
          },
          {
            _id: 'var2',
            additionalPrice: 20,
            name: '10 Inch (Medium)',
            enable: false,
            default: false,
          },
          {
            _id: 'var3',
            additionalPrice: 30,
            name: '12 Inch (Large)',
            enable: true,
            default: false,
          },
        ],
      },
    ],
  },

  fierychiken_multigrain: {
    _id: 'fierychiken_multigrain',
    name: 'Fiery Chicken Pizza [Multigrain]',
    description:
      'Heat up the spirit with fiery chicken pizza! Comes with multigrain base, classic mozzarella cheese, cheddar cheese, peri peri chicken, red paprika, onion and green bell peppers.',
    price: 359,
    type: 'FOOD_ITEM_DETAILS',
    details: {
      foodCaloriesCount: 200,
      foodPreparationMinutes: 40,
      foodServingSize: 2,
      foodType: 'Veg',
    },
    tags: [{ tagId: 'nonveg', visibleOnCard: true }],
    addonGroupIds: ['extra_veg_toppins', 'extra_nonveg_toppins'],
    variantGroups: [
      {
        enable: true,
        _id: 'var1',
        variants: [
          {
            default: true,
            _id: 'var1',
            additionalPrice: 0,
            name: '8 Inch (Regular)',
            enable: true,
          },
          {
            _id: 'var2',
            additionalPrice: 20,
            name: '10 Inch (Medium)',
            enable: false,
            default: false,
          },
          {
            _id: 'var3',
            additionalPrice: 30,
            name: '12 Inch (Large)',
            enable: true,
            default: false,
          },
        ],
      },
    ],
  },
  coke_250: {
    _id: 'coke_250',
    name: 'Coke [250ml]',
    price: 57,
    type: 'FOOD_ITEM_DETAILS',
    tags: [{ tagId: 'veg', visibleOnCard: true }],
    details: {
      foodCaloriesCount: 300,
      foodPreparationMinutes: 0,
      foodServingSize: 1,
      foodType: 'Veg',
    },
  },
  thumps_250: {
    _id: 'thumps_250',
    name: 'Thums Up [250ml]',
    price: 57,
    type: 'FOOD_ITEM_DETAILS',
    tags: [{ tagId: 'veg', visibleOnCard: true }],
    details: {
      foodCaloriesCount: 300,
      foodPreparationMinutes: 0,
      foodServingSize: 1,
      foodType: 'Veg',
    },
  },
};

export const menuData: Menu = {
  allTags: tags,
  mainCategories: [
    {
      _id: 'main1',
      enable: true,
      mainCategoryName: 'Recommended',
      itemIds: [
        'deluxepizza-1',
        'queejmargieta-pizza',
        'mexicanwavep-1',
        'form-house',
        'chicken-kingdom-pizza',
      ],
    },
    {
      _id: 'main2',
      enable: true,
      mainCategoryName: 'Wood Fired Veg Pizza',
      subcategories: [
        {
          _id: 'sub1',
          enable: true,
          subCategoryName: 'Classic',
          itemsIds: ['deluxepizza-1', 'queejmargieta-pizza'],
        },
        {
          _id: 'sub2',
          enable: true,
          subCategoryName: 'Supreme',
          itemsIds: ['mexicanwavep-1'],
        },
        {
          _id: 'sub3',
          enable: true,
          subCategoryName: 'Exotic',
          itemsIds: ['form-house', 'fivepepperpizza'],
        },
      ],
    },
    {
      _id: 'main3',
      enable: true,
      mainCategoryName: 'Wood Fired Non Veg Pizza',
      subcategories: [
        {
          _id: 'sub1',
          enable: true,
          itemsIds: ['chicken-kingdom-pizza'],
          subCategoryName: 'Supreme',
        },
      ],
    },
    {
      _id: 'guilt-free-eat',
      enable: true,
      mainCategoryName: 'Guiltfree By Eatfit!',
      itemIds: [
        'dulexemultigrain',
        'farm_house_multigrain',
        'fierychiken_multigrain',
      ],
    },
    {
      _id: 'bevrages',
      enable: true,
      mainCategoryName: 'Beverages',
      itemIds: ['coke_250', 'thumps_250'],
    },
  ],
  items,
  addonGroups,
  addons,
};
