import React from 'react';
import injectSheet, { primaryColor } from 'styles';

import logo from './logo.svg';


const styles = {
  header: {
    backgroundColor: primaryColor,
    display: 'flex',
    alignItems: 'center',
    marginBottom: '20px'
  },

  logo: {
    animation: 'logo-spin infinite 20s linear',
    height: '40px'
  },

  '@keyframes logo-spin': {
    from: { transform: 'rotate(0deg)' },
    to: { transform: 'rotate(360deg)' }
  },

  title: {
    fontSize: '18px',
    color: '#fff',
    fontFamily: 'monospace'
  },

  main: {
    textAlign: 'center'
  }
};


/* Use functions rather than constant elements for better debugging */
function App({ sheet: { classes } }) {
  return (
    <div>
      <div className={classes.header}>
        <img src={logo} className={classes.logo} alt="logo" />
        <span className={classes.title}>React Starter Kit</span>
      </div>
      <div className={classes.main} >
        Hello world
      </div>
    </div>
  );
}

App.propTypes = {
  sheet: React.PropTypes.object.isRequired
};


export default injectSheet(styles)(App);
