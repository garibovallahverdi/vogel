import React from 'react'
import {MdSend} from 'react-icons/md'
import user from '../../assets/user3.jpg'
import './MessageBox.css'
import { useParams } from 'react-router-dom'
const MessageBox = () => {

  return (
    <div className='user-message-box'>
        <div className="user-message-header">
            <div className="user-message-header-image">
                <img src={user} alt="" />
            </div>
            <div className="user-message-header-name">
                <p>Sarah Doll</p>
                <span>Online</span>
            </div>
        </div>
        <div className="writen-messages">
            <div className='msg even'>
                <div className="from-who-img">
                    <img src={user} alt="" />
                </div>
                 <p>Hello</p>
            </div>

            <div className='msg odd'>
                <div className="from-who-img">
                    <img src={user} alt="" />
                </div>
                 <p>Hello</p>
            </div>

            <div className=' msg even'>
                <div className="from-who-img">
                    <img src={user} alt="" />
                </div>
                 <p>How are you</p>
            </div>

            <div className='msg odd'>
                <div className="from-who-img">
                    <img src={user} alt="" />
                </div>
                 <p>Hello</p>
            </div>

            <div className=' msg even'>
                <div className="from-who-img">
                    <img src={user} alt="" />
                </div>
                 <p>How are you</p>
            </div>

            <div className='msg odd'>
                <div className="from-who-img">
                    <img src={user} alt="" />
                </div>
                 <p>Hello</p>
            </div>

            <div className=' msg even'>
                <div className="from-who-img">
                    <img src={user} alt="" />
                </div>
                 <p>How are you</p>
            </div>

            <div className='msg odd'>
                <div className="from-who-img">
                    <img src={user} alt="" />
                </div>
                 <p>Hello</p>
            </div>

            <div className=' msg even'>
                <div className="from-who-img">
                    <img src={user} alt="" />
                </div>
                 <p>How are you</p>
            </div>

            <div className='msg odd'>
                <div className="from-who-img">
                    <img src={user} alt="" />
                </div>
                 <p>Hello</p>
            </div>

            <div className=' msg even'>
                <div className="from-who-img">
                    <img src={user} alt="" />
                </div>
                 <p>How are you</p>
            </div>
        </div>

        <div className="send-message-input">
            <input type="Writing...." /><MdSend/>
        </div>
    </div>
  )
}

export default MessageBox
