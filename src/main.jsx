import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.css'
import { Provider } from 'react-redux'
import Store from './Store.js'

ReactDOM.createRoot(document.getElementById('root')).render(
 <Provider store={Store}>
  <App />
 </Provider>

)