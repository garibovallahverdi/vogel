import React from 'react'
import userImage from '../../assets/user4.jpg'
import './UsersMessage.css'
import {HiOutlineDotsVertical} from 'react-icons/hi'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
const UsersMessage = () => {
  const user = useSelector(state=>state.authReducer.user)
  const navigate= useNavigate()
  return (
    <div className='users-message'>
        <div className="users-image" onClick={()=>navigate('/profile/followuser/152')}>
            <img src={userImage} alt="" />
        </div>
        <div className="message-content" onClick={()=>navigate(`123`)}>
            <p className='message-send-user-name'>Anna Daniel</p>
            <p className='message-item' >Hello, How are ylou John</p>
        </div>
        <HiOutlineDotsVertical className='more-select'/>
      
    </div>
  )
}

export default UsersMessage
