/**
 * vuex最核心的管理对象store
 */
import vue from 'Vue'
import vuex from 'Vuex'
import state from './state'
import mutation from './mutations'
import actions from './actions'
import getters from './getters'

Vue.use(Vuex)

export default new vuex.Store({
  state,
  mutations,
  actions,
  getters
})