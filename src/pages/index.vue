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

const hotelsList = reactive([...hotels]);

const sortHotels = (sortOption: SortingOptions) => {
  const teste = hotelsList.sort((hotelA, hotelB) => {
    return hotelA[sortOption.value] - hotelB[sortOption.value];
  });

  console.log(teste);
};
</script>
