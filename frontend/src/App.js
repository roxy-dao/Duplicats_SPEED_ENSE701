import React from 'react'
import { Route, Routes, BrowserRouter as Router, NavLink } from 'react-router-dom'
import NotFoundPage from './pages/404'
import Home from './pages/Home'
import SubmitArticle from './pages/SubmissionForm'
import DisplayArticles from './pages/DisplayArticles'
import SearchArticle from './pages/SearchArticle'

const App = () => {
  return (
    <Router>
      <div>
        <h1>Software Engineering Practices AssignmentB</h1>
        <ul className="header">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/submit-article">Submit an Article</NavLink>
          </li>
          <li>
            <NavLink to="/display-articles">Submitted Articles</NavLink>
          </li>
          <li>
            <NavLink to="/search-article">Search for an Article</NavLink>
          </li>
        </ul>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="submit-article" element={<SubmitArticle />} />
          <Route path="display-articles" element={<DisplayArticles />} />
          <Route path="search-article" element={<SearchArticle />} />

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
