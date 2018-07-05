import Vue          from 'vue'
import Vuex         from 'vuex'

import menu         from './modules/menu'
import classTabel   from './modules/classTabel'

Vue.use(Vuex)

const store = new Vuex.Store({
  strict: true,
  modules: {
    menu,
    classTabel
  }
})

export default store
