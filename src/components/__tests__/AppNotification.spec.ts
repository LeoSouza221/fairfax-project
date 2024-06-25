import { setActivePinia, createPinia } from 'pinia';
import { mount } from '@vue/test-utils';
import { expect, describe, it, beforeEach } from 'vitest';
import AppNotification from '../AppNotification.vue';

global.ResizeObserver = require('resize-observer-polyfill');

describe('AppNotification component', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it('should start with zero notifications', () => {
    const wrapper = mount(AppNotification);

    const test = wrapper.find('[data-test="notification-quantity"');

    console.log(test);
    expect(test.text()).toBe('0');
  });
});
