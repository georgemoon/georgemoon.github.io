import React, { Component } from 'react';
import 'whatwg-fetch';

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
      <ul className="GitHub">
        {this.state.repositories.map(repository =>
          <li key={ repository.id }>
            <strong><a href={ repository.html_url }>{ repository.name }</a></strong>
            &nbsp;&ndash;&nbsp;
            { repository.description }
          </li>
        )}
      </ul>
    );
  }
}

export default GitHub;
