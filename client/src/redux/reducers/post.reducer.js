import ActionsTypes from "../actions.types";
const initialState={
    posts:null,
    loading:false,
    error:false,
    errorMsg:null
}
const postReducer = (state=initialState, action)=>{
    switch (action.type) {
        case ActionsTypes.PostActionTypes.CREATE_POST_START:
            return {...state,loading:true,error:false,errorMsg:null}
        case ActionsTypes.PostActionTypes.CREATE_POST_SUCCESS:
            return {...state,posts:[action.payload,...state.posts],loading:false}
        case ActionsTypes.PostActionTypes.CREATE_POST_ERROR:
            return{...state,loading:false,error:true,errorMsg:action.payload}
        case ActionsTypes.PostActionTypes.GET_POSTS_BYID_START:
            return {...state, posts:null,loading:true,error:false,errorMsg:null}
        case ActionsTypes.PostActionTypes.GET_POSTS_BYID_SUCCESS:
            return {...state,posts:action.payload,loading:false}
        case ActionsTypes.PostActionTypes.GET_POSTS_BYID_ERROR:
            return {...state,posts:null,error:true,errorMsg:action.payload,loading:false}
        case ActionsTypes.PostActionTypes.LIKE_DISLIKE_POST_SUCCESS:
            return state
            case ActionsTypes.PostActionTypes.DELETE_POST:
                console.log(action.payload);
                return {...state,posts:[...state.posts.filter(post=>post._id!==action.payload._id)  ]}
        case ActionsTypes.PostActionTypes.LIKE_DISLIKE_POST_ERROR:
            return state
            case ActionsTypes.AuthActionTypes.LOGOUT:
                return {...state,posts:null,errorMsg:null,error:false}
                
        default:
            return state
    }
}

export default postReducer