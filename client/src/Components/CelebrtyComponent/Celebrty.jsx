import React from 'react'
import {FaBirthdayCake} from 'react-icons/fa'
import {HiOutlineDotsVertical} from 'react-icons/hi'
import user1 from '../../assets/user3.jpg' 
import { useNavigate } from 'react-router-dom'
import './Celebrty.css'
const Celebrty = () => {
  const navigate= useNavigate()
  return (
   <div className="celebrty-component">
    <div className="celebrty-content" onClick={()=>navigate('/profile/followuser/152')}>
        <span className='type'>Celebrty</span>
        <p className='celebrty-message'>Happy birthday, Garib <FaBirthdayCake/></p>
        <span className='hashtag'>#HappyBirthdayGarib</span>
    </div>
    <div className="celebrty-image">
        <img src={user1} alt="" />
    </div>
    <HiOutlineDotsVertical className='more-select'/>

 </div>      
  )
}

export default Celebrty
