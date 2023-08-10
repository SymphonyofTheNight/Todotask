import express from 'express'

// controllers
import { getDatabase, postTask, updateTask, deleteTask, deleteAllTask } from '../controllers/controllers.js';

//  app api
const router = express.Router();

router.get('/', getDatabase);
router.post('/:id', postTask);
router.patch('/:id', updateTask);
router.put('/:id', deleteTask);
router.delete('/:id', deleteAllTask);

export default router