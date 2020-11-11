import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '../store'
import Pages from '../pages'

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
