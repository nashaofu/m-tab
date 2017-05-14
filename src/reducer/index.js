import setView from './setView'
import setLinks from './setLinks'
import setMessage from './setMessage'

export default (state = {}, action) => ({
  view: setView(state.view, action),
  links: setLinks(state.links, action),
  message: setMessage(state.message, action)
})
