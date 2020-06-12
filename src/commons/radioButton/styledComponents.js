import styled from 'styled-components';

export const Button = styled.div`
  position: absolute;
  width: 33%;
  height: 100%;
  border-radius: 10px;
  background: var(--white);
  font-size: 1.6rem;
  border-radius: 19px;
  font-weight: 400;
  color: var(--blue5);
  cursor: pointer;
  text-align: center;
  .radioButton {
    position: relative;
    top: 0.1875rem;
    width: 1.125rem;
    height: 1.125rem;
    display: inline-block;

    .onRadio,
    .offRadio {
      position: absolute;
    }

    .onRadio {
      display: none;
    }

    .offRadio {
      display: block;
    }
  }
  &.selected {
    background: var(--blue4);
    color: var(--white);
    font-weight: 600;

    .radioButton {
      .onRadio {
        display: block;
      }
    }

    &:hover {
      background: var(--blue4);
    }
  }
  &:first-child {
    left: 0;
  }

  &:nth-child(2) {
    right: 0;
    left: 0;
    margin: 0 auto;
  }

  &:last-child {
    right: 0;
  }

  &:hover {
    background: var(--gray1);
    font-weight: 600;
  }

  .text {
    margin-left: 0.25rem;
    display: inline-block;
    font-size: 1rem;
  }
`;
