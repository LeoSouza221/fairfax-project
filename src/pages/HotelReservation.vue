<template>
  <v-container>
    <v-card
      color="primary"
      rounded="lg"
      variant="outlined"
    >
      <v-card-text>
        <form>
          <v-row>
            <v-col>
              <v-text-field
                v-model="userForm.name"
                variant="outlined"
                color="primary"
                density="compact"
              ></v-text-field>
            </v-col>
            <v-col cols="6">
              <v-text-field
                v-model="userForm.email"
                variant="outlined"
                color="primary"
                density="compact"
              ></v-text-field>
            </v-col>
            <v-col cols="6">
              <v-text-field
                v-model="userForm.phone"
                variant="outlined"
                color="primary"
                density="compact"
              ></v-text-field>
            </v-col>
            <v-col>
              <v-select
                v-model="userForm.payment"
                :items="paymentMethod"
                variant="outlined"
                color="primary"
                density="compact"
              ></v-select>
            </v-col>
          </v-row>
        </form>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script setup lang="ts">
const paymentMethod = ['PIX', 'Boleto', 'Cartão crédito'];
const userForm = ref({
  name: '',
  phone: '',
  email: '',
  payment: '',
});
</script>
