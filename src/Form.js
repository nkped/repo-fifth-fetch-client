import React from 'react'
import Button from './Button'

const Form = ({ reqType, setReqType }) => {
  return (
    <div>
        <Button 
            reqType={reqType} 
            setReqType={setReqType} 
            buttonText="posts"/>
    </div>
  )
}

export default Form