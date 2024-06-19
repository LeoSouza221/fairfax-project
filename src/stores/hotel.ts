// Utilities
import { defineStore } from 'pinia';
import type { Hotel } from '@/@types';

interface HotelStore {
  hotelComparationList: Hotel[];
}

export const useHotelStore = defineStore('hotel', {
  state: (): HotelStore => ({
    hotelComparationList: [],
  }),

  actions: {
    addHotelToComparation(hotel: Hotel) {
      return new Promise((resolve, reject) => {
        if (this.hotelComparationList.length < 4) {
          this.hotelComparationList.push(hotel);

          resolve('');
        }

        reject();
      });
    },
    removeHotelToComparation(index: number) {
      this.hotelComparationList.splice(index, 1);
    },
  },

  getters: {
    comparationIdList: (state) =>
      state.hotelComparationList.map((hotel) => {
        return hotel.hotel_id;
      }),
  },
});
