<template>
  <v-row>
    <v-col
      lg="2"
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
      lg="2"
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
        v-model="filters.minPrice"
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
        :disabled="loadingHotels"
        @click="formatOptionsAndFilter"
      >
        Pesquisar
      </v-btn>
    </v-col>
    <v-col
      cols="12"
      md="12"
      lg="2"
    >
      <v-btn
        color="primary"
        prepend-icon="mdi-eraser"
        variant="flat"
        height="40"
        block
        :disabled="loadingHotels"
        @click="cleanFilters"
      >
        Limpar
      </v-btn>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import type { FilterOptions } from '@/@types';

defineProps<{
  loadingHotels: boolean;
}>();
const emit = defineEmits(['filterHotels']);

const filters = reactive<FilterOptions>({
  city: '',
  bedrooms: 0,
  minPrice: 0,
  maxPrice: 10000,
});

const formatOptionsAndFilter = () => {
  const formatedOptions: FilterOptions = {} as FilterOptions;

  Object.keys(filters).forEach((filterKey) => {
    if (filterKey === 'city' && filters[filterKey].length) {
      formatedOptions.city = filters.city;
    } else if (filterKey === 'maxPrice' && filters.maxPrice < 10000) {
      formatedOptions.maxPrice = filters[filterKey];
    } else if (
      (filterKey === 'bedrooms' || filterKey === 'minPrice') &&
      // @ts-ignore
      filters[filterKey] > 0
    ) {
      // @ts-ignore
      formatedOptions[filterKey] = filters[filterKey];
    }
  });

  emit('filterHotels', formatedOptions);
};

const cleanFilters = () => {
  filters.city = '';
  filters.bedrooms = 0;
  filters.minPrice = 0;
  filters.maxPrice = 0;

  emit('filterHotels', {});
};
</script>
