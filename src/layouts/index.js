import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import '../assets/css/custom.css';

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'George Moon\'s various projects' },
        { name: 'keywords', content: 'george moon, projects' },
      ]}
    />
    {children()}
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
