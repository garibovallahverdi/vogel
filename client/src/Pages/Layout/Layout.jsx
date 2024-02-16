import React,{useState,useEffect} from 'react'
import { Outlet ,useNavigate} from 'react-router-dom';
import MobileMenu from '../../Components/MobileMenu/MobileMenu';
import Search from '../../Components/SearchComponent/Search';
import SideBarMenu from "../../Components/SideBarMenu/SideBarMenu";
import WhatsHappening from '../../Components/WhatsHappening/WhatsHappening';
import './Layout.css'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import Actions from '../../redux/actions';
const Layout = () => {
  const {pathname}=useLocation()
  const data = useSelector(state=>state.authReducer.user)
  const dispatch =useDispatch()
  const [formData,setFormData] =useState({token:JSON.parse(localStorage.getItem('token'))})
   const [id,setId] =useState(data._id)
 const navigate =useNavigate()

  const [openMenu,setOpenMenu]=useState(false)

   useEffect(() => {
    (
      async ()=>{
        dispatch(Actions.UserActions.getAllUsers(id))
      }
   )()
     
   }, [navigate])
  return (
    <div className="container-layout">
      <MobileMenu setOpenMenu={setOpenMenu}/>

    <div className='Layout'>
       <SideBarMenu setOpenMenu={setOpenMenu} openMenu={openMenu}/>
       <div className='main-container'>
        <Outlet />
         {pathname==='/message' && <div className='message'></div>}
       </div>
       <div className="right-container">
        <Search/>
       <WhatsHappening/>
       <WhatsHappening/>
       </div>
    </div>
    </div>
  )
}

export default Layout
