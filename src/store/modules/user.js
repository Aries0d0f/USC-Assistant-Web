import axios from 'axios'
import * as types   from '../mutation-types'

const state = {
  user: {}
}

const getters = {
  isLogin: state => state.user.id !== null && state.user.id !== undefined,
  userInfo: state => state.user
}

const actions = {
  async userLogin ({ commit }, user) {
    try {
      const res = await axios.post('https://uscapi.aries0d0f.me/user', user)
      if (res.data.result !== 0) throw new Error(res.data.err)
      let userInfo = {
        id: res.data.id,
        username: res.data.username,
        meta: res.data.meta
      }
      commit(types.USER, userInfo)
      return userInfo
    } catch (err) {
      throw new Error(err)
    }
  }
}

export default {
  state,
  actions,
  getters
}
