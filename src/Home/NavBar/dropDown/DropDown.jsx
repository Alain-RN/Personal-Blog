

function DropDown({ section, value}) {
  return (
    <div className='dropDown bg-dark text-primary' style={{transform: value}}>
        <h1>{section}</h1>
        {
          (section === 'Notification')?
          <div className="text-center">
              Notification
          </div>
          :
          <div className="text-center">
              Profile
          </div>
        }
    </div>
  )
}

export default DropDown