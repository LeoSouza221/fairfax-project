<template>
  <v-dialog
    v-model="dialog"
    width="auto"
  >
    <v-card max-width="400">
      <v-card-title class="text-primary d-flex justify-space-between align-center">
        <div class="d-inline-block text-truncate">
          <h3>
            {{ hotel.hotel_name }}
          </h3>
        </div>
        <v-btn
          icon="mdi-close"
          variant="text"
          color="secondary-darken-1"
          @click="dialog = false"
        ></v-btn>
      </v-card-title>
      <v-card-text class="h-100">
        <hotel-detail :hotel="hotel" />
      </v-card-text>
      <template v-slot:actions>
        <v-btn
          text="Reservar"
          block
          color="secondary-darken-1"
          variant="flat"
          height="40"
          to="/HotelReservation"
        ></v-btn>
      </template>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
import { Hotel } from '@/@types';

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
