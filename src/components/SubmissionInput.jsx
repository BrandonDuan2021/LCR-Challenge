import React from 'react'
import '../styles/submissionInput.scss';

export default function SubmissionInput({label, length='full', input_length='', type='text', placeholder='', select=false, disabled=false}) {
  const classifiedLabel = String(label).split(' ').join('-');

  // Check if the current input is a number, if not, just prevent the user from inputting
  const numberChecker = (e) => {
    const keyCode = e.keyCode;

    // Need to allow for numbers and backspace
    if ((keyCode < 48 || keyCode > 57)&& keyCode !== 8) {
      e.preventDefault();
  }
  }

  if (select) {
    return (
        <div className='input-wrapper'>
            <label htmlFor={classifiedLabel}>{label}</label>
            <select id={classifiedLabel} className={length} aria-label={'please select your ' + label} disabled={disabled}>
                <option value="" aria-label={select}>{select}</option>
            </select>
        </div>
        
      )
  };

  return (
    <div  className='input-wrapper'>
        <label htmlFor={classifiedLabel}>{label}</label>
        <input type='text' id={classifiedLabel} maxLength={input_length} className={length} placeholder={placeholder} onKeyDown={type === 'number' ? (e)=>numberChecker(e) : null}  aria-label={'please enter your ' + label}/>
    </div>
  );
}
