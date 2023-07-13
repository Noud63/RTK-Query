import User from '../models/userModel.js'
import Login from '../models/loginModel.js'
import express from 'express'
import asyncHandler from 'express-async-handler'
import bcrypt from 'bcryptjs'
import generateToken from '../generateToken.js'

const registerUser = asyncHandler(async(req,res) => {
    
    const { name, email, password } = req.body

    const userExist = await User.findOne({email})

    if(userExist){
        res.status(400).send("user already registered!")
    }

    // const salt = await bcrypt.genSalt(10)
    // const hashedPassword = await bcrypt.hash(password, salt)

    const user = await User.create({
        name, 
        email, 
        password //hashedpassword 
    })

    if(user){
        generateToken(res, user._id)
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
        })
    }else{
        res.status(400).send("Invalid user data!")
    }

})


const loginUser = asyncHandler(async(req, res)=> {
      const { email, password } = req.body
      const user = await User.findOne({email})
    
      if(user && (await bcrypt.compare(password, user.password))){
        generateToken(res, user._id)
          res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email
          })
      }else{
        res.status(400).send('Invalid email or password!')
      }
})

export {registerUser, loginUser}