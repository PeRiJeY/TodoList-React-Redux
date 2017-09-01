import * as React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from './reducers'
import App from './components/App'
import {loadDefaultStatus} from './utils/global'

let store = createStore(todoApp, loadDefaultStatus());

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
