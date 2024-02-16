import React from 'react'
import logo from '../../assets/logo.png'
import {IoCompass,IoHomeSharp,IoLanguage,IoPaperPlaneSharp} from 'react-icons/io5'
import {FaUserCircle} from 'react-icons/fa'
import {IoIosLogOut,IoIosNotifications} from 'react-icons/io'
import {HiFire} from 'react-icons/hi'
import './SidebarMenu.css'
import { NavLink } from 'react-router-dom'
import Actions from '../../redux/actions'
import {useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
const SideBarMenu = ({openMenu,setOpenMenu}) => {
  const user = useSelector(state=>state.authReducer.user)
  const dispatch=useDispatch()
  const navigate =useNavigate()
  const logout=()=>{
   dispatch(Actions.AuthActions.logout(navigate))
  }
  return (
    <div className={openMenu?' sidebar open-sidebar':'sidebar'}>
       <div className='logo'>
        <img src={logo} alt="" />
       </div>
        <div className="sidebar-menu">
            <ul className='menu'>
                <li onClick={()=>setOpenMenu(prev=>!prev)}> <NavLink to='/'><IoHomeSharp/> <span>FEED</span></NavLink></li>
               <li className='prof-menu' onClick={()=>setOpenMenu(prev=>!prev)}> <NavLink to={'profile/'+user._id}> <img src={user.image} alt="" /> <span>PROFILE</span></NavLink></li>
                <li onClick={()=>setOpenMenu(prev=>!prev)}> <NavLink to={'/messages/'+user._id}><IoPaperPlaneSharp/> <span>Message</span></NavLink></li>
                <li onClick={()=>setOpenMenu(prev=>!prev)}> <NavLink to='/notifications'><IoIosNotifications/> <span>NOTIFICATIONS</span></NavLink></li>
                <li onClick={()=>setOpenMenu(prev=>!prev)}><IoCompass/> <span>EXPLORE</span></li>
                <li onClick={()=>setOpenMenu(prev=>!prev)}><IoLanguage/> <span>LANGUAGE</span></li>
                <li onClick={logout}><IoIosLogOut/> <span>LOGOUT</span></li>
                <li onClick={()=>setOpenMenu(prev=>!prev)}><HiFire/> <span>TRENDING</span></li>
            </ul>
            <button className='signin'>{user.firstname}</button>
        </div>
    </div>
  )
}

export default SideBarMenu
