import { SIGN_IN_USER } from '../constants/actions'

const rootReduxReducer = ( state = {}, action ) => {
  switch ( action.type ) {
    case SIGN_IN_USER:
      return { ...state, user: action.user }
    default: return state
  }
}

export default rootReduxReducer
