<template>
  <v-row>
    <v-col
      lg="3"
      md="6"
      cols="12"
    >
      <v-text-field
        v-model="filters.city"
        label="Destino"
        variant="outlined"
        color="primary"
        density="compact"
      ></v-text-field>
    </v-col>
    <v-col
      lg="3"
      md="6"
      cols="12"
    >
      <v-text-field
        v-model="filters.bedrooms"
        label="Quartos"
        variant="outlined"
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
        v-model="filters.minPrice"
        type="number"
        label="Preço Mínimo"
        variant="outlined"
        color="primary"
        density="compact"
        prefix="R$"
      ></v-text-field>
    </v-col>
    <v-col
      lg="2"
      md="6"
      cols="12"
    >
      <v-text-field
        v-model="filters.maxPrice"
        type="number"
        label="Preço Máximo"
        variant="outlined"
        color="primary"
        density="compact"
        prefix="R$"
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
  city: '',
  bedrooms: 0,
  minPrice: 0,
  maxPrice: 0,
});
</script>
