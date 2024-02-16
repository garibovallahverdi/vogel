import React from 'react'
import RegisterForm from '../../Components/RegisterForm/RegisterForm'
import './Register.css'
import './RegisterResponsive.css'
import registerRightImg from '../../assets/register.png'

const Register = () => {
  return (
    <div className='register'>
        <div className="register-left">
            <img src={registerRightImg} alt="" />
        </div>

        <div className="register-right">
            <RegisterForm />
        </div>
      
    </div>
  )
}

export default Register
