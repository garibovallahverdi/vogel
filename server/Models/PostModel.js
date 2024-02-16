import mongoose from "mongoose";

const postSchema = mongoose.Schema({
    userId:{
        type:String,
        required:true
    },
    userImage:{
        type:String,
        required:true
    },
    userName:{
        type:String,
        required:true
    },
    post:{
        type:String,
        required:true 
    },
    postVisible:{
        type:Boolean,
        default:true
    },
    postComments:[],
    postLikes:[],
    image:String,
    createdAt:{
        type:Date,
        default:  Date.now()
    }


})

const PostModel = mongoose.model('Posts',postSchema)

export default PostModel