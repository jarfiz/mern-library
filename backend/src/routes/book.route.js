import { Router } from 'express';
import {
  createBook,
  deleteBook,
  getAllBook,
  getBookById,
  updateBook,
} from '../controllers/book.controller.js';
import authMiddleware from '../middleware/auth.middleware.js';

const router = Router();

router.get('/', authMiddleware, getAllBook);
router.post('/', authMiddleware, createBook);
router.get('/:id', authMiddleware, getBookById);
router.patch('/:id', authMiddleware, updateBook);
router.delete('/:id', authMiddleware, deleteBook);

export default router;
