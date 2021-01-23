const express=require('express') ;
const port =process.env.PORT|| 5000 ;
const connectDb=require('./config/connectDb') 

const app=express() ;

app.use(express.json()) ;


//database connection 
connectDb();


//middleware for routes
app.use('/user',require('./routes/user')) ;
app.use('/post',require('./routes/post')) ;

 app.listen(port,(err)=>{
     if(err) throw err ;
     console.log(`Server is running on port ${5000}`) 
 })
