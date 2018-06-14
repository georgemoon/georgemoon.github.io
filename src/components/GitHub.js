import React, { Component } from 'react';
import 'isomorphic-fetch';
import { connect } from 'react-refetch';

const Loader = () => <div className="Loader"></div>;
const Error = () => <div className="Error">Error</div>;

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

const Repositories = ({ repositories }) => {
  return (
    <div className="Repositories">
      <div className="row">
        { repositories.map(repository =>
          <Repository key={ repository.id } repository={ repository } />
        ) }
      </div>
    </div>
  );
}

class GitHub extends Component {
  render() {
    const { gitHubFetch } = this.props;

    if (gitHubFetch.pending) return <Loader />;
    else if (gitHubFetch.rejected) return <Error error={ gitHubFetch.reason } />;
    else if (gitHubFetch.fulfilled) return <Repositories repositories={gitHubFetch.value} />;
    return null;
  }
}

export default connect(props => ({
  gitHubFetch: {
    url: `https://api.github.com/users/georgemoon/repos`
  }
}))(GitHub);
