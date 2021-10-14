import { Router } from 'express'
import * as Books from '../controllers/books.js'

const router = Router()

// Books

router.route('/addBook').get(Books.addBook)



export default router