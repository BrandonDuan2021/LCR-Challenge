import React from 'react'
import '../styles/submitGroup.scss';

export default function SubmitGroup() {
  return (
    <div className='flex-column'>
        <div className="terms">
            <input type="checkbox" id="terms" name="terms" aria-label="check to agree to the terms and conditions"/>
            <label htmlFor="terms"><b>I agree to the <a href="/">terms & conditions</a></b></label>
        </div>
        <button type="submit" id='buy-button' aria-label="buy miles"><b>Buy Miles</b></button>
    </div>
    
  )
}
