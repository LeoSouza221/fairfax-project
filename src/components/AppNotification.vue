<template>
  <v-menu class="mr-4">
    <template v-slot:activator="{ props }">
      <div :class="{ shake: disabled }">
        <v-btn
          icon="mdi-bell"
          v-bind="props"
          @click="cleanNotifications"
          ref="notificationButton"
        >
          <v-badge
            color="secondary-darken-1"
            :content="notificationQuantity"
          >
            <v-icon>mdi-bell-outline</v-icon>
          </v-badge>
        </v-btn>
      </div>
    </template>
    <v-list v-if="notifications.length > 0">
      <v-list-item
        v-for="(item, index) in notifications"
        :key="index"
        :value="index"
      >
        <template v-slot:append>
          <v-btn
            class="mx-2"
            icon="mdi-delete"
            density="compact"
            color="primary"
            flat
            @click="removeNotification"
          >
          </v-btn>
        </template>
        <v-list-item-title>
          {{ item }}
        </v-list-item-title>
      </v-list-item>
    </v-list>
    <v-card v-else>
      <v-card-text>Não há notificações</v-card-text>
    </v-card>
  </v-menu>
</template>

<script setup lang="ts">
import { useNotificationStore } from '@/stores/notification';
import { storeToRefs } from 'pinia';

const notificationStore = useNotificationStore();
const { notificationQuantity, notifications } = storeToRefs(notificationStore);
const { cleanNotifications, removeNotification } = notificationStore;
const disabled = ref(false);

function warnDisabled() {
  disabled.value = true;
  setTimeout(() => {
    disabled.value = false;
  }, 1500);
}

watch(notificationQuantity, (newValue, oldValue) => {
  if (newValue !== oldValue && newValue > 0) {
    warnDisabled();
  }
});
</script>

<style scoped lang="sass">
@keyframes shake
  10%,
  90%
    transform: translate3d(-1px, 0, 0)

  20%,
  80%
    transform: translate3d(2px, 0, 0)

  30%,
  50%,
  70%
    transform: translate3d(-4px, 0, 0)

  40%,
  60%
    transform: translate3d(4px, 0, 0)

.shake
  animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both
  transform: translate3d(0, 0, 0)
</style>
