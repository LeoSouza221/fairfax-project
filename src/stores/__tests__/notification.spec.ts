import { setActivePinia, createPinia } from 'pinia';
import { useNotificationStore } from '../notification';
import { describe, beforeEach, it, expect, vi } from 'vitest';

describe('Notification Store', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
    vi.useFakeTimers();
  });

  it('increments notification quantity', () => {
    const notification = useNotificationStore();

    expect(notification.notificationQuantity).toBe(0);
    notification.addNotification('Hotel Test');

    vi.runAllTimers();

    expect(notification.notificationQuantity).toBe(1);
    expect(notification.notifications.length).toBe(1);
  });

  it('clean notification quantity', async () => {
    const notification = useNotificationStore();

    notification.addNotification('Hotel Test');

    vi.runAllTimers();

    expect(notification.notifications).toContain('Reserva no hotel Hotel Test criada com sucesso');

    notification.cleanNotifications();

    expect(notification.notificationQuantity).toBe(0);
  });

  it('remove notification', async () => {
    const notification = useNotificationStore();

    notification.addNotification('Hotel Test');

    vi.runAllTimers();

    expect(notification.notifications).toContain('Reserva no hotel Hotel Test criada com sucesso');

    notification.removeNotification(0);

    expect(notification.notifications.length).toBe(0);
  });
});
