import { BrowserRouter } from 'react-router-dom'
import Pages from '../pages'
import { Provider, useSelector } from 'react-redux'
import store from '../store'
import { useEffect } from 'react'

const SessionUser = () => {
  const user = useSelector( state => state.user )

  useEffect( () => {
    if ( user ) localStorage.setItem( 'local-user-session', JSON.stringify( user ) )
    else localStorage.removeItem( 'local-user-session' )
  }, [ user ] )

  return null
}

const App = () => {
  return (
    <Provider store={store}>
      <SessionUser />
      <BrowserRouter>
        <Pages></Pages>
      </BrowserRouter>
    </Provider>
  )
}

export default App
