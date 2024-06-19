<template>
  <v-row
    no-gutters
    class="h-100"
  >
    <v-col cols="12">
      <v-carousel height="200">
        <v-carousel-item
          :src="hotel.photo1"
          cover
          height="200"
        ></v-carousel-item>

        <v-carousel-item
          :src="hotel.photo2"
          cover
          height="200"
        ></v-carousel-item>

        <v-carousel-item
          :src="hotel.photo3"
          cover
          height="200"
        ></v-carousel-item>

        <v-carousel-item
          :src="hotel.photo4"
          cover
          height="200"
        ></v-carousel-item>
      </v-carousel>
    </v-col>
    <v-col
      cols="12"
      class="mt-1 d-flex justify-center"
    >
      <v-rating
        :model-value="hotel.star_rating"
        density="compact"
        color="secondary-darken-1"
        disabled
      />
    </v-col>
    <v-col
      cols="12"
      class="my-2"
    >
      <span class="text-subtitle-2 text-primary">
        Descrição:
        <p class="font-weight-light text-justify">{{ hotel.overview ?? '' }}</p>
      </span>
    </v-col>
    <v-col
      cols="6"
      class="mt-2"
    >
      <span class="text-subtitle-2 text-primary">
        Cidade:
        <span class="font-weight-light">{{ hotel.city ?? '' }}</span>
      </span>
    </v-col>
    <v-col
      cols="6"
      class="mt-2 d-flex justify-end"
    >
      <span class="text-subtitle-2 text-primary">
        País:
        <span class="font-weight-light">{{ hotel.country ?? '' }}</span>
      </span>
    </v-col>
    <v-col
      cols="6"
      class="mt-1"
    >
      <span class="text-subtitle-2 text-primary">
        Quartos:
        <span class="font-weight-light">{{ hotel.available_rooms ?? '' }}</span>
      </span>
    </v-col>
    <v-col
      cols="6"
      class="mt-2 d-flex justify-end"
    >
      <span class="text-subtitle-2 text-primary">
        Avaliações:
        <span class="font-weight-light">{{ hotel.number_of_reviews ?? '' }}</span>
      </span>
    </v-col>
    <v-col
      cols="12"
      class="d-flex justify-space-between align-center"
    >
      <span class="text-subtitle-2 text-primary">Diária:</span>
      <span class="text-h6 text-primary">{{ getMoneyFormat(hotel.price) }}</span>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import { Hotel } from '@/@types';
import { getMoneyFormat } from '@/helpers/moneyFormat';

defineProps<{
  hotel: Hotel;
}>();
</script>
