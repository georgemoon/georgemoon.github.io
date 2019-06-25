import React from 'react';
import Link from 'gatsby-link';

import GitHub from '../components/GitHub';

import me from '../assets/img/me.png';

const IndexPage = () => (
  <div className="IndexPage">
    <header className="py-5">
      <div className="container">
        <img src={ me } alt="Graphic of George Moon" className="me" />
        <h1 className="font-styled my-2">George Moon</h1>
        <p className="mb-0">
          <a href="https://georgemoon.com">Blog</a>
        </p>
      </div>
    </header>
    <main className="py-5">
      <div className="container">
        <h2 className="text-center h4 mb-4">Current projects</h2>
        <GitHub />
      </div>
    </main>
  </div>
)

export default IndexPage;
