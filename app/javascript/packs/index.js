import Vue from 'vue';
import VuexRouterSync from 'vuex-router-sync';

import App from './App.vue';
import router from './router';
import store from './store';

VuexRouterSync.sync(store, router);

// TODO dotenv入れて環境分ける
// if(process.env.NODE_ENV !== 'production') {
//     Vue.config.devtools = true;
// }

document.body.appendChild(document.createElement('app'));
/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('app');
