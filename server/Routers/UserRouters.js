import express from 'express'
import { changeImageProfile, followUser, getAllUsers, getUserById } from '../Controllers/UserController.js'

const router =express.Router()  
 
router.put('/followuser/:id', followUser)
router.get('/:id/getallusers',getAllUsers)
router.get('/:id/getuser',getUserById)
router.put('/changeimage/:id',changeImageProfile)

export default router   