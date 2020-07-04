import Vue from 'vue'
import Vuex from 'vuex'
import auth from './modules/auth'
import config from './modules/config'
import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  mutations: {},
  modules: {
    auth,
    config
  },
  getters
})

export default store
