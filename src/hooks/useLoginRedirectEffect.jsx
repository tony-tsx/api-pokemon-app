import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useHistory } from "react-router-dom"

const useLoginRedirectEffect = () => {
  const hasUser = useSelector( state => !!state.user )
  const history = useHistory()

  useEffect( () => {
    if ( !hasUser ) history.push( '/login' )
  }, [ hasUser, history ] )

  return !hasUser
}

export default useLoginRedirectEffect
