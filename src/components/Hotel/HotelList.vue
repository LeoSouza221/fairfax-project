<template>
  <v-container>
    <HotelDetail
      v-model="detailModalIsOpen"
      :hotel="selectedHotel"
    />
    <div
      v-for="hotel in hotelsList"
      :key="hotel.hotel_id"
      class="position-relative"
    >
      <div class="position-absolute button-position">
        <v-tooltip
          location="top"
          text="Adicionar à comparação"
        >
          <template v-slot:activator="{ props }">
            <v-btn
              v-bind="props"
              icon="mdi-plus"
              color="primary"
              density="comfortable"
            ></v-btn>
          </template>
        </v-tooltip>
      </div>
      <v-card
        class="my-6"
        color="primary"
        rounded="lg"
        variant="outlined"
        tonal
        hover
        @click="setHotelDetailAndOpenModal(hotel)"
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
            class="d-flex justify-end align-center"
          >
            <span class="text-h6 mx-3">{{ getMoneyFormat(hotel.price) }}</span>
          </v-col>
        </v-row>
      </v-card>
    </div>
  </v-container>
</template>

<script setup lang="ts">
import { useDisplay } from 'vuetify';
import { getMoneyFormat } from '@/helpers/moneyFormat';
import type { Hotel } from '@/@types';
import hotels from '@/helpers/hotels.json';

const { name } = useDisplay();
const hotelsList: Hotel[] = hotels;
const detailModalIsOpen = ref(false);
let selectedHotel = reactive<Hotel>({});

const setHotelDetailAndOpenModal = (hotel: Hotel) => {
  selectedHotel = hotel;

  detailModalIsOpen.value = true;
};
</script>

<style scoped lang="sass">
.button-position
  z-index: 1
  top: -15px
  right: -15px
</style>
