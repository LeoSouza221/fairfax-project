<template>
  <v-container>
    <v-card
      v-for="hotel in hotelsList"
      :key="hotel.hotel_id"
      class="my-4"
      color="primary"
      rounded="lg"
      variant="outlined"
    >
      <v-row no-gutters>
        <v-col
          cols="12"
          md="2"
          class="d-flex justify-center align-center"
        >
          <v-img
            cover
            :height="name === 'xs' || name === 'sm' ? '120' : '80'"
            :aspect-ratio="1"
            :src="hotel.photo1"
          />
        </v-col>
        <v-col
          cols="12"
          md="8"
          class="d-flex"
        >
          <v-row no-gutters>
            <v-col
              cols="12"
              class="px-2"
            >
              <span class="text-h6">{{ hotel.hotel_name }}</span>
            </v-col>

            <v-row no-gutters>
              <v-col
                cols="12"
                md="4"
                class="px-2"
              >
                <span class="text-subtitle-2 text-primary">
                  Cidade:
                  <span class="font-weight-light">{{ hotel.city ?? '' }}</span>
                </span>
              </v-col>
              <v-col
                cols="12"
                md="4"
                class="px-2"
              >
                <span class="text-subtitle-2 text-primary">
                  Avaliações:
                  <span class="font-weight-light">{{ hotel.number_of_reviews ?? '' }}</span>
                </span>
              </v-col>
              <v-col
                cols="12"
                md="4"
                class="px-2"
              >
                <v-rating
                  v-model="hotel.star_rating"
                  density="compact"
                  color="secondary-darken-1"
                />
              </v-col>
            </v-row>
          </v-row>
        </v-col>
        <v-col
          cols="12"
          md="2"
          class="d-flex justify-center align-center"
        >
          <span class="text-h6">{{ getMoneyFormat(hotel.price) }}</span>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script setup lang="ts">
import { useDisplay } from 'vuetify';
import { getMoneyFormat } from '@/helpers/moneyFormat';
import hotels from '@/helpers/hotels.json';

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

const hotelsList: Hotel[] = hotels;
const { name } = useDisplay();
</script>

<style module lang="postcss">
.hotelList {
  @apply flex;
}
</style>
