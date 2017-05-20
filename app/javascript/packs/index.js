import Vue from 'vue';
import VuexRouterSync from 'vuex-router-sync';
import KeenUI from 'keen-ui';

import router from './router';
import store from './store';
import config from './config';

console.log(JSON.stringify(config));

VuexRouterSync.sync(store, router);
Vue.use(KeenUI);

if (process.env.NODE_ENV !== 'production') {
  Vue.config.devtools = true;
}

/* eslint-disable no-new */
new Vue({
  el: 'router-view',
  router,
  store
});
