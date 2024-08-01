import React, { useState } from 'react'
import LeftBar from './NavBar/LeftBar'
import NavBar  from './NavBar/NavBar'
import DropDown from './NavBar/dropDown/DropDown'
import "./home.css"

// Icon
import Profil from './HomeAssets/person.png'
import Notification from './HomeAssets/notification-bell.png'
import Search from './HomeAssets/search-interface-symbol.png'
import Logo from './HomeAssets/burn.png'
import Down from './HomeAssets/down.png'


function Home() {

  return (
    <div className='Home'>
        <NavBar 

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