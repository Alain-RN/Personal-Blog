import React from 'react'
import Profil from './Profil/Profil'
import NavBar  from './NavBar/NavBar'
import "./home.css"

function Home() {
  return (
    <div className='d-flex'>
        <NavBar></NavBar>
        <Profil></Profil>
    </div>
  )
}

export default Home