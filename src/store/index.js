import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import rootReduxReducer from '../reducers/root-redux'

const initialState = {}

if ( localStorage.getItem( 'local-user-session' ) )
  initialState.user = JSON.parse( localStorage.getItem( 'local-user-session' ) )

const store = createStore( rootReduxReducer, initialState, applyMiddleware( logger ) )

export default store
