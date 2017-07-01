import React from 'react';
import PropTypes from 'prop-types';
import withCss from 'react-jss';
import { SmartLink } from 'widgets';
import { routes } from 'router';
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
      {routes.map(route =>
        <SmartLink
          className={classes.link}
          activeClassName={classes.linkActive}
          key={route.path}
          to={route.path}
        >
          {route.name}
        </SmartLink>
      )}
    </div>
  );
}

Navigation.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withCss(css)(Navigation);
