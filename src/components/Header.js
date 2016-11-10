import React from 'react';
import injectSheet from 'styles';

import logo from './logo.svg';
import HeaderNav from './HeaderNav';


const styles = {
  root: {
    display: 'flex',
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'space-between'
  },

  brand: {
    display: 'flex',
    alignItems: 'center'
  },

  logo: {
    animation: 'spin infinite 10s linear',
    height: '40px'
  },

  title: {
    animation: 'fadeIn 2s ease',
    fontSize: '18px',
    color: '#fff',
    fontFamily: 'monospace'
  }
};

function Header({ sheet: { classes } }) {
  return (
    <div className={classes.root}>
      <div className={classes.brand}>
        <img src={logo} className={classes.logo} alt="logo" />
        <span className={classes.title}>React Starter Kit</span>
      </div>
      <HeaderNav />
    </div>
  );
}

Header.propTypes = {
  sheet: React.PropTypes.object.isRequired
};


export default injectSheet(styles)(Header);
