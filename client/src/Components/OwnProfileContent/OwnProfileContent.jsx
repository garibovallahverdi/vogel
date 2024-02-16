import React from 'react'
import { Outlet } from 'react-router-dom'
import ProfileMenu from '../../Components/ProfileMenu/ProfileMenu'
const OwnProfileContent = () => {
  return (
    <div className="own-profile-content">
<ProfileMenu/>

    <Outlet/> 
    </div>
  )
}



 
export default OwnProfileContent
