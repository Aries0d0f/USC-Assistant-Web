import * as types from '../../mutation-types'
import lazyLoader from './lazyLoader'

const state = {
  items: [
    {
      name: 'Home',
      path: '/',
      meta: {
        label: '主頁面',
        link: 'Home.vue',
        icon: ['fas', 'home']
      },
      components: lazyLoader('Home')
    },
    {
      name: 'ClassTabel',
      path: '/class',
      meta: {
        label: '課表',
        link: 'ClassTabel.vue',
        icon: ['fas', 'table']
      },
      components: lazyLoader('Home')
    },
    {
      name: 'Grade',
      path: '/grade',
      meta: {
        label: '成績',
        link: 'Grade.vue',
        icon: ['fas', 'graduation-cap']
      },
      components: lazyLoader('Home')
    },
    {
      name: 'Setting',
      path: '/setting',
      meta: {
        label: '設定',
        link: 'cog.vue',
        icon: ['fas', 'home']
      },
      components: lazyLoader('Home')
    }
  ]
}

const getters = {
  menuItem: (state) => state.items
}

const mutations = {
  [types.EXPAND_MENU] (state, menuItem) {
    if (menuItem.index > -1) {
      if (state.items[menuItem.index] && state.items[menuItem.index].meta) {
        state.items[menuItem.index].meta.expanded = menuItem.expanded
      }
    } else if (menuItem.item && 'expanded' in menuItem.item.meta) {
      menuItem.item.meta.expanded = menuItem.expanded
    }
  }
}

export default {
  state,
  getters,
  mutations
}
