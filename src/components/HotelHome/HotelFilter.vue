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
        type="number"
        variant="outlined"
        color="primary"
        density="compact"
        :min="0"
      ></v-text-field>
    </v-col>
    <v-col
      lg="2"
      md="6"
      cols="12"
    >
      <CurrencyInput
        v-model="filters.maxPrice"
        label="Preço Mínimo"
      ></CurrencyInput>
    </v-col>
    <v-col
      lg="2"
      md="6"
      cols="12"
    >
      <CurrencyInput
        v-model="filters.maxPrice"
        label="Preço Máximo"
      ></CurrencyInput>
    </v-col>
    <v-col
      cols="12"
      md="12"
      lg="2"
    >
      <v-btn
        color="secondary-darken-1"
        prepend-icon="mdi-magnify"
        variant="flat"
        height="40"
        block
      >
        Pesquisar
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
