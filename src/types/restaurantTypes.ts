// Default Enums
export enum DefaultFoodAttributeEnum {
  BESTSELLER = 'Bestseller',
  MUST_TRY = 'Must Try',
  GLUITEN_FREE = 'Gluiten Free',
}

export enum DefaultFoodTypeEnum {
  VEG = 'VEG',
  NON_VEG = 'NON_VEG',
  EGG = 'EGG',
}

// Chips Types
export enum FilterChipItemType {
  FOOD_TYPE = 'FOOD_TYPE',
  GENERAL = 'GENERAL',
}
export interface FilterChipType {
  name: string;
  type: FilterChipItemType;
  isSelected?: boolean;
}

// Category Types
export interface RestaurantPrimaryCategories {
  id: string;
  primaryCategoryName: string;
  secondaryCategories: RestaurantSecondaryCategories[];
}
export interface RestaurantSecondaryCategories {
  id: string;
  secondaryCategoryName: string;
  items: RestaurantFoodItem[];
}

export interface FoodAttributeType {
  type: DefaultFoodAttributeEnum;
  color?: string;
}

export interface RestaurantFoodItem {
  id: string;
  name: string;
  price: string;
  foodType: string;
  foodAttributes: string[];
  foodDescription: string;
  imageUrl?: string;
}

// Restaurant Data Type
export interface RestaurantDataType {
  restaurantTitle: string;
  restaurantAttributes: string[];
  restaurantLocation: string;
  restaurantTimings: {
    day: string;
    times: {
      startTime: string;
      endTime: string;
    }[];
  }[];
  priceType: string;
  priceSymbol: string;
  restaurantAddress: string;
  restaurantPhoneNumbers: {
    prefixCode: string;
    number: string;
  }[];
  serviceOptions: string[];
  primaryCategories: RestaurantPrimaryCategories[];
}
