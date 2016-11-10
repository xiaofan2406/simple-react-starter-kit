import React from 'react';
import Link from 'react-router/Link';
import classnames from 'classnames';
import withLocation from 'react-router-v4-hocs/lib/withLocation';

import injectSheet, { primaryColor } from 'styles';
import compose from 'utils/compose';
import { routes } from 'app/router';


const styles = {
  link: {
    color: '#fff',
    textDecoration: 'none',
    marginRight: '1em'
  },

  linkActive: {
    borderBottom: `2px solid ${primaryColor}`
  }
};

function HeaderNav({ sheet: { classes }, location }) {
  return (
    <div>
      {routes.map(route => (
        <Link
          className={classnames({
            [classes.link]: true,
            [classes.linkActive]: route.pattern === location.pathname
          })}
          to={route.pattern}
        >
          {route.name}
        </Link>
      ))}
    </div>
  );
}

HeaderNav.propTypes = {
  sheet: React.PropTypes.object.isRequired,
  location: React.PropTypes.object.isRequired
};


const enhance = compose(
  withLocation,
  injectSheet(styles)
);

export default enhance(HeaderNav);
