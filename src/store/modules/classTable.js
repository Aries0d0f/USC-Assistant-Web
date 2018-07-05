import axios        from 'axios'
import * as types   from '../mutation-types'

const state = {
  classTable: []
}

const actions = {
  async getClassTable ({ commit }, { id, year, sem }) {
    try {
      const hasCache = state.classTable.filter(e => (e.year === year && e.sem === sem))
      if (hasCache) return hasCache.data
      const res = await axios.get(`https://uscapi.aries0d0f.me/classtable/${id}/${year}/${sem}`)
      if (!res.data) throw new Error(res.err)
      const data = {
        id,
        year,
        sem,
        data: res.data
      }
      commit(types.CLASS_TABEL, data)
      return res.data
    } catch (err) {
      throw new Error(err)
    }
  }
}

const mutations = {
  [types.CLASS_TABEL] (state, data) {
    state.classTable = data
  }
}

export default {
  state,
  actions,
  mutations
}
