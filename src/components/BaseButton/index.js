import React from 'react';

import './buttons.scss';

const BaseButton = ({ link="/", className='', children }) => (
  <a href={link} className={`${className} btn`} data-testid="base-button">{children}</a>
)

export default BaseButton;