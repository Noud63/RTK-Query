import RealEstates from '../models/realestatesModel.js'
import express from 'express'

const getRealEstates = async(req, res) => {
    try {
        const result = await RealEstates.find()
        res.status(200).json(result)
        
    } catch (error) {
        console.log(error)
    }
}

const getRealEstate = async(req, res) => {
    console.log(req.params)

     const realEstate = await RealEstates.find({name: req.params.id})
     if(realEstate[0] === undefined){
         res.json({message:'No such Estate here!'})
     }else{
     console.log(realEstate[0])
        const re = realEstate[0]
        res.status(200).json(re)
     }
}

export { getRealEstates, getRealEstate }