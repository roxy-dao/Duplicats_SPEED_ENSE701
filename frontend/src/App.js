import React from 'react'
import { Route, Routes, BrowserRouter as Router, NavLink } from 'react-router-dom'
import NotFoundPage from './pages/404'
import Home from './pages/Home'
import SubmitArticle from './pages/Submit-Articles'
import SearchArticle from './pages/Search-Article'

const App = () => {
  return (
    <Router>
      <div>
        <h1> Software Engineering Practices AssignmentB</h1>
        <ul className="header">
          <li>
          <NavLink to="/">Home</NavLink>
          </li>
          <li>
          <NavLink to="/SubmitArticle">Submit an Article</NavLink>
          </li>
          <li>
          <NavLink to="/SearchArticle">Search for an Article</NavLink>
          </li>
        </ul>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="SubmitArticle" element={<SubmitArticle />} />
            <Route path="SearchArticle" element={<SearchArticle />} />

            <Route path="*" element={<NotFoundPage />} />
          </Routes>

        </div>
    </Router>
  )
}

export default App