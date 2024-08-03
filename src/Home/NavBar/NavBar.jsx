import React, { useState } from 'react'
import DropDown from './dropDown/DropDown'

function NavBar({profil ,notification ,search ,logo ,down, onClickP, onClickN, onClickC}) {


  return (
    <div  className='Navbar bg-dark text-primary d-flex align-items-center' >
      
      {/* Logo and Search Bar */}
      <div className="logo_search d-flex align-items-center" onClick={onClickC}>
        
        {/* Logo */}
        <div className='logo cercle d-flex align-items-center justify-content-center'>
          <img src={logo} alt="" className='w-75'/>
        </div>

        {/* Search Bar */}
        <form action="">
          <div className='searchBar d-flex align-items-center'>
            <img src={search} alt="" className='searchIcon w-20' />
            <input type="search" name="" className='search form-control'/>
          </div>
        </form>

      </div>

      {/* Profil and Notification */} 
      <div className='p_n d-flex'>

        <div className='dropDownNotification'>

          <div className="notification cercle d-flex align-items-center justify-content-center" onClick={onClickN}>
              <img src={notification} alt="" className='w-50'/>
          </div>

        </div>

        <div className='dropDownProfil'>

          <div className="profil cercle d-flex align-items-center justify-content-center" onClick={onClickP}>
              <img src={profil} alt="" className='profil w-75'/>
              <img src= {down} alt="" className='down'/>
          </div>

        </div>

      </div>

    </div>
  )
}

export default NavBar