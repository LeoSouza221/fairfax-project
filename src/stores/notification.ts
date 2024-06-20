// Utilities
import { defineStore } from 'pinia';
import type { NotificationStore } from '@/@types';

export const useNotificationStore = defineStore('notification', {
  state: (): NotificationStore => ({
    notificationQuantity: 0,
    notifications: [],
  }),

  actions: {
    addNotification(hotelName: string) {
      setTimeout(() => {
        this.notifications.push(`Reserva no hotel ${hotelName} criada com sucesso`);
        this.notificationQuantity += 1;
      }, 10000);
    },
  },
});
