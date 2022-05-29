import React, { useState } from 'react'
import { Route, Routes, BrowserRouter as Router, NavLink } from 'react-router-dom'
import NotFoundPage from './pages/404'
import Home from './pages/Home'
import SubmitArticle from './pages/SubmitArticles'
import DisplayArticles from './pages/DisplayArticles'
import SearchArticle from './pages/SearchArticle'
import styled from 'styled-components'
import ModerateArticles from './pages/ModerateArticles'
import AnalysisArticle from './pages/AnalysisArticles'

const DropDownContainer = styled('div')`
  width: 15em;
  background-color: #ffffff;
`

const DropDownHeader = styled('div')`
  margin-bottom: 0.8em;
  padding: 0.4em 2em 0.4em 1em;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
  font-weight: 500;
  font-size: 1.3rem;
  color: #3faffa;
`

const DropDownListContainer = styled('div')`
  position: absolute;
  z-index: 100;
  width: 15em;
`

const DropDownList = styled('ul')`
  padding: 0;
  margin: 0;
  padding-left: 1em;
  background: #ffffff;
  border: 2px solid #e5e5e5;
  box-sizing: border-box;
  color: #3faffa;
  font-size: 1.3rem;
  font-weight: 500;
  &:first-child {
    padding-top: 0.8em;
  }
`

const ListItem = styled('li')`
  list-style: none;
  margin-bottom: 0.8em;
  &:hover {
    color: #ffffff;
  }
`

const options = ['Submitter/Searcher', 'Moderator', 'Analyst']

const App = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState(null)

  const toggling = () => setIsOpen(!isOpen)

  const onOptionClicked = (value) => () => {
    setSelectedOption(value)
    setIsOpen(false)
    console.log(selectedOption)
  }

  return (
    <Router>
      <div>
        <h1>Software Engineering Practices AssignmentB</h1>
        <DropDownContainer>
          <DropDownHeader onClick={toggling}>
            {selectedOption || 'Select a role ...'}
          </DropDownHeader>
          {isOpen && (
            <DropDownListContainer>
              <DropDownList>
                {options.map((option) => (
                  <ListItem onClick={onOptionClicked(option)} key={Math.random()}>
                    {option}
                  </ListItem>
                ))}
              </DropDownList>
            </DropDownListContainer>
          )}
        </DropDownContainer>

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

          {selectedOption === 'Moderator' && (
            <li>
              <NavLink to="/moderate-articles">Moderator Articles</NavLink>
            </li>
          )}
          {selectedOption === 'Analyst' && (
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
