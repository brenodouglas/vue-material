// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import { sync } from 'vuex-router-sync';
import VueMaterial from 'vue-material';

import router from './config/routes';
import store from './store';

import App from './App';

sync(store, router);
Vue.use(VueMaterial);
Vue.material.theme.register('default', {
  primary: 'blue',
  accent: 'red',
});

/* eslint-disable no-new */
new Vue({
  router,
  store,
  el: '#app',
  render: h => h(App),
});
