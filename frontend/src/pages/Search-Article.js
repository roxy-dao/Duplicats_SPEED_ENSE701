import React from 'react';
import axios from 'axios';
import DataTable from '../components/DataTable';
import '../components/Display-Articles.css';

class FilterArticles extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
        articles: [],
        search: '',
        searchChanged: ''
    };
  };
  
  searchChanged = event => {
    this.setState({ search: event.target.value })
};

  componentDidMount() {
    axios.get('/api/articles/')
    .then(res => {
      this.setState({ articles: res.data })
    })
    .catch(function(error) {
      console.log(error);
    })
  };

  dataTable() {
      return this.state.articles.filter(article => article.sepractice.includes(this.state.search)).map((article, index) => {
      return <DataTable obj={article} key={index} />
    });
  };

  render() {
    return (
      <div className="container">
          <select onChange={this.searchChanged} value={this.state.search}>
              <option value="">Filter by SE Practice...</option>
              <option value="TDD">TDD</option>
              <option value="Mob Programming">Mob Programming</option>
        </select>
        <table className="table">
          <thead className="thead">
            <tr>
              <th>Title</th>
              <th>Author</th>
              <th>Source</th>
              <th>Year of Publication</th>
              <th>DOI</th>
              <th>Claim</th>
              <th>Evidence</th>
              <th>SE Practice</th>
            </tr>
          </thead>
          <tbody>
            {this.dataTable()}
          </tbody>
        </table>
      </div>
    )
  };
};

export default FilterArticles;