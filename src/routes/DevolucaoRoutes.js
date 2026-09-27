import express from 'express'
import DevolucaoControllers from '../controllers/DevolucaoControllers.js'
import expressAsyncHandler from 'express-async-handler'
import AuthMiddlewares from '../middlewares/AuthMiddlewares.js'

const DevolucaoRoutes = express.Router()
const devolucao_controllers = new DevolucaoControllers()

DevolucaoRoutes.get('/',/* #swagger.tags = ['Devoluções'] */ expressAsyncHandler(devolucao_controllers.visualizar))
DevolucaoRoutes.get('/:id',/* #swagger.tags = ['Devoluções'] */ expressAsyncHandler(devolucao_controllers.buscarPorId))
DevolucaoRoutes.post('/',/* #swagger.tags = ['Devoluções'] */ AuthMiddlewares, expressAsyncHandler(devolucao_controllers.adicionar))


export default DevolucaoRoutes