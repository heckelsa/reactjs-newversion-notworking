import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'

import NavigationBar from './components/NavigationBar/NavigationBar'
import MockUpMenuData from './MockupMenuData'
import Routes from './Routes'

function App() {
  return (
    <div>
      <NavigationBar backgroundColor="#4971ff" content={MockUpMenuData} />
      <Routes />
    </div>
  )
}

render(
  <Router>
    <App />
  </Router>,
  document.getElementById('App')
)
