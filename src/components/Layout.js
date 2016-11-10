import React from 'react';
import 'styles/reset.css';
import 'styles/animation.css';

import Header from './Header';


/* Use functions rather than constant elements for better debugging */
function Layout({ children }) {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}

Layout.propTypes = {
  children: React.PropTypes.node.isRequired
};


export default Layout;
