import express from 'express'
import { commentPost, createPost, deletePost, getPosts, getTimeLinePosts, likePost } from '../Controllers/PostControllers.js'

const router =express.Router()

router.post('/createpost',createPost)
router.put('/like/:id',likePost)
router.get('/:user/getposts',getPosts)
router.put('/commenttopost',commentPost)
router.get('/:id/gettimeline',getTimeLinePosts)
router.put('/deletepost',deletePost)


export default router 