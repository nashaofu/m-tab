import setView from './setView'
import setLinks from './setLinks'
import setSearch from './setSearch'

export default (state = {}, action) => ({
  view: setView(state.view, action),
  links: setLinks(state.links, action),
  search: setSearch(state.search, action)
})
