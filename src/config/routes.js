import VueRouter from 'vue-router';
import Vue from 'vue';

import App from 'containers/App';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      component: App,
      name: 'app',
    },
  ],
});

export default router;
