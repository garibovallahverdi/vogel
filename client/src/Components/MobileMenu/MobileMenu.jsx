import React from 'react'
 import logo from '../../assets/logo.png'
 import {RxHamburgerMenu} from 'react-icons/rx'
 import './MebileMenu.css'
import Search from '../SearchComponent/Search'
const MobileMenu = ({setOpenMenu}) => {
  return (
    <div className='mobile-menu'>
        <div className="content">
         <div className='mobil-logo'>
        <img src={logo} alt="" />
       </div>  
       <Search/>
       <RxHamburgerMenu onClick={()=>setOpenMenu(prev=>!prev)}/>    
       </div>
    </div>
  )
}

export default MobileMenu
