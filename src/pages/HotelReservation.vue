<template>
  <v-container class="fill-height">
    <v-snackbar
      v-model="alertIsOpen"
      color="success"
    >
      Reserva realizada com sucesso
    </v-snackbar>
    <v-responsive
      class="align-centerfill-height mx-auto"
      max-width="900"
    >
      <v-row>
        <v-col
          cols="12"
          md="6"
        >
          <v-card
            class="my-6"
            color="primary"
            rounded="lg"
            variant="outlined"
            tonal
          >
            <v-card-text class="h-100">
              <HotelDetail :hotel="selectedHotel"></HotelDetail>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col
          cols="12"
          md="6"
        >
          <h3 class="text-secondary-darken-1">Seus dados</h3>
          <v-card
            color="primary"
            rounded="lg"
            variant="outlined"
            ref="userForm"
          >
            <v-card-text>
              <v-row>
                <v-col cols="12">
                  <v-text-field
                    v-model="userInfo.name"
                    label="Nome"
                    variant="outlined"
                    color="primary"
                    density="compact"
                    :ref="(el) => (formRefs['name'] = el)"
                    :rules="[rules.required]"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    v-model="userInfo.email"
                    label="Email"
                    variant="outlined"
                    color="primary"
                    density="compact"
                    :ref="(el) => (formRefs['email'] = el)"
                    :rules="[rules.required, rules.validateEmail]"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    v-model="userInfo.phone"
                    label="Telefone"
                    variant="outlined"
                    color="primary"
                    density="compact"
                    :ref="(el) => (formRefs['phone'] = el)"
                    :rules="[rules.required]"
                    required
                  ></v-text-field>
                </v-col>
                <v-col>
                  <v-select
                    v-model="userInfo.payment"
                    label="Método de Pagamento"
                    :items="paymentMethod"
                    variant="outlined"
                    color="primary"
                    density="compact"
                    :ref="(el) => (formRefs['payment'] = el)"
                    :rules="[rules.required]"
                    required
                  ></v-select>
                </v-col>
              </v-row>
            </v-card-text>
            <v-card-actions>
              <v-btn
                text="Realizar Pagamento"
                block
                color="secondary-darken-1"
                variant="flat"
                height="40"
                :loading="loading"
                @click="submit"
              ></v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-responsive>
  </v-container>
</template>

<script setup lang="ts">
import { useHotelStore } from '@/stores/hotel';
import { useNotificationStore } from '@/stores/notification';
import { storeToRefs } from 'pinia';
import { useRouter } from 'vue-router';

const router = useRouter();
const notificationStore = useNotificationStore();
const { addNotification } = notificationStore;
const { selectedHotel } = storeToRefs(useHotelStore());

const formHasErrors = ref(false);
const loading = ref(false);
const alertIsOpen = ref(false);
const paymentMethod = ['PIX', 'Boleto', 'Cartão crédito'];
const formRefs = ref({
  name: null,
  phone: null,
  email: null,
  payment: null,
});
const userInfo = ref({
  name: '',
  phone: '',
  email: '',
  payment: '',
});
const rules = {
  required: (value: string) => !!value || 'Campo obrigatório',
  validateEmail: (value: string) => {
    const pattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    return pattern.test(value) || 'Email inválido';
  },
};

const submit = () => {
  // console.log(formRefs.value, formRefs.value[].validate(true));

  // Object.keys(userInfo.value).forEach((f) => {
  //   if (!userInfo[f]) formHasErrors.value = true;

  //   formRefs.value[f].validate(true);
  // });
  loading.value = true;
  setTimeout(() => {
    addNotification(selectedHotel.value.hotel_name);
    router.push('/');
    loading.value = false;
    alertIsOpen.value = true;
  }, 3000);
};
</script>
