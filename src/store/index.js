import Vue from 'vue'
import Vuex from 'vuex'

import ProjectsPageView from './views/projects'
import ProjectPageView from './views/project'
import FlowPageView from './views/flow'
import InteractionPageView from './views/interaction'

import Environments from './environments'
import Projects from './projects'
import Analyses from './analyses'
import Interactions from './interactions'
import Flows from './flows'
import Exchange from './exchange'

Vue.use(Vuex)

const state = {}
const mutations = {}
const actions = {}
const modules = {
  ProjectsPageView,
  ProjectPageView,
  FlowPageView,
  InteractionPageView,
  Environments,
  Projects,
  Analyses,
  Interactions,
  Flows,
  Exchange
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  modules
})
