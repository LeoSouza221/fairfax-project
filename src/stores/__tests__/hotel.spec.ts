import { setActivePinia, createPinia } from 'pinia';
import { useHotelStore } from '../hotel';
import { describe, beforeEach, it, expect } from 'vitest';

const mockHotel = {
  available_rooms: 1,
  price: 1000,
  hotel_id: 1,
  chain_id: 421,
  chain_name: 'Samed Resorts Group',
  brand_id: 0,
  brand_name: '',
  hotel_name: 'Sai Kaew Beach Resort',
  hotel_formerly_name: '',
  hotel_translated_name: 'Sai Kaew Beach Resort',
  addressline1: '8/1 Moo 4 Tumbon Phe Muang',
  addressline2: '',
  zipcode: '21160',
  city: 'Koh Samet',
  state: 'Rayong',
  country: 'Thailand',
  countryisocode: 'TH',
  star_rating: 4,
  longitude: 101.466979,
  latitude: 12.568135,
  url: 'https://www.agoda.com/partners/partnersearch.aspx?hid=1',
  checkin: '2:00 PM',
  checkout: '11:30 AM',
  numberrooms: 160,
  numberfloors: null,
  yearopened: 2000,
  yearrenovated: 2018,
  photo1: 'http://pix2.agoda.net/hotelimages/1/-1/0ff4876f93688b8adcbed487b5a2175d.jpg?s=312x',
  photo2: 'http://pix1.agoda.net/hotelimages/1/-1/d821f80943f96ebda33f5a019fa94df4.jpg?s=312x',
  photo3: 'http://pix4.agoda.net/hotelimages/1/-1/59241704e99027895aa6293d734c9fb1.jpg?s=312x',
  photo4: 'http://pix5.agoda.net/hotelimages/1/-1/fce5d70fac02fcb7aa25f31dd25850a8.jpg?s=312x',
  photo5: 'http://pix1.agoda.net/hotelimages/1/-1/7952a908de348304417552246f9039de.jpg?s=312x',
  overview: '',
  rates_from: 166,
  continent_id: 2,
  continent_name: 'Asia',
  city_id: 17222,
  country_id: 106,
  number_of_reviews: 3439,
  rating_average: 8.2,
  rates_currency: 'USD',
};

describe('Hotel Store', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });
  it('add hotel to comparation list', () => {
    const hotel = useHotelStore();
    hotel.addHotelToComparation(mockHotel);

    expect(hotel.hotelComparationList.length).toBe(1);

    hotel.addHotelToComparation(mockHotel);

    expect(hotel.hotelComparationList.length).toBe(2);
  });

  it('remove hotel from comparation list', async () => {
    const hotel = useHotelStore();
    hotel.addHotelToComparation(mockHotel);

    expect(hotel.hotelComparationList.length).toBe(1);

    hotel.removeHotelToComparation(0);

    expect(hotel.hotelComparationList.length).toBe(0);
  });

  it('add hotel to selected hotel', async () => {
    const hotel = useHotelStore();
    hotel.addToSelectedHotel(mockHotel);

    expect(hotel.selectedHotel).toEqual(mockHotel);
  });
  it('get list from comparation id list', () => {
    const newMockHotel = { ...mockHotel, hotel_id: 2 };
    const hotel = useHotelStore();
    hotel.addHotelToComparation(mockHotel);
    hotel.addHotelToComparation(newMockHotel);

    expect(hotel.comparationIdList).toEqual([1, 2]);
  });
});
