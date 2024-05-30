import React from 'react'
import SubmissionInput from './SubmissionInput'
import '../styles/billingAddress.scss';

export default function BillingAddress() {
  return (
    <div className='address-container'>
      <h3>Billing address</h3>
      <SubmissionInput label='Street Address'/>
      <SubmissionInput label='Apt, Suite, Unit Number (Optional)'/>
      <SubmissionInput label='City / Town'/>
      <SubmissionInput label='Country' select="Select a country"/>
      <SubmissionInput label='State / Province' select="Select a state or province" disabled={true}/>
      <SubmissionInput label='Zip / Postal code'/>
      <SubmissionInput type="number" label='Phone number'/>
      <SubmissionInput label='Email receipt to'/>
    </div>
  )
}
