import React from 'react'
import { Route, Routes, BrowserRouter as Router, NavLink } from 'react-router-dom'
import Home from './pages/Home'
import SubmitArticle from './pages/Submit-Articles'

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
          <NavLink to="/SubmitArticle">Submit an Article</NavLink>
          </li>
          <li>
           Search Database
          </li>
        </ui>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="SubmitArticle" element={<SubmitArticle />} />
          </Routes>
        </div>
    </Router>
  )
}

export default App