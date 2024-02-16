import React from 'react'
import FeedMenu from '../../Components/FeedMenu/FeedMenu'
import FollowPeopleSlider from '../../Components/FollowPeopleSlider/FollowPeopleSlider'
import SharePost from '../../Components/SharePost/SharePost'
import Post from '../../Components/PostComponent/Post'
import './Feed.css'
import Feeds from '../../Components/FeedSubPages/Feeds/Feeds'
import { Outlet } from 'react-router-dom'
const Feed = () => {
  return (
    <div className='main-news'>
      <FeedMenu/>
      <Outlet/>
    </div>
  )
}

export default Feed
