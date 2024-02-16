import React,{useEffect,useState} from 'react'
import Post from '../PostComponent/Post'
import { useSelector,useDispatch } from 'react-redux'
import './TimeLine.css'
import Actions from '../../redux/actions'
import loadingGif from '../../assets/loadingall.gif'
import { useNavigate, useParams } from 'react-router-dom'
const TimeLine = () => {
  const posts =useSelector(state=>state.postReducer)
  const dispatch =useDispatch()
  const navigate= useNavigate()

   const {user}=useParams() 
  useEffect(() => {
    (
      async ()=>{
        dispatch(Actions.PostActions.getPostsById(user))
      }
   )()
      
   }, [user])
   console.log(posts.posts);
  if(posts.loading===true || posts.posts===null){
    return <img className='loading' src={loadingGif} alt=''/>
  }
  return (
    <div className='time-line'>
      {posts.posts===null?'Start follow new People': 
       
        posts.loading===true?<p>Loading...</p>
       :posts.posts.map(item=>(
        <Post key={item._id} userID={item.userId} post={item.post} image={item.image} userImage={item.userImage} userName={item.userName} createdAt={item.createdAt} postLikes={item.postLikes}  _id={item._id} postComments={item.postComments} />
        ))
       
      }
    </div>
  )
}

export default TimeLine
