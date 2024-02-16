import axios from "axios";

const API =axios.create({baseURL:'http://localhost:5000'})

// export const changeImage = (id,image)=>API.put(`users/changeimage/${id}`,image)
export const getAllUsers = (id)=>API.get(`users/${id}/getallusers`)
export const getUserById = (user)=>API.get(`users/${user}/getuser`)
export const followUser = (id,followData)=>API.put(`users/followuser/${id}`,followData)