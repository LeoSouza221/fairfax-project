<template>
  <v-container>
    <v-responsive>
      <h1 class="text-center text-secondary-darken-1">Encontre os melhores hotéis do mundo</h1>

      <div class="py-4" />

      <HotelFilter
        :loading-hotels="loading"
        @filter-hotels="filterHotels"
      />
      <div class="d-flex justify-space-between align-end">
        <span class="text-secondary-darken-1">{{ hotelsList.length }} Resultados</span>
        <HotelSort
          :hotels-list="hotelsList"
          @sort-hotels="sortHotels"
        />
      </div>

      <v-divider></v-divider>
      <HotelList
        :hotels-list="hotelsList"
        :loading-hotels="loading"
      />
    </v-responsive>
  </v-container>
</template>

<script lang="ts" setup>
import type { SortingOptions, FilterOptions } from '@/@types';
import hotels from '@/helpers/hotels.json';

const loading = ref(false);
const hotelsList = ref([...hotels]);
const localSorting = ref<SortingOptions>({
  name: 'Cidade',
  value: 'city',
  sort: 'asc',
});

const sortHotels = (sortOption: SortingOptions) => {
  loading.value = true;
  localSorting.value = sortOption;
  if (sortOption.value === 'city') {
    hotelsList.value = sortByString(sortOption);
    loading.value = false;

    return;
  }

  loading.value = false;
  hotelsList.value = sortByNumber(sortOption);
};

const sortByString = (sortOption: SortingOptions) => {
  return hotelsList.value.sort((hotelA, hotelB) => {
    if (sortOption.sort === 'asc') {
      //@ts-ignore
      if (hotelA[sortOption.value] > hotelB[sortOption.value]) {
        return -1;
      }
      //@ts-ignore
      if (hotelB[sortOption.value] < hotelA[sortOption.value]) {
        return 1;
      }
      return 0;
    } else {
      //@ts-ignore
      if (hotelA[sortOption.value] < hotelB[sortOption.value]) {
        return -1;
      }
      //@ts-ignore
      if (hotelB[sortOption.value] > hotelA[sortOption.value]) {
        return 1;
      }
      return 0;
    }
  });
};

const sortByNumber = (sortOption: SortingOptions) => {
  return hotelsList.value.sort((hotelA, hotelB) => {
    if (sortOption.sort === 'asc') {
      //@ts-ignore
      return hotelA[sortOption.value] - hotelB[sortOption.value];
    }
    //@ts-ignore
    return hotelB[sortOption.value] - hotelA[sortOption.value];
  });
};

const filterHotels = (filters: FilterOptions) => {
  const hotelsToFilter = [...hotels];
  hotelsList.value = hotelsToFilter.filter((hotel) => {
    return Object.keys(filters).every((key) => {
      if (key === 'city') {
        return JSON.stringify(hotel.city)
          .toString()
          .toLowerCase()
          .includes(filters.city.toLowerCase());
      }

      if (key === 'bedrooms') {
        return hotel.available_rooms >= filters.bedrooms;
      }

      if (key === 'minPrice') {
        return hotel.price >= filters.minPrice;
      }

      return hotel.price <= filters.maxPrice;
    });
  });

  sortHotels(localSorting.value);
};
</script>
