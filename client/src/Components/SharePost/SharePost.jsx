import React,{useState,useRef} from 'react'
import './SharePost.css'
import {IoImagesOutline} from 'react-icons/io5'
import {useDispatch,useSelector} from 'react-redux'
import Actions from '../../redux/actions'
import postLoading from '../../assets/postloading.gif'
const SharePost = () => {
  const dispatch =useDispatch()
  const user =useSelector(state=>state.authReducer.user)
  const post =useSelector(state=>state.postReducer)
  const [postImage,setPostImage] = useState({myFile:''})
  const [postText,setPostText] = useState('')
 const imageRef =useRef()
 const selectImage = ()=>{
  imageRef.current.click()
 }
 
 const handeFileUpload =async (e)=>{
  const file = e.target.files[0]
  const base64 = await  convertBase64(file)
  setPostImage({...postImage,myFile:base64})
 }



 const submitPost =(e)=>{
  e.preventDefault()
  const formData = {
    userId:user._id,
    userName:user.firstname + ' ' +user.lastname,
    userImage:user.image,
    post:postText,
    image:postImage.myFile

  }
  dispatch(Actions.PostActions.createPost(formData))
  if(!post.error){

  setPostImage({...postImage,myFile:""})
  setPostText('')
}
  // console.log(post);
 }
  return (
    <div className='share-post'>
      <form onSubmit={(e)=>submitPost(e)}>
        <div className='texarea-box'> 
       <textarea value={postText} name="sharetext" id="post-text" onChange={(e)=>setPostText(e.target.value)}></textarea>
         <button type='submit' >
          {post.loading?<img src={postLoading} alt=''/>
          :'Share'
          }

         </button>
       </div>
       <input  onChange={(e)=>handeFileUpload(e)} type="file" accept='.jpeg, .png, .jpg' id='image-upload' ref={imageRef} name='image' style={{display:'none'}}/> 
       <input type="file"  name='video'style={{display:'none'}}/>
       <div className='file-icons'>
       <IoImagesOutline  onClick={selectImage}/>
  
        </div>
      </form>
      {postImage.myFile?<div className='selected-img'>
        <img src={postImage.myFile} alt="" />
       </div>:''
     }
     </div>
  )
}
export default SharePost
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




