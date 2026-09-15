import express from 'express'
import CategoriaControllers from '../controllers/CategoriaControllers.js'
import expressAsyncHandler from 'express-async-handler'
import AuthMiddlewares from '../middlewares/AuthMiddlewares.js'
import AdminMiddlewares from '../middlewares/AdminMiddlewares.js'

const CategoriaRoutes = express.Router()
const categoria_controllers = new CategoriaControllers()

CategoriaRoutes.get('/', expressAsyncHandler(categoria_controllers.visualizar))
CategoriaRoutes.get('/:id', expressAsyncHandler(categoria_controllers.buscarPorId))
CategoriaRoutes.post('/', AuthMiddlewares, AdminMiddlewares, expressAsyncHandler(categoria_controllers.adicionar))
CategoriaRoutes.put('/:id', AuthMiddlewares, AdminMiddlewares, expressAsyncHandler(categoria_controllers.atualizar))
CategoriaRoutes.patch('/:id', AuthMiddlewares, AdminMiddlewares, expressAsyncHandler(categoria_controllers.alterarAtivo))

export default CategoriaRoutes