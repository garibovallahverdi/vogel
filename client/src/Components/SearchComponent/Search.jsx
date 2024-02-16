import React from 'react'
import './Search.css'
import {BiSearchAlt2} from 'react-icons/bi'
import {useSelector} from 'react-redux'
import FollowUser from '../FollowUsers/FollowUser'
const Search = () => {
  const users =useSelector(state=>state.userReducer.users)
  console.log(users);
  return (
    <div className='search'>
      <div className='search-box'>
        <input type="text"  placeholder='Search Vogel'/><BiSearchAlt2/>
        </div>
         <div className='searching-item'>
         </div>
        
    </div>
  )
}

export default Search
