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
            { repository.owner &&
              <span className="owner text-muted">
                { repository.owner.login }
              </span>
            }
            <h3 className="h4">
              <a href={ repository.html_url }>{ repository.name }</a>
            </h3>
          </div>
          <div className="description mb-3">
            { repository.description }
          </div>
          <div className="details mb-3">
            { repository.language &&
              <span className="badge badge-secondary mr-1">{ repository.language }</span>
            }
            { repository.license &&
              <span className="badge badge-secondary mr-1">{ repository.license.spdx_id }</span>
            }
          </div>
          <div className="links">
            { repository.html_url &&
              <a href={ repository.html_url } className="card-link">Repository</a>
            }
            { repository.homepage &&
              <a href={ repository.homepage } className="card-link">View</a>
            }
          </div>
        </div>
      </div>
    </div>
  );
}

const Repositories = ({ repositories }) => {
  return (
    <div className="Repositories">
      <div className="row">
        { repositories.items.map(repository =>
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
    url: `https://api.github.com/search/repositories?q=user%3Ageorgemoon+user%3Agreenstone&sort=updated&order=desc`
  }
}))(GitHub);
