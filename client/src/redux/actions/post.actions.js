import ActionTypes from '../actions.types'
import * as PostApi from '../api/postRequest'

const createPost = (formData)=>async(dispatch)=>{
    dispatch({type:ActionTypes.PostActionTypes.CREATE_POST_START})
    try {
        const {data} =await PostApi.createPost(formData)
        dispatch({type:ActionTypes.PostActionTypes.CREATE_POST_SUCCESS,payload:formData},)
    } catch (error) {
        dispatch({type:ActionTypes.PostActionTypes.CREATE_POST_ERROR,payload:error})
    }
}
const getPostsById= (user)=>async(dispatch)=>{
    dispatch({type:ActionTypes.PostActionTypes.GET_POSTS_BYID_START})
    try { 
    const {data} = await PostApi.getPostsById(user)
        dispatch({type:ActionTypes.PostActionTypes.GET_POSTS_BYID_SUCCESS,payload:data})
    } catch (error) {
        dispatch({type:ActionTypes.PostActionTypes.GET_POSTS_BYID_ERROR,payload:error})
    }
}

const getTimeLine= (id)=>async(dispatch)=>{
    try {
    const {data} = await PostApi.getTimeLine(id)
        dispatch({type:ActionTypes.PostActionTypes.GET_TIME_LINES,payload:data})
    } catch (error) {
         console.log(error);
    }
}
const likeDislikePost = (likeData,userId)=>async (dispatch)=>{
    try {
      const {data}=  await PostApi.likeDislikePost(likeData,userId)
        dispatch({type:ActionTypes.PostActionTypes.LIKE_DISLIKE_POST_SUCCESS,payload:data})
        
    } catch (error) {
        console.log(error);
        dispatch({type:ActionTypes.PostActionTypes.LIKE_DISLIKE_POST_ERROR,payload:error})
        
    }
}

const createComment =(commentData)=>async(dispatch)=>{
         dispatch({type:ActionTypes.PostActionTypes.CREATE_COMMENT_START})
    try {
        const {data} =await PostApi.createComment(commentData)
        dispatch({type:ActionTypes.PostActionTypes.CREATE_COMMENT_SUCCESS,payload:data})
        console.log(data);
    } catch (error) {
        dispatch({type:ActionTypes.PostActionTypes.CREATE_COMMENT_ERROR,payload:error})
        console.log(error);
    }

}

const deletePost =(deletePostData)=>async(dispatch)=>{
      
    try {
        const {data} =await PostApi.deletePost(deletePostData)
        console.log(data);
        dispatch({type:ActionTypes.PostActionTypes.DELETE_POST,payload:data})
    } catch (error) {
         console.log(error);
    }

}
const PostActions ={createPost,getPostsById,likeDislikePost,createComment,getTimeLine,deletePost}

export default PostActions