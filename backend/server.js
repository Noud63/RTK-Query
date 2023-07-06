import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import cors from 'cors'
dotenv.config()
import realestatesRoute from './routes/realestatesRoute.js'

const PORT = process.env.PORT || 5000
import connectDB from './dbConfig/connectDB.js'

connectDB()

const app = express()
app.use(cors())
app.use(express.json())                        /* only for POST and PUT => json object*/
app.use(express.urlencoded({extended :true}))  /* only for POST and PUT => strings or arrays*/

app.use('/api/realestates', realestatesRoute)
// app.use('/api/realestates/:id', realestatesRoute)


app.listen( PORT, () => console.log(`Server running on port: ${PORT}` .yellow) )