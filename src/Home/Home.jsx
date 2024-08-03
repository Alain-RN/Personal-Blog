import LeftBar from './NavBar/LeftBar'
import NavBar  from './NavBar/NavBar'
import DropDown from './NavBar/dropDown/DropDown'
import "./home.css"
import { useState } from 'react'

// Icon
import Profil from './HomeAssets/person.png'
import Notification from './HomeAssets/notification-bell.png'
import Search from './HomeAssets/search-interface-symbol.png'
import Logo from './HomeAssets/burn.png'
import Down from './HomeAssets/down.png'




function Home() {

  const [dDProfil, setDDProfil] = useState(false)
  const [dDNotif, setDDNotif] = useState(false)

  const handleDDProfil = () => {
    setDDProfil(!dDProfil)
    setDDNotif(false)
  }

  const handleDDNotif = () => {
    setDDNotif(!dDNotif)
    setDDProfil(false)
  }

  const handleDDClose = () => {
    setDDNotif(false)
    setDDProfil(false)
  }
   
  const handle = {'N' : handleDDNotif, 'P' : handleDDProfil, 'C' : handleDDClose}


  return (
    <div className='Home' >

        <NavBar 

          onClickN={handle['N']}
          onClickP={handle['P']}
          onClickC={handle['C']}

          profil={Profil} 
          notification={Notification}
          search = {Search}
          logo= {Logo}
          down = {Down}

        ></NavBar>
        <div className='d-flex HomeBody' >
          {
            dDNotif && <DropDown section="Notification"/>
          }
          {
            dDProfil && <DropDown section="Profile"/>
          }
          <div className='LeftCenter' onClick={handle['C']}>
            <LeftBar></LeftBar>

          </div>
        </div>

    </div>
  )

}
export default Home