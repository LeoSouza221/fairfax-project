import { config } from '@vue/test-utils';
import vuetify from './src/plugins/vuetify';
import { enableAutoUnmount } from '@vue/test-utils';
import { afterEach } from 'vitest';

enableAutoUnmount(afterEach);

config.global = {
  plugins: [vuetify],
};
