import React from 'react'
import userimg  from '../../assets/user2.jpg'
import {RiDeleteBinLine} from 'react-icons/ri'
const NotificationsItem = () => {
  return (
    <div className='notifications-item' >
        <div className="notification-user-image">
            <img src={userimg} alt="" />
        </div>
   <div className='notifications-content'>
    <p className='notification-message'>
      Sam likeyour post
    </p>
    <span className='notification-time'>1 hour age</span>
   </div>
   <RiDeleteBinLine className='remove-notifications'/>

      
    </div>
  )
}

export default NotificationsItem
