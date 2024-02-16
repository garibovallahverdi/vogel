import React from 'react'
import {Link, NavLink,useNavigate, useParams} from 'react-router-dom'
import './ProfileMenu.css'
import {IoSettingsSharp} from 'react-icons/io5'
import { useSelector } from 'react-redux'
const ProfileMenu = () => {
  const authUser = useSelector(state=>state.authReducer.user)
  const reciviedUser =useSelector(state=>state.reciviedUserReducer.reciviedUser)
  const navigate=  useNavigate()
  const path = useParams()
  console.log(path); 
  return (
    <div className='profile-menu'>
        <ul>
            <li><NavLink to=''>Timeline</NavLink> </li>
            <li><NavLink to='about'>About</NavLink></li>
            <li><NavLink to='photos'>Photos</NavLink></li>
            <li><NavLink to='likeposts'>Like Posts</NavLink></li>
        </ul>
     {reciviedUser?._id===authUser?._id?<IoSettingsSharp onClick={()=>navigate(`/profile/${path.user}/settings`)}/>:""}
    </div>
  )
}

export default ProfileMenu
