import Vue from 'vue'
import Vuex from 'vuex'

import validators from '../validators'

function importAll(r: any) {
  return r.keys().map((key: any) => r(key))
}
const modulesCache: any = {}
const modules = importAll(require.context('./modules/', true, /\.ts$/))

modules.forEach((element: any) => {
  Object.keys(element).forEach(key => {
    modulesCache[key] = element[key]
  })
})

const validatorsCache: any = {}

validators.forEach((element: any) => {
  Object.keys(element).forEach(key => {
    validatorsCache[key] = element[key]
  })
})

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: modulesCache,
  getters: {
    token: (state: any) => {
      return state.login.token
    },
    validators: (state: any) => {
      return validatorsCache
    }
  }
})

export default store
