import React,{useState} from 'react'
import './FollowUser.css'
import { useNavigate } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import Actions from '../../redux/actions'
const FollowUser = ({image,name,email,userId}) => {
  const navigate = useNavigate()
  const dispatch =useDispatch()
  const user = useSelector(state=>state.authReducer.user)
  const [followData,setFollowData] =useState({currentUserId:userId})
  const [followingArr,setFollowingArr] =useState(user.following)
  const followUser = ()=>{
    const id= user._id
     if(!followingArr.includes(userId)){
      setFollowingArr([userId,...followingArr])
     }else {
      setFollowingArr(state=>followingArr.filter(e=>e!==userId))
     }  
    dispatch(Actions.UserActions.followuser(id,followData)) 
    console.log(followingArr);
  }
  return (
    <div className='follow-user'>
        <div className="follow-user-image-name">
            <div className="image">
            <img src={image} alt="" />
            </div>
            <div className="follower-info">
                <p className="follow-name">{name}</p>
                <span onClick={()=>navigate(`/profile/${userId}`)} className='follow-username'>@{email.toLowerCase()}</span>
                <span className='follow-category'>Designer</span>
            </div>
        </div>

        <button onClick={followUser} className='follow-btn'>{followingArr?.includes(userId)?'Followed':'+ Follow'}</button>

      
    </div>
  )
}

export default FollowUser
