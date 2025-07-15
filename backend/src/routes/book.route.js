import { Router } from 'express';
import {
  createBook,
  deleteBook,
  getAllBook,
  getBookById,
  updateBook,
} from '../controllers/book.controller.js';

const router = Router();

router.get('/', getAllBook);
router.post('/', createBook);
router.get('/:id', getBookById);
router.patch('/:id', updateBook);
router.delete('/:id', deleteBook);

export default router;
