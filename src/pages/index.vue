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
import type { SortingOptions, FilterOptions, Hotel } from '@/@types';
import { useMockFetch } from '@/composables/useMockFetch';
import hotels from '@/helpers/hotels.json';

const loading = ref(false);
const hotelsList = ref<Hotel[]>([]);
const localSorting = ref<SortingOptions>({
  name: 'Cidade',
  value: 'city',
  sort: 'asc',
});

onMounted(() => {
  getHotels();
});

const getHotels = (hotelList?: Hotel[]) => {
  loading.value = true;
  useMockFetch(hotelList ?? hotels)
    .then((response) => {
      hotelsList.value = response;
    })
    .catch((error) => console.error(error))
    .finally(() => {
      loading.value = false;
    });
};

const sortHotels = (sortOption: SortingOptions) => {
  localSorting.value = sortOption;
  if (sortOption.value === 'city') {
    getHotels(sortByString(sortOption));

    return;
  }

  getHotels(sortByNumber(sortOption));
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
