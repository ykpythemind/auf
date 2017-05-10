import * as types from '../types';

const state = {
    test: {
        name: 'aaaaaa'
    }
};

const mutations = {
    [types.TEST] (state, test) {
        state.test = test
    }
};

export default {
    state,
    mutations
}
