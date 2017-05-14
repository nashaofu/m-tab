import setView from './setView'
import setLinks from './setLinks'
import setSearch from './setSearch'
import setMessage from './setMessage'

export default (state = {}, action) => ({
  view: setView(state.view, action),
  links: setLinks(state.links, action),
  search: setSearch(state.search, action),
  message: setMessage(state.message, action)
})
