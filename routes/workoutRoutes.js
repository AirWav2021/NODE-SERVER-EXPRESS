import express from 'express'
import { addNewExercise } from '../controllers/exercise/exerciseController'
import { protect } from '../middleware/authMiddleware'

const router = express.Router()

router.route('/').post(protect, addNewExercise)

export default router
