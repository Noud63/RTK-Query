import express from 'express'
const router = express.Router()
import { getRealEstates, getRealEstate } from '../controllers/realEstateController.js'


router.get('/', getRealEstates)  /* or router.route('/').get(getRealestates) chaining */
router.get('/:id', getRealEstate)

export default router