import React from 'react'
import './login.css'
import './LoginResponsive.css'
import loginRightImg from '../../assets/login.jpg'
import LoginForm from '../../Components/LoginForm/LoginForm'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
const Login = () => {

  return (
    <div className='login'>
        <div className="login-left">
            <img src={loginRightImg} alt="" />
        </div>
        <div className="login-right">
          <LoginForm/>
        </div>
    </div>
  )
}

export default Login
