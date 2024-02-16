import ActionsTypes from "../actions.types";

const initialState ={
    reciviedUser:null,
    loading:false,
    error:false,
    errormsg:null
}

const reciviedUserReducer =(state=initialState,action)=>{
    switch (action.type) {
        case ActionsTypes.UserActionTypes.GET_USER_BYID_START:
            return {...state,loading:true,reciviedUser:null, error:false,errormsg:null}
        case ActionsTypes.UserActionTypes.GET_USER_BYID:
            return {...state,reciviedUser:action.payload,loading:false}
        case ActionsTypes.UserActionTypes.GET_USER_BYID_ERROR:
            return {...state,error:true,errormsg:action.payload}
            case ActionsTypes.AuthActionTypes.LOGOUT:
                return {...state,reciviedUser:null,errorMsg:null,error:false}    
    
        default:
          return state   
 }
}

export default reciviedUserReducer