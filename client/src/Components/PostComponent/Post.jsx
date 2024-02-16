import React,{useState,useEffect} from 'react'
import user from '../../assets/user4.jpg'
import {HiOutlineDotsVertical} from 'react-icons/hi'
import {BsShareFill} from 'react-icons/bs'
import {MdComment} from 'react-icons/md'
import {AiFillLike} from 'react-icons/ai'
import {TbRosetteFilled} from 'react-icons/tb'
import './Post.css'
import Comments from '../Comments/Comments'
import { useNavigate } from 'react-router-dom'
import {useSelector,dispatch, useDispatch} from 'react-redux'
import Actions from '../../redux/actions'
import Moment from 'moment'

const Post = ({_id,post,image,userImage,userID,userName,createdAt,postLikes,postComments}) => {

  const user= useSelector(state=>state.authReducer.user)
  const allUsers = useSelector(state=>state.userReducer.user)
  const [showComments,setShowComments] =useState(false)
  const [userPost,setUserPost] =useState(null)
  const navigate = useNavigate()
  const [settingsOpen,setSettingsOpen] = useState(false)
  const [commentsArr,setCommentsArr] =useState(postComments)
  const [likeArr,setLikeArr]= useState(postLikes)
  const dispatch =useDispatch()
  const [likeData,setLikeData]=useState({postId:_id})
  const [deletePostData,setDeletePostData] =useState({id:user._id,postId:_id} )


const deletePost= async()=>{
  // setDeletePostData({...deletePost,id:user._id,postId:_id})
  console.log(deletePostData);
     dispatch(Actions.PostActions.deletePost(deletePostData))
     setSettingsOpen(false)
    
}

  const likeDislikePost =(_id)=>{
  console.log(postComments);
    const userId =user._id
    if(likeArr.includes(userId)){
      setLikeArr(state=>state.filter(e=>e!==userId))
    }else {
      setLikeArr([...likeArr,userId])
  }
  dispatch(Actions.PostActions.likeDislikePost(likeData,userId))
}
  return (
    <div className='post'>
        <div className="user-post-content">
            <div className="user-head">
                <p className='post-user-name'>{userName} /<span onClick={()=>navigate(`/profile/${userID}`)}>@{userName.split(' ')[1].toLowerCase()}</span></p>
                <p className='more-icon'><span className='share-time'>{Moment(createdAt).format('DD MMMM  hh:mm:ss')}</span><div className='post-settings'><HiOutlineDotsVertical onClick={()=>setSettingsOpen(prev=>!prev)} className='more-select'/> 
                <ul style={{display:settingsOpen?'flex':'none'}}>
                  <li>Rename</li>
                  <li>Share</li>
                  <li onClick={deletePost}>Delete</li> 
                </ul>
                </div></p>
            </div>

            <div className="post-detail">
              <p>{post}</p>
              {image &&<div className="post-image">  <img  src={image} alt="" /></div>}
            </div>
            <div className="reaction-component">
               <span> <AiFillLike style={{color:likeArr?.includes(user._id)?'blue':'gray'}} onClick={()=>likeDislikePost(_id)}  /> {likeArr?.length} likes</span> <span onClick={()=>setShowComments(prev=>!prev)}><MdComment /> {commentsArr.length} Comments</span> <TbRosetteFilled/> <BsShareFill/>

            </div>
          <Comments id={_id}commentsArr={commentsArr} setCommentsArr={setCommentsArr}/>
          <div className="comments-conteiner">
   
            {!showComments?'':
              commentsArr? commentsArr.sort((a,b)=>{return b.date-a.date}).map(item=>(
                <CommentComponent authuser={user} comment={item}/>
              )):''
            }

          </div>
        </div> 
      
          
    </div>
  )
}

export default Post

const CommentComponent =({authUser,comment})=>{


  return (
<div className="comment-box">
             <div className="comment-content">
                <div className="comment-username">
                  <p>{comment?.userName}</p>
                    <span>{Moment(comment?.date).format('DD MMM YY h a:mm')}</span>
                </div>
                <div className="comment-text">
                   <p>{comment?.comment}</p>
                  <HiOutlineDotsVertical className='more-select'/>
                </div>
             </div>
          </div>
  )
}
