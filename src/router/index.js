import Vue              from 'vue'
import Router           from 'vue-router'
import menuModule       from '../store/modules/menu'

Vue.use(Router)

const generateRoutesFromMenu = (menu = [], routes = []) => {
  for (let i = 0, l = menu.length; i < l; i++) {
    let item = menu[i]
    if (item.path) {
      routes.push(item)
    }
  }
  return routes
}

const router = new Router({
  mode: 'history',
  routes: [
    ...generateRoutesFromMenu(menuModule.state.items)
  ]
})

export default router
