export interface User {
  name?: string;
  uid?: string;
  phone?: string;
  email?: string;
  photoURL?: string;
  nationalIdURL?: string;
  nationalID?: string;
  propertyId?: string;
  roles?: Roles;
}

export interface Roles {
  agent?: boolean;
  landlord?: boolean;
  tenant?: boolean;
}
