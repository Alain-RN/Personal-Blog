import React from 'react'

function Button({value}) {
  return (
    <div className='d-flex my-4 justify-content-center'>
        <input 
            type="submit" 
            value={value}
            className='button btn text-white bg-primary'
        />
    </div>
  )
}

export default Button