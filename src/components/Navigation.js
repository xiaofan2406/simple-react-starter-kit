import React from 'react';
import { css } from '@emotion/core';
import { Link } from '@reach/router';
import { theme, spacing } from '../styles';
import { NAV_LINKS } from '../utils/constants';

const cssNavigation = css`
  position: fixed;
  left: ${spacing.unit}px;
  bottom: ${spacing.unit}px;
  display: flex;
  flex-direction: column;
  border: 1px solid ${theme.borderColor};
`;

const cssLink = css`
  text-decoration: none;
  padding: 0.5em;
  display: inline-block;
  &:hover {
    background-color: ${theme.borderColor};
  }
`;

const Navigation = () => (
  <div css={cssNavigation}>
    {NAV_LINKS.map(link => (
      <Link
        key={link.to}
        to={link.to}
        css={cssLink}
        getProps={({ isCurrent }) =>
          isCurrent
            ? { style: { borderRight: `2px solid ${theme.primaryColor}` } }
            : null
        }
      >
        {link.name}
      </Link>
    ))}
  </div>
);

export default Navigation;
