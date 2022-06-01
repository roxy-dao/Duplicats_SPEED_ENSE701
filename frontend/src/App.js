import React, { useState } from 'react'
import { Route, Routes, BrowserRouter as Router, NavLink } from 'react-router-dom'
import NotFoundPage from './pages/404'
import Home from './pages/Home'
import SubmitArticle from './pages/SubmissionForm'
import DisplayArticles from './pages/DisplayArticles'
import SearchArticle from './pages/SearchArticle'
import styled from 'styled-components'
import ModerateArticles from './pages/ModerateArticles'
import AnalysisArticle from './pages/AnalysisArticles'
import Dropdown from './components/Dropdown'
import { Box } from '@material-ui/core'

const DropDownBox = styled(Box)`
  width: 100%;
  display: flex;
  max-width: 300px;
  flex-direction: column;
`

const options = ['Submitter/Searcher', 'Moderator', 'Analyst']

const App = () => {
  const [selectedRole, setSelectedRole] = useState('')

  return (
    <Router>
      <div>
        <h1>Software Engineering Practices AssignmentB</h1>

        <DropDownBox>
          <Dropdown
            dropdownList={options}
            selected={selectedRole}
            setSelected={setSelectedRole}
            label="Select role"
          />
        </DropDownBox>

        <ul className="header">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>

          <li>
            <NavLink to="/submit-article">Submit an Article</NavLink>
          </li>
          <li>
            <NavLink to="/display-articles">All Submitted Articles</NavLink>
          </li>

          <li>
            <NavLink to="/search-article">Search for an Article</NavLink>
          </li>

          {selectedRole === 'Moderator' && (
            <li>
              <NavLink to="/moderate-articles">Moderator Articles</NavLink>
            </li>
          )}
          {selectedRole === 'Analyst' && (
            <li>
              <NavLink to="/analysis-article">Analyse Articles</NavLink>
            </li>
          )}
        </ul>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="submit-article" element={<SubmitArticle />} />
          <Route path="display-articles" element={<DisplayArticles />} />
          <Route path="search-article" element={<SearchArticle />} />
          <Route path="moderate-articles" element={<ModerateArticles />} />
          <Route path="analysis-article" element={<AnalysisArticle />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
