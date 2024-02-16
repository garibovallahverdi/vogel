import AuthModel from "../Models/AuthModel.js";
import  Jwt  from "jsonwebtoken";
import bcrypt from 'bcrypt'
import NotificationModel from "../Models/Notifications.js";



const createToken =(id)=>{
    return Jwt.sign({id},process.env.JWT_KEY,{
        expiresIn:60*60*2
    })
}




export const register =async (req,res,next)=>{
    try {
        const {firstname,lastname,email,password,birthday} = req.body
         
        if(!firstname) return res.status(401).json({message:'Firstname is required'})

        if(!lastname) return res.status(401).json({message:'Lastname is required'})

        if(!email) return res.status(401).json({message:'Email is required'})

        if(!password) return res.status(401).json({message:'Password is required'})
        

        const oldUser = await AuthModel.findOne({email})

        if(oldUser) return res.status(401).json({message:'User already does exsist'})
        
        const salt = await bcrypt.genSalt(10)
        const hashPassword = await bcrypt.hash(password,salt)
        const newUser = await AuthModel.create({
            firstname,lastname,email,password:hashPassword,birthday
        })
        const token = createToken(newUser._id)
     
        res.status(200).json({user:newUser,token,created:true})
    } catch (error) {
         res.status(400).json({error,created:false})
    }
}

export const login = async (req,res,next)=>{
    const {email,password} = req.body 
    try {
        const user = await AuthModel.findOne({email})
        if(user){
            const auth =await bcrypt.compare(password,user.password)
            if(auth){
                const token = createToken(user._id)
           
                res.status(200).json({user,token})
            }else {
                res.status(401).json({message:"Wrong password"})
            }
        }
        else {
            res.status(401).json({message:'User does not exsist'})
        }
    } catch (error) {
        res.status(400).json(error);
    }
}

export const checkToken = async(req,res,next)=>{
    const {token}=req.body
    try {
        
     if(token){
         const decoded= Jwt.verify(token,process.env.JWT_KEY)
         if(!decoded)return res.status(400).json({message:'Token not verified'})
         const user = await AuthModel.findById(decoded.id)

         res.status(200).json(decoded)
     }else {
        res.status(400).json('Token is not valid')
     }
    } catch (error) {
        res.status(401).json(error)
    }
} 

