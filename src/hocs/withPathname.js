import React from 'react';
import PropTypes from 'prop-types';

export default function withPathname(Component) {
  const WithPathname = (props, context) =>
    <Component pathname={context.router.route.location.pathname} {...props} />;

  WithPathname.contextTypes = {
    router: PropTypes.shape({
      history: PropTypes.object.isRequired,
      route: PropTypes.object.isRequired,
      staticContext: PropTypes.object
    })
  };

  WithPathname.displayName = `withPathname(${Component.displayName ||
    Component.name})`;

  return WithPathname;
}
