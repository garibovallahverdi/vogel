import React from 'react'
import {HiOutlineDotsVertical} from 'react-icons/hi'
import './Events.css'
import { useNavigate } from 'react-router-dom'
const Events = () => {
  const navigate = useNavigate()
  return (
    <div className='new-event'>
       <div className="event-content">
         <span className='eventer-name' onClick={()=>navigate('/profile/followuser/152')}>@matthev</span>
          <span className='event-message'>Write comment to your post</span>
          <span className='event-time'>55 minute ago</span>
       </div>
    <HiOutlineDotsVertical className='more-select'/>

    </div>
  )
}

export default Events
