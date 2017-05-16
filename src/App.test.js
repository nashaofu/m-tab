import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import reducer from './reducer'
import state from './store/state'
import enhancer from './store/enhancer'
import App from './App'

const store = createStore(
  reducer,
  state,
  enhancer
)

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<App store={store} />, div)
})
