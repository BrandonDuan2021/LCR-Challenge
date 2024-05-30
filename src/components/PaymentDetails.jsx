import React from 'react'
import SubmissionInput from './SubmissionInput'
import '../styles/paymentDetails.scss';

export default function PaymentDetails() {
  return (
    <div>
      <h3>Payment details</h3>
      <p>We accept all major credit cards. Please ensure that you enter your details exactly as they appear on your credit card statement. All fields are required unless is indicated.</p>
      <SubmissionInput label='Cardholder name'/>
      <SubmissionInput type="number" label='Cardholder number'/>
      <SubmissionInput type="number" label='Expiration date' input_length={4} placeholder='MMYY' length="half"/>
      <SubmissionInput type="number" label='CVV' input_length={3} placeholder='🔒' length="half"/>
    </div>
  )
}
