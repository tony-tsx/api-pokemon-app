import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '../store'

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>

      </BrowserRouter>
    </Provider>
  )
}

export default App
