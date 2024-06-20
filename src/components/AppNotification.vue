<template>
  <v-menu>
    <template v-slot:activator="{ props }">
      <v-btn
        icon="mdi-bell"
        v-bind="props"
      >
        <v-badge
          color="secondary-darken-1"
          :content="notificationQuantity"
        >
          <v-icon>mdi-bell-outline</v-icon>
        </v-badge>
      </v-btn>
    </template>
    <v-list v-if="notifications.length > 0">
      <v-list-item
        v-for="(item, index) in notifications"
        :key="index"
        :value="index"
      >
        <v-list-item-title>{{ item }}</v-list-item-title>
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

const { notificationQuantity, notifications } = storeToRefs(useNotificationStore());
</script>
