/**
 * @see https://github.com/yuanyan/halogen/blob/master/src/RingLoader.js
 */
import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';

const Loader = ({ size, color }) => {
  const cssSize = useMemo(
    () =>
      css`
        width: ${size}px;
        height: ${size}px;
      `,
    [size]
  );

  return (
    <div
      css={css`
        display: inline-block;
      `}
    >
      <div
        css={css`
          ${cssSize};
          position: relative;

          & div {
            ${cssSize};
            border-style: solid;
            border-width: ${size / 10}px;
            border-color: ${color};
            opacity: 0.4;
            border-radius: 100%;
            position: absolute;
            top: 0;
            left: 0;
            perspective: 800px;
            animation-fill-mode: forwards;
          }
        `}
      >
        <div
          css={css`
            animation: loaderRigthRotate 2s 0s infinite linear;
          `}
        />
        <div
          css={css`
            animation: loaderLeftRotate 2s 0s infinite linear;
          `}
        />
      </div>
    </div>
  );
};

Loader.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
};

Loader.defaultProps = {
  color: '#00bcd4',
  size: 60,
};

export default Loader;
