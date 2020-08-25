import React from 'react';

import './carrier-card-bottom.scss';

const CarrierCardBottom = ({ card: { features_html, detail_body, name }}) => {
  return (
    <div className="carrier-card-bottom">
      {features_html && <div className="feature-html">
        <h4>Features</h4>
        <div dangerouslySetInnerHTML={{ __html: features_html }} />
      </div>}
      {detail_body && <div className="detail-body">
        <h4>Why {name}?</h4>
        <p>{detail_body}</p>
      </div>}
    </div>
  )
};

export default CarrierCardBottom;