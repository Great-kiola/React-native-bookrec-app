import mongoose from "mongoose"

export const connectDB = async () => {
    try {
        const conctn = await mongoose.connect(process.env.MONGO_URI)
        console.log(`Database Connected ${conctn.connection.host}`)
    } catch (error) {
        console.log("Error connecting to database", error);
        process.exit(1) // 1 - Exit with failure, 0 - Exit with success
    }
}