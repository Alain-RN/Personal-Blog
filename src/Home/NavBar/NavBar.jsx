import React from 'react'

function NavBar() {
  return (
    
    <div className='Navbar bg-dark text-primary d-flex align-items-center'>
      <div className='logo cercle'>

      </div>
      
      <div className="logo_Search">
        <form action="">
            <input type="search" name="" id="" className='search form-control'/>
        </form>
      </div>

      <div className='p_n d-flex'>
        <div className="profil cercle">
            P
        </div>
        <div className="notification cercle">
            N
        </div>
      </div>

    </div>
  )
}

export default NavBar