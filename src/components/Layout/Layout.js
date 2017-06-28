import React from 'react';
import PropTypes from 'prop-types';
import withCss from 'react-jss';
import { fontFamily, fontSize, headerHeight } from 'styles';
import 'styles/reset.css';
import 'styles/animation.css';

import Brand from './Brand';
import Navigation from './Navigation';

const css = {
  Layout: {
    fontFamily,
    fontSize
  },
  header: {
    height: headerHeight,
    backgroundColor: '#242729',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  }
};

function Layout({ classes, children }) {
  console.log('render Layout');
  return (
    <div className={classes.Layout}>
      <div className={classes.header}>
        <Brand />
        <Navigation />
      </div>
      {children}
    </div>
  );
}

Layout.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired
};

export default withCss(css)(Layout);
