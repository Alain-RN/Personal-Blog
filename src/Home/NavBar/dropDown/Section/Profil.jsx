import React from 'react'
import Settings from "../dropdownAssets/settings.png"
import LightMode from "../dropdownAssets/sun.png"
import LogOut from "../dropdownAssets/logout.png"

function Profil({ userProfil }) {
    return (
        <div className='px-4 py-3'>
            <div className='d-flex my-2 gap-3'>
                <img src={userProfil} alt="" className='cercle' />
                <div className="userNameAndEmail text-white">
                    <h6 className="userName">Username</h6>
                    <h6 className="Email text-secondary">Exemple@gmail.com</h6>
                </div>
            </div>
            <hr className='text-secondary'/>
            <div className='profilBtn text-secondary my-3 mx-1'>
                <img src={Settings} alt="" className='rotateSettings iconPro'/>
                <h6 className='d-inline text-white'>Profil Settings</h6>
            </div>
            <div className='profilBtn text-secondary my-3 mx-1 '>
                <img src={LightMode} alt="" className='iconPro'/>
                <h6 className='d-inline text-white'>Light Mode</h6>
            </div>
            <hr className='text-secondary' />
            <div className='profilBtn text-secondary my-3 mx-1'>
                <img src={LogOut} alt="" className='iconPro' />
                <h6 className='d-inline text-white'>Light Mode</h6>
            </div>

        </div>
    )
}

export default Profil