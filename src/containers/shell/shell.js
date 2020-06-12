import React, { memo } from 'react';
import NavBar from './components/navbar';

const Shell = ({ children }) => {
  return (
    <>
      <NavBar />
      <main style={{ gridArea: 'main' }}>{children}</main>
    </>
  );
};

export default memo(Shell);
