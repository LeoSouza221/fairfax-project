<template>
  <v-app-bar
    color="primary"
    height="70"
    scroll-behavior="elevate"
    class="position-fixed"
  >
    <template v-slot:prepend>
      <RouterLink to="/">
        <v-icon
          color="white"
          icon="mdi-eiffel-tower"
          class="ml-4"
        ></v-icon>
      </RouterLink>
    </template>
    <v-app-bar-title data-test="header-text">
      <RouterLink
        to="/"
        class="text-white text-decoration-none"
      >
        Fairfax Hotéis
      </RouterLink>
    </v-app-bar-title>
    <template v-slot:append>
      <v-btn
        v-if="hotelComparationList.length > 1"
        icon
        to="/HotelComparation"
      >
        <v-badge
          color="secondary-darken-1"
          :content="hotelComparationList.length"
        >
          <v-icon>mdi-card-multiple</v-icon>
        </v-badge>
      </v-btn>

      <AppNotification />
    </template>
  </v-app-bar>
</template>

<script setup lang="ts">
import { useHotelStore } from '@/stores/hotel';
import { storeToRefs } from 'pinia';

const { hotelComparationList } = storeToRefs(useHotelStore());
</script>
