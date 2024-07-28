import React from 'react'

function Label({label}) {
  return (
    <>
      <label for={label}>{label} :</label>
      <br />
    </>
  )
}

export default Label