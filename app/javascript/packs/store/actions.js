import * as types from './types';
import config from '../config';

export function fetchAudios ({ commit }) {
  $.ajax({
    url: `${config.apiurl}/audios.json`,
    type: 'GET'
  }).done((res) => {
    commit(types.FETCH_AUDIOS, res);
  }).fail((res) => {
    console.log(res);
  });
}

export function uploadAudio ({ commit }, audio) {
  $.ajax({
    url: `${config.apiurl}/upload.json`,
    type: 'POST',
    data: {
      audio
    }
  }).done((res) => {
    commit(types.UPLOAD_AUDIO, res);
  }).fail((res) => {
    console.log(res);
  });
}

// export function getAccount ({commit, state}, params) {
//     return API.Account.get(params)
//         .then((response) => {
//             commit(types.GET_ACCOUNT_SUCCESS, response.body)
//             return Promise.resolve(response)
//         })
//         .catch((response) => {
//             commit(types.GET_ACCOUNT_FAIL, response.body)
//             return Promise.reject(response)
//         })
// }
//
// export function login ({commit}, params) {
//     return API.Auth.save(params)
//         .then((response) => {
//             commit(types.AUTH_LOGIN_SUCCESS, response.body)
//             return response
//         })
//         .catch((response) => {
//             commit(types.AUTH_LOGIN_FAIL, response.body)
//             return Promise.reject(response)
//         })
// }
//
// export function logout ({commit}, params) {
//     commit(types.AUTH_LOGOUT, {})
//     return Promise.resolve()
// }
