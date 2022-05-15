import React from 'react'
import SearchForm from '../components/SearchForm';

const SearchArticle = () => {
  return (
    <div>
        <h1>Search for an Article</h1>
        <p>Search the database for an article by specifying an SE method.</p>
        <SearchForm />
    </div>
  )
}
export default SearchArticle;