export interface VerifiedAddress {
  formattedAddress: string;
  placeId: string;
  latitude: number | null;
  longitude: number | null;
  postcode: string;
  suburb: string;
  city: string;
  region: string;
  country: string;
  streetAddress: string;
}

export const EMPTY_VERIFIED_ADDRESS: VerifiedAddress = {
  formattedAddress: "",
  placeId: "",
  latitude: null,
  longitude: null,
  postcode: "",
  suburb: "",
  city: "",
  region: "",
  country: "",
  streetAddress: "",
};

export function serializeVerifiedAddress(address: VerifiedAddress) {
  return {
    address: address.formattedAddress,
    addressPlaceId: address.placeId,
    addressLatitude: address.latitude,
    addressLongitude: address.longitude,
    addressPostcode: address.postcode,
    addressSuburb: address.suburb,
    addressCity: address.city,
    addressRegion: address.region,
    addressCountry: address.country,
    addressStreet: address.streetAddress,
  };
}

declare global {
  interface Window {
    google?: typeof google;
  }
}

export {};
