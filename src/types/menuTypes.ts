// ------------------------------------------------------------------------------------------------------
// ###############  Categories Structure  ##############################
// ------------------------------------------------------------------------------------------------------

// How pagination works --
// we ask backend to get the data (20 records)

export interface Menu {
  allTags: { [key: string]: Tag }; // backend iterates through all items and generates tags
  mainCategories?: MainCategory[];
  // based on this we can either perform search in list since we know all loaded !!
  // else we do server side search
  //   totalItems: number;
  items: {
    [key: string]: Item;
  };
  addonGroups: { [key: string]: AddonGroup };
  addons: { [key: string]: Addon };
}

// -----------------

export interface MainCategory {
  _id: string;
  mainCategoryName: string;
  subcategories?: SubCategory[];
  itemIds?: string[];
  enable: boolean;
}

export interface SubCategory {
  _id: string;
  subCategoryName: string;
  itemsIds?: string[];
  enable: boolean;
}

// ------------------------------------------------------------------------------------------------------
// ###############  Tag  ##############################
// ------------------------------------------------------------------------------------------------------

export interface Tag {
  _id: string;
  name: string;
  color?: string;
}

export interface TagType {
  visibleOnCard: boolean;
  tagId: string;
}

// ------------------------------------------------------------------------------------------------------
// ###############  Addons  ##############################
// ------------------------------------------------------------------------------------------------------

export interface Addon {
  _id: string;
  foodType?: 'Veg' | 'Non Veg' | 'Egg';
  price: number;
  name: string;
  hiddenName?: string;
  enable: boolean;
}

export interface AddonGroup {
  _id: string;
  min: number; // minimum user can select from addons
  max: number; // maximum user can select
  name: string;
  addonIds: string[];
  hiddenName?: string; // USED TO differentiate common addon groups for admin
  enable: boolean;
}

// ------------------------------------------------------------------------------------------------------
// ###############  Addons  ##############################
// ------------------------------------------------------------------------------------------------------

// Variant -----------------------------------------------
export interface Variant {
  _id: string;
  name: string;
  additionalPrice: number;
  addonGroupIds?: string[];
  enable: boolean;
  default: boolean;
}

export interface VariantGroup {
  _id: string;
  variants: Variant[];
  enable: boolean;
}

// ------------------------------------------------------------------------------------------------------
// ###############  Filters/Tags ##############################
// ------------------------------------------------------------------------------------------------------
export enum StandardBusinessTags {
  BESTSELLER = 'BestSeller',
}

export enum StandardFoodTags {
  MUST_TRY = 'Must Try',
  GLUTEN_FREE = 'Gluten Free',
  KIDS_CHOICE = "Kids's Choice",
  SPICY = 'Spicy',
  SWEET = 'Sweet',
}

export enum StandardFoodTypes {
  VEG = 'Veg',
  NON_VEG = 'Non Veg',
  EGG = 'Egg',
}

// ------------------------------------------------------------------------------------------------------
// ###############  Item ##############################
// ------------------------------------------------------------------------------------------------------

//  ############################## Custom Item Types --------------------------------------
export interface FoodItemDetails {
  foodServingSize?: number; // Persons Count
  foodCaloriesCount?: number;
  foodPreparationMinutes?: number; // minutes
  foodType?: 'Veg' | 'Non Veg' | 'Egg';
}

export interface ServiceItemDetails {
  serviceDurationMinutes?: number; // minutes
  serviceColor?: 'string';
}

export interface ElectricItemDetails {
  electricWarrantyDurationMonths?: number; // minutes
}
// ##################################xx##################-------------------

// graphics media-------------------------------------
export interface ImageDetails {
  defaultImage?: string;
  imagesUrls?: string[];
}

export interface VideoDetails {
  defaultVideo?: string;
  videoUrls?: string[];
}

// Item Types
// export enum ItemType {
//   FOOD_ITEM_TYPE = 'ElectricItemDetails',
//   SERVICE_ITEM_TYPE = 'SERVICE_ITEM_TYPE',
//   ELECTRIC_ITEM_TYPE = 'ELECTRIC_ITEM_TYPE',
// }

export type ItemType =
  | 'FOOD_ITEM_DETAILS'
  | 'SERVICE_ITEM_TYPE'
  | 'ELECTRIC_ITEM_TYPE';

// Item  -------------------------------------------------------
export interface Item {
  _id: string;
  name: string;
  price: number;
  // discount?: number;
  description?: string;

  imageDetails?: ImageDetails;
  videoDetails?: VideoDetails;

  addonGroupIds?: string[];
  tags?: TagType[];
  variantGroups?: VariantGroup[];

  enable?: boolean;
  type: ItemType;
  details: FoodItemDetails | ServiceItemDetails | ElectricItemDetails;
}

export interface CartItem {
  _id: string;
  name: string;
  price: number;
  finalPrice: number;
  addonIds: [];
  variantIds: [];
  count: number;
}
