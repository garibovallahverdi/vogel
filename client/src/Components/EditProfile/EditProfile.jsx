import React,{useRef,useState} from 'react'
import './EditProfile.css'
import { useDispatch,useSelector } from 'react-redux'
import Actions from '../../redux/actions'
import loadingGif from '../../assets/loadingall.gif'
const EditProfile = () => {
  const [profileImg,setProfileimg] = useState({image:''})
  const authUser = useSelector(state=>state.authReducer.user)
  const imgLoading = useSelector(state=>state.authReducer.imgLoading)
  const dispatch =useDispatch()
  const changeImageRef = useRef()

 

const uploadImage = async (e)=>{
  const file = e.target.files[0]

  const base64 = await convertBase64(file)
  setProfileimg({...profileImg,image:base64})
}

const selectImage= ()=>{
  changeImageRef.current.click()
}


  const changeProfile =async()=>{
    if(!profileImg.image){
      return console.log('NOt');
    }
    const id =authUser._id
    dispatch(Actions.AuthActions.changeImage(id,profileImg))
  }
  return (
    <div className='edit-profile-page'>
      <div className="edited-boxes">
         <div className="edit-profile-image">
          <img src={imgLoading===true? loadingGif:authUser.image} alt="" onClick={selectImage} />
          <input type="file" style={{display:'none'}}onChange={(e)=>uploadImage(e)} ref={changeImageRef } />
         </div>
        <div className='edit-box'>

         <button className='save save-surname' onClick={changeProfile}>Save</button>
         </div>
      </div>
      <div className="edited-boxes">
        <p>Edit info</p>
        <div className="main-info">
            <label htmlFor='name'>Name</label>
           <div className="edit-box edit-name">
            <input type="text" name='name' placeholder='Edit Your Name' />
            <button className='save save-name'>Save</button>
           </div>
           <label htmlFor='surname'>Surname</label>
           <div className="edit-box edit-surname">
            <input type="text" name='surname' placeholder='Edit Your Surname' />
            <button className='save save-surname'>Save</button>
           </div>
         <label htmlFor='username'>Username</label>
           <div className="edit-box edit-username">
            <input type="text" name='username' placeholder='Edit Your Username' />
            <button className='save save-username'>Save</button>
           </div>
        </div>
      </div>
      <div className="edited-boxes">
        <p>Edit Password</p>
        <div className="main-info">
         <div className="edit-box edit-password">
            <div className='password-block'>
             <label htmlFor="oldpass">Old Password</label>
            <input type="text" name='oldpass' placeholder='Old Password' />
            <label htmlFor="newpass">New Password</label>

            <input type="text" placeholder='New Password' />
            <label htmlFor="confirmpass">Confirm Password</label>

            <input type="text" placeholder='Confirm Password' />
            </div>
            <button className='save save-password'>Save</button>
         </div>
         </div>
        </div>          
    </div>
  )
}


export default EditProfile

function convertBase64 (file){
  return new Promise((resolve,reject)=>{
    const fileReader = new FileReader()
    fileReader.readAsDataURL(file)
    fileReader.onload = ()=>{
      resolve(fileReader.result)
    }
    fileReader.onerror=(error)=>{
        reject(error)
    }
  })

}