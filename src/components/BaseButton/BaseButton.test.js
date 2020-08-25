import { render, cleanup } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom';

import BaseButton from './index';

let Button;
afterEach(cleanup);

describe('The BaseButton Component ', () => { 

  it('renders without crashing', () => { 
    const div = document.createElement('div');
    ReactDOM.render(<BaseButton></BaseButton>, div);
  })

  it('matchs snapshot with props', () => { 
    const { asFragment } = render(<BaseButton link='/test' className='test-btn'><span>icon</span>View More</BaseButton>);
    expect(asFragment()).toMatchSnapshot();
  })

  it('matchs snapshot without props', () => { 
    const { asFragment } = render(<BaseButton></BaseButton>);
    expect(asFragment()).toMatchSnapshot();
  })

  describe('When props are provied ', () => { 
    beforeEach(() => {
      const { getByTestId } = render(<BaseButton link='/test' className='test-btn'><span>icon</span>View More</BaseButton>);
       Button = getByTestId('base-button');
    });
    
    it('when link prop is provied', () => { 
      expect(Button).toHaveAttribute('href', '/test'); 
    })

    it('when className prop is provided', () => { 
      expect(Button).toHaveClass('btn', 'test-btn');
    })

    it('when children are provied', () => { 
      expect(Button).toHaveTextContent('View More');
      expect(Button).toContainHTML('<span>icon</span>');
    })
  })

  describe('When props are not provied ', () => { 
    
    beforeEach(() => {
      const { getByTestId } = render(<BaseButton></BaseButton>);
      Button = getByTestId('base-button');
    });

    it('when link prop is not provied, default value should exist', () => { 
      expect(Button).toHaveAttribute('href', '/'); 
    })

    it('when className prop is not provided, default value should exist', () => { 
      expect(Button).toHaveClass('btn');
    })

    it('when children are not provied, children should\'t exist', () => { 
      expect(Button).toBeEmpty();
    })
  })
  
})
