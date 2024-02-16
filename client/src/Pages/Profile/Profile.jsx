import React from 'react'
import { Outlet  } from 'react-router-dom'
import HistoryBar from '../../Components/HistoryBar/HistoryBar'
import User from '../../Components/UserCompenent/User'
import './Profile.css'
const Profile = () => {
  return (
    <div className='Profile-page'>
        <HistoryBar location='Sayah Jordan'/>
      
<User />
         <Outlet/>

    </div>

  )
}

export default Profile
