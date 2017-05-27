import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withPathname } from 'hocs';
import classnames from 'classnames';

function SmarkLink({ activeClassName, pathname, to, ...rest }) {
  const classNames = classnames(rest.className, {
    [activeClassName]: to.pathname ? to.pathname === pathname : to === pathname
  });
  return (
    <Link className={classNames} to={to} replace={rest.replace}>
      {rest.children}
    </Link>
  );
}

SmarkLink.propTypes = {
  pathname: PropTypes.string.isRequired,
  to: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  activeClassName: PropTypes.string
};

SmarkLink.defaultProps = {
  activeClassName: ''
};

export default withPathname(SmarkLink);
