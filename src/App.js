import React, { useState } from 'react';
import BaseAccordion from './components/BaseAccordion';
import BaseButton from './components/BaseButton';
import BaseSelect from './components/BaseSelect';
import CarrierCards from './components/CarrierCards';
import Container from './components/Container';

const App = () => {
  const [view, setview] = useState('carrier-cards')
  return (
    
    <Container>
      <button onClick={() => setview('carrier-cards')}>Carrier Cards</button>
      <button onClick={() => setview('global')}>Global Components</button>
      <div>
        {view === 'carrier-cards' && <CarrierCards url="/carrier-cards/" />}
        {view === 'global' && (
          <React.Fragment>
            <div>
              <h2>Button Component</h2>
              <BaseButton>Button</BaseButton>
            </div>
            <div>
              <h2>Accordion Componet</h2>
              <BaseAccordion />
            </div>
            <div>
              <h2>Select</h2>
              <BaseSelect />
            </div>
            
          </React.Fragment>
        )}
      </div>
      
    </Container>
  
  )
}
  
export default App;
