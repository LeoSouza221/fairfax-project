<template>
  <v-dialog
    v-model="dialog"
    width="auto"
  >
    <v-card max-width="400">
      <v-card-title class="text-primary d-flex justify-space-between align-center">
        {{ hotel.hotel_name }}
        <v-btn
          icon="mdi-close"
          variant="text"
          color="secondary-darken-1"
          @click="dialog = false"
        ></v-btn>
      </v-card-title>
      <v-card-text>
        <v-row no-gutters>
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
      </v-card-text>
      <template v-slot:actions>
        <v-btn
          text="Reservar"
          block
          color="secondary-darken-1"
          variant="flat"
          height="40"
          @click="dialog = false"
        ></v-btn>
      </template>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
import { Hotel } from '@/@types';
import { getMoneyFormat } from '@/helpers/moneyFormat';

const props = defineProps<{
  modelValue: boolean;
  hotel: Hotel;
}>();

const emit = defineEmits(['update:modelValue']);

const dialog = computed({
  get() {
    return props.modelValue;
  },
  set(newValue) {
    emit('update:modelValue', newValue);
  },
});
</script>
