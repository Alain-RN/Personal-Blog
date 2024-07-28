import Label from './Components/Label'
import Input from './Components/Input'
import Button from './Components/Button'
import React from 'react'
import { useState } from 'react'

function Signup({srcImageAddUser, viewIcon, hiddenIcon , onClick}) {

    const [view, setView] = useState(true)

    const hiddenOrView = () => {
        setView(!view)
    }

  return (
    <div className='text-white signupField d-flex justify-content-center signup-active'>
        {/* Add-Profil-Icon */}
        <div className='profilCircle d-flex align-items-center justify-content-center'>
            <img src={srcImageAddUser} alt="" className='AddUserIcon'/>
        </div>
        <div className='loginForm'>

            <h1 className='text-center'>Sign up</h1>

            <form action="" className='login my-3'>

                {/* User Name */}
                <Label label="User name"></Label>
                <Input type="text" className="form-control inputForm"></Input>

                {/* Email */}
                <Label label="Email"></Label>
                <Input type="email" className="form-control inputForm"></Input>

                {/* Password */}
                <Label label="Password"></Label>
                <div className='d-flex position-relative'>
                    <Input type={view?"password":"text"} className="form-control inputForm"></Input>
                    <div className='position-absolute d-flex align-items-center h-100 end-0'>
                        <img className='eye' alt='' onClick={hiddenOrView} src={(view)?viewIcon:hiddenIcon}/>
                    </div>
                </div>

                {/* SignupSubmit */}
                <Button value="Sign up" ></Button>

            </form>

                <p className='text-center my-3'>- or -</p>

                <p className='text-center endText'>Already have an account? <spam className="text-primary" onClick={onClick}>Sign in here</spam></p>

        </div>
    </div>
  )
}

export default Signup