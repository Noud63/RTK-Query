import React from 'react'
import { FaSignInAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { logOut } from '../features/loginSlice';

const Header = () => {

  const location = useLocation().pathname
  const dispatch = useDispatch()

  const user = useSelector( (state) => state.login)
  const { userInfo, isLoggedIn } = user

  const logOutUser = () => {
       dispatch(logOut())
  }

  return (
    <div className="flex flex-col w-full sevenh:flex-row justify-between items-center bg-black border-b border-red-600 text-red-800 font-bold shadow-[0px_4px_38px_darkred] p-6">
      <Link to="/"><span className="w-full flex items-center text-3xl sevenh:text-2xl twelfh:w-72">How to use RTK-Query ?</span></Link>
      
      <div className="flex justify-end items-center text-xl twelfh:w-88 mt-1 flex-between">
         <Link to="/uploadestate"><div className="text-lg flex items-center pr-10 sevenh:mt-0 sevenh:pr-8">Upload Estate</div></Link>
         <div className="flex flex-row">
          <Link to={isLoggedIn ? location : '/signin' }><div className="text-lg flex flex-row items-center pr-4 sevenh:mt-0"><FaSignInAlt /><span className="pl-2 cursor-pointer">{!isLoggedIn ? 'Singin' : `Hi, ${userInfo.name}`}</span></div></Link>
          <div className="text-lg flex flex-row items-center pr-4 sevenh:mt-0" onClick={logOutUser}>{isLoggedIn && <FaSignInAlt />}<span className="pl-2 cursor-pointer">{isLoggedIn ? 'logout' : ""}</span></div>
          <Link to="/signup"><div className="text-lg flex flex-row items-center sevenh:mt-0"><FaSignInAlt /><span className="pl-2">Singup</span></div></Link>
         </div>
      </div>
    </div>
  )
}

export default Header
