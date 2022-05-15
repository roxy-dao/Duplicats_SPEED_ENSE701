import React from 'react'
import { Route, Routes, NavLink, BrowserRouter as Router } from 'react-router-dom'

import Home from './pages/Home'

const App = () => {
  return (
    <Router>
      <div>
        <ul className="header">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink>Select the Practice</NavLink>
          </li>
          <li>
            <NavLink>Submit an Article</NavLink>
          </li>
        </ul>
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App