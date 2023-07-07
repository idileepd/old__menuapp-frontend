import {
  RestaurantDataType,
  DefaultFoodAttributeEnum,
  DefaultFoodTypeEnum,
} from '@/types/restaurantTypes';

export const restaurantData: RestaurantDataType = {
  restaurantTitle: 'Olio - The Wood Fried Pizzeria',
  restaurantAttributes: ['Pizza', 'Fast Food', 'Italian'],
  restaurantLocation: 'Kondapur',
  restaurantTimings: [
    {
      day: 'SUNDAY',
      times: [
        { startTime: '12', endTime: '2 pm' },
        { startTime: '3', endTime: '6 pm' },
        { startTime: '7', endTime: '11 pm' },
      ],
    },
    {
      day: 'MONDAY',
      times: [
        { startTime: '12', endTime: '4 pm' },
        { startTime: '4', endTime: '11 pm' },
      ],
    },
    {
      day: 'TUESDAY',
      times: [
        { startTime: '12', endTime: '4 pm' },
        { startTime: '4', endTime: '11 pm' },
      ],
    },
    {
      day: 'WEDNESDAY',
      times: [
        { startTime: '12', endTime: '4 pm' },
        { startTime: '4', endTime: '11 pm' },
      ],
    },
    {
      day: 'THURSDAY',
      times: [
        { startTime: '12', endTime: '4 pm' },
        { startTime: '4', endTime: '11 pm' },
      ],
    },
    {
      day: 'FRIDAY',
      times: [
        { startTime: '12', endTime: '4 pm' },
        { startTime: '4', endTime: '11 pm' },
      ],
    },
    {
      day: 'SATURDAY',
      times: [
        { startTime: '12', endTime: '4 pm' },
        { startTime: '4', endTime: '11 pm' },
      ],
    },
  ], // index based weeks, sunday starts
  priceType: 'RUPEE',
  priceSymbol: '₹',
  restaurantAddress:
    'survey 13, SMR Vinay Technopolis, 2nd floor, beside google office, Kothaguda, Telangana 500084',
  restaurantPhoneNumbers: [{ prefixCode: '+91', number: '9898989898' }],
  serviceOptions: ['Dine-in', 'Takeaway', 'No-Contact'],
  primaryCategories: [
    {
      primaryCategoryName: 'Recommended',
      id: '1',
      secondaryCategories: [
        {
          id: 'jhgjg',
          secondaryCategoryName: '',
          items: [
            {
              id: '32234',
              name: 'Five Pepper Pizza',
              price: '339',
              foodType: DefaultFoodTypeEnum.VEG,
              foodAttributes: [
                DefaultFoodAttributeEnum.BESTSELLER,
                DefaultFoodAttributeEnum.GLUITEN_FREE,
                DefaultFoodAttributeEnum.MUST_TRY,
              ],
              foodDescription:
                'Our signature pizza crust loaded with Classic Mozzarella Cheese + Cheddar Cheese + Olives + Red Paprika + Green Pepper + Red Pepper + Yellow Pepper',
              imageUrl:
                'https://b.zmtcdn.com/data/dish_photos/14c/49f5491f10a019da893c3cc61b5b614c.jpg?output-format=webp&fit=around|130:130&crop=130:130;*,*',
            },
            {
              id: 'fsfdsd',
              name: 'Farmhouse Pizza [Multigrain]',
              price: '349',
              foodType: DefaultFoodTypeEnum.VEG,
              foodAttributes: [DefaultFoodAttributeEnum.MUST_TRY],
              foodDescription:
                'Yumm pizza, with multigrain base, classic mozzarella cheese, cheddar cheese, olives, red paprika, green peppers, red pepper and yellow peppers.',
              imageUrl:
                'https://b.zmtcdn.com/data/dish_photos/219/394eac026b47bb851193f0dcb8a2a219.jpg?output-format=webp&fit=around|130:130&crop=130:130;*,*',
            },
            {
              id: '4ffd',
              name: 'Mexican Wave Pizza',
              price: '289',
              foodType: DefaultFoodTypeEnum.NON_VEG,
              foodAttributes: [
                DefaultFoodAttributeEnum.MUST_TRY,
                DefaultFoodAttributeEnum.BESTSELLER,
              ],
              foodDescription:
                'Our signature pizza crust loaded with Classic Mozzarella Cheese + Cheddar Cheese + Onion + Capsicum + Tomato + Jalapeno',
              imageUrl:
                'https://b.zmtcdn.com/data/dish_photos/761/fa8de326f173b6c87ab4c7f197d93761.jpg?output-format=webp&fit=around|130:130&crop=130:130;*,*',
            },
            {
              id: 'sdadbgv',
              name: 'Half & Half Medium Pizza',
              price: '289',
              foodType: DefaultFoodTypeEnum.NON_VEG,
              foodAttributes: [
                DefaultFoodAttributeEnum.MUST_TRY,
                DefaultFoodAttributeEnum.BESTSELLER,
              ],
              foodDescription:
                'Choose any two types of pizza to make your special half and half medium pizza',
            },
            {
              id: 'fdgfdgfd',
              name: 'Paneer Red Hot Pizza [Multigrain]',
              price: '349',
              foodType: DefaultFoodTypeEnum.EGG,
              foodAttributes: [
                DefaultFoodAttributeEnum.MUST_TRY,
                DefaultFoodAttributeEnum.BESTSELLER,
              ],
              foodDescription:
                'Heat up the spirit with fiery paneer pizza! Comes with multigrain base, classic mozzarella cheese, cheddar cheese, peri peri paneer, onion and green bell peppers.',
              imageUrl:
                'https://b.zmtcdn.com/data/dish_photos/d04/6df2b03d4062e91037da979b2fb3ed04.jpg?output-format=webp&fit=around|130:130&crop=130:130;*,*',
            },
          ],
        },
      ],
    },
    {
      id: '2',
      primaryCategoryName: 'Wood Fired Veg Pizza',
      secondaryCategories: [
        {
          id: 'jg76',
          secondaryCategoryName: 'CLASSIC',
          items: [
            {
              id: '1',
              name: 'Deluxe Veggie Pizza',
              price: '279',
              foodType: DefaultFoodTypeEnum.VEG,
              foodAttributes: [DefaultFoodAttributeEnum.BESTSELLER],
              foodDescription:
                'Our signature pizza crust loaded with Classic Mozzarella Cheese + Cheddar Cheese + Onion + Green Bell Pepper',
              imageUrl:
                'https://b.zmtcdn.com/data/dish_photos/95a/cb957477f49a35d91c93e35d5167095a.jpg?output-format=webp&fit=around|130:130&crop=130:130;*,*',
            },
            {
              id: '2',
              name: 'Queen Margherita Pizza',
              price: '439',
              foodType: DefaultFoodTypeEnum.VEG,
              foodAttributes: [DefaultFoodAttributeEnum.BESTSELLER],
              foodDescription:
                'Our signature pizza crust loaded with Classic Mozzarella Cheese + Cheddar Cheese + Tomato',
              imageUrl:
                'https://b.zmtcdn.com/data/dish_photos/2f5/95b936ff3b26a8f92e8ab256fee762f5.jpg?output-format=webp&fit=around|130:130&crop=130:130;*,*',
            },
          ],
        },
        {
          id: '1',
          secondaryCategoryName: 'SUPREME',
          items: [
            {
              id: '1',
              name: 'Mexican Wave Pizza',
              price: '289',
              foodType: DefaultFoodTypeEnum.VEG,
              foodAttributes: [DefaultFoodAttributeEnum.BESTSELLER],
              foodDescription:
                'Our signature pizza crust loaded with Classic Mozzarella Cheese + Cheddar Cheese + Onion + Capsicum + Tomato + Jalapeno',
              imageUrl:
                'https://b.zmtcdn.com/data/dish_photos/761/fa8de326f173b6c87ab4c7f197d93761.jpg?output-format=webp&fit=around|130:130&crop=130:130;*,*',
            },
          ],
        },
        {
          id: '232',
          secondaryCategoryName: 'EXOTIC',
          items: [
            {
              id: '23234345',
              name: 'Paneer Red-Hot Pizza',
              price: '339',
              foodType: DefaultFoodTypeEnum.VEG,
              foodAttributes: [DefaultFoodAttributeEnum.BESTSELLER],
              foodDescription:
                'Red-Hot Peri Peri Paneer with Classic Mozzarella Cheese + Cheddar Cheese + Onion + Green Bell Peppers',
              imageUrl:
                'https://b.zmtcdn.com/data/dish_photos/6c4/edc2eb7335e30999ff1eb741e95676c4.jpg?output-format=webp&fit=around|130:130&crop=130:130;*,*',
            },
            {
              id: 'sdadgf',
              name: 'Farmhouse Pizza',
              price: '339',
              foodType: DefaultFoodTypeEnum.VEG,
              foodAttributes: [DefaultFoodAttributeEnum.BESTSELLER],
              foodDescription:
                'Our signature pizza crust loaded with Classic Mozzarella Cheese + Cheddar Cheese + Olives + Red Paprika + Green Pepper + Red Pepper + Yellow Pepper',
              imageUrl:
                'https://b.zmtcdn.com/data/dish_photos/8b1/0a3293432f8ddef2227889644db818b1.jpg?output-format=webp&fit=around|130:130&crop=130:130;*,*',
            },
            {
              id: '',
              name: 'Five Pepper Pizza',
              price: '339',
              foodType: DefaultFoodTypeEnum.VEG,
              foodAttributes: [],
              foodDescription:
                'Our signature pizza crust loaded with Classic Mozzarella Cheese + Cheddar Cheese + Jalapeno + Red Paprika + Red Pepper + Yellow Pepper + Green Pepper',
              imageUrl:
                'https://b.zmtcdn.com/data/dish_photos/14c/49f5491f10a019da893c3cc61b5b614c.jpg?output-format=webp&fit=around|130:130&crop=130:130;*,*',
            },
          ],
        },
      ],
    },
    {
      id: '3',
      primaryCategoryName: 'Guiltfree By Eatfit!',
      secondaryCategories: [
        {
          secondaryCategoryName: 'Memory Pizza',
          id: 'sfsd',
          items: [
            {
              id: 'assd',
              name: 'Deluxe Veggie Pizza [Multigrain]',
              price: '299',
              foodType: DefaultFoodTypeEnum.VEG,
              foodAttributes: [],
              foodDescription:
                'Delicious veggie pizza topped with classic mozzarella cheese, cheddar cheese, onion and green bell peppers',
              imageUrl:
                'https://b.zmtcdn.com/data/dish_photos/388/2f925c97765f1a353198e2629fd9d388.jpg?output-format=webp&fit=around|130:130&crop=130:130;*,*',
            },
            {
              id: 'asd',
              name: 'Paneer Red Hot Pizza [Multigrain]',
              price: '349',
              foodType: DefaultFoodTypeEnum.VEG,
              foodAttributes: [DefaultFoodAttributeEnum.BESTSELLER],
              foodDescription:
                'Heat up the spirit with fiery paneer pizza! Comes with multigrain base, classic mozzarella cheese, cheddar cheese, peri peri paneer, onion and green bell peppers.',
              imageUrl:
                'https://b.zmtcdn.com/data/dish_photos/d04/6df2b03d4062e91037da979b2fb3ed04.jpg?output-format=webp&fit=around|130:130&crop=130:130;*,*',
            },
            {
              id: 'asdasd',
              name: 'Farmhouse Pizza [Multigrain]',
              price: '349',
              foodType: DefaultFoodTypeEnum.VEG,
              foodAttributes: [DefaultFoodAttributeEnum.BESTSELLER],
              foodDescription:
                'Yumm pizza, with multigrain base, classic mozzarella cheese, cheddar cheese, olives, red paprika, green peppers, red pepper and yellow peppers.',
              imageUrl:
                'https://b.zmtcdn.com/data/dish_photos/219/394eac026b47bb851193f0dcb8a2a219.jpg?output-format=webp&fit=around|130:130&crop=130:130;*,*',
            },
          ],
        },
      ],
    },
  ],
};
