import Vue from 'vue';
import VuexRouterSync from 'vuex-router-sync';

import router from './router';
import store from './store';

VuexRouterSync.sync(store, router);

if (process.env.NODE_ENV !== 'production') {
  Vue.config.devtools = true;
}

/* eslint-disable no-new */
new Vue({
  el: 'router-view',
  router,
  store
});
