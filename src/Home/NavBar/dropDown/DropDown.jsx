import Notification from "./Section/Notification"
import Profil from "./Section/Profil"
import User from "./dropdownAssets/user.png"


function DropDown({ section, value }) {
  return (
    <div className='dropDown bg-dark' style={{ transform: value }}>
      {
        (section === 'Notification') ?
          <div>
            <Notification ></Notification>
          </div>
          :
          <div>
            <Profil userProfil={User}></Profil>
          </div>
      }
    </div>
  )
}

export default DropDown