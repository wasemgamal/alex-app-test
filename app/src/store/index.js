import { createStore } from 'vuex'
import modules from './modules'

// eslint-disable-next-line no-unused-vars
const store = createStore({
  modules,
  // Enable strict mode in development to get a warning
  // when mutating state outside of a mutation.
  // https://vuex.vuejs.org/guide/strict.html
  strict: process.env.NODE_ENV !== 'production',
})

export default store;

