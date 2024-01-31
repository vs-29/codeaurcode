import mongoose from "mongoose";
import { DB_NAME } from "../contants.js";
import dotenv from 'dotenv';

dotenv.config({ path: '../../.env' })

const connectDB = async () => {
    try {
        const MONGODB_URL = process.env.MONGODB_URL;
        console.log(MONGODB_URL)
        console.log(DB_NAME)
        const connection_instance = await mongoose.connect(`${MONGODB_URL}/${DB_NAME}`);
        console.log(`DB Connected at host ${connection_instance.connection.host}`);
    } catch (error) {
        console.error("mongo error: ", error);
        process.exit(1);
    }
}

export default connectDB;