import AuthModel from "../Models/AuthModel.js";

export const followUser = async (req,res,next)=>{
     const {id} = req.params
     const {currentUserId} =req.body
     try {
          const user = await AuthModel.findById(id)
          const currentUser = await AuthModel.findById(currentUserId)
        if(user && currentUser ){
     
            if(!user.following.includes(currentUserId)){
               await user.updateOne({$push:{following:currentUserId}})
               await currentUser.updateOne({$push:{follower:id}})
                res.status(200).json('Followed ' + currentUser.firstname)
            } else { 
                await user.updateOne({$pull:{following:currentUserId}})
                await currentUser.updateOne({$pull:{follower:id}})
                res.status(200).json('Unfollowed ' + currentUser.firstname)

            }   
          }else {
            res.status(401).json({errMessage:"Access denied, somwthing went wrong"})
          }
     } catch (error) {
         res.status(400).json(error)
     }
}

export const getAllUsers =async (req,res,next)=>{

  const {id} =req.params
  const allUsers = await AuthModel.find()
  const users =  allUsers.filter(e=>e._id!=id)
  try {
    if(users)res.status(200).json(users)
    else res.status(401).json('Cant resolve users')
    
  } catch (error) {
    res.status(400).json(error)    
  }

}

export const getUserById =async (req,res,next)=>{

  const {id} =req.params
  const user = await AuthModel.findById(id)
  try {
    console.log('sss');
    if(user)res.status(200).json(user)
    else res.status(401).json('Cant resolve users')
    
  } catch (error) {
    res.status(400).json(error) 
    console.log('aaa');

  }

}

export const changeImageProfile =async (req,res,next)=>{
  const {id}= req.params
  const {image} =req.body
  try {
    const updated = await AuthModel.findByIdAndUpdate({_id:id},{image:image})
    const user = await AuthModel.findById(id)
      res.status(200).json(updated)
      // res.status(200).json({message:'success'})
    
  } catch (error) {
    res.status(400).json({message:error.message})
  } 

}