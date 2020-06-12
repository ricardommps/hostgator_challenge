import React from 'react';
import styled from 'styled-components';

export const Arrow = styled.div`
  cursor: pointer;
  display: block;
  position: absolute;
  top: calc(33%);
  width: 3.5rem;
  height: 3.5rem;
  z-index: 2;
  &.-prev {
    left: -1.2rem;
    &::before {
      content: '';
    }
  }

  &.-next {
    right: -1.2rem;
    &::before {
      content: '';
    }
  }
`;

const ArrowButton = ({ className, onClick, icon }) => (
  <Arrow className={className} onClick={onClick}>
    <img src={icon} alt="Arrow" />
  </Arrow>
);

export default ArrowButton;
