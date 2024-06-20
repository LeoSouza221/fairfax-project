<template>
  <v-container>
    <v-responsive>
      <h1 class="text-center text-secondary-darken-1">Encontre os melhores hotéis do mundo</h1>

      <div class="py-4" />

      <HotelFilter />
      <div class="d-flex justify-end">
        <HotelSort @sort-hotels="sortHotels" />
      </div>

      <v-divider></v-divider>
      <HotelList :hotelsList="hotelsList" />
    </v-responsive>
  </v-container>
</template>

<script lang="ts" setup>
import type { SortingOptions } from '@/@types';
import hotels from '@/helpers/hotels.json';

let hotelsList = reactive([...hotels]);

const sortHotels = (sortOption: SortingOptions) => {
  if (sortOption.value === 'city') {
    hotelsList = sortByString(sortOption);

    return;
  }

  hotelsList = sortByNumber(sortOption);
};

const sortByString = (sortOption: SortingOptions) => {
  return hotelsList.sort((hotelA, hotelB) => {
    if (sortOption.sort === 'asc') {
      //@ts-ignore
      if (hotelA[sortOption.value] > hotelB[sortOption.value]) {
        return -1;
      }
      //@ts-ignore
      if (hotelB[sortOption.value] < hotelA[sortOption.value]) {
        return 1;
      }
      return 0;
    } else {
      //@ts-ignore
      if (hotelA[sortOption.value] < hotelB[sortOption.value]) {
        return -1;
      }
      //@ts-ignore
      if (hotelB[sortOption.value] > hotelA[sortOption.value]) {
        return 1;
      }
      return 0;
    }
  });
};

const sortByNumber = (sortOption: SortingOptions) => {
  return hotelsList.sort((hotelA, hotelB) => {
    if (sortOption.sort === 'asc') {
      //@ts-ignore
      return hotelA[sortOption.value] - hotelB[sortOption.value];
    }
    //@ts-ignore
    return hotelB[sortOption.value] - hotelA[sortOption.value];
  });
};
</script>
