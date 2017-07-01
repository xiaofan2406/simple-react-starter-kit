import React from 'react';
import PropTypes from 'prop-types';
import withCss from 'react-jss';
import { NavLink } from 'react-router-dom';
import { ROUTES } from 'configs';
import { theme, variables } from 'styles';

const css = {
  Navigation: {},
  link: {
    color: theme.inverseColor,
    textDecoration: 'none',
    padding: '0 0.5em',
    display: 'inline-block',
    lineHeight: '42px',
    height: variables.Layout.headerHeight,
    '&:hover': {
      backgroundColor: theme.bgAccentColor
    }
  },
  linkActive: {
    borderBottom: `2px solid ${theme.primaryColor}`
  }
};

function Navigation({ classes }) {
  return (
    <div className={classes.Navigation}>
      {Object.values(ROUTES).map(route =>
        <NavLink
          className={classes.link}
          activeClassName={classes.linkActive}
          key={route.path}
          exact={route.exact}
          to={route.path}
        >
          {route.name}
        </NavLink>
      )}
    </div>
  );
}

Navigation.propTypes = {
  classes: PropTypes.object.isRequired
};

export { Navigation as Component };

export default withCss(css)(Navigation);
