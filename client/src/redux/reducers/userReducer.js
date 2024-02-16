import ActionsTypes from "../actions.types";

const initialState ={
    users:null,
    loading:false,
    error:false,
    errormsg:null
}

const userReducer =(state=initialState,action)=>{
    switch (action.type) {
        case ActionsTypes.UserActionTypes.GET_ALL_USERS:
            return {...state,users:action.payload,error:false,errormsg:null}
        case ActionsTypes.UserActionTypes.GET_ALL_USERS_ERROR:
            return {...state,error:true,errormsg:action.payload}
            case ActionsTypes.AuthActionTypes.LOGOUT:
                return {...state,users:null,errorMsg:null,error:false}       
    
        default:
          return state   
 }
}

export default userReducer