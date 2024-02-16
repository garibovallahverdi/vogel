import ActionsTypes from "../actions.types";
const initialState= {
    loading:false,
    error:false,
    errorMsg:null
}

const followReducer =(state=initialState,action)=>{
    switch (action.type) {
        case ActionsTypes.UserActionTypes.FOLLOW_START:
            return {...state,loading:true,error:false,errorMsg:null}
        case ActionsTypes.UserActionTypes.FOLLOW_SUCCES:
        return {...state,loading:false}
        case ActionsTypes.UserActionTypes.FOLLOW_ERROR:
            return {...state,loading:false,érror:true,errorMsg:action.paload}
    
        default:
            return state
    }
}

export default followReducer