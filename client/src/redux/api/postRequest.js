import axios from "axios";

const API =axios.create({baseURL:'http://localhost:5000'})

export const createPost = (formData)=>API.post('post/createpost',formData)
export const getPostsById = (user)=>API.get(`post/${user}/getposts`)
export const likeDislikePost = (likeData,userId)=>API.put(`post/like/${userId}`,likeData)
export const getTimeLine =(id) => API.get(`post/${id}/gettimeline`)
export const createComment =(commentData) => API.put(`post/commenttopost`,commentData)
export const deletePost =(deletePostdata) => API.put(`post/deletepost`,deletePostdata)