import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger';
import * as actions from './actions';
import * as getters from './getters';

import test from './modules/test';
import audios from './modules/audios';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

const store = new Vuex.Store({
  actions,
  getters,
  modules: {
    test,
    audios
  },
  strict: false,
  plugins: debug ? [createLogger()] : []
});

export default store;
