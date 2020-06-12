import React from 'react';
import radioOn from 'assets/selection-control-radio-on-enabled.svg';
import radioOff from 'assets/selection-control-radio-off-enabled.svg';
import { Button } from './styledComponents';

const RadioButton = ({ selected, label, handleClick }) => (
  <Button
    role="button"
    className={`radioGroup ${selected ? 'selected' : ''}`}
    onClick={handleClick}
  >
    <span className="radioButton">
      <img className="offRadio" src={radioOff} alt="Offf" />
      <img className="onRadio" src={radioOn} alt="On" />
    </span>
    <span className="text">{label}</span>
  </Button>
);

export default RadioButton;
