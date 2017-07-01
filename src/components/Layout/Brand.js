import React from 'react';
import PropTypes from 'prop-types';
import withCss from 'react-jss';
import { variables, fontSizes, theme } from 'styles';
import logo from 'assets/logo.svg';

const css = {
  Brand: {
    display: 'flex',
    alignItems: 'center'
  },
  logo: {
    animation: 'spin infinite 10s linear',
    height: variables.Brand.logoHeight
  },
  title: {
    animation: 'fadeIn 2s ease',
    fontSize: fontSizes.large,
    color: theme.inverseColor
  }
};

@withCss(css)
class Brand extends React.Component {
  static propTypes = {
    classes: PropTypes.object.isRequired
  };

  shouldComponentUpdate() {
    return false;
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.Brand}>
        <img src={logo} className={classes.logo} alt="logo" />
        <span className={classes.title}>React Starter Kit</span>
      </div>
    );
  }
}

export default Brand;
