import React from 'react'
import FollowPeopleSlider from '../../FollowPeopleSlider/FollowPeopleSlider'
import Post from '../../PostComponent/Post'
import SharePost from '../../SharePost/SharePost'
import user from '../../../assets/user3.jpg'
import './Tranding.css'

const Tranding = () => {
  return (
    <div className="tranding-content">
        <SharePost/>
         
         <Post/>
         <Post image={user}/>
         <Post/>
      </div>
  )
}

export default Tranding
