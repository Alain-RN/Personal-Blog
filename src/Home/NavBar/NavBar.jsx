import React, { useState } from 'react'
import DropDown from './dropDown/DropDown'

function NavBar({profil ,notification ,search ,logo ,down,handleDropDownClose, handleDropDownNotif,handleDropDownProfil , dropDownProfil, dropDownNotif}) {


  return (
    <div>
    <div onClick={handleDropDownClose}  className='Navbar bg-dark text-primary d-flex align-items-center'>
      
      {/* Logo and Search Bar */}
      <div className="logo_search d-flex align-items-center">
        
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

         <div onClick={handleDropDownNotif} className="notification cercle d-flex align-items-center justify-content-center">
              <img src={notification} alt="" className='w-50'/>
          </div>

          <DropDown section="Notification" style={!dropDownNotif?{transform:'translateY(-502px)',zIndex: "-1"}:{transform:'translateY(6px)'}}/>

        </div>

        <div className='dropDownProfil'>

          <div onClick={handleDropDownProfil} className="profil cercle d-flex align-items-center justify-content-center">
              <img src={profil} alt="" className='profil w-75'/>
              <img src= {down} alt="" className='down'/>
          </div>

          <DropDown section="Profile" style={!dropDownProfil?{transform:'translateY(-502px)',zIndex: "-1"}:{transform:'translateY(6px)'}}/>

        </div>

      </div>

    </div>
    
    </div>
  )
}

export default NavBar