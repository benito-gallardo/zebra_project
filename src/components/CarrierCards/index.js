import React, { useEffect, useState } from 'react'; 

import BaseAccordion from '../BaseAccordion';
import CarrierCardBottom from '../CarrierCardBottom';
import CarrierCardsHeading from '../CarrierCardsHeading';
import CarrierCardTop from '../CarrierCardTop';
import Container from '../Container';
import getTimeToSearch from '../../utils/getTimeToSearch';
import sortCarrierCards from '../../utils/sortCarrierCards';

import './carrier-cards.scss';

const CarrierCards = ({url}) =>{

  const [requestData, setRequestData] = useState('');
  const [cardData, setCardData] = useState();
  const [fetchError, setFetchError] = useState();
  
  //Fetching data from Carrier Cards Api
  useEffect(() => {
    fetch(url).then(async response => { 
      if (response.status >= 200 && response.status <= 299) {
        const data = await response.json();
        
        // sending full response to state
        setRequestData(data);
  
        // sorting by best match as default then sending cards to state
        const sorted = sortCarrierCards(data.carrier_cards, 'card_order_best_match');
        setCardData(sorted);

      } else { 
        // setting error 
        setFetchError('Oops, something went wrong on our end.');
        console.log(response.status, response.statusText);
      }
    });
  }, [url])
  
  // sort carrier card's display order
  function handelSelectEvent(event) { 
    const sorted = sortCarrierCards([...cardData], event.target.value);
    setCardData(sorted);
  }

  return (
    <Container>
      {cardData && (
        <>
            <CarrierCardsHeading
              onChange={handelSelectEvent}
              carriersSearched={requestData.carriers_searched}
              searchTime={getTimeToSearch(requestData.search_time)}
            />
            <div className={`card-wrap`}>
              {cardData.map((card, i) => (
                  <BaseAccordion 
                    key={`card-${i}`}
                    className={`${card.corner_tag ? "corner-tag" : ''}`}
                    arrowPosition="bottom"
                    top={<CarrierCardTop card={card} />}
                    bottom={<CarrierCardBottom card={card} />}
                  />
              ))}
            </div>
        </>
      )}
      {fetchError && <h1>{fetchError}</h1>}
    </Container>
  );
};

export default CarrierCards;