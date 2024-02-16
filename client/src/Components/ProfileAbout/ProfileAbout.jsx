import React from 'react'
import './ProfileAbout.css'
import { useSelector } from 'react-redux'
const ProfileAbout = () => {
  const reciviedUser =useSelector(state=>state.reciviedUserReducer.reciviedUser)

  return (
    <div className='profile-about'>
        <div className="about-info">
          <div className="about-name">
            <p>Full Name :</p> <span>{reciviedUser?.firstname +' ' + reciviedUser?.lastname}</span>
          </div>
          <div className="about-birthday">
            <p> Birthday:</p> <span>{reciviedUser?.birthday}</span>
          </div>
          <div className="about-relationship">
            <p>Relationship :</p> <span>{reciviedUser?.relationship?reciviedUser?.relationship:'Write something'}</span>
          </div>
          <div className="about-work">
            <p>Work At</p> <span>Meta</span>
          </div>
          
        </div>

    </div>
  )
}

export default ProfileAbout
