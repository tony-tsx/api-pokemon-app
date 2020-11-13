import { SIGN_IN_USER } from '../constants/actions'

const signIn = ( user ) => ( { type: SIGN_IN_USER, user } )

export default signIn
