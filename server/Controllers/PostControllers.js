import mongoose from "mongoose";
import PostModel from "../Models/PostModel.js";
import NotificationModel from "../Models/Notifications.js";
import AuthModel from '../Models/AuthModel.js'



//Create Post
export const createPost = async (req,res,next)=>{
    const postBody = req.body

    try {
        const newPost = await PostModel.create({
         ...postBody    
        })
        res.status(200).json({newPost,message:'Post created'})
    } catch (error){
         res.status(400).json(error)
        }
}

export const getPosts = async (req,res,next)=>{
  const {user} =req.params
  try {
    const posts = await PostModel.find({userId:user})
    console.log(posts.length);
    res.status(200).json(posts.sort((a,b)=>{return b.createdAt-a.createdAt}))
  } catch (error) {
    res.status(400).json(error.message)
  }
} 
//Like Posts

export const likePost = async (req,res,next)=>{
    const id =req.params.id
    const {postId} =req.body
    console.log(req.body);
  try {
      const findPost = await PostModel.findById(postId)
      const postLikedUser = await AuthModel.findById(id)
      const notificationUser = await NotificationModel.findOne({userId:findPost.userId})

      if(findPost){
         if(!findPost.postLikes.includes(id)){
          
            await findPost.updateOne({$push:{postLikes:id}})
             res.status(200).json({findPost,message:"Post Liked"})
            }else {
             await findPost.updateOne({$pull:{postLikes:id}})
             res.status(200).json({findPost,message:"Post Unliked"})
            
         }
      }else {
        res.status(401).json({error:"Can't find post"})
      }
    
  } catch (error) {
    res.status(400).json(error.message)
  }
}

export const commentPost = async (req,res,next)=>{
   const {postId,comment,commentUserId,userName,userImage,date}= req.body
   
   
   
   const findPost = await PostModel.findOne({_id:postId})
   try {
    const newComment ={
      comment,
      commentUserId,
      userName,
      userImage,
      date
    }
    // const notif = {
    //   ntiMessage: `${commentUser.firstname} write comment to  your post`,
    //   notiForWhatId:postId,
    //   type:'comment',
    //   notiFromWho:id,
    //   eventTime: new Date,
    //   readed:false,
    //  }
 
  
      await findPost.updateOne({$push:{postComments:newComment}})

      res.status(200).json(newComment)
   } catch (error) {
     res.status(400).json(error.message)
   }
}



export const getTimeLinePosts = async (req,res)=>{
  const userId =req.params.id
    console.log(userId);
      const user =await AuthModel.findById(userId)
      const timeLine = await PostModel.find({userId:userId})
      const posts =await PostModel.find()
      const currentFollowingPost=[]
   
      user.following.map(async item=>{
           posts.map(async elem=>{
             if(elem.userId===item){

               currentFollowingPost.push(elem)
             }
           })

      })
      try {
       console.log(timeLine.concat(...currentFollowingPost).sort((a,b)=>{return a.createdAt-b.createdAt}).length);
      res.status(200).json(timeLine.concat(...currentFollowingPost).sort((a,b)=>{return b.createdAt-a.createdAt}))
        
  } catch (error) {
    console.log(error);
      res.status(500).json(error.message)
  }
  }

  export const deletePost = async (req,res,next)=>{
    const {id,postId} =req.body

const post  = await PostModel.findById(postId)
try {
  if(!post){return console.log(req.body.id);}
  if(post.userId===id){
    const deletedPost =await PostModel.findByIdAndDelete(postId)
    console.log('deleting');
    res.status(200).json(deletedPost)
 }else { 
  console.log('not deleting');

    res.status(401).json({message:'You only can delete your own post'})
 }
} catch (error) {
  console.log(error);
   res.status(400).json(error.message)
}

}