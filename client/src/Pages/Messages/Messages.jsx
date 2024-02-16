import React from 'react'
import { Outlet } from 'react-router-dom'
import HistoryBar from '../../Components/HistoryBar/HistoryBar'
import './Messages.css'
const Messages = () => {
  return (
    <div className='messages'>
        <HistoryBar location='Messages'/>
         <Outlet/>
    </div>
  )
}

export default Messages
