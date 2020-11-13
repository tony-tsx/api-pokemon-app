import { BrowserRouter } from 'react-router-dom'
import Pages from '../pages'
import { Provider } from 'react-redux'
import store from '../store'

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Pages></Pages>
      </BrowserRouter>
    </Provider>
  )
}

export default App
