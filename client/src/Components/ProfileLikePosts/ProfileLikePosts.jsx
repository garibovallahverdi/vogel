import React from 'react'
import Post from '../PostComponent/Post'
import './ProfileLikePosts.css'
const ProfileLikePosts = () => {
  return (
    <div className='like-posts'>
       <Post/>
       <Post/>
       <Post/>
       <Post/>
       <Post/>
    </div>
  )
}

export default ProfileLikePosts
