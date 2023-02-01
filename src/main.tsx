import React from 'react'
import ReactDOM from 'react-dom/client'
import './global.css'
import { Provider } from 'react-redux'
import { store } from './store'
import { Layouts } from './layouts'

import './i18next'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <Layouts />
    </Provider>
  </React.StrictMode>
)
