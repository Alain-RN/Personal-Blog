import LeftBar from './NavBar/LeftBar'
import NavBar from './NavBar/NavBar'
import DropDown from './NavBar/dropDown/DropDown'
import Post from './NavBar/Post'
import "./home.css"
import { useState } from 'react'

// Icon
import Profil from './HomeAssets/person.png'
import Notification from './HomeAssets/notification-bell.png'
import Search from './HomeAssets/search-interface-symbol.png'
import Logo from './HomeAssets/burn.png'
import Down from './HomeAssets/down.png'
import up from './HomeAssets/up.png'




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

  const handle = { 'N': handleDDNotif, 'P': handleDDProfil, 'C': handleDDClose }

  return (
    <div className='Home' >

      <NavBar

        onClickN={handle['N']}
        onClickP={handle['P']}
        onClickC={handle['C']}
        dDProfil={dDProfil}

        profil={Profil}
        notification={Notification}
        search={Search}
        logo={Logo}
        down={Down}
        up={up}

      ></NavBar>

      <div className='d-flex HomeBody' >

        <div className='dropdownContainer'>            
          <DropDown section="Notification" value={dDNotif ? 'translateY(0px)' : 'translateY(-104%)'} />

          <DropDown section="Profile" value={dDProfil ? 'translateY(0px)' : 'translateY(-104%)'} />
        </div>

        <div className='LeftandPost ' onClick={handle['C']}>
          <LeftBar></LeftBar>
          <Post></Post>
        </div>

      </div>

    </div>
  )

}
export default Home