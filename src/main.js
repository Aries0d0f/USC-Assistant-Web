import Vue                  from 'vue'
import axios                from 'axios'
import VueAxios             from 'vue-axios'
import { sync }             from 'vuex-router-sync'

// Fontawesome
// the component
import { FontAwesomeIcon }  from '@fortawesome/vue-fontawesome'
// the library
import { library }          from '@fortawesome/fontawesome-svg-core'
// add more icon categories as you want them, even works with pro packs
import { fab }              from '@fortawesome/free-brands-svg-icons'
import { fas }              from '@fortawesome/free-solid-svg-icons'

import App                  from './App'
import router               from './router'
import store                from './store'

Vue.router = router
Vue.use(VueAxios, axios)
sync(store, router)

// Enable devtools
Vue.config.devtools = true

// asociate it to the library, if you need to add more you can separate them by a comma
library.add(fab)
library.add(fas)
Vue.component('font-awesome-icon', FontAwesomeIcon)

const app = new Vue({
  store,
  router,
  ...App
}).$mount('#app')

export { app }
