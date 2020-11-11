import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import Login from './Login'

const Pages = () => {
  return (
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/login' component={Login} />
    </Switch>
  )
}

export default Pages
