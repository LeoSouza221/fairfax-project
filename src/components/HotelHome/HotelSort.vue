<template>
  <v-menu
    class="mr-4"
    v-model="menuIsOpen"
    persistent
    :close-on-content-click="false"
  >
    <template v-slot:activator="{ props }">
      <v-btn
        icon="mdi-filter-menu"
        flat
        color="secondary-darken-1"
        v-bind="props"
      >
      </v-btn>
    </template>
    <v-card min-width="300">
      <v-list>
        <v-list-item
          v-for="(item, index) in sortingOptions"
          :key="index"
          :value="index"
          @click="changeSort(index)"
        >
          <template v-slot:append>
            <v-icon
              v-if="item.sort === 'asc'"
              color="secondary-darken-1"
              icon="mdi-arrow-up"
            ></v-icon>
            <v-icon
              v-else-if="item.sort === 'desc'"
              color="secondary-darken-1"
              icon="mdi-arrow-down"
            ></v-icon>
          </template>
          <v-list-item-title class="text-subtitle-1 text-primary">
            {{ item.name }}
          </v-list-item-title>
        </v-list-item>
      </v-list>
      <v-divider></v-divider>
      <v-card-actions>
        <v-spacer></v-spacer>

        <v-btn
          variant="text"
          color="primary"
          @click="menuIsOpen = false"
        >
          Fechar
        </v-btn>
        <v-btn
          color="secondary-darken-1"
          variant="text"
          @click="$emit('sortHotels', selectedSort)"
        >
          Aplicar
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-menu>
</template>

<script setup lang="ts">
import type { SortingOptions } from '@/@types';
import { ref } from 'vue';

defineEmits(['sortHotels']);

const menuIsOpen = ref(false);
const selectedSort = ref<SortingOptions>({
  name: 'Cidade',
  value: 'city',
  sort: 'asc',
});
const sortingOptions = ref<SortingOptions[]>([
  {
    name: 'Cidade',
    value: 'city',
    sort: 'asc',
  },
  {
    name: 'Preço',
    value: 'price',
    sort: '',
  },
  {
    name: 'Avaliação',
    value: 'star_rating',
    sort: '',
  },
  {
    name: 'Qtde Avaliação',
    value: 'number_of_reviews',
    sort: '',
  },
]);

const changeSort = (index: number) => {
  sortingOptions.value.forEach((item, sortingIndex) => {
    if (sortingIndex === index) {
      if (item.sort === 'asc') {
        item.sort = 'desc';
        selectedSort.value = item;
      } else {
        item.sort = 'asc';
        selectedSort.value = item;
      }
    } else {
      item.sort = '';
    }
  });
};
</script>
