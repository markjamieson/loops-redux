import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import compositionApp from './reducers'
import App from './containers/App'
import PlayerContainer from './containers/PlayerContainer'

require ('./style/app.sass')

let store = createStore(compositionApp)

render(
  <Provider store={store}>
    <div className="container">
      <App />
      <PlayerContainer />
    </div>
  </Provider>,
  document.getElementById('root')
)
