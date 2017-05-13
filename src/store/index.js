import { createStore } from 'redux'
import debounce from 'lodash/debounce'

import reducer from '../reducer'
import state from './state'
import enhancer from './enhancer'

let initState = localStorage.getItem('store')
if (initState) {
  try {
    initState = JSON.parse(initState)
  } catch (e) {
    initState = state
  }
} else {
  initState = state
}

const store = createStore(
  reducer,
  initState,
  enhancer
)

const saveStoreToStorage = debounce(() => {
  const state = store.getState()
  if (state) {
    localStorage.setItem('store', JSON.stringify(state))
  }
}, 300)

store.subscribe(saveStoreToStorage)

export default store
