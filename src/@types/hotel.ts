interface Hotel {
  price: number;
  available_rooms: number;
  hotel_id: number;
  chain_id: number;
  chain_name: string;
  brand_id: number;
  brand_name: string;
  hotel_name: string;
  hotel_formerly_name: string;
  hotel_translated_name: string;
  addressline1: string;
  addressline2: string;
  zipcode: string;
  city: string;
  state: string;
  country: string;
  countryisocode: string;
  star_rating: number;
  longitude: number;
  latitude: number;
  url: string;
  checkin: string;
  checkout: string;
  numberrooms: number | null;
  numberfloors: number | null;
  yearopened: number | null;
  yearrenovated: number | null;
  photo1: string;
  photo2: string;
  photo3: string;
  photo4: string;
  photo5: string;
  overview: string;
  rates_from: number;
  continent_id: number;
  continent_name: string;
  city_id: number;
  country_id: number;
  number_of_reviews: number;
  rating_average: number;
  rates_currency: string;
}

interface HotelStore {
  hotelComparationList: Hotel[];
  selectedHotel: Hotel;
}

type HotelKeys = keyof Hotel;

export type { Hotel, HotelStore, HotelKeys };
