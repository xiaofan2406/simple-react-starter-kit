import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import { theme, spacing } from 'styles';
import Brand from './Brand';

const Layout = ({ children }) => (
  <div
    css={css`
      font-family: ${theme.fontFamily};
      font-size: ${theme.fontSize}px;
      color: ${theme.textColor};
    `}
  >
    <Brand />
    <div
      css={css`
        width: 780px;
        padding: 0px ${spacing.internal}px;
        margin: ${spacing.break}px auto;
      `}
    >
      {children}
    </div>
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
