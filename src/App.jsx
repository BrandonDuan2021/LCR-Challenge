import './styles/app.scss';

import React, { createContext, useState } from 'react';
import Header from './components/Header';
import { cardData } from './utils/cardData';
import OrderSummary from './components/OrderSummary';
import PaymentSubmission from './components/PaymentSubmission';


// use useContext to pass global variables to ensure high cohesion 
// and low coupling when it comes to function call
export const CardContext = createContext();

function App() {

  const [currentCard, setCurrentCard] = useState(cardData[0]);

  return (
    <CardContext.Provider value={{ currentCard, setCurrentCard }}>
      <div className='main-container'>
        <Header/>
        <div className='flex-row-container'>
          <PaymentSubmission/>
          <OrderSummary/>
        </div>
        
      </div>
    </CardContext.Provider>
  );
}

export default App;
