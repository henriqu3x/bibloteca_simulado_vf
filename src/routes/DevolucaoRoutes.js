import express from 'express'
import DevolucaoControllers from '../controllers/DevolucaoControllers.js'
import expressAsyncHandler from 'express-async-handler'
import AuthMiddlewares from '../middlewares/AuthMiddlewares.js'

const DevolucaoRoutes = express.Router()
const devolucao_controllers = new DevolucaoControllers()

DevolucaoRoutes.get('/', expressAsyncHandler(devolucao_controllers.visualizar))
DevolucaoRoutes.get('/:id', expressAsyncHandler(devolucao_controllers.buscarPorId))
DevolucaoRoutes.post('/', AuthMiddlewares, expressAsyncHandler(devolucao_controllers.adicionar))


export default DevolucaoRoutes