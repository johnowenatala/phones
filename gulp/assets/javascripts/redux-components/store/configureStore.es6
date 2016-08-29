import { createStore } from 'redux'
import reducer from '../reducers/root.js'

export default (initialState) => {
  return createStore(reducer, initialState)
}


