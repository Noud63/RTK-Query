import RealEstates from './models/realestatesModel.js'
import data from './data/realestates.js'
import mongoose from 'mongoose'

const addDataToCollection = async () => {
    try {
        await RealEstates.deleteMany()
        const res = await RealEstates.insertMany(data)
        console.log(`${data.length} documents imported`)
    } catch (error) {
        console.error(`${error}`.red)
    }
}

export default addDataToCollection