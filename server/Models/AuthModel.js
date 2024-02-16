import mongoose from "mongoose";


const AuthScema = mongoose.Schema({
   
    firstname:{
        type:String,
        required:true,
        min:3,
        trim:true

    },
    lastname:{
        type:String,
        required:true,
        min:3
    },
    email:{
        type:String,
        required:true,
        min:5,
        max:15
    }, 
    password:{
        type:String,
        required:true
    },
    follower:[],
    following:[],
    image:{
        type:String,
        default:'https://yt3.ggpht.com/a/AGF-l78AzseOtv4fYGdmRtS7CtaL4wJZLKuFwsi54g=s900-c-k-c0xffffffff-no-rj-mo'
    },
    job:{
        type:String,
        default:'Creator'
    },
    birthday:String,
    workAt:String,
    about:String,
    relationship:String,
    country:String,
    darkMood:{
        type:Boolean,
        default:false
    },
    createdAt:{
        type:Date,
        default: new Date
    }

})


const AuthModel = mongoose.model('Users',AuthScema)

export default AuthModel