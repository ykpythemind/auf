import * as TYPES from '../types';

const state = {
  audios: []
};

const mutations = {
  [TYPES.FETCH_AUDIOS] (state, { audios }) {
    state.audios = audios;
  },
  [TYPES.UPLOAD_AUDIO] (state, { audio }) {
    state.audios.unshift(audio);
  }
};

export default {
  state,
  mutations
};
