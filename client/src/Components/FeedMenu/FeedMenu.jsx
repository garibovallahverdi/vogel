import React from 'react'
import {NavLink} from 'react-router-dom'
import './FeedMenu.css'
const FeedMenu = () => {
  return (
    <div className='feed-menu'>
      <ul>
        <li><NavLink to='/'>FEED</NavLink></li>
        <li><NavLink to='/people'>PEOPLE</NavLink></li>
        <li><NavLink to='/tranding'>TRENDING</NavLink></li>
        
        </ul>      
    </div>
  )
}

export default FeedMenu
