import ActionsTypes from "../actions.types";
const initialState= {
    user:null,
    loading:false,
    error:false,
    refreshErr:false,
    refreshErrMsg:null,
    refreshLoading:false,
    errorMsg:null,
    imgError:false,
    imgLoading:false,

}
const authReducer = (state=initialState,action)=>{
    switch (action.type) {
        case ActionsTypes.AuthActionTypes.REGISTER_START:
            return {...state,loading:true,error:false,errorMsg:null}
        case ActionsTypes.AuthActionTypes.REGISTER_SUCCESS:
            localStorage.setItem('token',JSON.stringify(action.payload.token))
            return {...state,user:{...action.payload.user},loading:false}
        case ActionsTypes.AuthActionTypes.REGISTER_ERROR:
            return {...state, error:true,errorMsg:action.payload} 
        case ActionsTypes.AuthActionTypes.LOGIN_START:
            return {...state,loading:true,error:false,errorMsg:null}
        case ActionsTypes.AuthActionTypes.LOGIN_SUCCESS:
            localStorage.setItem('token',JSON.stringify(action.payload.token))
            return {...state,user:{...action.payload.user},loading:false}
        case ActionsTypes.AuthActionTypes.LOGIN_ERROR:
            return {...state, error:true,errorMsg:action.payload}
        case ActionsTypes.AuthActionTypes.REFRESH_START:
            return {...state,refreshLoading:true,refreshErr:false,refreshErrMsg:null}
        case ActionsTypes.AuthActionTypes.REFRESH_SUCCESS:
            return {...state,user:action.payload,refreshLoading:false}
        case ActionsTypes.AuthActionTypes.REFRESH_ERROR:
            localStorage.clear()
            return {...state,refreshErr:true,refreshErrMsg:action.payload,refreshLoading:false}      
        case ActionsTypes.AuthActionTypes.LOGOUT:
            localStorage.clear()
            return {...state,user:null,errorMsg:null,refreshErrMsg:null}
        case ActionsTypes.AuthActionTypes.CHANGE_IMAGE_START:
            return {...state,imgLoading:true,imgError:false}
            case ActionsTypes.AuthActionTypes.CHANGE_IMAGE_SUCCESS:
            console.log(action.payload);
            return {...state,user:{...state.user,image:action.payload},imgLoading:false}
        case ActionsTypes.AuthActionTypes.CHANGE_IMAGE_ERROR:
            return {...state,imgLoading:false,imgError:true}
        default:
            return state
    }

}


export default authReducer