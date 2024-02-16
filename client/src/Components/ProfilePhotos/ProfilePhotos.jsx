import React from 'react'
import photo from '../../assets/user1.jpg'
import './ProfilePhotos.css'
import { useSelector } from 'react-redux'
const ProfilePhotos = () => {
  const postReducer =useSelector(state=>state.postReducer.posts)
  return (
    <div className='profile-photos'>

      {
       postReducer!==null? postReducer.map(item=>(
          item?.image?<PhotoComponent image={item.image}/>:''
        
        )):"Dont have any image"
      }
       <PhotoComponent/>
       <PhotoComponent/>
       <PhotoComponent/>
       <PhotoComponent/>
       <PhotoComponent/>
       <PhotoComponent/>
       <PhotoComponent/>
       <PhotoComponent/>
    </div>
  )
}

const PhotoComponent =({image})=>{

    return (
        <div className='photos'>
            <img src={image} alt="" />
        </div>
    )
}

export default ProfilePhotos
