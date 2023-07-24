// READ ME

/*
App is for small business, to showcase their work and products.
Ex:- 
1. Hair Salon, Beauty services
2. Furniture designs wood works catalog
3. Business service

Process -- 
1. User can scan QR / got to link provided and explore the menu of the store !!
2. They can add items to cart, they can see item details
3. Items can be added with addons ( also ), 
3. Different business with different use cases !!
4. 

*/

// ------------------------------------------------------------------------------------------------------
// ###############  Business Details  ##############################
// ------------------------------------------------------------------------------------------------------

// Timings ----
export enum WeekDays {
  MONDAY = 'Monday',
  TUESDAY = 'Tuesday',
  WEDNESDAY = 'Wednesday',
  THURSDAY = 'Thursday',
  FRIDAY = 'Friday',
  SATURDAY = 'Saturday',
  SUNDAY = 'Sunday',
}
export interface TimeSlot {
  startTime: string;
  endTime: string;
}
export interface BusinessTiming {
  // day: WeekDays;
  day: string;
  timeSlots: TimeSlot[];
}

// Location ----
export interface BusinessLocation {
  googleMapsUrl: string;
  locationText: string;
  physicalAddress: {
    houseNumber: string;
    street: string;
    landmark?: string;
    addressLine1: string;
    addressLine2?: string;
    pincode: string;
  };
}

export interface BusinessCountry {
  countryMobileCode: string;
  countryName: string;
  currencySymbol: string;
  currencyName: string;
}

// Contact
export interface MobileNumber {
  countryCode: string;
  number: string;
}
export interface BusinessContactDetails {
  primaryMobileNumber: MobileNumber;
  otherContacts?: MobileNumber[];
}

export interface Business {
  _id: string;
  name: string;
  slug: string;
  logoImageUrl?: string;
  backgroundImageUrl?: string;
  specialties: string[]; // Which category that Business is best in. "Italian.Spanish.Cushing" "Electrics.Tables.Cool"
  // serviceOptions: string[]; // Dine in, pickup delivery etc...
  timings: BusinessTiming[];
  location: BusinessLocation;
  contact: BusinessContactDetails;
  country: BusinessCountry;
  type: 'FOOD' | 'SERVICE' | 'PRODUCT';
}
