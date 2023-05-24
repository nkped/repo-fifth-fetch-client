import React from 'react'

const Button = ({ reqType, setReqType, buttonText }) => {
  return (
    <div>
        <button 
            className={ reqType === buttonText ? 'selected' : null } 
            type='button' 
            onClick={() => setReqType(buttonText)}>{buttonText}</button>
    </div>
  )
}

export default Button