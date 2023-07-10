import RealEstates from '../models/realestatesModel.js'
import express from 'express'

const getAllRealEstates = async(req, res) => {
    
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
        const re = realEstate[0]
        res.status(200).json(re)
     }
}

const getLimitedResults = async(req, res) => {
   const number = Number(req.params.number)
     try {
        const result =  await RealEstates.find().limit(number)
        res.status(200).json(result)
    } catch (error) {
        console.log(error)
    }
}

export { getAllRealEstates, getRealEstate, getLimitedResults }