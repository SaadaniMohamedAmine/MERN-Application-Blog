const express=require('express') ;
const router=express.Router() ;
const User=require('../models/User')

//create new user 
router.post('/',(req,res)=>{
   const {firstName,lastName,email,phone,age}=req.body ;
   let newUser=new User({
       firstName,
       lastName,
       email,
       phone,
       age
   }) ;
   newUser.save()
     .then(()=>res.json({msg:"User created !"}))
     .catch(err=>console.error(err.message)) ;
})



//get all users
router.get('/',(req,res)=>{
    User.find()
     .then(users=>res.json(users)) 
     .catch((err)=>console.error(err.message)) 
})

//get one user post 
router.get('/posts/:userId',(req,res)=>{
   User.findById(req.params.userId).populate("posts")
       .then((user)=>{res.json(user.posts);console.log(user.posts)})
       .catch(err=>console.error(err.message)) ;
})

module.exports=router ;