import React,{useState} from 'react'
import './ProfileSettings.css'
const ProfileSettings = () => {
    const [darkMod,setDarkMod]= useState(false)
    const [hidddenMessage,setHiddenMessage]= useState(false)
  return (
    <div className='profile-settings'>

       <div className='settings-box'>
         <p>Dark Mod</p>
         <div style={{backgroundColor:darkMod?'green':''}} className='checkbox' onClick={()=>setDarkMod(prev=>!prev)}>
            <div style={{transform:darkMod?'translateX(160%)':'translateX(0)'}}></div>
         </div>
       </div>


       <div className='settings-box'>
         <p> HIdden Message from unfollow users</p>
         <div style={{backgroundColor:hidddenMessage?'green':''}} className='checkbox' onClick={()=>setHiddenMessage(prev=>!prev)}>
            <div style={{transform:hidddenMessage?'translateX(160%)':'translateX(0)'}}></div>
         </div>
       </div>

    </div>
  )
}



export default ProfileSettings
