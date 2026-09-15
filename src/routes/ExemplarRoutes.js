import express from 'express'
import ExemplarControllers from '../controllers/ExemplarControllers.js'
import expressAsyncHandler from 'express-async-handler'
import AuthMiddlewares from '../middlewares/AuthMiddlewares.js'
import AdminMiddlewares from '../middlewares/AdminMiddlewares.js'

const ExemplarRoutes = express.Router()
const exemplar_controllers = new ExemplarControllers()

ExemplarRoutes.get('/', expressAsyncHandler(exemplar_controllers.visualizar))
ExemplarRoutes.get('/:id', expressAsyncHandler(exemplar_controllers.buscarPorId))
ExemplarRoutes.post('/', AuthMiddlewares, AdminMiddlewares, expressAsyncHandler(exemplar_controllers.adicionar))
ExemplarRoutes.put('/:id', AuthMiddlewares, AdminMiddlewares, expressAsyncHandler(exemplar_controllers.atualizar))
ExemplarRoutes.patch('/:id', AuthMiddlewares, AdminMiddlewares, expressAsyncHandler(exemplar_controllers.alterarAtivo))

export default ExemplarRoutes