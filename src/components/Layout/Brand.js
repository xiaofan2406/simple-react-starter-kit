import React, { memo } from 'react';
import { css } from '@emotion/core';
import { fontSizes, spacing } from 'styles';
import { APP_TITLE } from 'utils/constants';
import logo from 'assets/logo.svg';

const Brand = () => (
  <div
    css={css`
      display: flex;
      align-items: center;
      padding: ${spacing.internal}px;
    `}
  >
    <img
      src={logo}
      alt="logo"
      css={css`
        animation: spin infinite 10s linear;
        height: 36px;
      `}
    />
    <span
      css={css`
        animation: fadeIn 2s ease;
        font-size: ${fontSizes.large}px;
      `}
    >
      {APP_TITLE}
    </span>
  </div>
);

export default memo(Brand);
