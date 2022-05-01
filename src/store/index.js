import { createStore } from 'vuex';
import axios from 'axios';

const store = createStore({
  state() {
    return {
      pages: [],
    };
  },
  mutations: {
    setPages(state, { response }) {
      state.pages = response.data;
    },
  },
  actions: {
    getPages({ commit }) {
      return axios.get('../src/data/pages.json').then((response) => {
        commit('setPages', { response });
      });
    },
  },
  getters: {},
});

export default store;
