

function DropDown({style, section}) {
  return (
    <div className='dropDown bg-dark text-primary' style={style}>
        <h1>{section}</h1>
        <button type="button">{section}</button>
    </div>
  )
}

export default DropDown