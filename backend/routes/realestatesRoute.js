import express from 'express'
const router = express.Router()
import { getRealEstates, getRealEstate, getLimitedResults } from '../controllers/realEstateController.js'


router.get('/', getRealEstates)  /* or router.route('/').get(getRealestates) chaining */
router.get('/:id', getRealEstate)
router.get('/limit/:number', getLimitedResults)

export default router