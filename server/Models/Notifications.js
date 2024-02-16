import mongoose from "mongoose";

const notificationsSchema = mongoose.Schema({
    userId:{
        type:String, 
        required:true,
        unique:true
    },   
    notifications:[]
})

const NotificationModel = mongoose.model('notifications',notificationsSchema)

export default NotificationModel