// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'vuetify/dist/vuetify.min.css';
import Vuetify from 'vuetify';
import theme from '@/env/ThemeConfig';

import Vue from 'vue';
import App from './App';
import router from './router';

Vue.use(Vuetify, { theme });

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});
