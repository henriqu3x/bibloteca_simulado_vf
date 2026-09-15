import express from 'express'
import LivroControllers from '../controllers/LivroControllers.js'
import expressAsyncHandler from 'express-async-handler'
import AuthMiddlewares from '../middlewares/AuthMiddlewares.js'
import AdminMiddlewares from '../middlewares/AdminMiddlewares.js'

const LivroRoutes = express.Router()
const livro_controllers = new LivroControllers()

LivroRoutes.get('/', expressAsyncHandler(livro_controllers.visualizar))
LivroRoutes.get('/:id', expressAsyncHandler(livro_controllers.buscarPorId))
LivroRoutes.post('/', AuthMiddlewares, AdminMiddlewares, expressAsyncHandler(livro_controllers.adicionar))
LivroRoutes.put('/:id', AuthMiddlewares, AdminMiddlewares, expressAsyncHandler(livro_controllers.atualizar))
LivroRoutes.patch('/:id', AuthMiddlewares, AdminMiddlewares, expressAsyncHandler(livro_controllers.alterarAtivo))

export default LivroRoutes