import RealEstates from '../models/realestatesModel.js'
import express from 'express'

const getAllRealEstates = async(req, res) => {
    
    try {
        const result =  await RealEstates.find()
        res.status(200).json(result)
    } catch (error) {
        console.log(error)
        res.status(404).json({ message: "Not found!"})
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

const uploadRealestate = async(req, res) => {
    console.log(req.body.name)
    const { name,
            img,
            price,
            region,
            departement,
            city,
            bedrooms,
            bathrooms,
            livingspace,
            area,
            map,
            located,
            like } = req.body
    
    try {
        const nameExist = await RealEstates.findOne({name})
        if(nameExist){
            res.status(400);
            throw new Error("Estate already existst!");
        }

        const estate = await RealEstates.create({
            name,
            img,
            price,
            region,
            departement,
            city,
            bedrooms,
            bathrooms,
            livingspace,
            area,
            map,
            located,
            like
         })

         if(estate){
            res.status(201).json({
            _id: estate._id,
            name: estate.name,
            img:[estate.img],
            price:estate.price,
            region:estate.region,
            departement:estate.departement,
            city:estate.city,
            bedrooms:estate.bedrooms,
            bathrooms:estate.bathrooms,
            livingspace:estate.livingsspace,
            area:estate.area,
            map:estate.map,
            located:estate.located,
            like:estate.like
            })
         }
        
    } catch (error) {
        res.status(400);
        throw new Error("Invalid user data");
    }
}

export { getAllRealEstates, getRealEstate, getLimitedResults, uploadRealestate }