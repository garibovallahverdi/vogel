import React ,{useState}from 'react'
import './LoginForm.css'
import './LoginFormResponsive.css'
import {FcGoogle} from 'react-icons/fc'
import {MdOutlineFacebook} from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'
import Actions from '../../redux/actions'
const LoginForm = () => {
  const [formData,setFormData] = useState({email:'',password:''})
  const navigate = useNavigate()
  const errorData = useSelector(state=>state.authReducer)
  const dispatch =useDispatch()
  const onChanegeInputs = (e)=> {
    setFormData({...formData,[e.target.name]:e.target.value})

    console.log(formData);
  }
  const  onFormSubmit= (e)=>{
    e.preventDefault()
    dispatch(Actions.AuthActions.login(formData,navigate))
   
  }
  return (
    <div className='login-form'>
       <h1>Login into your account</h1>
       <form className='form' onSubmit={(e)=>onFormSubmit(e)}>
        <input onChange={(e)=>onChanegeInputs(e)} type="email" name='email' placeholder='Your Email Address'  />
        <input onChange={(e)=>onChanegeInputs(e)} type="password" name='password' placeholder='Password'  />
      {errorData?.error? <p style={{color:'red',fontSize:'11px',marginTop:'-10px'}}>{errorData?.errorMsg.response.data.message}</p>:''}
  
         <div>
            <input type="checkbox" id='remmemberMe' name='remmemberMe' />
            <label htmlFor="remmemberMe" style={{color:' #adb5bd'}}>Remember Me</label>
        </div>
        <button className='loginBtn btn'>Login</button>
       </form>
       <span style={{marginTop:'0.5rem'}}>Dont have account <span style={{color:'blue',fontWeight:'500',cursor:'pointer'}} onClick={()=>navigate('/register')}>Register</span></span>

       <div>
          
          <div className='googleAuth'>
        <span>Or, Sign in with your social account</span>
            <div>
                <FcGoogle className='googleIcon'/>
                <p>Sign in with Google</p>
            </div>
            <div>
                <MdOutlineFacebook className='facebookIcon'/>
                <p>Sign in with Facebook</p>

            </div>
          </div>
       </div>
    </div>
  )
}



export default LoginForm
