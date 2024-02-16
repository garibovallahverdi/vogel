import axios from "axios"

const API =axios.create({baseURL:'http://localhost:5000'})

export const register = (formData)=>API.post('auth/register',formData)
export const login = (formData)=>API.post('auth/login',formData)
export const refreshToken = (formData)=>API.post('auth/refresh',formData)
export const changeImage = (id,profileImg)=>API.put(`users/changeimage/${id}`,profileImg)

