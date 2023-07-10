import React from 'react'
import { FaSignInAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="flex flex-col w-full fiveSixty:flex-row justify-between items-center bg-black border-b border-red-600 text-red-800 font-bold shadow-[0px_4px_38px_darkred] p-6">
      <Link to="/"><span className="w-full flex items-center text-3xl fiveSixty:text-2xl">How to use RTK-Query?</span></Link>
      <div className="flex justify-end items-center text-xl twelfh:w-72">
        <Link to="/signin"><div className="flex flex-row items-center pr-4 mt-4 fiveSixty:mt-0"><FaSignInAlt /><span className="pl-2">Singin</span></div></Link>
         <Link to="/signup"><div className="flex flex-row items-center mt-4 fiveSixty:mt-0"><FaSignInAlt /><span className="pl-2">Singup</span></div></Link>
        </div>
    </div>
  )
}

export default Header
