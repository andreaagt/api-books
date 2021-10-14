import express from 'express'
import morgan from 'morgan'
import cors from 'cors'

// Routes
import books from './routes/books.js'

const server = express();

server.use(cors());
server.options('*', cors())

server.use(books)

export default server