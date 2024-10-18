require('dotenv').config()
import mongoose from "mongoose"
import { DB_NAME } from "./constants"



( async () =>{
    try {
        await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)

        
    } catch (error) {
        console.error("Rise a error is" + error)
        throw err
        
    }
})