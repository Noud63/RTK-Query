import User from '../models/userModel.js'
import asyncHandler from 'express-async-handler'
import bcrypt from 'bcryptjs'
import generateToken from '../generateToken.js'

// @ desc register user
// route POST api/users
// @ access public
const registerUser = asyncHandler(async(req,res) => {
    
    const { name, email, password } = req.body

    const userExist = await User.findOne({email})

    if(userExist){
        res.status(400).send("user already registered!")
    }

    const user = await User.create({
        name, 
        email, 
        password, //hashedpassword 
        isAdmin
    })

    if(user){
        generateToken(res, user._id);
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin
        });
    }else{
        res.status(400).send("Invalid user data!")
    }
})

// @ desc authenticate user
// route POST api/users/login
// @ access public
const loginUser = asyncHandler(async(req, res)=> {
      const { email, password } = req.body
      const user = await User.findOne({email})
    
      if(user && (await bcrypt.compare(password, user.password))){
        generateToken(res, user._id)
          res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin
          })
      }else{
        res.status(400).send('Invalid email or password!')
      }
})

// @ desc update user credentials
// route POST api/users/update
// @ access private (protected)
const updateCredentials =  asyncHandler(async(req, res)=> {
    console.log(req.body)
      const { name, email, password } = req.body
      if(name, email, password){
      const user = await User.findOneAndUpdate({name, email, password})
      res.status(201).json(user)
      
      }else{
        res.status(400).send('Not updated!')
      }
})

// @ desc logout user
// route POST api/users/logout
// @ access public
const logoutUser = asyncHandler(async (req, res) => {
  res.cookie("jwt", "", {
    httpOnly: true,
    expires: new Date(0),
  });
  res.status(200).json({ message: "User logged out!" });
});

export {registerUser, loginUser, logoutUser, updateCredentials}