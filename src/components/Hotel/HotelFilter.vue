<template>
  <v-row>
    <v-col
      lg="3"
      md="6"
      cols="12"
    >
      <!-- <v-date-input v-model="filters.checkIn"></v-date-input> -->
      <v-text-field
        v-model="filters.bedrooms"
        label="Quartos"
        variant="solo"
        color="primary"
        density="compact"
      ></v-text-field>
    </v-col>
    <v-col
      lg="3"
      md="6"
      cols="12"
    >
      <!-- <v-date-input v-model="filters.checkOut"></v-date-input> -->
      <v-text-field
        v-model="filters.bedrooms"
        label="Quartos"
        variant="solo"
        color="primary"
        density="compact"
      ></v-text-field>
    </v-col>
    <v-col
      lg="2"
      md="6"
      cols="12"
    >
      <v-text-field
        v-model="filters.bedrooms"
        type="number"
        label="Quartos"
        variant="solo"
        color="primary"
        density="compact"
      ></v-text-field>
    </v-col>
    <v-col
      lg="2"
      md="6"
      cols="12"
    >
      <v-text-field
        v-model="filters.guests"
        type="number"
        label="Hospedes"
        variant="solo"
        color="primary"
        density="compact"
      ></v-text-field>
    </v-col>
    <v-col
      cols="12"
      md="12"
      lg="2"
    >
      <v-btn
        color="secondary-darken-1"
        prepend-icon="mdi-filter"
        variant="flat"
        height="40"
        block
      >
        Filtrar
      </v-btn>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
const filters = reactive({
  checkIn: '',
  checkOut: '',
  bedrooms: 0,
  guests: 0,
});
</script>
