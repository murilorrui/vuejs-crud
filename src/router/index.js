import Vue from 'vue';
import Router from 'vue-router';
import Layout from '@/arch/Layout';

import routes from './routes';

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'default',
      component: Layout,
      children: routes,
    },
  ],
});

export default router;
