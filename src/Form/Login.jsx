import Label from './Components/Label'
import Input from './Components/Input'
import { useState } from 'react'



function Login({srcImage, viewIcon, hiddenIcon}) {

    const [view, setView] = useState(true)

    const hiddenOrView = () => {
        setView(!view)
    }
  return (
    <div className='text-white loginField d-flex justify-content-center'>

        {/* Profil-Icon */}
        <div className='profilCircle d-flex align-items-center justify-content-center'>
            <img src={srcImage} alt="" className='w-75'/>
        </div>

        {/* Login-Form */}
        <div className='loginForm'>

            <h1 className='text-center'>Login</h1>

            <form action="" className='login my-3'>

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

                {/* LoginSubmit */}
                <div className='d-flex my-4 justify-content-center'>
                    <input 
                        type="submit" 
                        value="login" 
                        className='button btn text-white bg-primary'
                    />
                </div>
            </form>

                <p className='text-center my-3'>- or -</p>

                <p className='text-center my-1'>Create an <spam className="text-primary ">Account</spam></p>

        </div>
    </div>
  )
}

export default Login