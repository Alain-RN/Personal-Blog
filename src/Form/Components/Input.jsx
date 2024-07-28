import React from 'react'

function Input({type, className}) {
  return (<>
    <input 
        type={type} 
        id={type}
        name={type}
        className={className} 
        required 
        />
    <br/>
  </>
  )
}

export default Input