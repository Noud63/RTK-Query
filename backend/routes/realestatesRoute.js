import express from 'express'
const router = express.Router()
import { getAllRealEstates, getRealEstate, getLimitedResults } from '../controllers/realEstateController.js'


router.get('/', getAllRealEstates)  /* or router.route('/').get(getRealestates) chaining */
router.get('/:id', getRealEstate)
router.get('/limit/:number', getLimitedResults)

export default router