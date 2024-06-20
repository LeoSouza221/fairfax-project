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
      }, 5000);
    },

    cleanNotifications() {
      this.notificationQuantity = 0;
    },

    removeNotification(index: number) {
      this.notifications.splice(index, 1);
    },
  },
});
