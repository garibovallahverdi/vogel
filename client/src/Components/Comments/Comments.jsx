import React,{useState} from 'react'
import user from '../../assets/user1.jpg'
import {MdSend} from 'react-icons/md'
import './Comments.css'
import { useSelector,useDispatch } from 'react-redux'
import Actions from '../../redux/actions'
const Comments = ({commentsArr,setCommentsArr,id}) => {
  const authUser = useSelector(state=>state.authReducer.user)
  const postReducer =useSelector(state=>state.postReducer)
  const dispatch= useDispatch()
  const [commentData,setCommentData] =useState({date:Date.now(),userImage:authUser.image,userName:authUser.firstname +' ' + authUser.lastname,commentUserId:authUser._id,postId:id,comment:''})
  const writeComment= ()=>{
  
    dispatch(Actions.PostActions.createComment(commentData))
    if(postReducer.error===false){
    setCommentsArr([commentData,...commentsArr])
    setCommentData({...commentData,comment:''})
    
    }else {
      alert('Comment does not added')
    }

  } 
  return (
    <div className='comments'>
      <div className="user-pic">
        <img src={authUser.image} alt="" />
      </div>
       <div className="comment-input">
        <input value={commentData.comment} type="text" onChange={(e)=>setCommentData({...commentData,comment:e.target.value})} /> <MdSend onClick={writeComment}/>
       </div>
    </div>
  )
}

export default Comments
