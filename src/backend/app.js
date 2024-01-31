import express from "express"
import cookieParser from "cookie-parser";
import cors from "cors";


const app=express();

// app.get('/',(req,res)=>{
//     res.send("server is ready");
// })

// const port=process.env.PORT||3000;

// app.listen(port,()=>{
//     console.log(`server ready on port http://localhost:${port}`)
// })


app.use(cors(
   { 
    origin:process.env.CORS_ORIGIN,
    credentials:true
   }
))
app.use(express.json({limit:"16kb"}))//for accepting jason format rquest from user
app.use(express.urlencoded({extended:true,limit:"16kb"}))// for url encoding
app.use(express.static("public"));//for saving the files n images offline  
export default app;