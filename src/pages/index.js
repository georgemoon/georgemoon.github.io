import React from 'react';
import Link from 'gatsby-link';

import GitHub from '../components/GitHub';

import me from '../assets/me.png';

const IndexPage = () => (
  <main>
    <img src={ me } alt="Stylised graphic of George Moon"/>
    <h1>George Moon</h1>
    <h2>Current Projects</h2>
    <GitHub />
  </main>
)

export default IndexPage;
