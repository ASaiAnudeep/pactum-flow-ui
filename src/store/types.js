export const Mutations = {
  ASSIGN_ENVIRONMENTS: 'ADD_ENVIRONMENTS',
  ASSIGN_PROJECTS: 'ASSIGN_PROJECTS',
  LOADING_PROJECTS: 'LOADING_PROJECTS',
  LOADING_PROJECT: 'LOADING_PROJECT',
  LOADING_FLOW: 'LOADING_FLOW',
  LOADING_INTERACTION: 'LOADING_INTERACTION',
  ADD_PROJECT: 'ADD_PROJECT',
  ADD_ANALYSES: 'ADD_ANALYSES',
  ADD_ANALYSES_BY_PROJECT: 'ADD_ANALYSES_BY_PROJECT',
  ADD_ANALYSIS: 'ADD_ANALYSIS',
  ADD_ANALYSIS_METRICS: 'ADD_ANALYSIS_METRICS',
  ADD_FLOWS: 'ADD_FLOWS',
  ADD_FLOW: 'ADD_FLOW',
  ADD_INTERACTIONS: 'ADD_INTERACTIONS',
  ADD_INTERACTION: 'ADD_INTERACTION',
  ADD_REQUEST: 'ADD_REQUEST',
  ADD_RESPONSE: 'ADD_RESPONSE',
  ADD_ANALYSIS_TO_LOADED_FLOWS: 'ADD_ANALYSIS_TO_LOADED_FLOWS',
  ADD_ANALYSIS_TO_LOADED_INTERACTIONS: 'ADD_ANALYSIS_TO_LOADED_INTERACTIONS',
  ADD_COMPATIBILITIES: 'ADD_COMPATIBILITIES',
}

export const Actions = {
  LOAD_PROJECTS_PAGE_VIEW: 'LOAD_PROJECTS_PAGE_VIEW',
  LOAD_PROJECT_PAGE_VIEW: 'LOAD_PROJECT_PAGE_VIEW',
  LOAD_FLOW_PAGE_VIEW: 'LOAD_FLOW_PAGE_VIEW',
  LOAD_INTERACTION_PAGE_VIEW: 'LOAD_INTERACTION_PAGE_VIEW',
  LOAD_MATRIX_PAGE_VIEW: 'LOAD_MATRIX_PAGE_VIEW',
  FETCH_ENVIRONMENTS: 'FETCH_ENVIRONMENTS',
  FETCH_PROJECTS: 'FETCH_PROJECTS',
  FETCH_PROJECT_BY_ID: 'FETCH_PROJECT_BY_ID',
  FETCH_ANALYSES_BY_IDS: 'FETCH_ANALYSES_BY_IDS',
  FETCH_ANALYSIS_BY_ID: 'FETCH_ANALYSIS_BY_ID',
  FETCH_ANALYSIS_METRICS_BY_ID: 'FETCH_ANALYSIS_METRICS_BY_ID',
  FETCH_ANALYSES_BY_PROJECT: 'FETCH_ANALYSES_BY_PROJECT',
  FETCH_FLOWS_BY_ANALYSIS_ID: 'FETCH_FLOWS_BY_ANALYSIS_ID',
  FETCH_FLOW_BY_ID: 'FETCH_FLOW_BY_ID',
  FETCH_INTERACTIONS_BY_ANALYSIS_ID: 'FETCH_INTERACTIONS_BY_ANALYSIS_ID',
  FETCH_INTERACTION_BY_ID: 'FETCH_INTERACTION_BY_ID',
  FETCH_REQUEST_BY_ID: 'FETCH_REQUEST_BY_ID',
  FETCH_RESPONSE_BY_ID: 'FETCH_RESPONSE_BY_ID',
  FETCH_COMPATIBILITIES_BY_PROJECT: 'FETCH_COMPATIBILITIES_BY_PROJECT',
}