import React,{useState,useEffect} from 'react'
import './User.css'
import user1 from '../../assets/user3.jpg'
import {AiOutlineLink} from 'react-icons/ai'
import {BsCalendar} from 'react-icons/bs'
import { useParams ,useNavigate} from 'react-router-dom' 
import { useDispatch, useSelector } from 'react-redux'
import  Moment  from 'moment'
import Actions from '../../redux/actions'
const User = ({}) => {
    const authUser = useSelector(state=>state.authReducer.user)
    const reciviedUser =useSelector(state=>state.reciviedUserReducer.reciviedUser)
    const loading =useSelector(state=>state.reciviedUserReducer.loading)
    const [count,setCount] =useState([0,1,2,3,4])
    const dispatch =useDispatch()
    const {user} =useParams()
    const [followList,setFollowList] =useState(authUser.following)
    const navigate =useNavigate()
 console.log(followList);
 const editProfile=()=>{
    navigate(`${authUser._id}/editprofile`)
 }
    useEffect(() => {
        (
          async ()=>{dispatch(Actions.UserActions.getUserById(user))
            
          }
          )()
  
    }, [user])
    console.log({authUser,reciviedUser});
    if(loading===true || reciviedUser===null){
        return <p>Loading user info....</p>
    }else {
  return (
    <div className='Profie'>
    <div className="user-container">
        <div className="user-name-image">
            <div className="image">
                <img src={reciviedUser?.image} alt="" />
            </div>
            <div className="name">
                <h2>{reciviedUser?.firstname + ' ' +reciviedUser?.lastname}</h2>
                <span>@{reciviedUser?.lastname.toLowerCase()}</span>
            </div>

        </div>
        <button className='edit-profile ' onClick={editProfile}>{authUser._id===reciviedUser._id?'Edit Profile': followList.includes(reciviedUser._id)?'followed': ' + Follow'}</button>
          </div>
          <div className="user-info">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis impedit eligendi illo tempora ipsa blanditiis voluptatem? Iusto, cumque. Cupiditate nobis nostrum sit exercitationem sint hic magni? Ducimus commodi facilis animi illum. Eveniet illo eum sit suscipit necessitatibus. Dolorum, fuga? Culpa tenetur accusamus optio minus distinctio. Porro iste incidunt nostrum aspernatur!</p>
            <div className="joined">
                <span><AiOutlineLink/>profile/{reciviedUser?.firstname+'-'+reciviedUser?.lastname}</span>
                <span><BsCalendar/> Joined on {Moment(reciviedUser?.createdAt).format('DD MMM YY')}</span>
            </div>
            <div className="follow-list">
                <div className="follower">
                <span>3.9k follower</span>
                <div className='follow-image'>
                    {
                     count.map((i)=>(
                       <img key={i} src={user1} alt="" style={{left:-i*15}} />
                        ))
                    }
                </div>
                </div>
                <div className="follower">
                <span>39 following</span>
                <div className='follow-image'>
                {
                     count.map((i)=>(
                       <img key={i} src={user1} alt="" style={{left:-i*15}} />
                        ))
                    }
                </div>
                </div>
            </div>
            </div>
      
    </div>
  )
}
}

export default User
