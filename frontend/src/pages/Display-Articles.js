import React from 'react';
import axios from 'axios';
import DataTable from '../components/DataTable';
import '../components/Display-Articles.css'

class DisplayArticles extends React.Component {
  constructor(props) {
    super(props);
    this.state = { articles: [] };
  }

  componentDidMount() {
    axios.get('/api/articles')
    .then(res => {
      this.setState( {articles: res.data })
    })
    .catch(function(error) {
      console.log(error);
    })
  };

  dataTable() {
    return this.state.articles.map((article, index) => {
      return <DataTable obj={article} key={index} />
    });
  }

  render() {
    return (
      <div className="container">
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
            </tr>
          </thead>
          <tbody>
            {this.dataTable()}
          </tbody>
        </table>
      </div>
    )
  }
};

export default DisplayArticles;