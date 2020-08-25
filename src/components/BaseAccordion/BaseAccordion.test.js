import { render, cleanup, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom';

import BaseAccordion from './index';

let Accordion;
afterEach(cleanup);

const props = {
  top: 'Top Content',
  bottom: 'Bottom Content',
  arrowPosition: 'bottom',
  className: 'test-class'
};

describe('The BaseAccordion Component', () => { 
  
  it('renders without crashing', () => { 
    const div = document.createElement('div');
    ReactDOM.render(<BaseAccordion />, div);
  })

  it('matches snapshot with props', () => { 
    const { asFragment } = render(<BaseAccordion {...props} />);
    expect(asFragment()).toMatchSnapshot();
  })

  it('matches snapshot without props', () => { 
    const { asFragment } = render(<BaseAccordion />);
    expect(asFragment()).toMatchSnapshot();
  })

  describe('when props are provided', () => { 

    beforeEach(() => { 
      const { getByTestId } = render(<BaseAccordion {...props} />);
      Accordion = getByTestId('base-accordion');
    })

    it('custom class is added', () => { 
      expect(Accordion).toHaveClass('accordion','test-class');
    })

    it('top and bottom content should be from props ', () => { 
      expect(Accordion).toHaveTextContent('Top Content');
      expect(Accordion).toHaveTextContent('Bottom Content');
    })

    it('has arrow icon at bottom of card', () => { 
      const Icon = screen.getByTestId('base-accordion-icon');
      expect(Icon).not.toHaveClass('right');
      expect(Icon).toHaveClass('bottom');
    })
  })

  describe('when props are not provided', () => { 

    beforeEach(() => { 
      const { getByTestId } = render(<BaseAccordion />);
      Accordion = getByTestId('base-accordion');
    })

    it('has default class', () => { 
      expect(Accordion).toHaveClass('accordion');
    })

    it('top and bottom content should be from props ', () => { 
      expect(Accordion).toHaveTextContent('Title');
      expect(Accordion).toHaveTextContent('Some content');
    })

    it('has arrow icon on the right side of card', () => { 
      const Icon = screen.getByTestId('base-accordion-icon');
      expect(Icon).not.toHaveClass('bottom');
      expect(Icon).toHaveClass('right');
    })
  })

  describe('when accordion is not open', () => {

    beforeEach(() => { 
      const { getByTestId } = render(<BaseAccordion />);
      Accordion = getByTestId('base-accordion');
    })

    it('does not have an active class', () => { 
      expect(Accordion).not.toHaveClass('active');
    })

    it('accordion content area is not visable', () => { 
      const AccordionBottom = screen.getByTestId('base-accordion-bottom');
      expect(AccordionBottom).not.toBeVisible();
    })
  })
    
  describe('when accordion is clicked', () => { 

    beforeEach(() => { 
      const { getByTestId } = render(<BaseAccordion />);
      Accordion = getByTestId('base-accordion');
      fireEvent.click(Accordion);
    })

    it('accordion classes update to active', () => { 
      expect(Accordion).toHaveClass('accordion', 'active');
    })

    it('accordion content area is visable', () => { 
      const AccordionBottom = screen.getByTestId('base-accordion-bottom');
      expect(AccordionBottom).toBeVisible();
    })
  })
})
