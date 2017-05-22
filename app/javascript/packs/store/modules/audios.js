import {
  FETCH_AUDIOS
} from '../types';

const state = {
  audios: []
};

const mutations = {
  [FETCH_AUDIOS] (state, audios) {
    state.audios = audios;
  }
};

export default {
  state,
  mutations
};
