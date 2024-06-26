<template>
  <v-container>
    <HotelModalDetail
      v-model="detailModalIsOpen"
      :hotel="selectedHotel"
    />
    <v-snackbar
      v-model="alertIsOpen"
      color="primary"
    >
      {{ alertMessage }}
    </v-snackbar>

    <TransitionGroup name="list">
      <div
        v-if="loadingHotels"
        class="d-flex justify-center"
      >
        <v-progress-circular
          :size="80"
          color="primary"
          indeterminate
        ></v-progress-circular>
      </div>

      <div
        v-else
        v-for="hotel in hotelsList"
        :key="hotel.hotel_id"
        class="position-relative"
      >
        <div class="position-absolute button-position">
          <v-tooltip
            v-if="!store.comparationIdList.includes(hotel.hotel_id)"
            location="top"
            text="Adicionar à comparação"
          >
            <template v-slot:activator="{ props }">
              <v-btn
                v-bind="props"
                icon="mdi-plus"
                color="secondary-darken-1"
                density="comfortable"
                :disabled="loading"
                @click="checkLengthAndAddHotel(hotel)"
              ></v-btn>
            </template>
          </v-tooltip>
          <v-tooltip
            v-else
            location="top"
            text="Remover da comparação"
          >
            <template v-slot:activator="{ props }">
              <v-btn
                v-bind="props"
                icon="mdi-minus"
                color="primary"
                density="comfortable"
                :disabled="loading"
                @click="checkPositionAndRemoveHotel(hotel)"
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
                      :model-value="hotel.star_rating"
                      density="compact"
                      color="secondary-darken-1"
                      disabled
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
    </TransitionGroup>
  </v-container>
</template>

<script setup lang="ts">
import { useDisplay } from 'vuetify';
import { getMoneyFormat } from '@/helpers/moneyFormat';
import type { Hotel } from '@/@types';
import { useHotelStore } from '@/stores/hotel';
import { storeToRefs } from 'pinia';

defineProps<{
  hotelsList: Hotel[];
  loadingHotels: boolean;
}>();

const store = useHotelStore();
const { addHotelToComparation, removeHotelToComparation } = store;
const { hotelComparationList } = storeToRefs(store);

const { name } = useDisplay();

const detailModalIsOpen = ref(false);
const alertIsOpen = ref(false);
const loading = ref(false);
const alertMessage = ref('');
let selectedHotel = reactive<Hotel>({} as Hotel);

const setHotelDetailAndOpenModal = (hotel: Hotel) => {
  selectedHotel = hotel;

  detailModalIsOpen.value = true;
};

const checkLengthAndAddHotel = (hotel: Hotel) => {
  loading.value = true;
  addHotelToComparation(hotel)
    .then(() => {
      alertMessage.value = 'Adiciona a lista de comparação';
      alertIsOpen.value = true;
    })
    .catch(() => {
      alertMessage.value = 'Lista de comparação está cheia (máximo 4)';
      alertIsOpen.value = true;
    })
    .finally(() => (loading.value = false));
};

const checkPositionAndRemoveHotel = (hotel: Hotel) => {
  const position = hotelComparationList.value.findIndex((hotelItem: Hotel) => {
    return hotelItem.hotel_id === hotel.hotel_id;
  });

  if (position >= 0) {
    removeHotelToComparation(position);

    alertMessage.value = 'Item removido com sucesso';
    alertIsOpen.value = true;
  }
};
</script>

<style scoped lang="sass">
.button-position
  z-index: 1
  top: -15px
  right: -15px

.list-enter-active,
.list-leave-active
  transition: all 0.5s ease

.list-enter-from,
.list-leave-to
  opacity: 0
  transform: translateX(30px)
</style>
