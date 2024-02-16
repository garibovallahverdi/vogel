import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import './RegisterForm.css'
import './RegisterFormResponsive.css'
import {useDispatch} from 'react-redux'
import Actions from '../../redux/actions'
const RegisterForm = () => {
  const navigate= useNavigate()
  const dispatch =useDispatch()
  const [alert,setAlert] =useState(false)
  const [formData,setFormData] = useState({
    firstname:"",lastname:'',email:'',password:'',confirmpassword:"",birthday:''
  })

  const onInputChange = (e)=>{
    setFormData({...formData,[e.target.name]:e.target.value})
    
  }
  const submitRegister = (e)=>{
    e.preventDefault()
    if(formData.password != formData.confirmpassword){
     return setAlert(true)
   }
     setAlert(false)
     dispatch(Actions.AuthActions.register(formData,navigate))
    
  }
  return (
    <div className='register-form'>
       <h1>Create your account</h1>
       <form className='form' onSubmit={submitRegister}>
        <input onChange={onInputChange} type="text" name='firstname' placeholder='Your First Name' />
        <input onChange={onInputChange} type="text" name='lastname' placeholder='Your Last Name' />
        <input onChange={onInputChange} type="email" name='email' placeholder='Your Email Address'  />
        <input onChange={onInputChange} type="password" name='password' placeholder='Password'  />
        <input style={{borderColor:alert?'red':'gray'}} onChange={onInputChange} type="password" name='confirmpassword' placeholder='Confirm Password'  />
        <input onChange={onInputChange} type="date" name='birthday'  />
         
         <div>
            <input type="checkbox" id='accept' name='accept' />
            <label htmlFor="accept" style={{color:' #adb5bd'}}>Accept Term and Conditions</label>
        </div>
        <button className='registerBtn btn'>Register</button>
       </form>
       <p style={{marginTop:'0.5rem'}}>Already have account <span style={{color:'blue',fontWeight:'500',cursor:'pointer'}} onClick={()=>navigate('/')}>Login</span></p>
    </div>
  )
}



export default RegisterForm

