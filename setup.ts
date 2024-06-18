import { config } from '@vue/test-utils';
import vuetify from './src/plugins/vuetify';
import { enableAutoUnmount } from '@vue/test-utils';
import { afterEach } from 'vitest';

enableAutoUnmount(afterEach);

config.global = {
  plugins: [vuetify],
};

/* With jest-dom the resizeObserver seems to not be included, it is used by Vuetify so we have
   to include it somehow for tests.
*/
// // Custom container to integrate Vuetify.
// // Vuetify requires you to wrap your app with a v-app component that provides
// // a <div data-app="true"> node.
const app = document.createElement('div');
app.setAttribute('data-app', 'true');
app.setAttribute('id', 'app');
document.body.appendChild(app);
