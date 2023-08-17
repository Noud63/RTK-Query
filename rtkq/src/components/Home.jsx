import React,{useState, useRef, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Home = () => {

const [message, setMessage] = useState(false)
const [message2, setMessage2] = useState(false)

const user = useSelector( (state) => state.login)
const { isLoggedIn } = user

  return (
<div className="menu w-4/5 m-auto">
    <div className="menu w-full flex justify-center items-center mt-14 border-2 border-red-800 p-8 shadow-[0px_4px_38px_darkred]">
        <div className="text-4xl eighth:text-6xl twelfh:text-8xl text-red-800">RTK Queries</div>
    </div>
        <div className='w-full text-sm grid grid-cols-2 gap-1 grid-rows-4 twelfh:grid-cols-4 twelfh:grid-rows-2 mt-4 text-red-800 fiveh:text-lg font-semibold'>
           <Link to="/getallrealestates" className=" flex justify-center items-center p-2 border-2 border-red-800">Fetch all Data</Link>
           <Link to="/getlimitedresults" className="flex justify-center items-center border-2 border-red-800">Limited-Results</Link>
           <Link to="/getspecificrealestate" className="flex justify-center items-center border-2 border-red-800">Filtered-Request</Link>
           <Link to="" className="flex justify-center items-center border-2 border-red-800">Aggregate MongoDB</Link>

           <div className="relative flex justify-center items-center border-2 border-red-800 cursor-pointer" onClick={() => setMessage(!message)} >
              <Link to={isLoggedIn && "uploadestate"} className="w-full flex items-center justify-center" id="upload">Upload Document</Link>
                {message ? <div className="w-full h-full flex items-center justify-center absolute bg-red-800 text-black top-0 left-0 bottom-0 right-0">
                    <div className="text-xl font-semibold">Admin access only!</div>
                </div> : ""}
           </div>

           <div className="relative flex justify-center items-center border-2 border-red-800 cursor-pointer" onClick={() => setMessage2(!message2)}>
              <Link to={isLoggedIn && "updatecredentials"} className="w-full flex items-center justify-center" >Update Credentials</Link>
                {message2 ? <div className="w-full h-full flex items-center justify-center absolute bg-red-800 text-black top-0 left-0 bottom-0 right-0 z-0">
                    <div className="text-xl font-semibold">Log in First!</div>
                </div> : ""}
           </div>
           
           <Link to="/signup" className="flex justify-center items-center border-2 border-red-800">Signup</Link>
           <Link to="signin" className="flex justify-center items-center border-2 border-red-800">Signin</Link>
           
        </div>
</div>
    
  )
}

export default Home
