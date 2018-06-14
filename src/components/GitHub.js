import React, { Component } from 'react';
import 'whatwg-fetch';

const Repository = ({ repository }) => {
  return (
    <div className="Repository col-sm-6 col-md-4 mb-4">
      <div className="card">
        <div className="card-body">
          <div className="card-title">
            <a href={ repository.html_url }><h3 className="h4">{ repository.name }</h3></a>
          </div>
          { repository.description }
        </div>
        <div className="card-body">
          { repository.html_url &&
            <a href={ repository.html_url } className="card-link">Repository</a>
          }
          { repository.homepage &&
            <a href={ repository.homepage } className="card-link">View</a>
          }
        </div>
      </div>
    </div>
  );
}

class GitHub extends Component {
  constructor(props) {
    super(props);

    this.state = {
      repositories: []
    };
  }

  getRepositories() {
    fetch(`https://api.github.com/users/georgemoon/repos`)
    .then(response => {
      response.json()
      .then(data => {
        this.setState({ repositories: data });
      })
      .catch(error => {
        console.error(error);
      });
    });
  }

  componentDidMount() {
    this.getRepositories();
  }

  render() {
    return(
      <div className="GitHub">
        <div className="row">
          {this.state.repositories.map(repository =>
            <Repository key={ repository.id } repository={ repository } />
          )}
        </div>
      </div>
    );
  }
}

export default GitHub;
