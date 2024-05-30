import React from 'react'
import BillingAddress from './BillingAddress'
import PaymentDetails from './PaymentDetails'
import SubmitGroup from './SubmitGroup'
import '../styles/paymentSubmission.scss';


export default function PaymentSubmission() {
  return (
    <div className='payment-submission-wrapper'>
      <PaymentDetails/>
      <BillingAddress/>
      <SubmitGroup/>
    </div>
  )
}
