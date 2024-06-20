<template>
  <h3 class="text-secondary-darken-1">Dados Pagamento</h3>
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
            :rules="[rules.required]"
            required
          ></v-text-field>
        </v-col>
        <v-col cols="12">
          <v-select
            v-model="userInfo.payment"
            label="Método de Pagamento"
            :items="paymentMethod"
            variant="outlined"
            color="primary"
            density="compact"
            :rules="[rules.required]"
            required
          ></v-select>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
import { UserInfo } from '@/@types';

const props = defineProps<{
  modelValue: UserInfo;
}>();

const emit = defineEmits(['update:modelValue']);

const paymentMethod = ['PIX', 'Boleto', 'Cartão crédito'];
const rules = {
  required: (value: string) => !!value || 'Campo obrigatório',
  validateEmail: (value: string) => {
    const pattern = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    return pattern.test(value) || 'Email inválido';
  },
};

const userInfo = computed({
  get() {
    return props.modelValue;
  },
  set(newValue) {
    emit('update:modelValue', newValue);
  },
});
</script>
