import React, { useContext } from 'react'
import { CardContext } from '../App'
import '../styles/orderSummary.scss';

export default function OrderSummary() {
  const {currentCard} = useContext(CardContext)

  // Calculate each component
  const miles = currentCard.amount
  const cost = currentCard.cost
  const tax = cost*0.13
  const total = cost+tax

  return (
    <div className='summary-container'>
        <div className='summary-content'>
          <h3>Order Summary</h3>
          <hr />

            <div className="summary-row">
                <div>Total miles</div>
                <div><b>{miles}</b></div>
            </div>

          <br />

          <div className="summary-row">
                <div>GST/HST</div>
                <div><b>${tax.toFixed(2)}</b></div>
          </div>      

          <hr />

          <div className="summary-row">
                <div><h3>Total cost</h3></div>
                <div><h3>$ {total.toFixed(2)}</h3></div>
          </div>
        </div>
    </div>
    
  )
}
