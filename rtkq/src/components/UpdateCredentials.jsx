import React,{useState, useEffect} from 'react'
import { useUpdateCredentialsMutation } from '../slices/apiSlice'
import { toast } from "react-toastify";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css'

const UpdateCredentials = () => {

  const [ data, setData ] = useState({})

  const [ name, setName ] = useState("")
  const [ email, setEmail ] = useState("")
  const [ password, setPassword ] = useState("")
  const [ repeatPassword, setRepeatPassword ] = useState("")

  const user = useSelector( (state) => state.login)
  const { userInfo, isLoggedIn } = user
  
  const [ updateCredentials  ] = useUpdateCredentialsMutation()

  const navigate = useNavigate()

  useEffect(()=> {
   setName(userInfo.name)
   setEmail(userInfo.email)
   setPassword(userInfo.password)
   setRepeatPassword(userInfo.password)
   },[userInfo.name, userInfo.email, userInfo.password, userInfo.password])

  const register = (e) => {
     setData({
        ...data,
        [e.target.name]: e.target.value
     })
  }
  
  const onSubmitHandler = async(e) => {
    e.preventDefault()
    if(data.password !== data.repeatPassword){
         toast.error('Passwords do not match!')
    }else{
    try{
     const res = await updateCredentials({
      name:data.name, 
      email:data.email, 
      password:data.password}).unwrap()
     toast.success('Successful updated!')
     navigate('/signin')
    } catch(error) {
        toast.error(error)
    }
    e.target.reset()
    }
    
}

  return (
    
    <div className="w-72 m-auto flex justify-center flex-col items-center mt-8">
      <span className="text-red-800 text-2xl mb-4">Update </span>
      
        <form onSubmit={onSubmitHandler} className="text-red-800 w-full">
          <label htmlFor="name" className="w-1/3">Name:</label>
            <input
            className="mb-3"
            type="text" 
            name="name"
            placeholder="Enter name"
            defaultValue={name}
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
            defaultValue={email}
            id="email"
            onChange={register}
            required
            />
          
          <label htmlFor="password">New Password:</label>
            <input
            className="mb-3" 
            type="password"
            name="password"
            placeholder="Enter password"
            defaultValue={password}
            id="password"
            onChange={register} 
            required
            />

            <label htmlFor="repeatPassword">Repeat new password:</label>
            <input
            className="mb-3" 
            type="password"
            name="repeatPassword"
            placeholder="Repeat password"
            defaultValue={repeatPassword}
            id="repeatPassword"
            onChange={register} 
            />
          
          <button type="submit" className="w-full bg-red-800 mt-4 p-2 text-lg text-black font-semibold">Submit</button>
        </form>
      </div>
  )
}

export default UpdateCredentials
