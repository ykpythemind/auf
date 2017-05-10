import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger';
import * as actions from './actions';
import * as getters from './getters'

// import account from 'src/vuex/modules/account'
import test from './modules/test';
// import message from 'src/vuex/modules/message'
// import modal from 'src/vuex/modules/modal'

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

const store = new Vuex.Store({
    actions,
    getters,
    modules: {
        // account,
        test
        // message,
        // modal
    },
    strict: false,
    plugins: debug ? [createLogger()] : []
});

export default store
