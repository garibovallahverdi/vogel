import express from 'express'
import {  checkToken, login,  register } from '../Controllers/AuthControllers.js'

const router = express.Router()


router.post('/register',register) 
router.post('/login',login) 
router.post('/refresh',checkToken)

export default router 