<template>
  <h3 class="text-secondary-darken-1">Quarto selecionado</h3>
  <v-card
    color="primary"
    rounded="lg"
    variant="outlined"
    tonal
  >
    <v-card-text class="h-100">
      <v-row
        no-gutters
        class="h-100"
      >
        <v-col
          cols="12"
          class="d-flex justify-center align-center"
        >
          <v-img
            cover
            height="120"
            :aspect-ratio="1"
            :src="hotel.photo1"
          />
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
          cols="12"
          class="d-flex justify-space-between align-center"
        >
          <span class="text-subtitle-2 text-primary">Diária:</span>
          <span class="text-h6 text-primary">{{ getMoneyFormat(hotel.price) }}</span>
        </v-col>
        <v-col cols="6">
          <span class="text-subtitle-2 text-primary"> Quantidade de dias: </span>
        </v-col>
        <v-col
          cols="6"
          class="d-flex ga-3 align-center justify-end"
        >
          <v-btn
            icon="mdi-minus"
            color="secondary-darken-1"
            size="x-small"
            :disabled="userInfo.quantity === 1"
            @click="userInfo.quantity -= 1"
          />
          <span>{{ userInfo.quantity }}</span>
          <v-btn
            icon="mdi-plus"
            color="secondary-darken-1"
            size="x-small"
            @click="userInfo.quantity += 1"
          />
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
import { Hotel, UserInfo } from '@/@types';
import { getMoneyFormat } from '@/helpers/moneyFormat';

const props = defineProps<{
  hotel: Hotel;
  modelValue: UserInfo;
}>();

const emit = defineEmits(['update:modelValue']);

const userInfo = computed({
  get() {
    return props.modelValue;
  },
  set(newValue) {
    emit('update:modelValue', newValue);
  },
});
</script>
