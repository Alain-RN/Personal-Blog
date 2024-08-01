import React from 'react'
import LeftBar from './NavBar/LeftBar'
import NavBar  from './NavBar/NavBar'
import "./home.css"

function Home() {
  return (
    <div className='Home'>
        <NavBar></NavBar>
        <LeftBar></LeftBar>
    </div>
  )
}

export default Home