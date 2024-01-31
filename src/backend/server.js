import connectDB from './db/server.js'
import app from './app.js'


connectDB().then(
    ()=>{
        app.listen(process.env.PORT||3000,()=>{
            console.log(`App listening on port http://localhost:${process.env.PORT}`)
        })
    }
).catch(
    (error)=>{
        console.log(`MongoDb connection failed`,error);
    }
)
