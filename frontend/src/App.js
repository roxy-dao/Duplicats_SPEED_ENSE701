import React from 'react'
import { Route, Routes, BrowserRouter as Router, NavLink } from 'react-router-dom'

import Home from './pages/Home'

const App = () => {
  return (
    <Router>
      <div>
        <h1> Software Engineering Practice Assignment</h1>
        <ui className="header">
          <li>
          <NavLink to="/">Home</NavLink>
          </li>
          <li>
           Select the Practice
          </li>
          <li>
           Submit an Article
          </li>
        </ui>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
    </Router>
  )
}

export default App