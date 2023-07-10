import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
<div className="menu w-4/5 m-auto">
    <div className="menu w-full flex justify-center items-center mt-14 border-2 border-red-800 p-8 shadow-[0px_4px_38px_darkred]">
        <div className="text-2xl fiveh:text-4xl eighth:text-6xl twelfh:text-8xl text-red-800">REALESTATE Queries</div>
    </div>
    <div className="text-sm fiveSixty:text-lg flex justify-between flex-col items-center m-auto mt-2 border-2 text-red-800 border-red-800 shadow-[0px_4px_38px_darkred] twelfh:flex-row">
        <div  className="w-full twelfh:w-1/2 flex justify-center items-center">
           <Link to="/getallrealestates" className="w-1/2 flex justify-center items-center border-r-2 border-red-800 p-2 ">All-realestates</Link>
           <Link to="/getlimitedresults" className="w-1/2 flex justify-center items-center border-r-0 border-red-800 p-2 ">Limited-results</Link>
        </div>
        <div  className="w-full twelfh:w-1/2 flex justify-center items-center">
           <Link to="/getspecificrealestate" className="w-1/2 flex justify-center items-center border-r-2 border-t-2 border-red-800 p-2 twelfh:border-t-0 border-l-2">Specific-realestates</Link>
           <Link to="" className="w-1/2 flex justify-center items-center border-t-2 border-red-800 p-2 twelfh:border-t-0">Aggregate MongoDB</Link>
        </div>
    </div>
</div>
    
  )
}

export default Home
