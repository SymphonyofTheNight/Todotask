import express from 'express'

// controllers
import { getDatabase, postTask, updateTask, deleteTask } from '../controllers/controllers.js';

//  app api
const router = express.Router();

router.get('/', getDatabase);
router.post('/:id', postTask);
router.patch('/:id', updateTask);
router.delete('/:id', deleteTask);


export default router