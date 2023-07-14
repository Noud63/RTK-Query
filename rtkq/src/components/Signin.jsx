import React,{useState} from 'react'
import { useLoginUserMutation } from '../slices/apiSlice'
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import { useDispatch } from 'react-redux';
import { setCredentials } from '../features/loginSlice';
import { useNavigate } from 'react-router-dom';

const Signin = () => {
  
  const [ data, setData ] = useState({})
  const [ loginUser ] = useLoginUserMutation()

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const login = (e) => {
   setData({
         ...data,
         [e.target.name]: e.target.value
   })
  }

  const onSubmitHandler = async(e) => {
    e.preventDefault()
    
      try {
        const res = await loginUser({email:data.email, password: data.password}).unwrap()
        /* unwrap() because res => { data : { }} */
       
        dispatch(setCredentials({email:res.email, name:res.name}))
        navigate('/')
        toast.success('Loggedin successfuly!')
      } catch (error) {
        toast.error(error)
      }
      e.target.reset()
  }

  return (
    <div className="w-72 m-auto flex justify-center flex-col items-center mt-8">
      <span className="text-red-800 text-2xl mb-4">Signin</span>
      
        <form onSubmit={onSubmitHandler} className="text-red-800 w-full">
          
          <label htmlFor="email">Email:</label>
            <input
            id="email"
            className="mb-3" 
            type="email" 
            name="email"
            placeholder="Enter email"
            onChange={login}
            required
            />
          
          <label htmlFor="password">Password:</label>
            <input
            id="password"
            className="mb-3" 
            type="password"
            name="password"
            placeholder="Enter password"
            onChange={login} 
            />
          
          <button type="submit" className="w-full bg-red-800 mt-4 p-2 text-lg text-black font-semibold">Submit</button>
        </form>
      </div>
    
  )
}

export default Signin
