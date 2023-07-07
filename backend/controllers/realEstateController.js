import RealEstates from '../models/realestatesModel.js'
import express from 'express'

const getRealEstates = async(req, res) => {
    
    try {
        const result =  await RealEstates.find()
        res.status(200).json(result)
    } catch (error) {
        console.log(error)
    }
}

const getRealEstate = async(req, res) => {

     const realEstate = await RealEstates.find({name: req.params.id})
     if(realEstate[0] === undefined){
         res.json({message:'No such Estate, try again!'})
     }else{
     console.log(realEstate[0])
        const re = realEstate[0]
        res.status(200).json(re)
     }
}

const getLimitedResults = async(req, res) => {
   console.log(Number(req.params.number))
   const number = Number(req.params.number)
     try {
        const result =  await RealEstates.find().limit(number)
        res.status(200).json(result)
    } catch (error) {
        console.log(error)
    }
}

export { getRealEstates, getRealEstate, getLimitedResults }