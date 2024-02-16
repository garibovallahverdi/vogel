import React,{useEffect,useState} from 'react'
import FollowPeopleSlider from '../../FollowPeopleSlider/FollowPeopleSlider'
import Post from '../../PostComponent/Post'
import SharePost from '../../SharePost/SharePost'
import user from '../../../assets/user3.jpg'
import { useSelector,useDispatch } from 'react-redux'
import Actions from '../../../redux/actions'
import './Feeds.css'
import loadingGif from '../../../assets/loadingall.gif'
import { useNavigate } from 'react-router-dom'
 
const Feeds = () => {
  const timeLines = useSelector(state=>state.getTimeLineReducer.timeLinePosts)
  const user = useSelector(state=>state.authReducer.user)
  const [id,setId] = useState(user._id)
  (timeLines);

  const dispatch =useDispatch()
const navigate =useNavigate()

  useEffect(() => {
    (
      async ()=>{
        dispatch(Actions.PostActions.getTimeLine(id))
      }
   )()
     
   }, [])
  return (
    <div className="feed-content">
        <SharePost/>
        <FollowPeopleSlider/>
         
         {timeLines===null?<img className='loading' src={loadingGif} alt=''/>:timeLines.map((item)=>(
                 <Post key={item._id} userID={item.userId} post={item.post} image={item.image} userImage={item.userImage} userName={item.userName} createdAt={item.createdAt} postLikes={item.postLikes}  _id={item._id} postComments={item.postComments} />

         ))}
      </div>
  )
}

export default Feeds
