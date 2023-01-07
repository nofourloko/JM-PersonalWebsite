import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {BrowserRouter as Router} from 'react-router-dom'
import NewPage from './Context/newPage'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NewPage>
      <Router>
        <App />
      </Router>
    </NewPage>
  </React.StrictMode>,
)
