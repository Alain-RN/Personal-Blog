import LeftBar from './NavBar/LeftBar'
import NavBar  from './NavBar/NavBar'
import "./home.css"
import { useState } from 'react'

// Icon
import Profil from './HomeAssets/person.png'
import Notification from './HomeAssets/notification-bell.png'
import Search from './HomeAssets/search-interface-symbol.png'
import Logo from './HomeAssets/burn.png'
import Down from './HomeAssets/down.png'




function Home() {

  const [dropDownProfil, setDropDownProfil] = useState(false)
  const [dropDownNotif, setDropDownNotif] = useState(false)

  const handleDropDownProfil = () => {
    setDropDownProfil(!dropDownProfil)
    setDropDownNotif(false)
  }
  const handleDropDownNotif = () => {
    setDropDownNotif(!dropDownNotif)
    setDropDownProfil(false)
  }


  const handleDropDownClose = () => {
    setDropDownNotif(false)
    setDropDownProfil(false)
  }
  return (
    <div className='Home' >
        <NavBar 
          dropDownProfil = {dropDownProfil}
          dropDownNotif ={dropDownNotif}
          handleDropDownNotif={handleDropDownNotif}
          handleDropDownProfil ={handleDropDownProfil}
          profil={Profil} 
          notification={Notification}
          search = {Search}
          logo= {Logo}
          down = {Down}

        ></NavBar>
        <div className='d-flex HomeBody'>
          <LeftBar></LeftBar>
        </div>

    </div>
  )
}

export default Home