import React from 'react';
import jss from 'react-jss';
import { fontFamily, fontSize } from 'styles';
import 'styles/reset.css';
import 'styles/animation.css';

import Header from './Header';

const css = {
  layout: {
    fontFamily,
    fontSize
  },
  main: {
    padding: '1em'
  }
};

function Layout({ classes, children }) {
  return (
    <div className={classes.layout}>
      <Header />
      <div className={classes.main}>
        {children}
      </div>
    </div>
  );
}

Layout.propTypes = {
  classes: React.PropTypes.object.isRequired,
  children: React.PropTypes.node.isRequired
};

export default jss(css)(Layout);
