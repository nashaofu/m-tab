const setEngines = (engines = [], action) => {
  switch (action.type) {
    case 'ADD_ENGINES':
      return [
        ...engines,
        action.engine
      ]
    case 'DELETE_ENGINES':
      return engines.filter((engine, index) => index !== action.index)
    case 'MODIFY_ENGINES':
      return engines.map((engine, index) => {
        if (index === action.index) {
          return action.engine
        }
        return engine
      })
    default:
      return engines
  }
}
const setEngine = (engine, action) => {
  switch (action.type) {
    case 'SET_ENGINE':
      return action.engine
    default:
      return engine
  }
}
export default (search = {}, action) => ({
  engines: setEngines(search.engines, action),
  engine: setEngine(search.engine, action)
})
