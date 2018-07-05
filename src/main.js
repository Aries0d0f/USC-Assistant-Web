import Vue              from 'vue'
import axios            from 'axios'
import VueAxios         from 'vue-axios'
import { sync }         from 'vuex-router-sync'

// Fontawesome
// the component
import FontAwesomeIcon  from '@fortawesome/vue-fontawesome'
// the library
import fontawesome      from '@fortawesome/fontawesome'
// add more icon categories as you want them, even works with pro packs
import brands           from '@fortawesome/fontawesome-free-brands'
import solid            from '@fortawesome/fontawesome-free-solid'

import App              from './App'
import router           from './router'
import store            from './store'

Vue.router = router
Vue.use(VueAxios, axios)
sync(store, router)

// Enable devtools
Vue.config.devtools = true

// asociate it to the library, if you need to add more you can separate them by a comma
fontawesome.library.add(brands)
fontawesome.library.add(solid)
Vue.component('FontAwesomeIcon', FontAwesomeIcon)

const app = new Vue({
  router,
  ...App
}).$mount('#app')

export { app }
