import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import Login from './Login'

const Pages = () => {
  return (
    <Switch>
      <Route path='/' exact component={Home}></Route>

      <Route path='/login' component={Login}></Route>
    </Switch>
  )
}

export default Pages
