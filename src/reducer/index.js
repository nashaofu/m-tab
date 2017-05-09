import setView from './setView'
import links from './links'

export default (state = {}, actions) => ({
  view: setView(state.view, actions),
  links: links(state.links, actions)
})
