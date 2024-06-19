<template>
  <v-app-bar
    color="primary"
    height="70"
    scroll-behavior="elevate"
    class="position-fixed"
  >
    <template v-slot:prepend>
      <v-btn
        icon="mdi-eiffel-tower"
        class="ml-4"
        plain
        :ripple="false"
        to="/"
      >
      </v-btn>
    </template>
    <v-app-bar-title data-test="header-text ma-0">Fairfax Hotéis</v-app-bar-title>
    <template v-slot:append>
      <v-btn
        icon="mdi-card-multiple"
        to="/HotelComparation"
      >
        <v-badge
          color="secondary-darken-1"
          :content="hotelComparationList.length"
        >
          <v-icon>mdi-bell-outline</v-icon>
        </v-badge>
      </v-btn>
    </template>
  </v-app-bar>
</template>

<script setup lang="ts">
import { useHotelStore } from '@/stores/hotel';
import { storeToRefs } from 'pinia';

const store = useHotelStore();
const { hotelComparationList } = storeToRefs(store);
</script>
