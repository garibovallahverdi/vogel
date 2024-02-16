import mongoose from "mongoose";

const userSettingsSchema = mongoose.Schema({
    userId:{
        type:String,
        required:true
    },
    darkMood:{
        type:Boolean,
        default:false
    },
   settingsSendMessage:{
      type:Boolean,
      default:false
   },
     
})

const SettingsModel = mongoose.model('Settings',userSettingsSchema)

export default SettingsModel