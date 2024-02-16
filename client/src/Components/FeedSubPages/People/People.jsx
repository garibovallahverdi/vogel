import React from 'react'
import FollowUser from '../../FollowUsers/FollowUser'
import './People.css'
import { useSelector } from 'react-redux'
const People = () => {
  const users = useSelector(state=>state.userReducer.users)
  return (
    <div className='people'>
       <div className="youCanFollowUser">
        <p>People you can follow</p>
        {users===null?<p>Loading..</p>:
          users.map(item=>(
            <FollowUser key={item._id} userId ={item._id} email={item.email} name={item.firstname + ' ' + item.lastname} image={item.image}/>
          ))
        }
       </div>
      
 
    </div>
  )
}

export default People
