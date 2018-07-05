import Vue          from 'vue'
import Vuex         from 'vuex'

import menu         from './modules/menu'
import classTable   from './modules/classTable'

Vue.use(Vuex)

const store = new Vuex.Store({
  strict: true,
  modules: {
    menu,
    classTable
  }
})

export default store
