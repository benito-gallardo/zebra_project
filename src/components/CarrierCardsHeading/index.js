import React from 'react';

import BaseSelect from '../BaseSelect';

import './carier-cards-heading.scss';

const CarrierCardsHeading = ({ onChange, carriersSearched, searchTime }) => {
  
  const options = [
    { value: 'card_order_best_match', title: 'Best Match' },
    { value: 'name', title: 'A-Z' },
    { value: 'rate', title: 'Best Price' },
    { value: 'stars', title: 'Rating' }
  ];

  return (
    <div className="carier-cards-heading">
      <h3>
        You just compared <span className="bold">{carriersSearched} rates</span> in {searchTime}!
      </h3>
      <div className="sort-by">
        Sort by: <BaseSelect onChange={onChange} options={options} />
      </div>
    </div>
  )
};
    
export default CarrierCardsHeading;