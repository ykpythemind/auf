import * as types from '../types';

const state = {
  message: 'aaaaa'
};

const mutations = {
  [types.TEST] (state, message) {
    state.message = message;
  }
};

export default {
  state,
  mutations
};
