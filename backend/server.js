import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import cors from 'cors'
dotenv.config()
import realestatesRoute from './routes/realestatesRoute.js'
import usersRoute from './routes/usersRoute.js'
// import addDataToCollection from './seeder.js'
const PORT = process.env.PORT || 5000
import connectDB from './dbConfig/connectDB.js'
import cookieParser from 'cookie-parser'


connectDB()
// addDataToCollection()

const app = express()
app.use(cors())
app.use(express.json())                        /* only for POST and PUT => json object*/
app.use(express.urlencoded({extended :true}))  /* only for POST and PUT => strings or arrays*/
app.use(cookieParser())

app.use('/api/realestates', realestatesRoute)
app.use('/api/realestate', realestatesRoute)
app.use('/api/users', usersRoute)

if(process.env.NODE_ENV === 'production'){
const __dirname = path.resolve()
  /*now you can run your app on localhost:5000 */
app.use(express.static(path.join(__dirname, "frontend/dist")))
/* if route is any other then api/users */
app.get('*', (req, res) => sendFile(path.resolve(__dirname, "frontend", "dist", "index.html")))
}else{
   app.get('/', (req, res) => {
     res.send('Server is ready')
})
}


app.listen( PORT, () => console.log(`Server running on port: ${PORT}` .yellow))
