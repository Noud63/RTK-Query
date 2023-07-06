import mongoose from 'mongoose'

const connectDB = async() => {
    try {
        const con = await mongoose.connect(process.env.MONGO_URI)
         console.log(`Connected to mongoDB host: ${con.connection.host}`.brightMagenta)

        /*-------Find collection read only without schema-------*/
        //  const col = await mongoose.connection.db.collection('realestates').find().toArray()
        //  console.log(col)

    } catch (error) {
        console.log(error.message)
    }
    
}

export default connectDB