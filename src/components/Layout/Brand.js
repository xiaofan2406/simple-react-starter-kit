import React, { memo } from 'react';
import { APP_TITLE } from '../../utils/constants';
import logo from '../../assets/logo.svg';

const Brand = () => (
  <div className="flex items-center p-2">
    <img src={logo} alt="logo" className="spin h-10" />
    <span className="fade-in text-lg">{APP_TITLE}</span>
  </div>
);

export default memo(Brand);
