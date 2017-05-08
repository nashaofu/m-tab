import view from './view'

export default (state = {}, actions) => ({
  view: view(state.view, actions)
})
