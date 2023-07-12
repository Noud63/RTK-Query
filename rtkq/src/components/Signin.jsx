import React,{useState} from 'react'

const Signin = () => {
  
  const [ email, setEmail ] = useState("")
  const [ password, setPassword ] = useState("")

  const onSubmitHandler = (e) => {
    e.preventDefault()
    console.log({email:email, password:password})
  }

  return (
    <div className="w-72 m-auto flex justify-center flex-col items-center mt-8">
      <span className="text-red-800 text-2xl mb-4">Signin</span>
      
        <form onSubmit={onSubmitHandler} className="text-red-800 w-full">
          
          <label htmlFor="email">Email:</label>
            <input
            className="mb-3" 
            type="email" 
            name="email"
            placeholder="Enter email"
            defaultValue={email}
            onChange={(e)=> setEmail(e.target.value)}
            required
            />
          
          <label htmlFor="password">Password:</label>
            <input
            className="mb-3" 
            type="password"
            name="password"
            placeholder="Enter password"
            defaultValue={password}
            onChange={(e)=> setPassword(e.target.value)} 
            />
          
          <button type="submit" className="w-full bg-red-800 mt-4 p-2 text-lg text-black font-semibold">Submit</button>
        </form>
      </div>
    
  )
}

export default Signin
