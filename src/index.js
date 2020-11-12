import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'

import 'bootstrap/dist/css/bootstrap.css'
import './index.css'

import classnames from 'classnames'

window.classnames = classnames

ReactDOM.render(
  <React.StrictMode>
    <App></App>
  </React.StrictMode>,
  document.getElementById('root')
);
