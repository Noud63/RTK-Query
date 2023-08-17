import express from 'express'
const router = express.Router()
import { registerUser, loginUser, logoutUser, updateCredentials } from '../controllers/userController.js'
import { protect } from '../middleware/protectMiddleware.js'

router.post('/', registerUser)
router.post('/login', loginUser)
router.post('/logout', logoutUser)
router.put('/update', protect, updateCredentials)

export default router