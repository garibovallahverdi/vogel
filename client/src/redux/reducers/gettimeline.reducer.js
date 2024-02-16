import ActionsTypes from "../actions.types";

const initialState={
    timeLinePosts:null,
    loading:false,
    error:false,
    errorMsg:null
}

const getTimeLineReducer =(state=initialState,action)=>{

    switch (action.type) {
        case ActionsTypes.PostActionTypes.GET_TIME_LINES:
            return {...state,timeLinePosts:action.payload}
        case ActionsTypes.PostActionTypes.CREATE_POST_SUCCESS:
        return {...state,timeLinePosts:[action.payload,...state.timeLinePosts]}
        case ActionsTypes.PostActionTypes.DELETE_POST:
            return {...state,timeLinePosts:[...state.timeLinePosts.filter(post=>post._id!==action.payload._id)]}
        case ActionsTypes.AuthActionTypes.LOGOUT:
            return {...state,timeLinePosts:null,errorMsg:null}
        default:
            return state;
    }
}

export default getTimeLineReducer