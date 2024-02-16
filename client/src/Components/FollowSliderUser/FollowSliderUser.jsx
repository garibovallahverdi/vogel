import React,{useState} from 'react'
import './FollowSliderUser.css'
import user from '../../assets/user2.jpg'
import { useSelector,useDispatch } from 'react-redux'
import Actions from '../../redux/actions'
const FollowSliderUser = ({name,image,userId}) => {
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
    <div className='follow-user-componnt'>
        <div className="follow-user-image">
            <img src={image} alt="" />
        </div>
        <div className="follow-user-name">
            <p>{name}</p>
            <span>Designer</span>
        </div>
        <button onClick={followUser} className='follow-btn'>{followingArr?.includes(userId)?'Followed':'+ Follow'}</button>
      
    </div>
  )
}

export default FollowSliderUser
