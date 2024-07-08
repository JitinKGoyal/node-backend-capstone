import mongoose from "mongoose";
import { DB_NAME } from './../constants.js';


const connectDB = async () => {
    try {

        const connectionInstance = await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
        console.log(`🛢️  Mongo db is connected successfully ${connectionInstance.connection.host} \n`)

    } catch (error) {
        console.log("Error in connecting DB", error);
        process.exit(1);
    }
}

export { connectDB }