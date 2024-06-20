<template>
  <v-snackbar
    v-model="alertIsOpen"
    color="success"
  >
    Reserva realizada com sucesso
  </v-snackbar>
  <v-container>
    <div class="d-flex ga-2">
      <v-icon
        icon="mdi-credit-card"
        color="secondary-darken-1"
      ></v-icon>
      <h3 class="text-secondary-darken-1">Informações de pagamento</h3>
    </div>
    <v-divider></v-divider>
    <v-row class="mt-3">
      <v-col
        cols="12"
        md="4"
      >
        <HotelReservationSelected
          v-model="userInfo"
          :hotel="selectedHotel"
        />
      </v-col>
      <v-col
        cols="12"
        md="4"
      >
        <HotelReservationUser v-model="userInfo" />
      </v-col>
      <v-col
        cols="12"
        md="4"
      >
        <HotelReservationSummary
          :hotel="selectedHotel"
          :userInfo="userInfo"
          :loading="loading"
          @validate="submit"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { useHotelStore } from '@/stores/hotel';
import { useNotificationStore } from '@/stores/notification';
import { UserInfo } from '@/@types';
import { storeToRefs } from 'pinia';
import { useRouter } from 'vue-router';
import HotelReservationUser from './HotelReservationUser.vue';
import HotelReservationSelected from './HotelReservationSelected.vue';
import HotelReservationSummary from './HotelReservationSummary.vue';

const router = useRouter();
const notificationStore = useNotificationStore();
const { addNotification } = notificationStore;
const { selectedHotel } = storeToRefs(useHotelStore());

const loading = ref(false);
const alertIsOpen = ref(false);
const userInfo = ref<UserInfo>({
  name: '',
  phone: '',
  email: '',
  payment: '',
  quantity: 1,
});

const submit = () => {
  loading.value = true;
  alertIsOpen.value = true;
  setTimeout(() => {
    loading.value = false;
    addNotification(selectedHotel.value.hotel_name);
    router.push('/');
  }, 3000);
};
</script>
