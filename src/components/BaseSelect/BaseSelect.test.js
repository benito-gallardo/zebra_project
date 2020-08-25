import { render, cleanup, fireEvent  } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom';

import BaseSelect from './index';

let Select;
let Options;
const optionsArry = [
  { title: 'Title 0', value: 0 },
  { title: 'Title 1', value: 1 }
];

afterEach(cleanup);

describe('The BaseSelect Component', () => { 
  
  it('renders without crashing', () => { 
    const div = document.createElement('div');
    ReactDOM.render(<BaseSelect />, div);
  })

  it('matches snapshot with props', () => {
    const callback = jest.fn();
    const { asFragment } = render(<BaseSelect options={optionsArry} onChange={callback} />);
    expect(asFragment()).toMatchSnapshot();
  })

  it('matches snapshot without props', () => {
    const { asFragment } = render(<BaseSelect />);
    expect(asFragment()).toMatchSnapshot();
  })
  
  describe('When props are provided', () => { 
    
    beforeEach(() => { 
      const { getByTestId, getAllByTestId } = render(<BaseSelect options={optionsArry} />);
      Select = getByTestId('base-select');
      Options = getAllByTestId('base-select-option');
    })

    it('when options prop is provided', () => {
      expect(Select).toContainElement(Options[0]);
      expect(Options[0]).toHaveTextContent('Title 0');
      expect(Options[0]).toHaveAttribute('value','0');
    })
  })

  describe('when props are not provided', () => { 

    beforeEach(() => { 
      const { getByTestId, getAllByTestId } = render(<BaseSelect />);
      Select = getByTestId('base-select');
      Options = getAllByTestId('base-select-option');
    })

    it('when options prop is not provided', () => {
      expect(Select).toContainElement(Options[0]);
      expect(Options[0]).toHaveTextContent('Hello');
      expect(Options[0]).toHaveAttribute('value','World');
    })
  })

  describe('when BaseSelect is clicked', () => { 
    
    const callback = jest.fn();
    
    beforeEach(() => { 
      const { getByTestId, getAllByTestId } = render(<BaseSelect onChange={callback} options={optionsArry} />)
      Select = getByTestId('base-select');
      Options = getAllByTestId('base-select-option');
    })

    it('calls the callback on selection', () => { 
      fireEvent.change(Select, { target: { value: 1 } });
      expect(callback).toHaveBeenCalledTimes(1);
    })

    it('when an options is selected, selected is true', () => { 
      fireEvent.change(Select, { target: { value: 1 } });
      expect(Options[0].selected).toBeFalsy();
      expect(Options[1].selected).toBeTruthy();
    })
  
  })
})