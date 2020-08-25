import React, { useState, useRef } from "react";

import { ReactComponent as IconChevronDown } from '../../assets/images/IconChevronDown.svg';

import './accordion.scss';

const BaseAccordion = ({top='Title', bottom='Some content', arrowPosition= 'right', className=''}) => {
  const [activeState, setActiveState] = useState(false);
  const [heightState, setHeightState] = useState("0px");

  const content = useRef(null);

  function toggleAccordion() {
    setActiveState(prevActiveState => !prevActiveState);
    setHeightState(activeState ? "0px" : `${content.current.scrollHeight}px`);
  }

  return (
    <section className={`accordion ${activeState ? 'active' : ''} ${className}`} onClick={toggleAccordion} data-testid="base-accordion">
      
      <div className="accordion-top" data-testid="base-accordion-top">
        {top}
        {arrowPosition === 'right' && <IconChevronDown  className="accordion-icon right" data-testid="base-accordion-icon" />}
      </div>

      <div className={`accordion-bottom`} ref={content} style={{ maxHeight: `${heightState}`, visibility: `${activeState ?'visible' : 'hidden'}` }} data-testid="base-accordion-bottom" >
       <div className="accordion-content"> {bottom}</div>
      </div>

      {arrowPosition === 'bottom' &&<IconChevronDown className="accordion-icon bottom" data-testid="base-accordion-icon"/>}
    </section>
  )
};

export default BaseAccordion;