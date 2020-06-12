import React from 'react';
import Logo from 'assets/hostgator-logo.svg';
import styled from 'styled-components';

const Nav = styled.nav`
  padding: 0.5rem 0.9375rem;
  background-color: #ffffff;
  @media (min-width: 1200px) {
    padding: 0.5rem 20vw;
  }
`;

const NavBar = () => {
  return (
    <Nav>
      <img src={Logo} alt="HostGator Logo" />
    </Nav>
  );
};

export default NavBar;
