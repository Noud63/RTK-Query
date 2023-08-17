import React,{useState} from 'react'
import { useRegisterUserMutation } from '../slices/usersSlice'
import { toast } from "react-toastify";
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css'

const Signup = () => {

  const [ data, setData ] = useState({})

  const [ registerUser,  ] = useRegisterUserMutation()

  const navigate = useNavigate()

  const register = (e) => {
         setData({
          ...data,
          [e.target.name] : e.target.value
         })
  }

  const onSubmitHandler = async(e) => {
    e.preventDefault()
    if(data.password !== data.repeatPassword){
         toast.error('Passwords do not match!')
    }else{
    try{
     const res = await registerUser({
      name:data.name, 
      email:data.email, 
      password:data.password}).unwrap()
     toast.success('Successful registration!')
     navigate('/signin')
    } catch(error) {
        toast.error(error)
    }
    e.target.reset()
    }
    
}

  return (
    
    <div className="w-72 m-auto flex justify-center flex-col items-center mt-8">
      <span className="text-red-800 text-2xl mb-4">Signup</span>
      
        <form onSubmit={onSubmitHandler} className="text-red-800 w-full">
          <label htmlFor="name" className="w-1/3">Name:</label>
            <input
            className="mb-3"
            type="text" 
            name="name"
            placeholder="Enter name"
            id="name"
            onChange={register}
            required
            />
          
          <label htmlFor="email">Email:</label>
            <input
            className="mb-3" 
            type="email" 
            name="email"
            placeholder="Enter email"
            id="email"
            onChange={register}
            required
            />
          
          <label htmlFor="password">Password:</label>
            <input
            className="mb-3" 
            type="password"
            name="password"
            placeholder="Enter password"
            id="password"
            onChange={register} 
            required
            />

            <label htmlFor="repeatPassword">Repeat password:</label>
            <input
            className="mb-3" 
            type="password"
            name="repeatPassword"
            placeholder="Repeat password"
            id="repeatPassword"
            onChange={register} 
            />
          
          <button type="submit" className="w-full bg-red-800 mt-4 p-2 text-lg text-black font-semibold">Submit</button>
        </form>
      </div>
  )
}

export default Signup
