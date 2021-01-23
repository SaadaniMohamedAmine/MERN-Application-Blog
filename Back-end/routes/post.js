const express=require("express") ;
const router=express() ;
const  Post=require('../models/Post')
const User=require('../models/User')
//create new post
router.post('/:userId',(req,res)=>{
    const {title,body}=req.body ;
    let newPost= new Post({
        title ,
        body ,
    }) ;
    //get the user by id 
   User.findById(req.params.userId) 
      .then(user=>{
          user.posts.push(newPost) ;
          newPost.writer=user ;
          
          newPost.save()
          user.save()
             .then(()=>res.json({msg:"Post created !"}))
             .catch(err=>console.error(err.message)) ;
      })
      .catch(err=>console.error(err.message)) ;
})

//get user post


//get all posts
router.get('/',(req,res)=>{
    Post.find()
       .then((posts)=>res.json(posts))
       .catch(err=>console.error(err.message))
})
module.exports=router ;