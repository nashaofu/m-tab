import { createStore } from 'redux'

import reducer from '../reducer'
import state from './state'
import enhancer from './enhancer'

export default createStore(
  reducer,
  state,
  enhancer
)
