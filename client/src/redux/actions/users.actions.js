import ActionsTypes from "../actions.types";
import * as UserApi from '../api/userRequests'

const getAllUsers =(id)=>async (dispatch)=>{

    try {
         const {data} = await UserApi.getAllUsers(id)
         dispatch({type:ActionsTypes.UserActionTypes.GET_ALL_USERS,payload:data})
    } catch (error) {
        dispatch({type:ActionsTypes.UserActionTypes.GET_ALL_USERS_ERROR,payload:error})
        
    }
}


const getUserById =(user)=>async (dispatch)=>{
          dispatch({type:ActionsTypes.UserActionTypes.GET_USER_BYID_START})
  try {
       const {data} = await UserApi.getUserById(user)
       dispatch({type:ActionsTypes.UserActionTypes.GET_USER_BYID,payload:data})
  } catch (error) {
      dispatch({type:ActionsTypes.UserActionTypes.GET_USER_BYID_ERROR,payload:error})
      
  }
}

const followuser =(id,followData)=>async(dispatch)=>{
  dispatch({type:ActionsTypes.UserActionTypes.FOLLOW_START})
  try {
     const {data}=  await UserApi.followUser(id,followData)
       dispatch({type:ActionsTypes.UserActionTypes.FOLLOW_SUCCES})
       console.log(data);
  } catch (error) {
    dispatch({type:ActionsTypes.UserActionTypes.FOLLOW_ERROR,payload:error})
    console.log(error);

  }   
}



const UserActions = {getAllUsers,followuser,getUserById}
export default UserActions