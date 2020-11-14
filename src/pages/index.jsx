import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import Lab from './Lab'
import Login from './Login'
import Page404 from './Page404'
import Profile from './Profile'
import Register from './Register'

const Pages = () => {
  return (
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/login' component={Login} />
      <Route path='/register' component={Register} />
      <Route path='/profile' component={Profile} />
      <Route path='/lab' component={Lab} />
      <Route path='*' component={Page404} />
    </Switch>
  )
}

export default Pages
