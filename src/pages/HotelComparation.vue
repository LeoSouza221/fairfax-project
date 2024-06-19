<template>
  <v-container>
    <div class="d-flex ga-2">
      <v-icon
        icon="mdi-bookmark-multiple"
        color="secondary-darken-1"
      ></v-icon>
      <h3 class="text-secondary-darken-1">Sua lista de comparação</h3>
    </div>

    <v-divider></v-divider>
    <v-row>
      <v-col
        v-for="hotel in hotelComparationList"
        :key="hotel.hotel_id"
        class="d-flex"
        cols="12"
        md="6"
        lg="3"
      >
        <v-card
          class="my-6"
          color="primary"
          rounded="lg"
          variant="outlined"
          tonal
        >
          <v-card-text class="h-100">
            <HotelDetail :hotel="hotel"></HotelDetail>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { useHotelStore } from '@/stores/hotel';
import { storeToRefs } from 'pinia';

const store = useHotelStore();
const { hotelComparationList } = storeToRefs(store);
</script>
