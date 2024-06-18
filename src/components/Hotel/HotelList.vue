<template>
  <v-container>
    <v-list lines="two">
      <v-list-item
        v-for="hotel in hotelsList"
        :key="hotel.hotel_id"
        :title="hotel.hotel_name"
      >
        <template v-slot:prepend>
          <v-avatar color="grey-lighten-1">
            <v-icon color="white">mdi-folder</v-icon>
          </v-avatar>
        </template>

        <template v-slot:subtitle>
          <span>Quartos: {{ hotel.numberrooms }}</span>
        </template>

        <template v-slot:append>
          <span>{{ hotel.chain_id }}</span>
        </template>
      </v-list-item>
    </v-list>
  </v-container>
</template>

<script setup lang="ts">
import hotels from '@/helpers/hotels.json';

interface Hotel {
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

console.log(typeof hotels);

const hotelsList: Hotel[] = hotels;
</script>

<style module lang="postcss">
.hotelList {
  @apply flex;
}
</style>
