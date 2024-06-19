<template>
  <v-text-field
    ref="inputRef"
    type="text"
    :label="label"
    variant="outlined"
    color="primary"
    density="compact"
  />
</template>

<script setup lang="ts">
import { useCurrencyInput } from 'vue-currency-input';

defineProps<{
  modelValue: number | null;
  label: string;
}>();

const { inputRef } = useCurrencyInput({
  locale: 'pt-BR',
  currency: 'BRL',
  hideCurrencySymbolOnFocus: false,
  hideGroupingSeparatorOnFocus: false,
  hideNegligibleDecimalDigitsOnFocus: false,
  autoDecimalDigits: true,
  useGrouping: true,
  accountingSign: false,
});
</script>
