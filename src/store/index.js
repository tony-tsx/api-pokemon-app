import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import rootReduxReducer from '../reducers/root-redux'

const store = createStore( rootReduxReducer, {}, applyMiddleware( logger ) )

export default store
