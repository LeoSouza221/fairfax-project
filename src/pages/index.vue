<template>
  <v-container>
    <v-responsive>
      <h1 class="text-center text-secondary-darken-1">Encontre os melhores hotéis do mundo</h1>

      <div class="py-4" />

      <HotelFilter />
      <div class="d-flex justify-end">
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
                v-for="(item, index) in orderingOptions"
                :key="index"
                :value="index"
                @click="changeOrder(index)"
              >
                <template v-slot:append>
                  <v-icon
                    v-if="item.order === 'asc'"
                    color="secondary-darken-1"
                    icon="mdi-arrow-up"
                  ></v-icon>
                  <v-icon
                    v-else-if="item.order === 'desc'"
                    color="secondary-darken-1"
                    icon="mdi-arrow-down"
                  ></v-icon>
                  <!-- <v-btn
                    v-if="item.order === 'asc'"
                    class="mx-2"
                    icon="mdi-arrow-up"
                    density="compact"
                    color="secondary-darken-1"
                    variant="text"
                    @click="changeOrder(index, 'desc')"
                  />
                  <v-btn
                    v-else-if="item.order === 'desc'"
                    class="mx-2"
                    icon="mdi-arrow-up"
                    density="compact"
                    color="secondary-darken-1"
                    flat
                    @click="changeOrder(index, 'asc')"
                  /> -->
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
                @click="menuIsOpen = false"
              >
                Fechar
              </v-btn>
              <v-btn
                color="primary"
                variant="text"
                @click="menuIsOpen = false"
              >
                Aplicar
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-menu>
      </div>

      <v-divider></v-divider>
      <HotelList />
    </v-responsive>
  </v-container>
</template>

<script lang="ts" setup>
const menuIsOpen = ref(false);
const orderingOptions = ref([
  {
    name: 'Cidade',
    value: 'city',
    order: 'asc',
  },
  {
    name: 'Preço',
    value: 'price',
    order: '',
  },
  {
    name: 'Avaliação',
    value: 'star_rating',
    order: '',
  },
  {
    name: 'Qtde Avaliação',
    value: 'number_of_reviews',
    order: '',
  },
]);

const changeOrder = (index: number) => {
  orderingOptions.value.forEach((item, orderingIndex) => {
    if (orderingIndex === index) {
      if (item.order === 'asc') {
        item.order = 'desc';
      } else {
        item.order = 'asc';
      }
    } else {
      item.order = '';
    }
  });
};
</script>
