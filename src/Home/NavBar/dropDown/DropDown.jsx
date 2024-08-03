

function DropDown({ section, value}) {
  return (
    <div className='dropDown bg-dark text-primary' style={{transform: value}}>
        <h1>{section}</h1>
        <button type="button">{section}</button>
    </div>
  )
}

export default DropDown