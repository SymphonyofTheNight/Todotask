import express, { Router } from 'express'

// controllers
import { getDatabase, postTask } from '../controllers/controllers.js';

//  app api
const router = express.Router();

router.get('/', getDatabase)
router.post('/', postTask)


export default router