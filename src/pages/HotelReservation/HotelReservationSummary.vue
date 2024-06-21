<template>
  <h3 class="text-secondary-darken-1">Resumo</h3>
  <v-card
    color="primary"
    rounded="lg"
    variant="outlined"
    ref="userForm"
  >
    <v-card-text>
      <v-row>
        <v-col cols="12">
          <h4 class="text-h5 text-center text-primary">{{ hotel.hotel_name }}</h4>
        </v-col>
        <v-col
          cols="12"
          class="d-flex justify-space-between align-center"
        >
          <span class="text-subtitle-2 text-primary">Método de Pagamento:</span>
          <span class="text-h6 text-primary">{{ userInfo.payment }}</span>
        </v-col>
        <v-col
          cols="12"
          class="d-flex justify-space-between align-center"
        >
          <span class="text-subtitle-2 text-primary">Total:</span>
          <span class="text-h6 text-primary">{{
            getMoneyFormat(hotel.price * userInfo.quantity)
          }}</span>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
  <v-btn
    :loading="loading"
    class="mt-3"
    text="Realizar Pagamento"
    color="secondary-darken-1"
    variant="flat"
    height="40"
    block
    :disabled="validateForm"
    @click="$emit('validate')"
  ></v-btn>
</template>

<script setup lang="ts">
import { Hotel, UserInfo } from '@/@types';
import { getMoneyFormat } from '@/helpers/moneyFormat';

const { userInfo } = defineProps<{
  hotel: Hotel;
  userInfo: UserInfo;
  loading: boolean;
}>();

defineEmits(['validate']);

const validateForm = computed(() => {
  const teste = Object.keys(userInfo).some((key) => {
    // @ts-ignore
    return !userInfo[key];
  });

  return teste;
});
</script>
