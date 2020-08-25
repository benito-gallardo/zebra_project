import React from 'react';

import './select.scss'

const Select = ({
  onChange,
  options = [{ title: "Hello", value: 'World' }]
}) => (
    <select data-testid="base-select" onChange={onChange}>
    {options.map(({title, value}, i) => (
      <option data-testid={`base-select-option`} key={`option-${i}`} value={value}>{title}</option>
    ))}
    </select>
);

export default Select;