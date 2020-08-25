import React from 'react';

import { ReactComponent as GoldStar } from '../../assets/images/IconStarGold.svg';

const Stars = ({ stars }) => { 
  const star = [];
  for(let i = 0; i < stars; i++) {
    star.push(<GoldStar key={`star-${i}`}/>)
  }
  return (<div className="stars">{star}</div>);
}

export default Stars;