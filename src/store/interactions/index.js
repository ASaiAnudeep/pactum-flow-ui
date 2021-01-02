import { Actions, Mutations } from '../types';

const state = () => {
  return {
    interactions: []
  }
}

const getters = {
  getInteractionById: (state) => (id) => {
    return state.interactions.find(_interaction => _interaction._id === id);
  },
  getInteractionsByIds: (state) => (ids) => {
    const set = new Set(ids);
    return state.interactions.filter(_interaction => set.has(_interaction._id));
  },
  getInteractionsByAnalysisId: (state) => (id) => {
    return state.interactions.filter(_interaction => _interaction.analysisId === id);
  },
}

const mutations = {
  [Mutations.ADD_INTERACTIONS](state, interactions) {
    state.interactions = interactions;
  },
  [Mutations.ADD_INTERACTION](state, interaction) {
    state.interactions.push(interaction);
  }
};

const actions = {
  async [Actions.FETCH_INTERACTIONS_BY_ANALYSIS_ID]({ commit }, id) {
    const response = await fetch(`/api/flow/v1/interactions?analysisId=${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    commit(Mutations.ADD_INTERACTIONS, await response.json());
  },
  async [Actions.FETCH_INTERACTION_BY_ID]({ getters, commit }, id) {
    if (!getters.getInteractionById(id)) {
      const response = await fetch(`/api/flow/v1/interactions/${id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });
      commit(Mutations.ADD_INTERACTION, await response.json());
    }
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}