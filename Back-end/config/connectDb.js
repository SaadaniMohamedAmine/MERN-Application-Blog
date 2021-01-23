const mongoose=require("mongoose") ;
const mongoUrl="mongodb+srv://Mohamed-Amine:123*456*@cluster0.zpsku.mongodb.net/Blog_Mern_Application?retryWrites=true&w=majority" ;
const connectDb=()=>{
     mongoose.connect(mongoUrl,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
      } ,
      (err)=>{
          if(err) throw err ;
          console.log(`Connected to db ...`) ;
      }
     )
} ;
module.exports=connectDb ;