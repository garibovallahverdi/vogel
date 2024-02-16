import React from 'react'
import {AiOutlineArrowLeft} from 'react-icons/ai'
import './HistoryBar.css'
import { useNavigate,useLocation } from 'react-router-dom'
const HistoryBar = () => {
  const navigate = useNavigate()
  const location = useLocation()
  return (
    <div className='history'>
        <div className="back-tick">
            <AiOutlineArrowLeft onClick={()=>navigate('/')}/>
            <p> {location.pathname} </p>
        </div>
      
    </div>
  )
}

export default HistoryBar
