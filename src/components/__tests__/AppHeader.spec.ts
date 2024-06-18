import AppHeader from '../template/AppHeader.vue';
import { mount } from '@vue/test-utils';
import { expect, test } from 'vitest';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

const vuetify = createVuetify({
  components,
  directives,
});

global.ResizeObserver = require('resize-observer-polyfill');

test('displays message', () => {
  const wrapper = mount(
    {
      template: '<div><app-header></app-header></div>',
    },
    {
      global: {
        components: {
          AppHeader,
        },
      },
    },
  );

  const test = wrapper.find('[data-test="header-text"]');
  // Assert the rendered text of the component
  expect(test.text()).toContain('Fairfax Hoteis');
});
