export interface Property {
    propertyId?: string;
    propertyName?: string;
    category?:string;
    AvailableSlots?:number;
    country?:string;
    county?:string;
    location?:string;
    features?: Features;
    Town?:string;
    imageUrl:string;
    Rent:number
    
  
  }
  export interface Features{
    shower?: boolean;
    token?: boolean;
    fan?: boolean;
    wardrobe?: boolean;
    tiles?: boolean;
    swim?: boolean;

  }
  