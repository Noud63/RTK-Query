import express from 'express'
const router = express.Router()
import { registerUser, loginUser, logoutUser, updateCredentials } from '../controllers/userController.js'

router.post('/', registerUser)
router.post('/login', loginUser)
router.post('/logout', logoutUser)
router.put('/update', updateCredentials)

export default router