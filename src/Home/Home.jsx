import React from 'react'
import LeftBar from './NavBar/LeftBar'
import NavBar  from './NavBar/NavBar'
import "./home.css"

// Icon
import Profil from './HomeAssets/person.png'
import Notification from './HomeAssets/notification-bell.png'
import Search from './HomeAssets/search-interface-symbol.png'
import Logo from './HomeAssets/burn.png'

function Home() {
  return (
    <div className='Home'>
        <NavBar 
          profil={Profil} 
          notification={Notification}
          search = {Search}
          logo= {Logo}
        ></NavBar>

        <LeftBar></LeftBar>
    </div>
  )
}

export default Home