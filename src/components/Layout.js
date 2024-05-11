import React from 'react';
import Navbar from './Navbar.js';

const Layout = ({ children}) => {
  return (
    <>
      <Navbar title="TouchType"/>
      {children}
    </>
  );
};

export default Layout;
