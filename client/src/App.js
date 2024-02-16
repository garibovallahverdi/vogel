import React,{useState,useEffect} from "react";
import './App.css'
import Layout from "./Pages/Layout/Layout";
import { BrowserRouter,Routes,Route, Navigate, useNavigate } from "react-router-dom";
import Profile from "./Pages/Profile/Profile";
import Feed from './Pages/FeedPage/Feed.jsx'
import Feeds from "./Components/FeedSubPages/Feeds/Feeds";
import Tranding from "./Components/FeedSubPages/Tranding/Tranding";
import People from "./Components/FeedSubPages/People/People";
import Messages from "./Pages/Messages/Messages";
import MessagesContent from "./Components/MessagesContent/MessagesContent";
import MessageBox from "./Components/MessageBox/MessageBox";
import OwnProfileContent from "./Components/OwnProfileContent/OwnProfileContent";
import OtherUserProfile from "./Components/OtherUserProfile/OtherUserProfile";
import EditProfile from "./Components/EditProfile/EditProfile";
import TimeLine from "./Components/TimeLine/TimeLine";
import ProfilePhotos from "./Components/ProfilePhotos/ProfilePhotos";
import ProfileAbout from "./Components/ProfileAbout/ProfileAbout";
import ProfileLikePosts from "./Components/ProfileLikePosts/ProfileLikePosts";
import ProfileSettings from "./Components/ProfileSettings/ProfileSettings";
import Notifications from "./Pages/Notifications/Notifications";
import Login from './Pages/Login/Login.jsx'
import Register from './Pages/Register/Register.jsx'
import Actions from "./redux/actions";
import { useSelector,useDispatch } from "react-redux";
import refreshLoading from './assets/refreshLoading.gif'
function App() {
  const data = useSelector(state=>state.authReducer)
  const [formData,setFormData] =useState({token:JSON.parse(localStorage.getItem('token'))})
  const dispatch= useDispatch()
  const navigate =useNavigate()
 useEffect(() => {
  (
    async ()=>{
      dispatch(Actions.AuthActions.refresh(formData,navigate))
    }
 )()
   
 }, [])




if(data.refreshLoading===true){
  return <img className="refreshLoading" src={refreshLoading} alt="" />
}else {
  return (
     <Routes>
    <Route path="/" element={data.user?<Layout/>:<Login/>}>
         <Route path="/profile" element={<Profile/>}>
             <Route path='/profile/:user/' element={<OwnProfileContent/>}>
                <Route path='/profile/:user/' element={<TimeLine/>}/>
                <Route path='/profile/:user/editprofile' element={<EditProfile/>}/>
                <Route path='/profile/:user/photos' element={<ProfilePhotos/>}/>
                <Route path='/profile/:user/about' element={<ProfileAbout/>}/>
                <Route path='/profile/:user/likeposts' element={<ProfileLikePosts/>}/>
                <Route path='/profile/:user/settings' element={<ProfileSettings/>}/>
             </Route>
         </Route>
         <Route path="/messages" element={<Messages/>}>
            <Route path="/messages/:id" element={<MessagesContent/>}/>
            <Route path="/messages/:id/:recievedUser" element={<MessageBox/>}/>
         </Route>
         <Route path="/" element={<Feed/>}>
              <Route path="/" element={<Feeds/>}/>
              <Route path="/tranding" element={<Tranding/>}/>
              <Route path="/people" element={<People/>}/> 
         </Route>
         <Route path="/notifications" element={<Notifications/>}/>

    </Route>
      
      <Route path="/register" element={<Register/>} />
      {/* <Route path="/login" element={<Login/>} /> */}

     </Routes>
  );
}
}

export default App;
