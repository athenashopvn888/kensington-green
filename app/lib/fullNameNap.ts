/**
 * KSC01 exact full name + NAP. Name = the store's full name as used on its Google Business Profile.
 * Public GBP primary phone only. Map link = this store's own Google place ID.
 */
export const FULL_NAME_NAP = {
  "code": "KSC01",
  "fullName": "Kensington Green Cannabis Dispensary Weed Delivery",
  "street": "2257 Dundas St W",
  "city": "Toronto",
  "region": "ON",
  "postal": "M6R 1X6",
  "phoneDisplay": "(289) 514-9520",
  "phoneTel": "tel:+12895149520",
  "hours": "Open 24 hours, 7 days a week",
  "mapsUrl": "https://www.google.com/maps/place/?q=place_id:ChIJ6WD9QIo1K4gRuj5vJFXqyGo",
  "placeId": "ChIJ6WD9QIo1K4gRuj5vJFXqyGo"
} as const;

export const FULL_NAME_NAP_ADDRESS = `${FULL_NAME_NAP.street}, ${FULL_NAME_NAP.city}, ${FULL_NAME_NAP.region} ${FULL_NAME_NAP.postal}`;
