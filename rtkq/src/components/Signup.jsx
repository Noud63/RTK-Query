import React,{useState} from 'react'

const Signup = () => {

  const [ name, setName ] = useState("")
  const [ email, setEmail ] = useState("")
  const [ password, setPassword ] = useState("")
  const [ repeatPassword, setRepeatPassword ] = useState("")

  const onSubmitHandler = (e) => {
    e.preventDefault()
    console.log({name:name, email:email, password:password})
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
            defaultValue={name}
            onChange={(e)=> setName(e.target.value)}
            required
            />
          
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
            required
            />

            <label htmlFor="repeat password">Repeat password:</label>
            <input
            className="mb-3" 
            type="password"
            name="repeat password"
            placeholder="Repeat password"
            defaultValue={repeatPassword}
            onChange={(e)=> setPassword(e.target.value)} 
            />
          
          <button type="submit" className="w-full bg-red-800 mt-4 p-2 text-lg text-black font-semibold">Submit</button>
        </form>
      </div>
    
  )
}

export default Signup
