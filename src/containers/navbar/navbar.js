import React from 'react';
import Logo from 'assets/hostgator-logo.svg';
import { Nav } from './styledComponents';

const NavBar = () => {
  return (
    <Nav>
      <img src={Logo} alt="HostGator Logo" />
    </Nav>
  );
};

export default NavBar;
