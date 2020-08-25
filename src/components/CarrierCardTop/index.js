import React from 'react';

import { ReactComponent as IconArrowDown } from '../../assets/images/IconArrowDown.svg';
import { ReactComponent as IconBoltWhite} from '../../assets/images/IconBoltWhite.svg';
import BaseButton from '../BaseButton';
import defaultLogo from '../../assets/images/logo-carrier-sm-default.png';
import Features from '../Features';
import Stars from '../Stars';
import turnRateToDollars from '../../utils/turnRateToDollars';

import './carrier-card-top.scss';




const CarrierCardTop = ({
  card: {
    action,
    features,
    name,
    logo,
    rate,
    stars,
    tag,
    type,
    tagline,
  }
}) => {
  
  return (
    <div className="carrier-card-top">
      <div className="sec-1">
        <img src={logo ? logo : defaultLogo} alt={`${name} logo`} className="logo" />
      </div>

      <div className="sec-2">
        <h2>{name}</h2>
        {tagline && <p className="tagline">{tagline}</p>}
        {(stars || features) && (
          <div className="stars-features"> 
            {stars && <Stars stars={stars} />}
            {features && <Features features={features} />}
          </div>
        )}
      </div>

      <div className="sec-3">
       <div className="price-wrap">
          {tag && <span className="tag-text">{tag}</span>}
          {rate && (
            <>
              <h3 className="rate">{turnRateToDollars.format(rate)}<span className="slash">&nbsp;/</span><span className="month">&nbsp;mo</span></h3>
            </>
          )}
       </div>
        {(type !== 2) &&
          <div className="btn-wrap">
            <BaseButton
            link={action.link}
              className={`${(type === 0 || type === 1) ? "blue-btn" : type === 3 ? "yellow-btn" : ''}`}
          >
            {type === 0 || type === 1 ?
              <IconArrowDown className="icon btn-down-arrow" /> :
              <IconBoltWhite className=" icon btn-bolt" />}
            {action.link_text || action.link_copy}
          </BaseButton>
          </div>
        }
      </div>
    </div>
  )
};

export default CarrierCardTop;