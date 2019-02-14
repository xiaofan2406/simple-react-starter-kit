import React, { useState } from 'react';
import { css } from '@emotion/core';
import { Loader } from 'widgets';

const Contact = () => {
  const [count, setCount] = useState(120);
  const add = () => setCount(prev => prev + 10);

  return (
    <div
      css={css`
        text-align: center;
      `}
    >
      <Loader size={count} />
      <button type="button" onClick={add}>
        Add
      </button>
    </div>
  );
};

export default Contact;
