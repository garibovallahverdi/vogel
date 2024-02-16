import React,{useState,useEffect} from 'react'
import FollowSliderUser from '../FollowSliderUser/FollowSliderUser'
import './FollowPeopleSlider.css'
import {useSelector , useDispatch} from 'react-redux'
const FollowPeopleSlider = () => {
  const users = useSelector(state=>state.userReducer.users)
console.log(users);
  return (
    <div className='follow-slider'>
        <p>Follow People</p>
         <div className='main-carousel'> 
            {users===null || !users?<p>Loading..</p>
            : users.map((item)=>(
            <FollowSliderUser key={item._id} name={item.firstname} userId={item._id} image={item.image}/>

            ))}

       </div>
    </div>
  )
}

export default FollowPeopleSlider
