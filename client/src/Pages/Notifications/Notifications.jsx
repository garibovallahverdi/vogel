import React,{useEffect,useState} from 'react'
import HistoryBar from '../../Components/HistoryBar/HistoryBar'
import NotificationsItem from '../../Components/Notificationitem/NotificationsItem'
import axios from 'axios'
import './Notifications.css'
const Notifications = () => {
  

  return (
    <div className='notifications'>
        <HistoryBar/>
        <div className="notifications-container">
        <NotificationsItem />
        <NotificationsItem/>
        <NotificationsItem/>
        <NotificationsItem/>
        <NotificationsItem/>
        </div>
    </div>
  )
}

export default Notifications
