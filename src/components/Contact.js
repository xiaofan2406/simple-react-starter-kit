import React from 'react';
import { css } from '@emotion/core';
import { Loader } from 'widgets';

const Contact = () => (
  <div
    css={css`
      text-align: center;
    `}
  >
    <Loader size={120} />
  </div>
);

export default Contact;
