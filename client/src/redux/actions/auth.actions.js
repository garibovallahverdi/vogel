import ActionsTypes from "../actions.types";
import * as AuthApi from '../api/authRequests'
const register =(formData,navigate)=> async(dispatch)=>{
      dispatch({type:ActionsTypes.AuthActionTypes.REGISTER_START})
      try {
         const {data} =await AuthApi.register(formData)
          dispatch({type:ActionsTypes.AuthActionTypes.REGISTER_SUCCESS,payload:data})
          navigate('../')
      } catch (error) {
         dispatch({type:ActionsTypes.AuthActionTypes.REGISTER_ERROR,payload:error})
      }

}

const login =(formData,navigate)=> async(dispatch)=>{
      dispatch({type:ActionsTypes.AuthActionTypes.LOGIN_START})
      try {
         const {data} =await AuthApi.login(formData)
          dispatch({type:ActionsTypes.AuthActionTypes.LOGIN_SUCCESS,payload:data})
          navigate('../')
      } catch (error) {
            // console.log(error);
         dispatch({type:ActionsTypes.AuthActionTypes.LOGIN_ERROR,payload:error})
      }

}

const refresh= (formData,navigate)=> async(dispatch)=>{
      dispatch({type:ActionsTypes.AuthActionTypes.REFRESH_START})

      try {
            const {data} = await AuthApi.refreshToken(formData)
            dispatch({type:ActionsTypes.AuthActionTypes.REFRESH_SUCCESS,payload:data})
      } catch (error) {
            navigate('/')
            dispatch({type:ActionsTypes.AuthActionTypes.REFRESH_ERROR,payload:error})
            
      }
}
const logout= (navigate)=>(dispatch)=>{
      dispatch({type:ActionsTypes.AuthActionTypes.LOGOUT})
      navigate('/')
}

const changeImage =(id,profileImg)=>async (dispatch)=>{
      dispatch({type:ActionsTypes.AuthActionTypes.CHANGE_IMAGE_START})
      console.log(profileImg);
      try {
          const {data} =  await AuthApi.changeImage(id,profileImg)
          console.log(data);
            dispatch({type:ActionsTypes.AuthActionTypes.CHANGE_IMAGE_SUCCESS,payload:profileImg.image})
      } catch (error) { 
          dispatch({type:ActionsTypes.AuthActionTypes.CHANGE_IMAGE_ERROR})
          console.log({message:error,text:'Wrong'});
      }
   }


const AuthActions ={register,refresh,login,logout,changeImage}

export default AuthActions