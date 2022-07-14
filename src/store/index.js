import { createStore } from 'vuex'

export default createStore({
  state: {
    popappIsShow: false,
    userName: '',
    userEmail: '',
  },
  getters: {
    popappIsShow: state => {
      return state.popappIsShow;
    },
    userName: state => {
      return state.userName;
    },
    userEmail: state => {
      return state.userEmail;
    }
  },
  mutations: {
    popupIsShow(state, value) {
      state.popappIsShow = value;
    },
    userName(state, value) {
      state.userName = value;
    },
    userEmail(state, value) {
      state.userEmail = value;
    },

  },
  actions: {
  },
  modules: {
  }
})
